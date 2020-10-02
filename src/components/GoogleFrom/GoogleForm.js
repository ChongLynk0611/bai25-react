import React,{Component} from 'react';
import './GoogleForm.css';
import logo from '../../public/img/logo.png';

class GoogleForm extends Component{
    constructor(){
        super();
        this.inputElement = React.createRef();

    }
    componentDidMount(){
        this.inputElement.current.focus();
    }
    render(){
        return(
            <div className="GoogleForm">
                <img src={logo}></img>
                <input 
                    ref={this.inputElement}
                    placeholder="Type searching..."
                ></input>
                <button>Tìm trên google</button>
            </div>
        );
    }
}

export default GoogleForm;