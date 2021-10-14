import React, { memo } from 'react'
import { ImageBackground } from 'react-native'
import images from '../../theme/images'
import { FloatButtonBox, FloatButtonInner } from './styles'

interface Props {
  onPress: () => void
}

const FloatButton = ({ onPress }: Props) => {
  return (
    <FloatButtonBox onPress={onPress}>
      <FloatButtonInner>
        <ImageBackground style={{ width: 40, height: 40 }} source={images.plus} />
      </FloatButtonInner>
    </FloatButtonBox>
  )
}

export default memo(FloatButton)
