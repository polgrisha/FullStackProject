import React from 'react'
import { Link } from 'react-router-dom'

const ExpenceList: React.FC = () => {
  return (
    <section className="all_expences">
        <div className="expence"> 
          <div className="expence_description">
            <div className="expence_title">
              1
            </div>
            <div className="expence_amount">
              8 0000
            </div>
          </div>
        </div>
        <div className="expence"> 
          <div className="expence_description">
            <div className="expence_title">
              2
            </div>
            <div className="expence_amount">
              500
            </div>
          </div>
        </div>
        <div className="expence"> 
          <div className="expence_description">
            <div className="expence_title">
              3
            </div>
            <div className="expence_amount">
              1000
            </div>
          </div>
        </div>
    </section>
  )
}

export default ExpenceList