import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const AddNewQuestionScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
`
export const AddNewQuestionInputFieldBox = styled.View`
  width: 100%;
  padding: 20px;
  margin-top: 60px;
`
export const AddNewQuestionInputField = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.black};
`
export const AddNewQuestionButtonBox = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
