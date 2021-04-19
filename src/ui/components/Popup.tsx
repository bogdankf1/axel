import React, { memo } from 'react'
import styled from 'styled-components/native'

const PopupWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
`

interface PopupProps {
  children: any
}

const Popup = ({ children, ...rest }: PopupProps) => (
  <PopupWrapper {...rest}>{children}</PopupWrapper>
)

export default memo(Popup)
