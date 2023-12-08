import React, { Component } from "react";
import Compiler from "./Compiler/Compiler";

export default class Testing extends Component {
  render() {
    return (
      <>
        <Compiler />
      </>
    );
  }
}





/*
 The program should read the age of the user, and then print the cost of the their meal. The meal cost is usually $8.95. If the user is a senior citizen 56 or more, or a child 6 years or less then the meal cost is $5.95.

For example, if the input value is 6, then the output of the program should be

    The cost of your meal is $5.95


    	
60, The cost of your meal is $5.95
6, The cost of your meal is $5.95
25, The cost of your meal is $8.95
*/