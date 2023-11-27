import React, { Component } from 'react';
class PageComponent extends Component{
state = {
    counter: this.props.pagevalue,
    course:this.props.username
}
    render() {
        return (
            <div>
                
                <span className='bg bg-warning n-4' >{this.state.counter}</span>
                <span className='bg bg-warning n-4' >{this.state.course}</span>
                <span className='bg bg-warning n-4' >{this.props.childern}</span>
                
                <button className='btn btn-danger'>+</button>
            </div>
        );

    } 
}
export default PageComponent; 
