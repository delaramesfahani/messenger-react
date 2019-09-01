import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import './../App.css'

class Login extends React.Component{

    constructor(props){
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

    handleChange (event) {
        let name = event.target.name
        let changeFields = this.state.fields
        changeFields[name] = event.target.value
        this.setState({ fields: changeFields })
    }

    handleRequest () {
        axios.post('https://api.paywith.click/auth/signin/', {
          email: this.state.fields.email,
          password: this.state.fields.password
        })
          .then(function (response) {
            console.log('data:', response.data)
            window.localStorage.setItem('token', response.data.data.token)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    

 render() {
     console.log('state::' , this.state)
     return(
         <form>
             <div className="form">
             <Typography variant="h5" gutterBottom>
                    LOGIN HERE
            </Typography>
             <TextField
                label="Email"
                placeholder="Your Email"
                margin="normal"
                onChange={(event) => this.handleChange(event) }
             />
             <TextField
                label="Password"
                placeholder="Password"
                margin="normal"
             />
              <Button variant="contained" color="secondary" onClick={() => this.handleRequest() } >
                LOGIN
              </Button>
             </div>
         </form>
     )
 }   
}
export default Login