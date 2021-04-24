import React, { memo, useCallback } from 'react'
import { CategoryItem } from '../../../interfaces'
import { SelectCategoryListItemBox, SelectCategoryListItemTitle } from './styles'

interface SelectCategoryListItemProps {
  category: CategoryItem
  onCategoryPress: (category: CategoryItem) => void
}

const SelectCategoryListItem = ({ category, onCategoryPress }: SelectCategoryListItemProps) => {
  const handleCategoryPress = useCallback(() => {
    onCategoryPress(category)
  }, [onCategoryPress, category])
  return (
    <SelectCategoryListItemBox onPress={handleCategoryPress}>
      <SelectCategoryListItemTitle>{` - ${category.title}`}</SelectCategoryListItemTitle>
    </SelectCategoryListItemBox>
  )
}

export default memo(SelectCategoryListItem)
