import React from 'react';
import './Calc.css';

class ClassCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: null,
            input1: null,
            input2: null,
            result: null,
            isInput1Float: null,
            isInput2Float: null,
            display: null
        };
    };

    setOperator = (event) => {
        console.log('setOperator is called', event.target.value);
        if (this.state.result) {
            this.setState({
                input1: this.state.result,
                result: null,
                operator: event.target.value
            })
        } else {
            if (this.state.input2) {
                this.calculate();
                this.setState({
                    input1: this.state.result,
                    result: null,
                    operator: event.target.value
                })
            } else {
                this.setState({
                    input1: Number(this.state.input1),
                    operator: event.target.value
                });
                this.displayInput(this.state.input1)
            }
        }
        this.setState({
            operator: event.target.value
        })
    };

    setInput = (event) => {
        
        const value = event.target.value;
        console.log('setInput is called', value);

        if (this.state.result !== null) {
            console.log("result is ", this.state.result);
            this.displayInput(value);
            return this.setState({
                isInput1Float: false,
                result: null,
                input1: value
            })
        }
        if (this.state.input1 === null) {
            this.displayInput(value);
            this.setState({
                input1: value
            });
            // this.displayInput(this.state.input1);
            console.log(this.state.input1, typeof this.state.input1);
        } else {
            if(!this.state.operator) {
                this.setState(prev => ({input1: prev.input1.concat(value)}));
                
                if ((this.state.input1)[0] === "0" && (this.state.input1)[1] !== ".") {
                    this.setState(prev => ({input1: prev.input1.substr(1)}));
                }
                this.displayInput(this.state.input1);
                console.log(`input1 concatenated: ${this.state.input1}`);
                
            } else {
                console.log(this.state.input1)
                if (!this.state.input2) {
                    this.displayInput(value);
                    this.setState({
                        input2: value
                    })
                } else {
                    // this.setState(prev => {
                    //     if ((this.state.input2)[0] === "0" && (this.state.input2)[1] !== ".") {
                    //         this.setState({
                    //             input2: (this.state.input2).substr(1)
                    //         })
                    //     } 
                    // })
                    this.setState(prev => ({ input2: prev.input2.concat(value) }));
                    if ((this.state.input2)[0] === "0" && (this.state.input2)[1] !== ".") {
                        this.setState(prev => ({input2: prev.input2.substr(1)}));
                    }
                    this.displayInput(this.state.input2);
                    console.log(this.state.input2);
                }
            }
        }
    };

    displayInput = (value) => {
        this.setState({
            display: value
        })
    };

    clearDisplay = () => {
        this.reset();
        this.setState({
            result: null,
            isInput1Float: false
        })
        this.displayInput(0);
    };

    reset = () => {
        this.setState({
            input1: null,
            input2: null,
            operator: null,
            isInput2Float: false
        })
    };

    add = (a, b) => {
        this.setState({
            result: Number((Number(a) + Number(b)).toFixed(10))
        })
        console.log(this.state.result);
        // return this.state.result;
    };
    
    subtract = (a, b) => {
        this.setState({
            result: Number((Number(a) - Number(b)).toFixed(10))
        })
        // return this.state.result;
    };
    
    multiply = (a, b) => {
        this.setState({
            result: Number((Number(a) * Number(b)).toFixed(10))
        })
        // return this.state.result;
    };
    
    divide = (a, b) => {
        this.setState({
            result: Number((Number(a) / Number(b)).toFixed(10))
        })
        // return this.state.result;
    };

    calculate = () => {
        
        console.log(`before '=': input1 is ${this.state.input1}, its type is ${typeof this.state.input1}, operator is ${this.state.operator}, input2 is ${this.state.input2}, its type ${typeof this.state.input2}, result is ${this.state.result}, and display ${this.state.display}`);

        switch (this.state.operator) {
            case 'addition':
                this.add(this.state.input1, this.state.input2);
                // this.displayInput(this.state.result);
                break;
            case 'subtraction':
                this.subtract(this.state.input1, this.state.input2);
                // this.displayInput(this.state.result);
                break;
            case 'multiplication':
                this.multiply(this.state.input1, this.state.input2);
                // this.displayInput(this.state.result);
                break;
            case 'division':
                this.divide(this.state.input1, this.state.input2);
                // this.displayInput(this.state.result);
                break;
            default:
                console.log('no operator selected');
        }
        
        this.displayInput(this.state.result);
        this.reset();
        
        
        console.log(`after '=': input1 is ${this.state.input1}, its type is ${typeof this.state.input1}, operator is ${this.state.operator}, input2 is ${this.state.input2}, its type ${typeof this.state.input2}, result is ${this.state.result}, and display ${this.state.display}`);
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.result !== this.state.result) {
            this.displayInput(this.state.result);
        };
        if (prevState.display !== this.state.display) {
            this.displayInput(this.state.display);
        };
        if (prevState.input1 !== this.state.input1) {
            this.displayInput(this.state.input1);
        };
        if (prevState.input2 !== this.state.input2) {
            this.displayInput(this.state.input2);
        };
    };

    calcPercent = () => {
        if (this.state.input2) {
            this.setState({
                input2: this.state.input2 / 100
            })
            if (this.state.input2 < 1) {
                this.setState({
                    isInput2Float: true
                })
            }
            this.displayInput(this.state.input2);
            return this.state.input2;
        }
        if (this.state.input1) {
            this.setState({
                input1: this.state.input1 / 100
            })
            if (this.state.input1 < 1) {
                this.setState({
                    isInput1Float: true
                })
            }
            this.displayInput(this.state.input1);
            return this.state.input1;
        }
        if (this.state.result) {
            this.setState({
                result: this.state.result / 100
            })
            this.displayInput(this.state.result);
            return this.state.result;
        }
    };

    changeSign = () => {
        if (this.state.result) {
            this.setState({
                result: this.state.result * -1
            })
            this.displayInput(this.state.result);
            return this.state.result;
        }
        if (this.state.input2) {
            this.setState({
                input2: this.state.input2 * -1
            })
            this.displayInput(this.state.input2);
            return this.state.input2;
        }
        if (this.state.input1) {
            if(this.state.operator) {
                this.setState({
                    input2: "-"
                })
                this.displayInput(this.state.input2);
            } else if (this.state.input1 === "-") {
                this.setState({
                    input1: null
                })
                this.displayInput("0");
                return this.state.input1;
            } else {
                this.setState({
                    input1: this.state.input1 * -1
                })
                this.displayInput(this.state.input1);
                return this.state.input1;
            }
        }
        if (!this.state.input1) {
            this.setState({
                input1: "-"
            })
            this.displayInput(this.state.input1);
        }
    };
    
    addFloatingPoint = () => {
        if (this.state.result) {
            this.setState({
                result: null
            })

        }
        console.log(`input1: ${this.state.input1}, input2: ${this.state.input2}, result: ${this.state.result}`);
        if (this.state.input2) {
            if (this.state.isInput2Float === false) {
                this.setState({
                    input2: this.state.input2.toString().concat("."),
                    isInput2Float: true
                })
                this.displayInput(this.state.input2);
            }
        } else if (!this.state.input1) {
            this.setState({
                input1: "0.",
                isInput1Float: true
            })
            this.displayInput(this.state.input1);
        } else {
            if (this.state.operator) {
                this.setState({
                    input2: "0.",
                    isInput2Float: true
                })
                this.displayInput(this.state.input2);
            } else {
                if (this.state.isInput1Float === false) {
                    if (this.state.input1 === "-") {
                        this.setState({
                            input1: "-0.",
                        })
                    } else {
                        this.setState({
                            input1: this.state.input1.concat(".")
                        })
                    }
                    this.displayInput(this.state.input1);
                    this.setState({
                        isInput1Float: true
                    })
                } 
            }
        }
    }
    

    render () {
        let output = "*(^-^)*";
        if (this.state.result === Infinity) {
            output = "don't you ever divide by zero!";
        } else if (this.state.result || this.state.result === 0) {
            output = this.state.result;
        } else if (this.state.display) {
            output = this.state.display;
        } else {
            output = "*(^-^)*";
        }

        return (
            <main>
                <header>
                    <h1>JS Calculator</h1>
                </header>

                <div className="calculator">
                    <section className="display">{output}</section>
                    <section className="keys">
                        <button className="controls" id="clear" type="button" onClick={event => this.clearDisplay()}>AC</button>

                        <button className="manipulation" id="percent" onClick={this.calcPercent}>%</button>

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
                        
                        <button className="manipulation" id="plusminus" onClick={this.changeSign}>+/–</button>
                        
                        <button className="digit" type="button" value="0" onClick={this.setInput}>0</button>
                        
                        <button className="manipulation" id="floatingPoint" onClick={this.addFloatingPoint}>,</button>
                        
                        <button className="operation" id="calculate" onClick={this.calculate}>=</button>
                    </section>
                </div>
            </main>
        )
    }
};

export default ClassCalculator;