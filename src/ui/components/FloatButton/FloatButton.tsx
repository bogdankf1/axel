import React, { memo } from 'react'
import { FloatButtonBox, FloatButtonText } from './styles'

interface Props {
  onPress: () => void
}

const FloatButton = ({ onPress }: Props) => {
  return (
    <FloatButtonBox onPress={onPress}>
      <FloatButtonText>{'+'}</FloatButtonText>
    </FloatButtonBox>
  )
}

export default memo(FloatButton)
