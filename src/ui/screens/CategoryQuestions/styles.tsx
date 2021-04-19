import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const CategoryQuestionsScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
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
export const AddNewQuestionBox = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  border-bottom-color: ${colors.black};
  border-bottom-width: 1px;
`
export const AddNewQuestionBoxIcon = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`
export const AddNewQuestionBoxIconText = styled.Text`
  color: ${colors.white};
  font-size: 28px;
  text-align: center;
`
export const AddNewQuestionBoxText = styled.Text`
  color: ${colors.black};
  font-size: 20px;
`

export const CategoryQuestionsListWrapper = styled.View`
  width: 100%;
  align-items: center;
`
export const CategoryQuestionsListItemBox = styled.TouchableOpacity`
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
