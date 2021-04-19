import React, { memo } from 'react'
import { CategoryItem } from '../../../interfaces'
import { SelectCategoryListWrapper } from './styles'
import SelectCategoryListItem from './SelectCategoryListItem'

interface SelectCategoryListProps {
  categories: CategoryItem[]
  onCategoryPress: (category: CategoryItem) => void
}

const SelectCategoryList = ({ categories, onCategoryPress }: SelectCategoryListProps) => {
  return (
    <SelectCategoryListWrapper>
      {categories.map(category => (
        <SelectCategoryListItem
          key={category._id}
          category={category}
          onCategoryPress={onCategoryPress}
        />
      ))}
    </SelectCategoryListWrapper>
  )
}

export default memo(SelectCategoryList)
