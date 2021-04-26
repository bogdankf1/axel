import React, { useCallback, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { translateFunctionSelector } from '../../../app/language/selectors'
import colors from '../../theme/colors'
import fields from '../../../app/language/translations/translationKeys'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import { getCategories } from '../../../app/categories/actions'
import { SCREEN_NAMES } from '../../../navigation/AppNavigator.constants'
import { ChartsScreenWrapper } from './styles'

const Charts = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const t = useSelector(translateFunctionSelector)
  return (
    <ScreenWrapper>
      <ChartsScreenWrapper></ChartsScreenWrapper>
    </ScreenWrapper>
  )
}

export default memo(Charts)
