import styled from 'styled-components/native'
import fonts from '../../theme/fonts'
import colors from '../../theme/colors'

export const RegisterScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`

export const RegisterScreenContent = styled.View`
  margin-top: 40px;
  width: 300px;
`
export const RegisterScreenTitle = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  font-family: ${fonts.main};
  text-transform: uppercase;
  margin-top: 16px;
`
export const RegisterInputField = styled.TextInput`
  margin-top: 8px;
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primary.lightText};
`
export const RegisterButtonWrapper = styled.View`
  align-items: center;
  margin-top: 16px;
`
export const LoginButtonWrapper = styled.View`
  align-items: center;
  margin-top: 36px;
`
export const RegisterError = styled.Text`
  margin: 5px auto;
  color: ${colors.error};
  align-self: center;
  text-align: center;
  font-size: 16px;
`
