import React, { memo } from 'react'
import {
  ProfileSection,
  ProfileSectionTitleBox,
  ProfileSectionTitle,
  ProfileSectionValueBox,
  ProfileSectionValue,
} from './styles'

interface Props {
  title: string
  value: string
}

const ProfileItem = ({ title, value }: Props) => {
  return (
    <ProfileSection>
      <ProfileSectionTitleBox>
        <ProfileSectionTitle>{title}</ProfileSectionTitle>
      </ProfileSectionTitleBox>
      <ProfileSectionValueBox>
        <ProfileSectionValue>{value}</ProfileSectionValue>
      </ProfileSectionValueBox>
    </ProfileSection>
  )
}

export default memo(ProfileItem)
