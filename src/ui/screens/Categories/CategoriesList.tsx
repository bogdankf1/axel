import React, { memo } from 'react'
import { FlatList } from 'react-native'
import { CategoryItem } from '../../../interfaces'
import { SelectCategoryListWrapper } from './styles'
import SelectCategoryListItem from './CategoriesListItem'

interface SelectCategoryListProps {
  categories: CategoryItem[]
  onCategoryPress: (category: CategoryItem) => void
}

const SelectCategoryList = ({ categories, onCategoryPress }: SelectCategoryListProps) => {
  return (
    <SelectCategoryListWrapper>
      <FlatList
        style={{ width: '100%' }}
        data={categories}
        renderItem={({ item }) => (
          <SelectCategoryListItem category={item} onCategoryPress={onCategoryPress} />
        )}
        keyExtractor={item => item._id}
      />
    </SelectCategoryListWrapper>
  )
}

export default memo(SelectCategoryList)
