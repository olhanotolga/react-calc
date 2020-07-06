import React from 'react';
import './Calc.css';

class Calculator extends React.Component {
    // functions
    constructor(props) {
        super(props)
        this.state = {
            operator: undefined,
            input1: undefined,
            input2: undefined,
            result: undefined,
            isInput1Float: undefined
        }
    }
    setOperator = value => {
        this.setState({
            operator: value,
            input1: Number(this.state.input1)
        });
        
        this.displayInput(this.state.input1);
    }
    setInput = value => {
        if (this.state.input1 === undefined) {
            this.displayInput(value);
            this.setState({ input1: value});
        } else {
            if(!this.state.operator) {
                let twoDigitInput1 = this.state.input1.toString().concat(value);
                this.setState({ input1: twoDigitInput1 });
                this.displayInput(this.state.input1);
            } else {
                console.log(this.state.input1)
                if (!this.state.input2) {
                    this.displayInput(value);
                    
                    this.setState({ input2: value });
                } else {
                    let twoDigitInput2 = this.state.input2.toString().concat(value);
                    
                    this.setState({
                        input2: twoDigitInput2
                    });
                    this.displayInput(this.state.input2);
                    
                }
            }
        }
    }
    displayInput = value => {
        this.setState({
            result: value
        })
    }
    clearDisplay = () => {
        this.reset();
        this.setState({
            input1: undefined,
            isInput1Float: false,
        });
        document.querySelector('.display').innerHTML = 0;
    }
    reset = () => {
        this.setState({
            input2: undefined,
            operator: undefined,
            isInput2Float: false,
        });
    }
    
    add = (a, b) => {
        if (this.state.isInput1Float === true || this.state.isInput2Float === true) {
            this.setState({
                result: (Number(a) + Number(b)).toFixed(5)
            })
        } else {
            this.setState({
                result: Number(a) + Number(b)
            })
        }
    };
    

    // something to display
    render () {
        return (
            <main>
                <header>
                    <h1>JS Calculator</h1>
                </header>

                <div className="calculator">
                    <section className="display">{ this.state.result ? this.state.result : "*(^-^)*" }</section>
                    <section className="keys">
                        <button className="controls" id="clear" type="button" onClick={event => this.clearDisplay()}>AC</button>

                        <button className="manipulation" id="percent" onClick="calcPercent()">%</button>

                        <button className="operation" id="divide" value='division' onClick={event => this.setOperator(event.target.value)}>/</button>
                        
                        <button className="digit" type="button" value="7" onClick={event => this.setInput(event.target.value)}>7</button>
                        <button className="digit" type="button" value="8" onClick={event => this.setInput(event.target.value)}>8</button>
                        <button className="digit" type="button" value="9" onClick={event => this.setInput(event.target.value)}>9</button>
                        
                        <button className="operation" id="multiply" value='multiplication' onClick={event => this.setOperator(event.target.value)}>&times;</button>
                        
                        <button className="digit" type="button" value="4" onClick={event => this.setInput(event.target.value)}>4</button>
                        <button className="digit" type="button" value="5" onClick={event => this.setInput(event.target.value)}>5</button>
                        <button className="digit" type="button" value="6" onClick={event => this.setInput(event.target.value)}>6</button>
                        
                        <button className="operation" id="subtract" value='subtraction' onClick={event => this.setOperator(event.target.value)}>–</button>
                        
                        <button className="digit" type="button" value="1" onClick={event => this.setInput(event.target.value)}>1</button>
                        <button className="digit" type="button" value="2" onClick={event => this.setInput(event.target.value)}>2</button>
                        <button className="digit" type="button" value="3" onClick={event => this.setInput(event.target.value)}>3</button>
                        
                        <button className="operation" id="add" onClick={event => this.setOperator(event.target.value)} value='addition'>+</button>
                        
                        <button className="manipulation" id="plusminus" onClick="changeSign()">+/–</button>
                        
                        <button className="digit" type="button" value="0" onClick={event => this.setInput(event.target.value)}>0</button>
                        
                        <button className="manipulation" id="floatingPoint" onClick="addFloatingPoint()">,</button>
                        
                        <button className="operation" id="calculate" onClick="calculate()">=</button>
                    </section>
                </div>
            </main>
        )
    }
}

export default Calculator;