import React, { useState , useEffect} from "react"
// import validate from './../validation/validateFunction'
import './../css/chat.css'


function Profile(props) {
console.log('sssss',props)
const[field, setField] = useState({
   email:'',
   password:''
    }
);

const[error,setError] = useState({
    email:'',
    password:''
})


useEffect(() => {
    // field.email =  axios.post('https://api.paywith.click/auth/signin/', {
    //     email: this.state.fields.email,
    //     password: this.state.fields.password
    //   })
    //     .then((response) => {
    //       console.log('data:', response.data)
    //       window.localStorage.setItem('token', response.data.data.token)
    //       this.props.history.push('/messenger/')
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
  });

return(
    <div className="profile">
        email:
        <input 
            type="text"
            name="email"
            onChange={(e) => setField(...field,e.target.value)}
        />
        <p> {field.firstName} </p>
        password:
        <input
            type="text"
            name="password"
            onChange={(e) => setField(...field,e.target.value)}
        />
        <p>{field.email}</p>
        <p>{error.password}</p>
    </div>

    );
}
export default Profile