import styled from 'styled-components/native'

export const TopQuestionsScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
`
export const TopQuestionsListBox = styled.View`
  padding: 10px;
  width: 100%;
`
export const TopQuestionItem = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`
export const TopQuestionNumber = styled.Text`
  font-size: 22px;
  margin-right: 8px;
`
export const TopQuestionInner = styled.View`
  flex: 1;
`
export const TopQuestionText = styled.Text`
  font-size: 24px;
`
export const TopQuestionLikes = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`
export const TopQuestionLikesIcon = styled.ImageBackground`
  width: 30px;
  height: 30px;
  margin-right: 6px;
`
export const TopQuestionLikesText = styled.Text`
  font-size: 18px;
`
