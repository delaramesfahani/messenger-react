import React from 'react'
import './../../css/chat.css'
import Conversation from './../messenger/conversation'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { createNewConversation } from './../../action/convAction'
import { connect } from 'react-redux'
import axios from 'axios'
import { conversationShow } from './../../action/convAction'
import { creatConversationPage } from './../../action/convAction'

class List extends React.Component {
  constructor () {
    super()
    this.state = {
      newConv: '',
      suggestionUsers: [],
      token: window.localStorage.getItem('token'), 
    }
  }

  handleClick () {
    this.props.dispatch(createNewConversation(this.state.newConv))
    this.setState({ newConv: '' })
  }


  // for handle search input
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

  componentDidMount () {
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: this.state.token
      }
    })
      .then((response) => {
        console.log('from componentDidMount ::', response.data.data)
        this.props.dispatch(conversationShow(response.data.data.conversation_details))
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }

  handleContact = (id) => {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('user_id',id)
    fdata.append('size', 4)

    axios.post('https://api.paywith.click/conversation/', fdata) 

      .then((response) => {
        console.log('Contact:', response.data)
        
      })
      .catch(function (error) {
        console.log('ContactError:',error)
      })
  }

  handleOpenConversation = (cid) => {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', cid)
    fdata.append('size', 10)

    axios.post('https://api.paywith.click/conversation/details/', fdata) 

      .then((response) => {
        console.log('details::', response.data)
        this.props.dispatch(creatConversationPage(response.data.data.conversation_id))
      })
      .catch(function (error) {
        console.log('detailsError::', error)
      })
  }

  render () {
    console.log('conversationList:',this.props.conversationList)
    return (
      <div className='list'>
        <div className='searchbar'>
          <input type='text' className='search' placeholder='Search...' onChange={(e) => this.handleSearch(e)} />
          <Fab size='small' color='secondary' aria-label='add' onClick={() => this.handleClick()}>
            <AddIcon />
          </Fab>
        </div>
        {
          this.state.suggestionUsers.map((user, index) => {
            return (
              <p 
              className='contacts' 
              key={user.id} 
              onClick={() => this.handleContact(user.id)}>
              {user.email}
              </p>
            )
          })
        }

        {this.props.conversationList.map((item, index) => (
          item.users.map((user,idx) => (
            user.id != window.localStorage.getItem('user_id') &&
            <Conversation
            key={idx}
            name={user.email}
            onClick={() => this.handleOpenConversation(item.cid)}
          />
          )
          
          )
            
        )
        )}

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
