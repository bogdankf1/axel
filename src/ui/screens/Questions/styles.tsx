import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const CategoryQuestionsScreenWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
`
export const CategoryQuestionsScreenTitleBox = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${colors.black};
  border-bottom-width: 1px;
  position: relative;
`
export const CategoryQuestionsScreenTitle = styled.Text`
  color: ${colors.black};
  font-size: 24px;
  text-align: center;
`

export const CategoryQuestionsListWrapper = styled.View`
  width: 100%;
  align-items: center;
`
export const CategoryQuestionsListItemBox = styled.Pressable`
  width: 100%;
  height: 60px;
  border-bottom-color: ${colors.black};
  border-bottom-width: 1px;
  justify-content: center;
  padding-left: 10px;
`
export const CategoryQuestionsListItemTitle = styled.Text`
  color: ${colors.black};
  font-size: 20px;
`
