import React, { memo, useCallback, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { translateFunctionSelector } from '../../../app/language/selectors'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../../components/AppButton/AppButton'
import { login } from '../../../app/auth/actions'
import { loginErrorSelector } from '../../../app/auth/selectors'
import colors from '../../theme/colors'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import {
  LoginScreenWrapper,
  LoginScreenContent,
  LoginScreenTitle,
  LoginInputField,
  LoginButtonWrapper,
  RegisterButtonWrapper,
  LoginError,
} from './styles'
import { ScrollView } from 'react-native'

const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  const loginError = useSelector(loginErrorSelector)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [error, setError] = useState<string>('')

  const onChangeUsername = useCallback(
    (username: string) => {
      if (!/^[a-z0-9]+$/i.test(username)) {
        setUsernameError(t(fields.INCORRECT_USERNAME))
      } else {
        if (usernameError) {
          setUsernameError('')
          setError('')
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
          setError('')
        }
      }
      setPassword(password)
    },
    [passwordError],
  )
  const signIn = useCallback(() => {
    if (!password || !username) {
      setError(t(fields.PLEASE_FILL_ALL_FIELDS))
      return
    } else {
      if (error) {
        setError('')
      }
    }

    dispatch(
      login({
        username: username.toLowerCase(),
        password,
      }),
    )
  }, [username, password, error])
  const goToSignUp = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.REGISTER)
  }, [])

  const loginErrorMessage = useMemo(() => {
    return error || usernameError || passwordError || loginError
  }, [error, usernameError, passwordError, loginError])

  const isSignInButtonDisabled = useMemo(() => {
    return !!error || !!usernameError || !!passwordError
  }, [error, usernameError, passwordError])

  return (
    <ScreenWithScrollWrapper>
      <ScrollView>
        <LoginScreenWrapper>
          <LoginScreenContent>
            <LoginScreenTitle>{t(fields.SIGN_IN)}</LoginScreenTitle>
            <LoginInputField
              value={username}
              onChangeText={onChangeUsername}
              placeholder={t(fields.USERNAME)}
            />
            <LoginInputField
              value={password}
              onChangeText={onChangePassword}
              placeholder={t(fields.PASSWORD)}
              secureTextEntry
            />
            {!!loginErrorMessage ? <LoginError>{loginErrorMessage}</LoginError> : null}
            <LoginButtonWrapper>
              <AppButton
                title={t(fields.SIGN_IN)}
                onPress={signIn}
                disabled={isSignInButtonDisabled}
              />
            </LoginButtonWrapper>
            <RegisterButtonWrapper>
              <AppButton title={t(fields.SIGN_UP)} onPress={goToSignUp} color={colors.blue} />
            </RegisterButtonWrapper>
          </LoginScreenContent>
        </LoginScreenWrapper>
      </ScrollView>
    </ScreenWithScrollWrapper>
  )
}

export default memo(Login)
