import React from 'react'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
    <div className = "sign_up_form">
        <div className = "log_up">
            login
        </div>
        <div className = "log_up">
            <input type="text" required />
        </div>
        <div className = "log_up">
            password
        </div>
        <div className = "log_up">
            <input type="text" required />
        </div>
        <div className = "log_up">
            Name
        </div>
        <div className = "log_up">
            <input type="text" required />
        </div>
        <div className = "log_up">
            Surname
        </div>
        <div className = "log_up">
            <input type="text" required />
        </div>
        <div className = "log_up">
            <Link to="/user">enter</Link>
        </div>
    </div>
  )
}

export default SignUp