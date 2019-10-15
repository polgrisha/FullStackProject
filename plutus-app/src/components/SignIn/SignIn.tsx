import React from 'react'
import { Link } from 'react-router-dom'

const SignIn: React.FC = () => {
  return (
    <div className = "sign_in_form">
            <div className = "log_in">
                login
            </div>
            <div className = "log_in">
                <input type="text" required />
            </div>
            <div className = "log_in">
                password
            </div>
            <div className = "log_in">
                <input type="text" name="name" required />
            </div>
            <div className = "log_in">
                <Link to="/user">enter</Link>
            </div>
    </div>
  )
}

export default SignIn