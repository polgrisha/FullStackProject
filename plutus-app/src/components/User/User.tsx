import React from 'react'
import { Link } from 'react-router-dom'

const User: React.FC = () => {
  return (
    <div className = "main_menu">
        <div className = "menu">
            menu
        </div>
        <div className = "friends">
            friends
        </div>
        <div className = "expence_list">
            <Link className = "hrefs" to="/all-expences">all expences</Link>
        </div>
        <div className = "add_expence">
            <Link className = "hrefs" to="/add-expence">add expence</Link>
        </div>
        <div className = "account">
            account
        </div>
        <div className = "settings">
            settings
        </div>
    </div>
  )
}

export default User