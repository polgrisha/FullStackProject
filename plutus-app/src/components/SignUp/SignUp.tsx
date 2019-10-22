import React from 'react'
import { Link } from 'react-router-dom'

interface ISignUp {
    history: {
      push: (url: string) => void
    }
}

const SignUp: React.FC<ISignUp> = ({history}) => {
  const [login, setLogin] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [surname, setSurname] = React.useState<string>('')

  const submit = React.useCallback(
    async (event) => {
      event.preventDefault()
      await fetch('http://localhost:3000/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password, name, surname})
      })
      history.push('/user')
    },
    [login, password, name, surname]
  )

  return (
    <div className = "sign_up_form">
        <div className = "log_up">
            login
        </div>
        <div className = "log_up">
            <input type="text"
            required 
            value={login}
            onChange={(event) => setLogin(event.target.value)}/>
        </div>
        <div className = "log_up">
            password
        </div>
        <div className = "log_up">
            <input type="text"
            required 
            value={password}
            onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className = "log_up">
            Name
        </div>
        <div className = "log_up">
            <input type="text"
            required 
            value={name}
            onChange={(event) => setName(event.target.value)}/>
        </div>
        <div className = "log_up">
            Surname
        </div>
        <div className = "log_up">
            <input type="text"
            required 
            value={surname}
            onChange={(event) => setSurname(event.target.value)}/>
        </div>
        <div className = "log_up">
            <Link to="/user" onClick={submit}>
                enter
            </Link>
        </div>
    </div>
  )
}

export default SignUp