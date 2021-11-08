import React, { memo } from 'react'
import { AppButtonWrapper, AppButtonText } from './styles'

interface AppButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  color?: string
  textColor?: string
  width?: string
}

const AppButton = ({ title, onPress, disabled, color, textColor, width }: AppButtonProps) => {
  return (
    <AppButtonWrapper onPress={onPress} disabled={disabled} color={color} width={width}>
      <AppButtonText textColor={textColor}>{title}</AppButtonText>
    </AppButtonWrapper>
  )
}

export default memo(AppButton)
