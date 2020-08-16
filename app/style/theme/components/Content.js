// @flow

import variable from './../variables/platform'

export default (variables /* : * */ = variable) => {
  const contentTheme = {
    flex: 1,
    backgroundColor: 'transparent',
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent',
    },

    '.lateral': {
      paddingHorizontal: 20,
    },
    '.vertical': {
      paddingVertical: 20,
    }
  }

  return contentTheme
}
