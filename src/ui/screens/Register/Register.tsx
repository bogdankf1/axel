import React, { memo, useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../../components/AppButton/AppButton'
import { signUp } from '../../../app/auth/actions'
import { registerErrorSelector } from '../../../app/auth/selectors'
import colors from '../../theme/colors'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import {
  RegisterScreenWrapper,
  RegisterScreenContent,
  RegisterScreenTitle,
  RegisterInputField,
  RegisterButtonWrapper,
  LoginButtonWrapper,
  RegisterError,
} from './styles'
import { ScrollView } from 'react-native'

const Register = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  const registerError = useSelector(registerErrorSelector)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')
  const [firstNameError, setFirstNameError] = useState<string>('')
  const [lastNameError, setLastNameError] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [confirmedPasswordError, setConfirmedPasswordError] = useState<string>('')
  const [error, setError] = useState<string>('')

  const onChangeFirstname = useCallback((firstName: string) => {
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      setFirstNameError(t(fields.PLEASE_ENTER_CORRECT_NAME))
    } else {
      if (firstNameError) {
        setFirstNameError('')
      }
    }

    setFirstName(firstName)
  }, [])
  const onChangeLastname = useCallback((lastName: string) => {
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      setLastNameError(t(fields.PLEASE_ENTER_CORRECT_NAME))
    } else {
      if (lastNameError) {
        setLastNameError('')
      }
    }

    setLastName(lastName)
  }, [])
  const onChangeUsername = useCallback(
    (username: string) => {
      if (!/^[a-z0-9]+$/i.test(username)) {
        setUsernameError(t(fields.INCORRECT_USERNAME))
      } else {
        if (usernameError) {
          setUsernameError('')
        }
      }

      setUsername(username)
    },
    [usernameError],
  )
  const onChangePassword = useCallback(
    (password: string) => {
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
        setPasswordError(t(fields.PASSWORD_SHOULD_BE))
      } else {
        if (passwordError) {
          setPasswordError('')
        }
      }

      setPassword(password)
    },
    [passwordError],
  )
  const onChangeConfirmPassword = useCallback(
    (confirmedPassword: string) => {
      if (password !== confirmedPassword) {
        setConfirmedPasswordError(t(fields.PASSWORDS_SHOULD_MATCH))
      } else {
        if (confirmedPasswordError) {
          setConfirmedPasswordError('')
        }
      }
      setConfirmedPassword(confirmedPassword)
    },
    [confirmedPasswordError],
  )
  const handleSignUp = useCallback(() => {
    if (!firstName || !lastName || !password || !username || !confirmedPassword) {
      setError(t(fields.PLEASE_FILL_ALL_FIELDS))
      return
    } else {
      if (error) {
        setError('')
      }
    }

    dispatch(signUp(firstName.trim(), lastName.trim(), password, username.toLowerCase()))
  }, [firstName, lastName, password, username, confirmedPassword])
  const goToSignIn = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.LOGIN)
  }, [])

  const registerErrorMessage = useMemo(() => {
    return (
      firstNameError ||
      lastNameError ||
      usernameError ||
      passwordError ||
      confirmedPasswordError ||
      error ||
      registerError
    )
  }, [
    firstNameError,
    lastNameError,
    usernameError,
    passwordError,
    confirmedPasswordError,
    error,
    registerError,
  ])

  const isSignUpButtonDisabled = useMemo(() => {
    return (
      !!error ||
      !!firstNameError ||
      !!lastNameError ||
      !!usernameError ||
      !!passwordError ||
      !!confirmedPasswordError
    )
  }, [firstNameError, lastNameError, usernameError, passwordError, confirmedPasswordError, error])

  return (
    <ScreenWithScrollWrapper>
      <ScrollView>
        <RegisterScreenWrapper>
          <RegisterScreenContent>
            <RegisterScreenTitle>{t(fields.SIGN_UP)}</RegisterScreenTitle>
            <RegisterInputField
              value={firstName}
              onChangeText={onChangeFirstname}
              placeholder={t(fields.FIRSTNAME)}
            />
            <RegisterInputField
              value={lastName}
              onChangeText={onChangeLastname}
              placeholder={t(fields.LASTNAME)}
            />
            <RegisterInputField
              value={username}
              onChangeText={onChangeUsername}
              placeholder={t(fields.USERNAME)}
            />
            <RegisterInputField
              value={password}
              onChangeText={onChangePassword}
              placeholder={t(fields.PASSWORD)}
              secureTextEntry
            />
            <RegisterInputField
              value={confirmedPassword}
              onChangeText={onChangeConfirmPassword}
              placeholder={t(fields.CONFIRM_PASSWORD)}
              secureTextEntry
            />
            {!!registerErrorMessage ? <RegisterError>{registerErrorMessage}</RegisterError> : null}
            <RegisterButtonWrapper>
              <AppButton
                title={t(fields.SIGN_UP)}
                onPress={handleSignUp}
                disabled={isSignUpButtonDisabled}
              />
            </RegisterButtonWrapper>
            <LoginButtonWrapper>
              <AppButton title={t(fields.SIGN_IN)} onPress={goToSignIn} color={colors.blue} />
            </LoginButtonWrapper>
          </RegisterScreenContent>
        </RegisterScreenWrapper>
      </ScrollView>
    </ScreenWithScrollWrapper>
  )
}

export default memo(Register)
