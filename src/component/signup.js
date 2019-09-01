import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import './../App.css'

class Signup extends React.Component {

    constructor (props) {
        super(props)
    
        this.state = {
          email: '',
          password: '',
          retypePassword: ''
        }
    }

    hanleRequest () {
        if (this.state.password === this.state.retypePassword) {
          axios.post('https://api.paywith.click/auth/signup/', {
            email: this.state.email,
            password: this.state.password
          })
            .then(function (response) {
              console.log('dataaaa:', response.data)
              window.localStorage.setItem('Token:', response.data.token)
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          this.setState({ error: 'invalid password' })
        }
      }

    render(){
        return(
            <form>
                <div className="form">
                    <Typography variant="h5" gutterBottom >
                        SIGNUP HERE
                    </Typography>
                    <TextField
                    label="Email"
                    placeholder="Your Email"
                    margin="normal"
                    name="email"
                />
                    <TextField
                    label="Password"
                    placeholder="Your password"
                    margin="normal"
                    name="password"
                />
                    <TextField
                    label="Retype Password"
                    placeholder="Retype Password"
                    margin="normal"
                    name="retypePassword"
                />
                <Button variant="contained" color="secondary" onClick={() => this.hanleRequest()} >
                        SIGNUP
                </Button>
                </div>
            </form>
        )
    }
}
export default Signup
