import React, {Component, useState} from "react";

class PKhome extends Component {

    state = {
        isActive:true
    }

    showHandler = ()=>{
        this.setState({
            isActive: true
        })
    }

    hideHandler = () =>{
        this.setState({
            isActive: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.isActive ? <div className="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                    </div> : null }
                    <button onClick={this.showHandler}>Wyswietla</button>
                    <button onClick={this.hideHandler}>Znika</button>
                </div>
            </React.Fragment>
        )
    }
}

export default PKhome;