import { func } from "prop-types"
import React, { useState } from "react"

import './Signup.css'


function SignUp(props){
    const [formData , setFormData] = useState({
        username: "", password: "", confirmpassword: "" 
    })


    function handleChange(event){

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event){

        event.preventDefault()
        let document1 = document.getElementById('label1');
        document1.classList.add(
            'active'
        );
    }


    return(
        <div id="main-con">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label"  style={{textTransform: "none"}}>Username</label>
                    <input type="text" className="form-control" placeholder="Username" onChange={handleChange} name="username" value={formData.username} />
                    <label  id="label1" className="active" >Username is already token</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"  style={{textTransform: "none"}}>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={handleChange} name="password"  value={formData.password} />
                    <label id="label2" className="active">Password must be at least 8 digit long</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label" style={{textTransform: "none"}}>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" onChange={handleChange} name="confirmpassword" value={formData.confirmpassword} />
                    <label id="label3">Password must match</label>
                </div>
                <button className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
    }
    export default SignUp