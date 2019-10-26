import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { MaterialIcons } from '@expo/vector-icons'
import RDR2MaterialsTracker from 'RDR2MaterialsTracker'
import { Provider } from 'react-redux'
import { readAppData } from 'utils/storage'
import store from 'store'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render () {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {StatusBar.setHidden(true)}
            <RDR2MaterialsTracker />
          </View>
        </Provider>
      )
    }
  }

  async _loadResourcesAsync () {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync(MaterialIcons.font),
      readAppData(store.getState().get('materialsList'))
    ])
  };

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})
