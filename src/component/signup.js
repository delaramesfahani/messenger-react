import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import './../App.css'

class Signup extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      retypePassword: ''
    }
  }

  handleChange (event) {
    const name = event.target.name
    const changeFields = this.state
    changeFields[name] = event.target.value
    this.setState({ state: changeFields })
  }

  handleRequest () {
    if (this.state.password === this.state.retypePassword) {
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password
      })
        .then(function (response) {
          console.log('data:', response.data)
          window.localStorage.setItem('token', response.data.token)
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      this.setState({ error: 'invalid password' })
    }
  }

  render () {
    return (
      <form>
        <div className='form'>
          <Typography variant='h5' gutterBottom>
                        SIGNUP HERE
                  </Typography>
          <TextField
                    label='Email'
                    placeholder='Your Email'
                    margin='normal'
                    name='email'
            onChange={(event) => this.handleChange(event)}
                  />
          <TextField
                    label='Password'
                    placeholder='Your password'
                    margin='normal'
            name='password'
                    onChange={(event) => this.handleChange(event)}
                  />
          <TextField
            label='Retype Password'
            placeholder='Retype Password'
            margin='normal'
            name='retypePassword'
            onChange={(event) => this.handleChange(event)}
          />
          <Button variant='contained' color='secondary' onClick={() => this.handleRequest()}>
                        SIGNUP
          </Button>
          <p> {this.state.error}</p>
        </div>
      </form>
    )
  }
}
export default Signup
