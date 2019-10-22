import React from 'react'
import { Link, withRouter } from 'react-router-dom'

interface IUser {
    location: {
        pathname: string
    }
}

const User: React.FC<IUser> = (props) => {
  const {location} = props

  if (!['/all-expences', '/add-expence', '/user'].includes(location.pathname)) {
    return null
  }
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

export default withRouter(User as any)