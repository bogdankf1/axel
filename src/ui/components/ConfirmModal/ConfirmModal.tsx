import React, { memo } from 'react'
import colors from '../../theme/colors'
import AppButton from '../AppButton/AppButton'
import Popup from '../Popup'
import { ConfirmModalBox, ConfirmModalText, ConfirmModalButtons } from './styles'

interface Props {
  isOpen: boolean
  onCancel: () => void
  onConfirm: () => void
  text: string
}

const ConfirmModal = ({ isOpen, onCancel, onConfirm, text }: Props) => {
  return isOpen ? (
    <Popup>
      <ConfirmModalBox>
        <ConfirmModalText>{text}</ConfirmModalText>
        <ConfirmModalButtons>
          <AppButton title={'Cancel'} onPress={onCancel} color={colors.error} />
          <AppButton title={'Confirm'} onPress={onConfirm} />
        </ConfirmModalButtons>
      </ConfirmModalBox>
    </Popup>
  ) : null
}

export default memo(ConfirmModal)
