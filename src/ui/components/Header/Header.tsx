import React, { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import { isLoggedInSelector } from '../../../app/auth/selectors'
import fields from '../../../app/language/translations/translationKeys'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleWrapper,
  HeaderInner,
  MenuIconWrapper,
  MenuIcon,
} from './styles'
import AppButton from '../AppButton/AppButton'

const Header = () => {
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  const authenticated = useSelector(isLoggedInSelector)

  const goToHomeScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.HOME)
  }, [])

  const goToLoginScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.LOGIN)
  }, [])
  const openDrawer = useCallback(() => {
    // @ts-ignore
    navigation.openDrawer()
  }, [])
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderTitleWrapper onPress={authenticated ? goToHomeScreen : goToLoginScreen}>
          <MenuIconWrapper onPress={openDrawer}>
            <MenuIcon>{'|||'}</MenuIcon>
          </MenuIconWrapper>
          <HeaderTitle>{t(fields.APP_NAME)}</HeaderTitle>
        </HeaderTitleWrapper>
        {!authenticated ? <AppButton title={t(fields.SIGN_IN)} onPress={goToLoginScreen} /> : null}
      </HeaderInner>
    </HeaderContainer>
  )
}

export default memo(Header)
