import React, { Component } from 'react';
import { Link , withRouter} from "react-router-dom";
import {connect} from 'react-redux';


class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {isOpened: false};
    };
    nextPath(path) {
        this.props.history.push(path);
     }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened });
        console.log("this.state.isOpened", this.state.isOpened);
    };


    render() {
        let dropDownText;
        if(this.state.isOpened){
            dropDownText = <div >Here inside of dropdown</div>
        };

        return (
            <div>
                   
                <div onClick={this.toggleState.bind(this)} > 

                    Dropdown {dropDownText}
                </div> <hr/>
                
                <button onClick={() => this.nextPath('/') }>`main page`</button>
                <Link to="/"> Main</Link>
            </div>
        )
    }
}

export default withRouter(connect()(Dropdown)﻿);
// <button onClick={() => dispatch.push('/')}>Go to /foo</button>