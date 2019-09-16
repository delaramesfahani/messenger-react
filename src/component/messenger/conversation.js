import React from 'react'
import { connect } from 'react-redux'
import { getMessageList, getUserName, getConversationId } from './../../action/convAction'
import axios from 'axios'

var profileUrl = require('./../imgs/avatar.png')

class Conversation extends React.Component {
  constructor () {
    super()

    this.state = {
      token: window.localStorage.getItem('token')
    }
  }

  handleOpenConversation () {
    this.props.dispatch(getConversationId(this.props.conversation_id))
    this.props.dispatch(getUserName(this.props.name, this.props.family))

    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.conversation_id)
    fdata.append('size', 10)
    fdata.append('date', (new Date().getTime() / 1000).toFixed(0))

    axios.post('https://api.paywith.click/conversation/details/', fdata)

      .then((response) => {
        console.log('details::', response.data)
        this.props.dispatch((getMessageList(response.data.data.messages)))
      })
      .catch(function (error) {
        console.log('detailsError::', error)
      })
  }

  render () {
    return (
      <div>
        <div className='conversation' onClick={() => this.handleOpenConversation()}>
          <img src={profileUrl} alt='profile' className='profileImg' />
          <div className='infoContainer'>
            <div className='info1'>
              <span className='name'>{this.props.name}</span>
              <span>id: {this.props.id}</span>
            </div>
            <div className='info2'>
              <span />
              {/* <span className='unseen'> {this.props.unseenMessage}</span> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Conversation)
