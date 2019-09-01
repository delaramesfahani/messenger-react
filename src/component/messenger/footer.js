import React from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import { sendNewMessage } from './../../action/convAction'
import { connect } from 'react-redux'
import './../../css/chat.css'

class Footer extends React.Component {
    constructor (props) {
        super(props)
    
        this.state = {
          newMessage: ''
        }
      }
      handleSend () {
        this.props.dispatch(sendNewMessage(this.state.newMessage))
        this.setState({ newMessage: '' })
      }


    render() {
      var imgUrl = require('./../imgs/paper-plane.png');
        return(
            <div className="footer">
                
                <TextField
                    id="filled-full-width"
                    label="Type here"
                    style={{ margin: 8 }}
                    placeholder="your message here"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    value={this.state.newMessage}
                    onChange={(e) => this.setState({ newMessage: e.target.value })}
                    
                />
                <Fab color="primary" aria-label="add" onClick={() => this.handleSend()} >
                  <img src={imgUrl} alt="send" className="sendImg" />
                </Fab>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
  })
  
export default connect(mapDispatchToProps)(Footer)