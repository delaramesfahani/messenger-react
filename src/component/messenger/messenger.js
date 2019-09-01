import React from 'react'
import List from './msgList'
import Chat from './chatScreen'
import './../../css/chat.css'

class Messenger extends React.Component{
    render(){
        return(
            <div className="messenger">
                <List />
                <Chat />
            </div>
        )
    }
}
export default Messenger