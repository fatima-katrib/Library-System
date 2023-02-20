import React, { Component } from 'react'
import ExitButton from '../../components/Exit button'
import "./adminform.css"

export class AdminForm extends Component {
    render() {
      return (
        <div className='form-wrapper'>
          <ExitButton handleClick={this.props.handleExit} />
          <div className='main-form-admin'>
          <h1 className="title-admin ">Admin Login</h1>
                    <div className='input-group-admin'>
                    <input type="text" className="login-form-email" placeholder=" Your Email" /><br /><br />
                    <input type="password" className="login-form-password" placeholder=" Password" /><br /></div>
                    <button className='form-submit' >Login</button>
                    <ExitButton className="exit-button" />
          </div>
        </div>
      );
    }
  }
  
  export default AdminForm;
  
  
  
  