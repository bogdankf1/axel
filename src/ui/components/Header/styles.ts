import styled from 'styled-components/native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import { relativeSizeToHeight, relativeSizeToWidth } from '../../../utils/helpers'

export const HeaderContainer = styled.View`
  width: 100%;
  height: ${relativeSizeToWidth(65)}px;
  background-color: ${colors.blue};
  padding: ${relativeSizeToHeight(10)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LeftSection = styled.View`
  width: ${relativeSizeToWidth(200)}px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

export const RightSection = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled.View`
  width: 38px;
  height: 38px;
`

export const PrivateLeftSectionBoxWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const PublicLeftSectionBoxWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-family: ${fonts.main};
`

export const MenuContainer = styled.TouchableOpacity``
