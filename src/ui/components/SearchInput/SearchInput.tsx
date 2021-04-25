import React, { useCallback, memo } from 'react'
import { SearchInputWrapper } from './styles'

interface Props {
  value: string
  placeholder: string
  onChangeText: (value: string) => void
}

const SearchInput = ({ value, placeholder, onChangeText }: Props) => {
  const handleSearchInputChange = useCallback(
    (newSearchValue: string) => {
      onChangeText(newSearchValue)
    },
    [onChangeText],
  )

  return (
    <SearchInputWrapper
      value={value}
      placeholder={placeholder}
      onChangeText={handleSearchInputChange}
    />
  )
}

export default memo(SearchInput)
