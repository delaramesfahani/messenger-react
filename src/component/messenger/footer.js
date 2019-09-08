import React from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import { sendNewMessage , openConversation } from './../../action/convAction'
import { connect } from 'react-redux'
import './../../css/chat.css'
import axios from 'axios'
import conversation from './conversation'


class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMessage: '',
      conversation_id: '',
      token: window.localStorage.getItem('token')
    }
  }

  handleCreate () {
    this.props.dispatch(sendNewMessage(this.state.newMessage))
    this.setState({ newMessage: '' })

    this.props.dispatch(openConversation(this.state.conversation_id))

    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', 392) // it's temperory, must change
    fdata.append('text', this.state.newMessage)
    fdata.append('size', 8)

    axios.post('https://api.paywith.click/conversation/create/', fdata)

      .then((response) => {
        console.log('create::', response.data)
      })
      .catch(function (error) {
        console.log('createError::', error)
      })
  }

  render () {
    var imgUrl = require('./../imgs/Sendicon.png')
    console.log('cidddd', this.props.conversation_id)
    return (
      <div className='footer'>

        <TextField
          id='filled-full-width'
          label='Type here'
          style={{ margin: 8 }}
          placeholder='your message here'
          fullWidth
          margin='normal'
          variant='filled'
          value={this.state.newMessage}
          onChange={(e) => this.setState({ newMessage: e.target.value })}
        />

        <Fab color='primary' aria-label='add' onClick={() => this.handleCreate()}>
          <img src={imgUrl} alt='send' className='sendImg' />
        </Fab>

      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Footer)
