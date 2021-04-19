import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const SelectCategoryScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
`
export const SelectCategoryScreenTitleBox = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${colors.black};
  border-bottom-width: 1px;
  position: relative;
`
export const BackIconBox = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 14px;
  left: 8px;
`
export const BackIcon = styled.ImageBackground`
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
`
export const SelectCategoryScreenTitle = styled.Text`
  color: ${colors.black};
  font-size: 24px;
  text-align: center;
`
export const AddNewCategoryBox = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  border-bottom-color: ${colors.black};
  border-bottom-width: 1px;
`
export const AddNewCategoryBoxIcon = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`
export const AddNewCategoryBoxIconText = styled.Text`
  color: ${colors.white};
  font-size: 28px;
  text-align: center;
`
export const AddNewCategoryBoxText = styled.Text`
  color: ${colors.black};
  font-size: 20px;
`

// SELECT CATEGORY LIST
export const SelectCategoryListWrapper = styled.View`
  width: 100%;
  align-items: center;
`
export const SelectCategoryListItemBox = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-bottom-color: ${colors.black};
  border-bottom-width: 1px;
  justify-content: center;
  padding-left: 10px;
`
export const SelectCategoryListItemTitle = styled.Text`
  color: ${colors.black};
  font-size: 20px;
`
