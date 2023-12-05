import React, { Component } from 'react';
class Loginform extends Component {
    state = { 
        userdetails:{
            username:"",
            password:""

        }
     } 
     handleSubmitt = (e) =>{
        e.preventDefault();
        console.log("submit button pressed!!!!");
        console.log("username--->"+ this.state.userdetails.username);
        console.log("passowrd--->"+ this.state.userdetails.password);
     }
     handleOnChange = (x) =>{
        const userdetails={...this.state.userdetails};
       userdetails.username = x.usercurrentTarget.value;
         this.setstate({userdetails});
     }
     handlePasswordChange=(Y) =>{
        const userdetails={...this.state.userdetails};
       userdetails.Password = Y.usercurrentTarget.value;
         this.setstate({userdetails});
     }
    render() { 
        return (
            <form onSubmit={this.handleSubmitt}>
  <div>
            <label  className="form-label">username</label>
            <input type="text" 
            onChange={this.handleOnChange} 
            value={this.state.userdetails.username} 
            className="form-control"
            name="username"
            id="username"/>
     </div>

  <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password"
                className="form-control" 
                onChange={this.handleOnChange} 
                value={this.state.userdetails.Password}
                name="passowrd"
                id="exampleInputpassword1"/>
               </div >
            <button type="submit" className="btn btn-primary">Submit</button>
            
</form>
        );
    }
}
export default Loginform;