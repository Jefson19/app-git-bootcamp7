import React, {Component} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TabNavigator')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
