import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const CategoryQuestionsScreenWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  padding: 5px 0;
`

export const CategoryQuestionsListWrapper = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`
export const CategoryQuestionsListItemBox = styled.Pressable`
  width: 100%;
  height: 60px;
  border-bottom-color: ${colors.primary.lightText};
  border-bottom-width: 1px;
  justify-content: center;
  padding-left: 10px;
`
export const CategoryQuestionsListItemTitle = styled.Text`
  color: ${colors.primary.lightText};
  font-size: 20px;
`
