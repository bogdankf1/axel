import React, { useCallback, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import colors from '../../theme/colors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import { getCategories } from '../../../app/categories/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import {
  HomeScreenWrapper,
  HomeScreenButtonsBox,
  HomeScreenButton,
  HomeScreenButtonText,
} from './styles'

const Home = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const goToAddQuestionScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.SELECT_CATEGORY, { nextRoute: SCREEN_NAMES.ADD_NEW_QUESTION })
  }, [])
  const goToSelectCategoryScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.SELECT_CATEGORY)
  }, [])
  const goToTopQuestionsScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.TOP_QUESTIONS)
  }, [])
  return (
    <ScreenWrapper>
      <HomeScreenWrapper>
        <HomeScreenButtonsBox>
          <HomeScreenButton color={colors.lightBlue} onPress={goToSelectCategoryScreen}>
            <HomeScreenButtonText>{t(fields.SEE_ALL_QUESTIONS)}</HomeScreenButtonText>
          </HomeScreenButton>
          <HomeScreenButton color={colors.green} onPress={goToAddQuestionScreen}>
            <HomeScreenButtonText>{t(fields.ADD_NEW_QUESTION)}</HomeScreenButtonText>
          </HomeScreenButton>
          <HomeScreenButton color={colors.yellow} onPress={goToTopQuestionsScreen}>
            <HomeScreenButtonText>{t(fields.TOP_QUESTIONS)}</HomeScreenButtonText>
          </HomeScreenButton>
        </HomeScreenButtonsBox>
      </HomeScreenWrapper>
    </ScreenWrapper>
  )
}

export default memo(Home)
