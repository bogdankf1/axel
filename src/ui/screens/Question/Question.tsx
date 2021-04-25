import React, { useState, memo, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import AppButton from '../../components/AppButton/AppButton'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import QuestionCommentsList from './QuestionCommentsList'
import images from '../../theme/images'
import {
  selectedQuestionSelector,
  currentQuestionCommentsSelector,
} from '../../../app/questions/selectors'
import { userSelector } from '../../../app/user/selectors'
import { addComment, setLike } from '../../../app/questions/actions'
import { selectedCategorySelector } from '../../../app/categories/selectors'
import { accessTokenSelector } from '../../../app/auth/selectors'
import {
  QuestionScreenWrapper,
  QuestionTextBox,
  QuestionText,
  QuestionLikesContainer,
  QuestionLikesIcon,
  QuestionLikesText,
  QuestionCommentsBox,
  QuestionCommentsBoxTitle,
  QuestionCommentsBoxTitleIcon,
  QuestionCommentsBoxTitleText,
  QuestionAddCommentBox,
  QuestionAddCommentInput,
} from './styles'

const QuestionScreen = () => {
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  const user = useSelector(userSelector)
  const accessToken = useSelector(accessTokenSelector)
  const selectedQuestion = useSelector(selectedQuestionSelector)
  const selectedCategory = useSelector(selectedCategorySelector)
  const currentQuestionComments = useSelector(currentQuestionCommentsSelector)
  const [newComment, setNewComment] = useState<string>('')

  const addNewComment = useCallback(() => {
    if (!newComment) {
      return false
    }

    dispatch(addComment(newComment, selectedCategory._id, selectedQuestion._id))
    setNewComment('')
  }, [accessToken, newComment, selectedQuestion])
  const onChangeNewComment = useCallback((newComment: string) => {
    setNewComment(newComment)
  }, [])
  const handleLikesPress = useCallback(() => {
    dispatch(setLike(selectedCategory._id, selectedQuestion._id, accessToken))
  }, [selectedCategory, selectedQuestion, accessToken])
  const isQuestionLiked = useMemo(() => {
    return !!user.likedPostsIds.includes(selectedQuestion._id)
  }, [user])
  return (
    <ScreenWrapper>
      <QuestionScreenWrapper>
        <QuestionTextBox>
          <QuestionText>{selectedQuestion.title}</QuestionText>
          <QuestionLikesContainer onPress={handleLikesPress}>
            <QuestionLikesIcon source={isQuestionLiked ? images.likeIconFilled : images.likeIcon} />
            <QuestionLikesText>{selectedQuestion.likes}</QuestionLikesText>
          </QuestionLikesContainer>
        </QuestionTextBox>
        <QuestionCommentsBox>
          <QuestionCommentsBoxTitle>
            <QuestionCommentsBoxTitleIcon source={images.expandArrow} />
            <QuestionCommentsBoxTitleText>{t(fields.COMMENTS)}</QuestionCommentsBoxTitleText>
          </QuestionCommentsBoxTitle>
          <QuestionAddCommentBox>
            <QuestionAddCommentInput
              value={newComment}
              placeholder={t(fields.ADD_COMMENT)}
              onChangeText={onChangeNewComment}
            />
            <AppButton title={t(fields.SUBMIT)} onPress={addNewComment} />
          </QuestionAddCommentBox>
          <QuestionCommentsList comments={currentQuestionComments} />
        </QuestionCommentsBox>
      </QuestionScreenWrapper>
    </ScreenWrapper>
  )
}

export default memo(QuestionScreen)
