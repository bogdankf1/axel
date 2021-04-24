import React, { useCallback, memo } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryItem } from '../../../interfaces'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import { categoriesListSelector } from '../../../app/categories/selectors'
import { selectCategory } from '../../../app/categories/actions'
import { getQuestions } from '../../../app/questions/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import SelectCategoryList from './CategoriesList'
import { SelectCategoryScreenWrapper } from './styles'
import FloatButton from '../../components/FloatButton/FloatButton'

const Categories = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const categories = useSelector(categoriesListSelector)
  const goToAddNewCategoryScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.ADD_NEW_CATEGORY)
  }, [])
  const goToCategoryQuestionsScreen = useCallback((category: CategoryItem) => {
    dispatch(selectCategory(category))
    dispatch(getQuestions(category._id))
  }, [])
  return (
    <ScreenWithScrollWrapper>
      <SelectCategoryScreenWrapper>
        <SelectCategoryList categories={categories} onCategoryPress={goToCategoryQuestionsScreen} />
        <FloatButton onPress={goToAddNewCategoryScreen} />
      </SelectCategoryScreenWrapper>
    </ScreenWithScrollWrapper>
  )
}

export default memo(Categories)
