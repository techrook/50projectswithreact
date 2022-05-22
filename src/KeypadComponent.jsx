import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <div className="grid grid-cols-4 gap-4">
                <button 
                className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                 name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                 name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button 
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
                </div>

                <div className="grid grid-cols-4 gap-4">

                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                    </div>

                <div className="grid grid-cols-4 gap-4">
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>
                </div>

                <div className="grid grid-cols-4 gap-4">

               
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>
                
                </div>

                    <div className="grid grid-cols-4 gap-4">

                   
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button
                 className="bg-green-200 hover:bg-green-300 cursor-pointer h-10 flex justify-center items-center text-xl text-gray-700 font-semibold font-mono border rounded"
                name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
                </div>
            </div>
        );
    }
}


export default KeyPadComponent;