import React from 'react';
import './Calc.css';

class ClassCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: null,
            input1: null,
            input2: null,
            result: 100,
            isInput1Float: null
        };
    }

    setOperator = (event) => {
        console.log('setOperator is called', event.target.value);
        this.setState({
            operator: event.target.value
        })
    };
    setInput = (event) => {
        console.log('setInput is called', event.target.value);
        const value = event.target.value;
        
    };
    displayInput = (value) => {
        this.setState({
            result: value
        })
    }

    render () {
        return (
            <main>
                <header>
                    <h1>JS Calculator</h1>
                </header>

                <div className="calculator">
                    <section className="display">{ this.state.result }</section>
                    <section className="keys">
                        <button className="controls" id="clear" type="button" onClick={event => this.clearDisplay()}>AC</button>

                        <button className="manipulation" id="percent" onClick="calcPercent()">%</button>

                        <button className="operation" id="divide" value='division' onClick={this.setOperator}>/</button>
                        
                        <button className="digit" type="button" value="7" onClick={this.setInput}>7</button>
                        <button className="digit" type="button" value="8" onClick={this.setInput}>8</button>
                        <button className="digit" type="button" value="9" onClick={this.setInput}>9</button>
                        
                        <button className="operation" id="multiply" value='multiplication' onClick={this.setOperator}>&times;</button>
                        
                        <button className="digit" type="button" value="4" onClick={this.setInput}>4</button>
                        <button className="digit" type="button" value="5" onClick={this.setInput}>5</button>
                        <button className="digit" type="button" value="6" onClick={this.setInput}>6</button>
                        
                        <button className="operation" id="subtract" value='subtraction' onClick={this.setOperator}>–</button>
                        
                        <button className="digit" type="button" value="1" onClick={this.setInput}>1</button>
                        <button className="digit" type="button" value="2" onClick={this.setInput}>2</button>
                        <button className="digit" type="button" value="3" onClick={this.setInput}>3</button>
                        
                        <button className="operation" id="add" onClick={this.setOperator} value='addition'>+</button>
                        
                        <button className="manipulation" id="plusminus" onClick="changeSign()">+/–</button>
                        
                        <button className="digit" type="button" value="0" onClick={this.setInput}>0</button>
                        
                        <button className="manipulation" id="floatingPoint" onClick="addFloatingPoint()">,</button>
                        
                        <button className="operation" id="calculate" onClick="calculate()">=</button>
                    </section>
                </div>
            </main>
        )
    }
}

export default ClassCalculator;