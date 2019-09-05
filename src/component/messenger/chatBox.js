import React from 'react'
import './../../css/chat.css'
import { connect } from 'react-redux'


class Box extends React.Component {
  constructor () {
    super()
    this.state = {
      editMode: false,
      selectedMsg: -1
    }
  }

  render () {
    return (
      <div className='box'>      
        {this.props.messageList.map((message, index) => {
          if (message.sender === 1) {
            return (
              <div key={index} className='sender'>
                <span>{message.text}</span>
              </div>
            )
          } else {
            return (
              <div key={index} className='receiver'>
                <span>{message.text}</span>
              </div>
            )
          }
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  messageList: state.messageList
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Box)
