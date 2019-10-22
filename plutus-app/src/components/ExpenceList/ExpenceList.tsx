import React from 'react'
import { Link } from 'react-router-dom'
import ExpenceCard from '../ExpenceCard'
import { IExpence } from '../../types/expence'

const ExpenceList: React.FC = () => {
  const [expences, setExpences] = React.useState<IExpence[]>([])

  React.useEffect(() => {
    void getExpences()
  }, [])

  const getExpences = React.useCallback(async () => {
    const responce = await fetch('http://localhost:3000/expences')
    const data = await responce.json()
    setExpences(data)
  }, [])

  return (
    <div>
      <section className="all_expences">
          {expences.map((expence, index) => (
            <ExpenceCard key={index} {...expence} />
          ))}
      </section>
    </div>
  )
}

export default ExpenceList