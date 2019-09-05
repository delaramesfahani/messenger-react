import React from 'react'
import './../../css/chat.css'
import Conversation from './../messenger/conversation'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createNewConversation } from './../../action/convAction'
import { connect } from 'react-redux'
import axios from 'axios'

class List extends React.Component {
  constructor () {
    super()
    this.state = {
      newConv: '',
      suggestionUsers: [],
      token: window.localStorage.getItem('token')
    }
  }

  handleClick () {
    this.props.dispatch(createNewConversation(this.state.newConv))
    this.setState({ newConv: '' })
  }

  handleSearch (e) {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)

    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        console.log('dataaaaa:', response.data)
        this.setState({ suggestionUsers: response.data.data.users })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className='list'>
        <div className='searchbar'>
          <input type='text' className='search' placeholder='Search...' onChange={(e) => this.handleSearch(e)} />
          <Fab size='small' color='secondary' aria-label='add'>
            <AddIcon />
          </Fab>
        </div>
        {
          this.state.suggestionUsers.map((user, index) => {
            return (
              <p key={user.id}>
                {user.email}
              </p>
            )
          })
        }
        {this.props.conversationList.map((item, index) => (
          <Conversation
            key={index}
            name={item.firstName}
            lastName={item.lastName}
            latestMessage={item.latestMessage}
            unseenMessage={item.unseenMessage}
          />
        )
        )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  conversationList: state.conversationList
})
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(List)
