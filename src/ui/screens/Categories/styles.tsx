import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const SelectCategoryScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  padding: 5px 0;
`
export const SelectCategoryListWrapper = styled.View`
  width: 100%;
  align-items: center;
`
export const SelectCategoryListItemBox = styled.Pressable`
  width: 100%;
  height: 60px;
  border-bottom-color: ${colors.primary.lightText};
  border-bottom-width: 1px;
  justify-content: center;
  padding-left: 10px;
`
export const SelectCategoryListItemTitle = styled.Text`
  color: ${colors.primary.lightText};
  font-size: 20px;
`
