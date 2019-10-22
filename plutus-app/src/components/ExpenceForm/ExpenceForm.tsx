import React from 'react'
import { Link } from 'react-router-dom'

interface IExpenceForm {
    history: {
      push: (url: string) => void
    }
}

const ExpenceForm: React.FC<IExpenceForm> = ({history}) => {
  const [title, setTitle] = React.useState<string>('')
  const [amount, setAmount] = React.useState<number>()

  const submit = React.useCallback(
    async (event) => {
      event.preventDefault()
      await fetch('http://localhost:3000/expences', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, amount})
      })
      history.push('/all-expences')
    },
    [title, amount]
  )

  return (
    <div className = "expence_form">
        <div className = "expence_form_item">
            title
        </div>
        <div className = "expence_form_item">
            <input type="text"
            required value={title}
            onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div className = "expence_form_item">
            amount
        </div>
        <div className = "expence_form_item">
            <input type="text" 
            required value={amount}
            onChange={(event) => setAmount(event.target.value ? parseInt(event.target.value) : 0)}/>
        </div>
        <div className = "expence_form_item">
            <Link to="/all-expences" onClick={submit}>
                enter
            </Link>
        </div>
    </div>
  )
}

export default ExpenceForm