// CompilerComponent.js
import React from "react";
import "./Compiler.css";

const CompilerComponent = ({
  input,
  output,
  languageId,
  userInput,
  onInputChange,
  onUserInputChange,
  onLanguageChange,
  onSubmit,
}) => {
  return (
    <>
      <div className="row container-fluid">
        <div className="col-6 ml-4">
          <label htmlFor="solution">
            <span className="badge badge-info heading mt-2">
              <i className="fas fa-code fa-fw fa-lg"></i>
            </span>
          </label>
          <textarea
            required
            name="solution"
            id="source"
            onChange={onInputChange}
            className="source"
            value={input}
          ></textarea>

         
        </div>
        <div className="col-5">
          <div>
            <span className="badge badge-info heading my-2">
              <i className="fas fa-exclamation fa-fw fa-md"></i> Output
            </span>
            <textarea id="output" value={output} readOnly></textarea>
          </div>
        </div>
      </div>

      <div className="mt-2 ml-5">
        <span className="badge badge-primary heading my-2">
          <i className="fas fa-user fa-fw fa-md"></i> User Input
        </span>
        <br />
        <textarea id="input" onChange={onUserInputChange} value={userInput}></textarea>
      </div>

      <button
            type="submit"
            className="btn btn-danger ml-2 mr-2"
            onClick={onSubmit}
          >
            <i className="fas fa-cog fa-fw"></i> Run
          </button>
    </>
  );
};

export default CompilerComponent;
