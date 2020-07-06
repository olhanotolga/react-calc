import React from 'react';
import './Calc.css';

const FuncCalculator = () => {
    const result = 200;
    const setOperator = value => {
        console.log('setOperator is called', event.target.value);
    };
    const setInput = value => {
        console.log('setInput is called', event.target.value);
    };
    return (
        <main>
            <header>
                <h1>JS Calculator</h1>
            </header>

            <div className="calculator">
                <section className="display">{result}</section>
                <section className="keys">
                    <button className="controls" id="clear" type="button" onClick={event => this.clearDisplay()}>AC</button>

                    <button className="manipulation" id="percent" onClick="calcPercent()">%</button>

                    <button className="operation" id="divide" value='division' onClick={setOperator}>/</button>

                    <button className="digit" type="button" value="7" onClick={setInput}>7</button>
                    <button className="digit" type="button" value="8" onClick={setInput}>8</button>
                    <button className="digit" type="button" value="9" onClick={setInput}>9</button>

                    <button className="operation" id="multiply" value='multiplication' onClick={setOperator}>&times;</button>

                    <button className="digit" type="button" value="4" onClick={setInput}>4</button>
                    <button className="digit" type="button" value="5" onClick={setInput}>5</button>
                    <button className="digit" type="button" value="6" onClick={setInput}>6</button>

                    <button className="operation" id="subtract" value='subtraction' onClick={setOperator}>–</button>

                    <button className="digit" type="button" value="1" onClick={setInput}>1</button>
                    <button className="digit" type="button" value="2" onClick={setInput}>2</button>
                    <button className="digit" type="button" value="3" onClick={setInput}>3</button>

                    <button className="operation" id="add" onClick={setOperator} value='addition'>+</button>

                    <button className="manipulation" id="plusminus" onClick="changeSign()">+/–</button>

                    <button className="digit" type="button" value="0" onClick={setInput}>0</button>

                    <button className="manipulation" id="floatingPoint" onClick="addFloatingPoint()">,</button>

                    <button className="operation" id="calculate" onClick="calculate()">=</button>
                </section>
            </div>
        </main>
    )
}

export default FuncCalculator;