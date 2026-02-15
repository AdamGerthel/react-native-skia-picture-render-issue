import { StyleSheet, type ViewStyle } from 'react-native'

const distance = 10

const colors = {
  white: '#CCC'
}

const fonts = {
  default: 'Roboto',
  demi: 'Roboto-Demi'
}

export const REGULAR_FONT_SIZE = 14
const REGULAR_VERTICAL_PADDING = distance / 1.75
const REGULAR_HORIZONTAL_PADDING = distance * 1.1

export const SMALL_FONT_SIZE = REGULAR_FONT_SIZE - 3.5
const SMALL_VERTICAL_PADDING = distance / 2.6
const SMALL_HORIZONTAL_PADDING = distance / 2

export const MINI_FONT_SIZE = REGULAR_FONT_SIZE - 7.5
export const MINI_VERTICAL_PADDING = distance / 2.5
export const MINI_HORIZONTAL_PADDING = distance

const generateWrapperStyle = (verticalPadding: number, horizontalPadding: number): ViewStyle => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: verticalPadding,
  paddingBottom: verticalPadding,
  paddingRight: horizontalPadding,
  paddingLeft: horizontalPadding
})

const style = StyleSheet.create({
  outerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: generateWrapperStyle(REGULAR_VERTICAL_PADDING, REGULAR_HORIZONTAL_PADDING),
  wrapperIconOnly: generateWrapperStyle(REGULAR_VERTICAL_PADDING, REGULAR_HORIZONTAL_PADDING),
  wrapperSmall: generateWrapperStyle(SMALL_VERTICAL_PADDING, SMALL_HORIZONTAL_PADDING),
  wrapperSmallIconOnly: generateWrapperStyle(SMALL_VERTICAL_PADDING, SMALL_VERTICAL_PADDING),
  wrapperMini: generateWrapperStyle(MINI_VERTICAL_PADDING, MINI_HORIZONTAL_PADDING),
  wrapperMiniIconOnly: generateWrapperStyle(MINI_VERTICAL_PADDING, MINI_VERTICAL_PADDING),
  wrapperDisabled: {
    opacity: 0.35
  },
  wrapperRight: {
    alignSelf: 'flex-end'
  },
  wrapperLeft: {
    alignSelf: 'flex-start'
  },
  label: {
    zIndex: 1,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.default,
    verticalAlign: 'middle',
    overflow: 'visible',
  },
  labelSmall: {
  },
  labelMini: {
    fontFamily: fonts.demi,
    textTransform: 'uppercase',
  },
  labelUsed: {
    color: '#919191'
  },
  labelDisabled: {},
  iconWrapper: {
    marginLeft: distance / 4,
    marginRight: -(distance / 8)
  },
  iconWrapperIconOnly: {
    marginLeft: 0,
    marginRight: 0
  },
  icon: {
    color: colors.white,
    height: REGULAR_FONT_SIZE,
    width: REGULAR_FONT_SIZE
  },
  iconSmall: {
    height: SMALL_FONT_SIZE,
    width: SMALL_FONT_SIZE
  },
  iconMini: {
    height: MINI_FONT_SIZE,
    width: MINI_FONT_SIZE
  }
})

export default style
