import React, { memo } from 'react'
import { translateFunction } from '../../../interfaces'
import { LogoContainer, PublicLeftSectionBoxWrapper, HeaderTitle } from './styles'
import fields from '../../../app/language/translations/translationKeys'

interface PublicLeftSectionBoxProps {
  goToHomeScreen: () => void
  t: translateFunction
}

const PublicLeftSectionBox = ({ t, goToHomeScreen }: PublicLeftSectionBoxProps) => {
  return (
    <PublicLeftSectionBoxWrapper onPress={goToHomeScreen}>
      <LogoContainer />
      <HeaderTitle>{t(fields.APP_NAME)}</HeaderTitle>
    </PublicLeftSectionBoxWrapper>
  )
}

export default memo(PublicLeftSectionBox)
