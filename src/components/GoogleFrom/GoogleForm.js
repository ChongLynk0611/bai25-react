import React,{Component} from 'react';
import './GoogleForm.css';
import logo from '../../public/img/logo.png';

function GoogleForm(props){
   
    return(
        <div className="GoogleForm">
            <img src={logo}></img>
            <input 
                placeholder="Type searching..."
            ></input>
            <button>Tìm trên google</button>
        </div>
    );
    
}

export default GoogleForm;