import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../app/auth/actions'
import { isLoggedInSelector } from '../../app/auth/selectors'
import { changeLanguage } from '../../app/language/actions'
import { currentLanguageSelector } from '../../app/language/selectors'
import ConfirmModal from '../../ui/components/ConfirmModal/ConfirmModal'
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
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(isLoggedInSelector)
  const language = useSelector(currentLanguageSelector)

  const goToPage = useCallback(
    (screenName: string) => {
      navigation.navigate(screenName)
    },
    [navigation],
  )

  const openConfirmModal = useCallback(() => {
    setIsConfirmModalOpen(true)
  }, [])

  const closeConfirmModal = useCallback(() => {
    setIsConfirmModalOpen(false)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(logout())
    closeConfirmModal()
  }, [])
  const onChangeLanguage = useCallback((lang: string) => {
    dispatch(changeLanguage(lang))
  }, [])
  return (
    <>
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
              <DrawerItem onPress={() => goToPage(SCREEN_NAMES.PROFILE)}>
                <DrawerItemIcon />
                <DrawerItemText>Profile</DrawerItemText>
              </DrawerItem>
            ) : null}
            {isLoggedIn ? (
              <DrawerItem onPress={() => goToPage(SCREEN_NAMES.CHARTS)}>
                <DrawerItemIcon />
                <DrawerItemText>Charts</DrawerItemText>
              </DrawerItem>
            ) : null}
            {isLoggedIn ? (
              <DrawerItem onPress={openConfirmModal}>
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
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onCancel={closeConfirmModal}
        onConfirm={onLogout}
        text={'Are you sure want to logout?'}
      />
    </>
  )
}

export default memo(DrawerContent)
