import React, { Component}  from 'react';

export default function content() {
    return (
        <div id="container">
            <div id="header">
                <div id="lm_logo_header"/>
            </div>
            <div id="sub_container">
                <div id="form_container">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Welcome to the password helper form!</h3>
                        <h5>This form helps you determine if an enterprise password is valid,
                            <u>prior to committing to changing it</u>
                        </h5>
                        <label>
                            <strong>Password: </strong>
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                        <div id="error"><br></br>
                            {!this.state.validation.length && !this.state.initialState ?
                                <div id="success"><strong>This password is valid!</strong></div> :
                                this.state.validation.toString().split(',').map((item, key) => {
                                    return <span key={key}>{item}<br/></span>
                                })}
                        </div>
                    </form>
                </div>
            </div>
            <div id="footer">
                <div id="lm_logo_footer"/>
            </div>
        </div>
    );
}
