import React from 'react'
import { Link } from 'react-router-dom'
import { IExpence } from '../../types/expence'

const ExpenceCard: React.FC<IExpence> = (props) => {
    const {title, amount, id} = props

    return  (
        <div className="expence"> 
          <div className="expence_description">
            <div className="expence_title">
              {title}
            </div>
            <div className="expence_amount">
              {amount}
            </div>
          </div>
        </div>
    )
}

export default ExpenceCard