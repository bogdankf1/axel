import React, { useCallback, memo } from 'react'
import { SearchInputBox, SearchInputWrapper } from './styles'

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
    <SearchInputBox>
      <SearchInputWrapper
        value={value}
        placeholder={placeholder}
        onChangeText={handleSearchInputChange}
      />
    </SearchInputBox>
  )
}

export default memo(SearchInput)
