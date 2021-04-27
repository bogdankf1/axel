import styled, { css } from 'styled-components/native'
import colors from '../../theme/colors'

export const HomeScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const HomeScreenButtonsBox = styled.View`
  width: 250px;
  height: 180px;
  align-items: center;
  justify-content: space-between;
`
interface HomeScreenButtonProps {
  color: string
}
export const HomeScreenButton = styled.Pressable<HomeScreenButtonProps>`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  ${({ color }: HomeScreenButtonProps) =>
    color &&
    css`
      background-color: ${color};
    `}
`
export const HomeScreenButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.secondary.text};
  text-transform: uppercase;
`
