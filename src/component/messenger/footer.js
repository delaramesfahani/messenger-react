import React from 'react'
import TextField from '@material-ui/core/TextField'
// import Fab from '@material-ui/core/Fab'
import { sendNewMessage, getConversationId } from './../../action/convAction'
import { connect } from 'react-redux'
import './../../css/chat.css'
import axios from 'axios'
import conversation from './conversation'

class Footer extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  onChange (e) {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  handleCreate () {
    console.log('propssss', this.props)
    const fdata = new FormData()
    fdata.append('token', window.localStorage.getItem('token'))
    fdata.append('conversation_id', this.props.id)
    fdata.append('text', this.state.text)
    // fdata.append('date', new Date().getHours().toFixed(0))
    // fdata.append('size', 8)

    axios.post('https://api.paywith.click/conversation/create/', fdata)

      .then((response) => {
        console.log('create::', response.data)
        this.setState({ text: '' })
      })
      .catch(function (error) {
        console.log('createError::', error)
      })
  }

  render () {
    var imgUrl = require('./../imgs/Sendicon.png')
    return (
      <div className='footer'>

        <TextField
          label='Type here'
          style={{ margin: 8 }}
          placeholder='your message here'
          fullWidth
          margin='normal'
          variant='filled'
          value={this.state.text}
          onChange={(e) => this.onChange(e)}
        />

        <button className='sendBtn' title='send your message :)' onClick={() => this.handleCreate()}>
          <img src={imgUrl} alt='send' className='sendImg' />
        </button>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  id: state.id
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
