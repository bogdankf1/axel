import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const AddNewCategoryScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
`
export const AddNewCategoryInputFieldBox = styled.View`
  width: 100%;
  padding: 20px;
  margin-top: 60px;
`
export const AddNewCategoryInputField = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primary.lightText};
  height: 40px;
`
export const AddNewCategoryButtonBox = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
