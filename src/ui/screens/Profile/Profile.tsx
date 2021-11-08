import React, { useCallback, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import colors from '../../theme/colors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import { getCategories } from '../../../app/categories/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import { ProfileScreenWrapper, ProfileInner } from './styles'
import { userSelector } from '../../../app/user/selectors'
import ProfileItem from './ProfileItem'

const Profile = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  const user = useSelector(userSelector)
  return (
    <ScreenWrapper>
      <ProfileScreenWrapper>
        <ProfileInner>
          <ProfileItem title={t(fields.USERNAME)} value={user.username} />
          <ProfileItem title={t(fields.FIRSTNAME)} value={user.firstname} />
          <ProfileItem title={t(fields.LASTNAME)} value={user.lastname} />
          <ProfileItem title={t(fields.POSTS_LIKED)} value={`${user.likedPostsIds.length || 0}`} />
        </ProfileInner>
      </ProfileScreenWrapper>
    </ScreenWrapper>
  )
}

export default memo(Profile)
