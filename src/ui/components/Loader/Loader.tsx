import React, { memo, FC } from 'react'
import { ActivityIndicator } from 'react-native'
import colors from '../../theme/colors'
import Popup from '../Popup'

const LoaderModal: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return isVisible ? (
    <Popup>
      <ActivityIndicator size={'large'} color={colors.primary.text} />
    </Popup>
  ) : null
}

export default memo(LoaderModal)
