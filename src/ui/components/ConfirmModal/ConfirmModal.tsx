import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { translateFunctionSelector } from '../../../app/language/selectors'
import fields from '../../../app/language/translations/translationKeys'
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
  const t = useSelector(translateFunctionSelector)
  return isOpen ? (
    <Popup>
      <ConfirmModalBox>
        <ConfirmModalText>{text}</ConfirmModalText>
        <ConfirmModalButtons>
          <AppButton title={t(fields.CANCEL)} onPress={onCancel} color={colors.error} />
          <AppButton title={t(fields.CONFIRM)} onPress={onConfirm} />
        </ConfirmModalButtons>
      </ConfirmModalBox>
    </Popup>
  ) : null
}

export default memo(ConfirmModal)
