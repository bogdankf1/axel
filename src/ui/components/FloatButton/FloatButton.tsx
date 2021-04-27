import React, { memo } from 'react'
import { FloatButtonBox, FloatButtonInner, FloatButtonText } from './styles'

interface Props {
  onPress: () => void
}

const FloatButton = ({ onPress }: Props) => {
  return (
    <FloatButtonBox onPress={onPress}>
      <FloatButtonInner>
        <FloatButtonText>+</FloatButtonText>
      </FloatButtonInner>
    </FloatButtonBox>
  )
}

export default memo(FloatButton)
