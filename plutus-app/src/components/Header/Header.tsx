import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="head_header">
            <div className="name">
                <Link to="/">Plutus</Link>
            </div>
            <div className = "sign_items">
                <div className="sign_in">
                    <Link to="/sign-in">sign in</Link>
                </div>
                <div className="sign_up">
                    <Link to="/sign-up">sign up</Link>
                </div>
            </div>
        </header>
  )
}

export default Header