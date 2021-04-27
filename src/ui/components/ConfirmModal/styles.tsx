import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const ConfirmModalBox = styled.View`
  width: 220px;
  height: 100px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background: ${colors.secondary.bg};
  border-radius: 10px;
`
export const ConfirmModalText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: ${colors.secondary.text};
`
export const ConfirmModalButtons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
