import React, { Component } from 'react';
import './page6.css';

class Page6 extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        consultation: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="page6-container">
                <h1 className="page4-heading">Patient Are Happy For Proper <br/> Mental Cure Support</h1>
                <p className="page6-para">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</p>
                <div className='page6-row'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-row'>
                        <div className='input-container'>
                            <label htmlFor="firstName" className='form-label'>First Name *</label>
                            <input className='input-box' type="text" id="firstName" name="firstName" placeholder='Arya' onChange={this.handleChange} />
                        </div>
                        <div className='input-container'>
                            <label htmlFor="lastName" className='form-label'>Last Name *</label>
                            <input className='input-box' type="text" id="lastName" name="lastName" placeholder='Demian' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='form-row'>
                    <div className='input-container'>
                        <label htmlFor="email" className='form-label'>Email Address *</label>
                        <input className='input-box' type="email" id="email" name="email"  placeholder="aryademian@email" onChange={this.handleChange} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="phoneNumber" className='form-label'>Phone Number *</label>
                        <input className='input-box' type="text" id="phoneNumber" name="phoneNumber" placeholder='+12 343 498 3984' onChange={this.handleChange} />
                    </div>
                    </div>
                    <div className='input-container'>
                        <label className='form-label' htmlFor="address">Address *</label>
                        <textarea className='input-box address' id="address" name="address" placeholder='Street Sutomo Alexander, 14. Norwegia' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-container'> 
                        <label className='form-label' htmlFor="consultation">Consultation *</label>
                        <textarea cols={20} className='input-box form-textarea' id="consultation" name="consultation" placeholder='Write here for your problem' onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className='submit-btn'>Send Consultation</button>
                </form>
                <img src = "https://s38924.pcdn.co/wp-content/uploads/2021/04/Blog-Form-with-Save-and-Continue.png" alt="form" className='form-img'/>
            </div>
            </div>
        );
    }
}

export default Page6;
