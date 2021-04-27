import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const SearchInputBox = styled.View`
  width: 100%;
  padding: 0 5px;
`

export const SearchInputWrapper = styled.TextInput`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  font-size: 24px;
  border: 1px solid ${colors.primary.bg};
  padding: 10px;
`
