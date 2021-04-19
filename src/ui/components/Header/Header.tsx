import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import { isLoggedInSelector } from '../../../app/auth/selectors'
import { logout } from '../../../app/auth/actions'
import fields from '../../../app/language/translations/translationKeys'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import PublicLeftSectionBox from './PublicLeftSectionBox'
import PublicRightSectionBox from './PublicRightSectionBox'
import { LeftSection, HeaderContainer, RightSection } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  const authenticated = useSelector(isLoggedInSelector)

  const goToHomeScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.HOME)
  }, [])

  const goToLoginScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.LOGIN)
  }, [])

  const goToRegisterScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.REGISTER)
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  // const currentScreen = NavigationService.getCurrentRoute()
  // const isLoginScreen = currentScreen?.routeName === AppScreens.LOGIN

  return (
    <HeaderContainer>
      <LeftSection>
        <PublicLeftSectionBox
          t={t}
          goToHomeScreen={authenticated ? goToHomeScreen : goToLoginScreen}
        />
      </LeftSection>
      <RightSection>
        <PublicRightSectionBox
          t={t}
          authenticated={authenticated}
          onLogout={handleLogout}
          goToAuthScreen={true ? goToRegisterScreen : goToLoginScreen}
          authButtonText={true ? fields.SIGN_UP : fields.SIGN_IN}
        />
      </RightSection>
    </HeaderContainer>
  )
}

export default memo(Header)
