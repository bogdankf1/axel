import styled, { css } from 'styled-components/native'
import colors from '../../theme/colors'

export const ChartsScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`
export const ChartsInner = styled.View`
  padding: 20px;
  width: 100%;
`
export const ChartsSection = styled.View`
  width: 100%;
  margin-bottom: 24px;
`
export const ChartsSectionTitleBox = styled.View`
  margin-bottom: 8px;
`
export const ChartsSectionTitle = styled.Text`
  font-size: 24px;
  color: ${colors.blue};
`
