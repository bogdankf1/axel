import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const QuestionScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
`
export const QuestionTextBox = styled.View`
  width: 100%;
  padding: 0 10px;
`
export const QuestionText = styled.Text`
  font-size: 24px;
`
export const QuestionLikesContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const QuestionLikesIcon = styled.ImageBackground`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`
export const QuestionLikesText = styled.Text`
  font-size: 18px;
`

export const QuestionCommentsBox = styled.View`
  width: 100%;
  padding: 10px;
`
export const QuestionCommentsBoxTitle = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`
export const QuestionCommentsBoxTitleIcon = styled.ImageBackground`
  width: 30px;
  height: 30px;
  margin-right: 6px;
`
export const QuestionCommentsBoxTitleText = styled.Text`
  font-size: 20px;
`
export const QuestionCommentsListWrapper = styled.View`
  margin-top: 10px;
`
export const QuestionCommentsItem = styled.View`
  margin-top: 10px;
  border: 1px solid ${colors.black};
  border-radius: 8px;
  padding: 5px;
`
export const QuestionCommentsItemTopLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`
export const QuestionCommentsItemAuthorText = styled.Text`
  font-size: 18px;
`
export const QuestionCommentsItemDateText = styled.Text`
  font-size: 16px;
`
export const QuestionCommentsItemBottomLine = styled.View`
  flex-direction: row;
  align-items: center;
`
export const QuestionCommentsItemText = styled.Text`
  font-size: 22px;
`
export const QuestionAddCommentBox = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`
export const QuestionAddCommentInput = styled.TextInput`
  flex: 1;
  margin-right: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.black};
`
