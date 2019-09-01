import React from 'react'
import './../../css/chat.css'
import Conversation from './../messenger/conversation'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createNewConversation } from './../../action/convAction'
import { connect } from 'react-redux'

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

    render(){
      console.log('propssss',this.props)
        return(
            <div className="list">
              <div className="searchbar">
              <input type="text" className="search" placeholder="Search..." />

              {/*** searchbar on top of conversations ***/}
              <Fab size="small" color="secondary" aria-label="add">
                <AddIcon />
              </Fab>

              </div>
             { this.props.conversationList.map((item, index) => (
              <Conversation
                key={index}
                name={item.firstName}
                lastName={item.lastName}
                latestMessage={item.latestMessage}
                unseenMessage={item.unseenMessage} />
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