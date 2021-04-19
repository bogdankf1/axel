import React, { FC, memo } from 'react'
import { ScrollView } from 'react-native'
import Header from '../Header/Header'

interface ScreenWithScrollWrapperProps {}

const ScreenWithScrollWrapper: FC<ScreenWithScrollWrapperProps> = ({ children }) => (
  <>
    <Header />
    <ScrollView>{children}</ScrollView>
  </>
)

export default memo(ScreenWithScrollWrapper)
