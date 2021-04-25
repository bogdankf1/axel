import React, { useCallback, memo, useState, useMemo } from 'react'
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
import SearchInput from '../../components/SearchInput/SearchInput'
import EmptyListMessage from '../../components/EmptyListMessage/EmptyListMessage'

const Categories = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const categories = useSelector(categoriesListSelector)

  const [searchValue, setSearchValue] = useState<string>('')

  const goToAddNewCategoryScreen = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.ADD_NEW_CATEGORY)
  }, [])
  const goToCategoryQuestionsScreen = useCallback((category: CategoryItem) => {
    dispatch(selectCategory(category))
    dispatch(getQuestions(category._id))
  }, [])

  const filteredCategories = useMemo(() => {
    return searchValue
      ? categories.filter(category =>
          category.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : categories
  }, [categories, searchValue])

  return (
    <ScreenWithScrollWrapper>
      <SelectCategoryScreenWrapper>
        <SearchInput
          value={searchValue}
          placeholder={'Search categories'}
          onChangeText={setSearchValue}
        />
        {filteredCategories.length ? (
          <SelectCategoryList
            categories={filteredCategories}
            onCategoryPress={goToCategoryQuestionsScreen}
          />
        ) : (
          <EmptyListMessage message={'No categories were found'} />
        )}
        <FloatButton onPress={goToAddNewCategoryScreen} />
      </SelectCategoryScreenWrapper>
    </ScreenWithScrollWrapper>
  )
}

export default memo(Categories)
