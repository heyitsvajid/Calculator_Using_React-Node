//Calculator.js
import React, { Component } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import axios from 'axios';

class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      calculatorState: {}
    }
  }
  componentWillMount() {
    console.log('Initialize calculator State');
    this.setState({
      calculatorState: {
        operand1: "0",      // operator 1 variable
        operand2: "0",      // and value in display
        operator: "0",      // 0 = *, 1 = /, 2 = +, 3 = -
        result: "",
        apiCall:"0"
      }
    });
  }
  handleDigitInput(number) {

    let newCalState = this.state.calculatorState;

    //if (newCalState.operand2.indexOf("NaN") != -1) {
    //  newCalState.operand2 = "PLease Provide Correct Input";
    //}
    //else
    if (newCalState.operand2.length > 15) {
      alert("Length Too long"); // length validation
    } else {
      if ((eval(newCalState.operand2) == 0)
        && (newCalState.operand2.indexOf(".") == -1)
      ) {
        newCalState.operand2 = number;
      } else {
        newCalState.operand2 = newCalState.operand2 + number;
      };
    };
    this.updateState(newCalState);
  };

  handleDotInput() {
    let newCalState = this.state.calculatorState;

    if (newCalState.operand2.length == 0)     //no leading ".", use "0."
    {
      newCalState.operand2 = "0.";
    } else {
      if (newCalState.operand2.indexOf(".") == -1) {
        newCalState.operand2 = newCalState.operand2 + ".";
      };
    };
    this.updateState(newCalState);

  }

  updateState(newCalState) {
    this.setState({
      calculatorState: newCalState
    });
    console.log("State Updated: ");
    console.log(this.state.calculatorState);

  }

  handleAllClear() {
    this.setState({
      calculatorState: {
        operand1: "0",
        operand2: "0",
        operator: "0",
        result: "",
        apiCall:"0"
      }
    });
  }

  handleOperatorInput(operator) {
    let newCalState = this.state.calculatorState;
   
    if(newCalState.operand2 != "" && newCalState.operand1=="0" || newCalState.operator == "0"){
      newCalState.operand1 = newCalState.operand2;
      newCalState.operand2 = "";  
    }
    if (operator.indexOf("*") > -1) { newCalState.operator = '1'; };
    if (operator.indexOf("/") > -1) { newCalState.operator = '2'; };
    if (operator.indexOf("+") > -1) { newCalState.operator = '3'; };
    if (operator.indexOf("-") > -1) { newCalState.operator = '4'; };
   
    this.updateState(newCalState);
  }
   
  

  handleCalculation() {
    if(this.state.calculatorState.operand2==='0' && this.state.calculatorState.operator==='2'){
      // eslint-disable-next-line
      if(confirm('Divide by Zero not allowed')){
        this.handleAllClear();
      }
      alert('All cleared start again')
    }else{
      let apiPayload = this.state.calculatorState;
      console.log(apiPayload);
      axios.post(this.props.url, apiPayload)
        .then(res => {
          console.log(res);
          if(res.data.messageCode==0){
            var newCalState = this.state.calculatorState;
            newCalState.operand2 = ''+res.data.operand2;
            newCalState.operand1 = ''+res.data.operand1;
            newCalState.operator = "0";
            newCalState.result = res.data.result;
            console.log(newCalState);
            this.updateState(newCalState);  
          }else{
               // eslint-disable-next-line
            if(confirm(res.data.message)){
              this.handleAllClear();
            }
            alert('All cleared start again')                  
          }
            
        });
    }
   

  }

  handlePosNeg() {
    let newCalState = this.state.calculatorState;
    console.log(newCalState);
    if( newCalState.operand2 != "" ){
      const index = (newCalState.operand2.toString()).indexOf('-');
      let operand2 = String(newCalState.operand2);
      console.log(newCalState);
      if (index === 0) {
        operand2 = operand2.substring(1);
      } else {
        operand2 = "-" + operand2;
      }
      newCalState.operand2= operand2 ;
      this.updateState(newCalState);

    }
  }
  render() {
    return (
      <div className="center">
        <p className="bg-primary"><h1>Calculator</h1></p>


       



        <div>
        <CalculatorDisplay calculatorState={this.state.calculatorState} />
          <div >
            <CalculatorButton className="btn" value="7" buttonClicked={this.handleDigitInput.bind(this)} />
            <CalculatorButton className="btn" value="8" buttonClicked={this.handleDigitInput.bind(this)} />
            <CalculatorButton className="btn" value="9" buttonClicked={this.handleDigitInput.bind(this)} />
            <CalculatorButton className="btn btn-primary" value="+" buttonClicked={this.handleOperatorInput.bind(this)} />

            <div >
              <CalculatorButton className="btn" value="4" buttonClicked={this.handleDigitInput.bind(this)} />
              <CalculatorButton className="btn" value="5" buttonClicked={this.handleDigitInput.bind(this)} />
              <CalculatorButton className="btn" value="6" buttonClicked={this.handleDigitInput.bind(this)} />
              <CalculatorButton className="btn btn-primary" value="-" buttonClicked={this.handleOperatorInput.bind(this)} />
            </div>

            <div >
              <CalculatorButton className="btn" value="1" buttonClicked={this.handleDigitInput.bind(this)} />
              <CalculatorButton className="btn" value="2" buttonClicked={this.handleDigitInput.bind(this)} />
              <CalculatorButton className="btn" value="3" buttonClicked={this.handleDigitInput.bind(this)} />
              <CalculatorButton className="btn btn-primary" value="*" buttonClicked={this.handleOperatorInput.bind(this)} />
            </div>
            <div >
              <CalculatorButton className="btn" value="." buttonClicked={this.handleDotInput.bind(this)} />
              <CalculatorButton className="btn" value="0" buttonClicked={this.handleDigitInput.bind(this)} />
              <CalculatorButton className="btn" value="+/-" buttonClicked={this.handlePosNeg.bind(this)} />
              <CalculatorButton className="btn btn-primary" value="/" buttonClicked={this.handleOperatorInput.bind(this)} />
            </div>
            <div>
              <CalculatorButton className="btn btn-danger" value="AC" buttonClicked={this.handleAllClear.bind(this)} />
              <CalculatorButton className="btn btn-success" value="=" buttonClicked={this.handleCalculation.bind(this)} />
            </div>

          </div>
        </div>
      </div>


    )
  }
}

export default Calculator;