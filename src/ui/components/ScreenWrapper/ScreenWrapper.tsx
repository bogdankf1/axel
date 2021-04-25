import React, { FC, memo, ReactElement } from 'react'
import { View } from 'react-native'
import Header from '../Header/Header'

interface ScreenWrapperProps {
  styles?: any
  children?: ReactElement | ReactElement[]
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({ children, styles }) => (
  <View style={{ flex: 1, ...styles }}>
    {/* <Header /> */}
    {children}
  </View>
)

export default memo(ScreenWrapper)
