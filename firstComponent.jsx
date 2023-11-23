import React, { Component } from 'react';
class firstComponent extends Component{
    state ={
        counter:0
    }
    pressbutton(){
        console.log("button pressed!!!");
        console.log("this value....>"+this);

    }
    render(){
        return(
            <div>
            <spam className='badge bg-warning m-4'>(this.state.counter)</spam>
            <button className='btn btn-primary'onClick={this.pressbutton}>Increment</button>
            </div>
        );
    
    }
}
export default firstComponent;