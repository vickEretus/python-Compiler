import React, { Component } from "react";
import CompilerComponent from "./CompilerCoponent";
import "./Compiler.css";

class Compiler  extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            input: localStorage.getItem('input') || ``,
            output: ``,
            language_id: localStorage.getItem('language_Id') || 2,
            user_input: ``,
        };
    }
    input = (event) => {
 
        event.preventDefault();
  
        this.setState({ input: event.target.value });
        localStorage.setItem('input', event.target.value)
 
    };
    userInput = (event) => {
        event.preventDefault();
        this.setState({ user_input: event.target.value });
    };
    language = (event) => {
   
        event.preventDefault();
   
        this.setState({ language_id: event.target.value });
        localStorage.setItem('language_Id', event.target.value)
   
    };

    submit = async (e) => {
        e.preventDefault();

        let outputText = document.getElementById("output");
        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";
        const response = await fetch(
            "https://judge0-ce.p.rapidapi.com/submissions",
            {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                    "x-rapidapi-key": "39330810a2mshe05f8843f3f2379p12fd97jsnefcb8c1ed522", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                    "content-type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify({
                    source_code: this.state.input,
                    stdin: this.state.user_input,
                    language_id: this.state.language_id,
                }),
            }
        );
        outputText.innerHTML += "Submission Created ...\n";
        const jsonResponse = await response.json();

        let jsonGetSolution = {
            status: { description: "Queue" },
            stderr: null,
            compile_output: null,
        };

        while (
            jsonGetSolution.status.description !== "Accepted" &&
            jsonGetSolution.stderr == null &&
            jsonGetSolution.compile_output == null
        ) {
            outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
            if (jsonResponse.token) {
                let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

                const getSolution = await fetch(url, {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                        "x-rapidapi-key": "39330810a2mshe05f8843f3f2379p12fd97jsnefcb8c1ed522", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                        "content-type": "application/json",
                    },
                });

                jsonGetSolution = await getSolution.json();
            }
        }
        if (jsonGetSolution.stdout) {
            const output = atob(jsonGetSolution.stdout);

            outputText.innerHTML = "";

            outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        } else if (jsonGetSolution.stderr) {
            const error = atob(jsonGetSolution.stderr);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${error}`;
        } else {
            const compilation_error = atob(jsonGetSolution.compile_output);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${compilation_error}`;
        }
    };

    render() {
        return (
            <CompilerComponent
                input={this.state.input}
                output={this.state.output}
                languageId={this.state.language_id}
                userInput={this.state.user_input}
                onInputChange={this.input}
                onUserInputChange={this.userInput}
                onLanguageChange={this.language}
                onSubmit={this.submit}
            />
        );
    }

    
}
export default Compiler;