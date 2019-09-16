import React from 'react'
import './../../css/chat.css'
import { connect } from 'react-redux'

class Box extends React.Component {
  constructor () {
    super()
    this.state = {
      myId: window.localStorage.getItem('user_id')
    }
  }

  componentDidMount () {
    const chatBox = document.getElementById('chat-box')
    chatBox.scrollTop = chatBox.scrollHeight
  }

  render () {
    console.log('myId:', this.state.myId)
    return (
      <div className='box' id='chat-box'>
        {this.props.messages.map((item, index) => {
          return (item.map((item, index) => {
            if (item.sender.id == this.state.myId) {
              return (
                <div key={index} className='sender'>
                  <span>{item.text}</span>
                </div>
              )
            } else {
              return (
                <div key={index} className='receiver'>
                  <span>{item.text}</span>
                </div>
              )
            }
          }))
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  messages: state.messages
})

export default connect(mapStateToProps)(Box)
