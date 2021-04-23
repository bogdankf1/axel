import React, { useCallback, memo } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryItem } from '../../../interfaces'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWithScrollWrapper from '../../components/ScreenWithScrollWrapper/ScreenWithScrollWrapper'
import { categoriesListSelector } from '../../../app/categories/selectors'
import { selectCategory } from '../../../app/categories/actions'
import { getQuestions } from '../../../app/questions/actions'
// import images from '../../theme/images'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import SelectCategoryList from './SelectCategoryList'
import {
  SelectCategoryScreenWrapper,
  // SelectCategoryScreenTitleBox,
  // SelectCategoryScreenTitle,
  AddNewCategoryBox,
  AddNewCategoryBoxIcon,
  AddNewCategoryBoxIconText,
  AddNewCategoryBoxText,
  // BackIconBox,
  // BackIcon,
} from './styles'

const SelectCategory = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const t = useSelector(translateFunctionSelector)
  const categories = useSelector(categoriesListSelector)
  const goToAddNewCategoryScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.ADD_NEW_CATEGORY)
  }, [])
  const goToCategoryQuestionsScreen = useCallback((category: CategoryItem) => {
    dispatch(selectCategory(category))
    dispatch(getQuestions(category._id))
  }, [])
  // const goToHomeScreen = useCallback(() => {
  //   navigation.navigate(SCREEN_NAMES.HOME)
  // }, [])
  return (
    <ScreenWithScrollWrapper>
      <SelectCategoryScreenWrapper>
        {/* <SelectCategoryScreenTitleBox>
          <BackIconBox onPress={goToHomeScreen}>
            <BackIcon source={images.expandArrow} />
          </BackIconBox>
          <SelectCategoryScreenTitle>{t(fields.CATEGORIES)}</SelectCategoryScreenTitle>
        </SelectCategoryScreenTitleBox> */}
        <AddNewCategoryBox onPress={goToAddNewCategoryScreen}>
          <AddNewCategoryBoxIcon>
            <AddNewCategoryBoxIconText>{'+'}</AddNewCategoryBoxIconText>
          </AddNewCategoryBoxIcon>
          <AddNewCategoryBoxText>{t(fields.ADD_NEW_CATEGORY)}</AddNewCategoryBoxText>
        </AddNewCategoryBox>
        <SelectCategoryList categories={categories} onCategoryPress={goToCategoryQuestionsScreen} />
      </SelectCategoryScreenWrapper>
    </ScreenWithScrollWrapper>
  )
}

export default memo(SelectCategory)
