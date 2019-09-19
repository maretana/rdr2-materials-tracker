import { ToastAndroid } from 'react-native'
import { clearAppData } from 'utils/storage'

/**
 * Deletes all user data for this app and resets the app state
 */
export function resetAppData () {
  return dispatch => {
    clearAppData().then(() => {
      ToastAndroid.show('App data was reset', ToastAndroid.SHORT) // TODO: Remove this or at least check for platform (Andorid|iOS)
      dispatch(resetStateUserData())
    })
  }
}

function resetStateUserData () {
  return {
    type: 'RESET_APP_DATA'
  }
}
