import React from 'react'
import { Link } from 'react-router-dom'

const ExpenceForm: React.FC = () => {
  return (
    <div className = "expence_form">
        <div className = "expence_form_item">
            title
        </div>
        <div className = "expence_form_item">
            <input type="text" required />
        </div>
        <div className = "expence_form_item">
            amount
        </div>
        <div className = "expence_form_item">
            <input type="text" required />
        </div>
        <div className = "expence_form_item">
            <Link to="/all-expences">add</Link>
        </div>
    </div>
  )
}

export default ExpenceForm