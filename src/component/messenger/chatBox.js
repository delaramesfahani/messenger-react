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
    console.log('myId:', this.props)
    return (
      <div className='box' id='chat-box'>
        {this.props.messages.map((item, index) => {
          return (item.map((item, index) => {
            if (item.sender.id === this.state.myId) {
              return (
                <div key={index} className='sender'>
                  <span>{item.text}</span>
                </div>
              )
            } else if (!(item.sender.id === this.state.myId)) {
              return (
                <div key={index} className='receiver'>
                  <span>{item.text}</span>
                </div>
              )
            }
          }))

          // if (item.sender === window.localStorage.getItem('user_id')) {
          //   return (
          //     <div key={index} className='receiver'>
          //       <span>{item.text}</span>
          //     </div>
          //   )
          // } else {
          //   return (
          //     <div key={index} className='sender'>
          //       <span>{item.text}</span>
          //     </div>
          //   )
          // }
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  // messageList: state.messageList,
  messages: state.messages
})

// const mapDispatchToProps = (dispatch) => ({
//   dispatch: dispatch
// })

export default connect(mapStateToProps)(Box)
