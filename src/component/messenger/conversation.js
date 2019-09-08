import React from 'react'
import { connect } from 'react-redux'
import { getUserName } from './../../action/convAction'
var profileUrl = require('./../imgs/avatar.png')

class Conversation extends React.Component {
  render () {
    return (
      <div className='conversation' onClick={() => this.props.dispatch(getUserName(this.props.name, this.props.lastName))} >
        <img src={profileUrl} alt='profile' className='profileImg' />
        <div className='infoContainer'>
          <div className='info1'>
            <span className='name'>{this.props.name}</span>
            <span> </span>
          </div>
          <div className='info2'>
            <span> </span>
            {/* <span className='unseen'> {this.props.unseenMessage}</span> */}
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
