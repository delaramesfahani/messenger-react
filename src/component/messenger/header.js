import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'

class Header extends React.Component {
  render () {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              {this.props.firstName} {this.props.lastName}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}
}

const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName
})

export default connect(mapStateToProps)(Header)
