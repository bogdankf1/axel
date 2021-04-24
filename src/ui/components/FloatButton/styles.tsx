import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const FloatButtonBox = styled.Pressable`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
`
export const FloatButtonText = styled.Text`
  color: ${colors.white};
  font-size: 28px;
  text-align: center;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
