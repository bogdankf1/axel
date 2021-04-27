import styled from 'styled-components/native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${colors.primary.bg};
  padding: 0 20px 10px;
  flex-direction: row;
  align-items: flex-end;
`

export const HeaderInner = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitleWrapper = styled.Pressable`
  align-items: center;
  flex-direction: row;
`
export const MenuIconWrapper = styled.Pressable``
export const MenuIcon = styled.Text`
  font-size: 24px;
  margin-right: 8px;
  color: ${colors.primary.text};
  transform: rotate(90deg);
`

export const HeaderTitle = styled.Text`
  color: ${colors.primary.text};
  font-size: 18px;
  font-family: ${fonts.main};
`
