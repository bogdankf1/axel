import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const EmptyListMessageBox = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

export const EmptyListMessageText = styled.Text`
  color: ${colors.secondary.lightText};
  font-size: 18px;
  text-align: center;
`
