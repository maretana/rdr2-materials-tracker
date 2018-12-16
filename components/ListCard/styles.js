import { StyleSheet } from 'react-native'

const TITLE_FONT_SIZE = 15
const HALF_TITLE_SIZE = TITLE_FONT_SIZE / 2

export default StyleSheet.create({
  container: {
    marginTop: HALF_TITLE_SIZE,
    padding: 5,
    paddingTop: HALF_TITLE_SIZE + 2,
    borderWidth: 1,
    borderColor: 'white',
    position: 'relative'
  },
  listCardTitleContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    top: -HALF_TITLE_SIZE,
    alignSelf: 'center',
    paddingHorizontal: 10
  },
  text: {
    color: 'white'
  },
  listCardTitleText: {
    fontSize: TITLE_FONT_SIZE,
    lineHeight: TITLE_FONT_SIZE
  }
})
