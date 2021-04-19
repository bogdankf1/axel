import React, { memo } from 'react'
import { translateFunction } from '../../../interfaces'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../AppButton/AppButton'

interface PublicRightSectionBoxProps {
  t: translateFunction
  authenticated: boolean
  authButtonText: string
  goToAuthScreen: () => void
  onLogout: () => void
}

const PublicRightSectionBox = ({
  t,
  authenticated,
  authButtonText,
  goToAuthScreen,
  onLogout,
}: PublicRightSectionBoxProps) => {
  return (
    <AppButton
      title={authenticated ? t(fields.LOG_OUT) : t(authButtonText)}
      onPress={authenticated ? onLogout : goToAuthScreen}
    />
  )
}

export default memo(PublicRightSectionBox)
