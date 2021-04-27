import { css } from 'styled-components'
import styled from 'styled-components/native'
import colors from '../../ui/theme/colors'

export const DrawerContainer = styled.View`
  height: 100%;
`
export const DrawerInner = styled.View`
  flex: 1;
`
export const DrawerTitleBox = styled.Pressable`
  padding: 40px 20px 10px;
  background: ${colors.primary.bg};
`
export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.primary.text};
`
export const DrawerItemsBox = styled.View`
  padding: 40px 20px 10px;
  width: 100%;
`
export const DrawerItem = styled.Pressable`
  width: 100%;
  margin-bottom: 16px;
`
export const DrawerItemIcon = styled.View`
  margin-right: 8px;
`
export const DrawerItemText = styled.Text`
  color: ${colors.secondary.text};
  font-size: 16px;
  flex-direction: row;
`
export const DrawerLanguageItemBox = styled.View`
  flex-direction: row;
`
export const DrawerLanguageItem = styled.Pressable`
  margin-right: 4px;
`
interface DrawerLanguageItemTextProps {
  isActive: boolean
}
export const DrawerLanguageItemText = styled.Text<DrawerLanguageItemTextProps>`
  color: ${colors.primary.lightText};

  ${({ isActive }: DrawerLanguageItemTextProps) =>
    isActive &&
    css`
      color: ${colors.secondary.text};
    `}
`
