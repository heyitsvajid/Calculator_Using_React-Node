//Calculator.js
import React, { Component } from 'react';

class CalculatorDisplay extends Component {

    render() {
        return (
            <div className="form-group result-tag">
                <table>
                    <tr>
                        <td>
                            <div>
                                <button type="button" className="btn-info">Display</button> 
                                <input className="form-control" id="displayInput" type="text" placeholder="Display" disabled
                                value={this.props.calculatorState.operand2 != 0 ? this.props.calculatorState.operand2 : this.props.calculatorState.operand1} />
                            </div>
                        </td>
                        <td><strong>=</strong></td>
                        <td>
                            <div>
                            <button type="button" className="btn-info">Result</button>
                                <input className="form-control" id="resultInput" type="text" placeholder="Result" disabled
                                value={this.props.calculatorState.result} />
                            </div>
                        </td>
                    </tr>
                </table>


            </div>
        )
    }
}

export default CalculatorDisplay;