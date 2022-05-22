import React, { Component } from 'react';
import './App.css';
import Display from './Display ';
import KeyPadComponent from './KeypadComponent';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
        
            <div>
                  <div className="">
    <div className="w-full flex justify-center">
      <h2 className='text-2xl'>XXIII Calaulator</h2>
      <div className="mt-10 py-8 px-12 pb-5 w-2/6 border-2 border-gray-300 rounded">
        <div className="w-full mb-5">
          
  <Display result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
        </div>
        </div>
        </div>

                  
                </div>
            </div>
        );
    }
}

export default App;