import React, { memo } from 'react'
import { TitleBox, TitleInner } from './styles'

interface Props {
  title: string
}

const ScreenTitle = ({ title }: Props) => {
  return (
    <TitleBox>
      <TitleInner>{title}</TitleInner>
    </TitleBox>
  )
}

export default memo(ScreenTitle)
