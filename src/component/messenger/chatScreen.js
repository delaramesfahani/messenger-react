import React from 'react'
import Header from './header'
import Box from './chatBox'
import Footer from './footer'
import axios from 'axios'
import './../../css/chat.css'
import { connect } from 'react-redux'

class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      interval: ''
    }
  }

  componentDidMount () {
    const interval = setInterval(() => {
      const fdata = new FormData()
      fdata.append('token', window.localStorage.getItem('token'))
      fdata.append('conversation_id', this.props.id)
      axios.post('https://api.paywith.click/conversation/seen/', fdata)
        .then((response) => {
        })
        .catch(function (error) {
          console.log(error)
        })
    }, 5000)
    this.setState({ interval })
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  render () {
    console.log('seeen', this.props)
    return (
      <div className='chat'>
        <Header />
        <Box />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  id: state.id
})

export default connect(mapStateToProps)(Chat)
