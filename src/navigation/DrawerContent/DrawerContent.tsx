import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../app/auth/actions'
import { isLoggedInSelector } from '../../app/auth/selectors'
import { changeLanguage } from '../../app/language/actions'
import { currentLanguageSelector } from '../../app/language/selectors'
import { SCREEN_NAMES } from '../AppNavigator.constants'
import {
  DrawerContainer,
  DrawerInner,
  DrawerTitleBox,
  DrawerItemsBox,
  Title,
  DrawerItem,
  DrawerItemIcon,
  DrawerItemText,
  DrawerLanguageItemBox,
  DrawerLanguageItem,
  DrawerLanguageItemText,
} from './styles'

interface Props {
  navigation: any
}

const DrawerContent = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(isLoggedInSelector)
  const language = useSelector(currentLanguageSelector)

  const goToPage = useCallback(
    (screenName: string) => {
      navigation.navigate(screenName)
    },
    [navigation],
  )
  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [])
  const onChangeLanguage = useCallback((lang: string) => {
    dispatch(changeLanguage(lang))
  }, [])
  return (
    <DrawerContainer>
      <DrawerInner>
        <DrawerTitleBox onPress={() => goToPage(SCREEN_NAMES.HOME)}>
          <Title>Axel</Title>
        </DrawerTitleBox>
        <DrawerItemsBox>
          {!isLoggedIn ? (
            <DrawerItem onPress={() => goToPage(SCREEN_NAMES.LOGIN)}>
              <DrawerItemIcon />
              <DrawerItemText>Sign In</DrawerItemText>
            </DrawerItem>
          ) : null}
          {isLoggedIn ? (
            <DrawerItem onPress={() => goToPage(SCREEN_NAMES.SELECT_CATEGORY)}>
              <DrawerItemIcon />
              <DrawerItemText>Categories</DrawerItemText>
            </DrawerItem>
          ) : null}
          {isLoggedIn ? (
            <DrawerItem onPress={() => goToPage(SCREEN_NAMES.TOP_QUESTIONS)}>
              <DrawerItemIcon />
              <DrawerItemText>Top 10</DrawerItemText>
            </DrawerItem>
          ) : null}
          {isLoggedIn ? (
            <DrawerItem onPress={() => goToPage(SCREEN_NAMES.SELECT_CATEGORY)}>
              <DrawerItemIcon />
              <DrawerItemText>Profile</DrawerItemText>
            </DrawerItem>
          ) : null}
          {isLoggedIn ? (
            <DrawerItem onPress={onLogout}>
              <DrawerItemIcon />
              <DrawerItemText>Logout</DrawerItemText>
            </DrawerItem>
          ) : null}
          <DrawerItem>
            <DrawerItemIcon />
            <DrawerLanguageItemBox>
              <DrawerLanguageItem onPress={() => onChangeLanguage('en')}>
                <DrawerLanguageItemText isActive={language === 'en'}>EN</DrawerLanguageItemText>
              </DrawerLanguageItem>
              <DrawerLanguageItem onPress={() => onChangeLanguage('ua')}>
                <DrawerLanguageItemText isActive={language === 'ua'}>UA</DrawerLanguageItemText>
              </DrawerLanguageItem>
            </DrawerLanguageItemBox>
          </DrawerItem>
        </DrawerItemsBox>
      </DrawerInner>
    </DrawerContainer>
  )
}

export default memo(DrawerContent)
