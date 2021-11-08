import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../app/auth/actions'
import { isLoggedInSelector } from '../../app/auth/selectors'
import { changeLanguage } from '../../app/language/actions'
import { currentLanguageSelector, translateFunctionSelector } from '../../app/language/selectors'
import fields from '../../app/language/translations/translationKeys'
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
  const t = useSelector(translateFunctionSelector)

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
                <DrawerItemText>{t(fields.SIGN_IN)}</DrawerItemText>
              </DrawerItem>
            ) : null}
            {isLoggedIn ? (
              <DrawerItem onPress={() => goToPage(SCREEN_NAMES.SELECT_CATEGORY)}>
                <DrawerItemIcon />
                <DrawerItemText>{t(fields.CATEGORIES)}</DrawerItemText>
              </DrawerItem>
            ) : null}
            {isLoggedIn ? (
              <DrawerItem onPress={() => goToPage(SCREEN_NAMES.TOP_QUESTIONS)}>
                <DrawerItemIcon />
                <DrawerItemText>{t(fields.TOP_10)}</DrawerItemText>
              </DrawerItem>
            ) : null}
            {isLoggedIn ? (
              <DrawerItem onPress={() => goToPage(SCREEN_NAMES.PROFILE)}>
                <DrawerItemIcon />
                <DrawerItemText>{t(fields.PROFILE)}</DrawerItemText>
              </DrawerItem>
            ) : null}
            {isLoggedIn ? (
              <DrawerItem onPress={() => goToPage(SCREEN_NAMES.CHARTS)}>
                <DrawerItemIcon />
                <DrawerItemText>{t(fields.CHARTS)}</DrawerItemText>
              </DrawerItem>
            ) : null}
            {isLoggedIn ? (
              <DrawerItem onPress={openConfirmModal}>
                <DrawerItemIcon />
                <DrawerItemText>{t(fields.LOG_OUT)}</DrawerItemText>
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
                <DrawerLanguageItem onPress={() => onChangeLanguage('ru')}>
                  <DrawerLanguageItemText isActive={language === 'ru'}>RU</DrawerLanguageItemText>
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
        text={t(fields.ARE_YOU_SURE_WANT_TO_LOGOUT)}
      />
    </>
  )
}

export default memo(DrawerContent)
