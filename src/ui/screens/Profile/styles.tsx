import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const ProfileScreenWrapper = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`
export const ProfileInner = styled.View`
  padding: 20px;
  width: 100%;
`
export const ProfileSection = styled.View`
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom-color: ${colors.secondary.text};
  border-bottom-width: 1px;
`
export const ProfileSectionTitleBox = styled.View`
  margin-bottom: 8px;
`
export const ProfileSectionTitle = styled.Text`
  font-size: 24px;
  color: ${colors.secondary.text};
`
export const ProfileSectionValueBox = styled.View`
  padding-left: 8px;
`
export const ProfileSectionValue = styled.Text`
  font-size: 20px;
  color: ${colors.secondary.lightText};
`
