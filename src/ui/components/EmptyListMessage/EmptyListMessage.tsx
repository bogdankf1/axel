import React, { memo } from 'react'
import { EmptyListMessageBox, EmptyListMessageText } from './styles'

interface Props {
  message: string
}

const EmptyListMessage = ({ message }: Props) => {
  return (
    <EmptyListMessageBox>
      <EmptyListMessageText>{message}</EmptyListMessageText>
    </EmptyListMessageBox>
  )
}

export default memo(EmptyListMessage)
