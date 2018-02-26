//Calculator.js
import React, { Component } from 'react';

class CalculatorDisplay extends Component {

    render() {
        return (
            <div className="form-group">
                <table >
                    <tr>
                        <td>
                            <div>
                                <input className="form-control" id="displayInput" type="text" placeHolder="Display" disabled />
                            </div>
                        </td>
                        <td><strong>=</strong></td>
                        <td>
                            <div>
                                <input className="form-control" id="resultInput" type="text" placeHolder="Result" disabled />
                            </div>
                        </td>
                    </tr>
                </table>


            </div>
        )
    }
}

export default CalculatorDisplay;