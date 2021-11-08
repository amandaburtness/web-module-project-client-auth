import React from 'react'
import axios from 'axios'

class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value // remember that NAME is coming from the name of the input in the form 
      }
    })
  }

  login = e => {
    e.preventDefault()
    // hit the login API with the username and password in the request body
    axios.post("http://localhost:5000/api", this.state.credentials)
    
    // happy path: store the token from the response as a localstorage item called 'token'
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      this.props.history.push("/protected")
    })

    // sad path: just log it for now
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input 
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input 
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>

        </form>
      </div>
    )
  }
}

export default Login