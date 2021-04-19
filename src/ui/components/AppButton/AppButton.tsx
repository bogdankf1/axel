import React, { memo } from 'react'
import { AppButtonWrapper, AppButtonText } from './styles'

interface AppButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  color?: string
}

const AppButton = ({ title, onPress, disabled, color }: AppButtonProps) => {
  return (
    <AppButtonWrapper onPress={onPress} disabled={disabled} color={color}>
      <AppButtonText>{title}</AppButtonText>
    </AppButtonWrapper>
  )
}

export default memo(AppButton)
