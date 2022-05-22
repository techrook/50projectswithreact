import React, {Component} from 'react';
import "./Display.css";

class Display extends Component {
    render() {
        let {result} = this.props;
        return (
            <div className="Display">
                <p>{result}</p>
            </div>
    )
        ;
    }
}
export default Display;