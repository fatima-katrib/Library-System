import React, { Component } from 'react'
import ExitButton from '../../components/Exit button'
import "./borrowingform.css"


export class BorrowingForm extends Component {
    render() {
        return (
            <div className='borrowing-wrapper' >
                <div className="Main-container">

                    <h1 className='title-borrow'>Borrowing Form</h1><br />
                    <h3 className='title-details'>Enter your details</h3>
                    <div className='input-borrow-main'>
                        <div className='input-borrow-name-email'><input type='text' className='First-Name' placeholder=' First name' />
                            <input type='email' className='Email-Email' placeholder=' Email' /></div>
                        <div className="input-borrow-email-last">
                            <input type='text' className='Last-Name' placeholder=' Last name' />
                            <input type='text' className='Phone-Number' placeholder=' Phone Number' /></div></div>
                    <h3 className='Title-period'>Borrowing Period</h3>
                    <div className='input-borrow-date' >
                      <div className='input-first-date'>  <input type='date' className='borrow-from-date'placeholder=' from Date' />
                        </div><div className='input-secound-date'><input type='date' className='borrow-to-date' placeholder='to Date'/></div>
                    </div><div className='borrow-button'> <button className='btn-borrow'>Borrow</button></div>
                    <ExitButton className="exit-button" />



                </div>


            </div>
        )
    }
}

export default BorrowingForm