import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { checkin, signoutUser } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    signoutUser: () => dispatch(signoutUser()),
    addUser: () => dispatch(checkin())
  }
)

class Home extends React.Component {
  handleCheckin () {
    this.props.addUser()
  }

  handleSignout () {
    this.props.signoutUser()
  }

  render () {
    return (
      <View style = { styles.container }>
        <Text>Home Screen</Text>
        <Button
          onPress = { () => this.handleCheckin() }
          title = "Check-In"
        />
        <Button
          onPress = { () => this.handleSignout() }
          title = "Sign Out"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
