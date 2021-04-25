import React, { FC, memo } from 'react'
import Header from '../Header/Header'

interface ScreenWithScrollWrapperProps {}

const ScreenWithScrollWrapper: FC<ScreenWithScrollWrapperProps> = ({ children }) => (
  <>
    {/* <Header /> */}
    {children}
  </>
)

export default memo(ScreenWithScrollWrapper)
