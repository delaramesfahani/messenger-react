import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { withRouter } from 'react-router'
import validate from './../validation/validateFunction'
import './../App.css'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  }

  handleEmail (e) {
    this.setState({ ...this.state, fields: { ...this.state.fields, email: e.target.value } })
  }

  handlePass (e) {
    this.setState({ ...this.state, fields: { ...this.state.fields, password: e.target.value } })
  }

  handleError () {
    let valid = true
    const errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    console.log('errorrr', errors)
    this.setState({ errors },
      () => {
        Object.values(this.state.errors).map((item) => {
          if (item !== null) {
            valid = false
          }
        })
        if (valid) {
          this.handleRequest()
        }
      }
    )
  }

  handleRequest () {
    console.log('state::::',this.state)
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
      .then((response) => {
        console.log('data:', response.data.data)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('user_id', response.data.data.profile.id)
        this.props.history.push('/messenger/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    console.log('props::', this.props)
    return (
      <form>
        <div className='form'>
          <Typography variant='h5' gutterBottom>
          LOGIN HERE
          </Typography>
          <TextField
            label='Email'
            placeholder='Your Email'
            margin='normal'
            onChange={(e) => this.handleEmail(e)}
          />
          {this.state.errors.email !== null &&
            <span className='error'>{this.state.errors.email}</span>}
          <TextField
            label='Password'
            placeholder='Password'
            margin='normal'
            onChange={(e) => this.handlePass(e)}
          />
          {this.state.errors.password !== null && <span className='error'>{this.state.errors.password}</span>}
          <Button variant='contained' color='secondary' onClick={() => this.handleError()}>
            LOGIN
          </Button>
        </div>
      </form>
    )
  }
}
export default withRouter(Login)
