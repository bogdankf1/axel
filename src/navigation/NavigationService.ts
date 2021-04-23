import React from 'react'

export const navigationRef = React.createRef()

export function navigate(name: string, params?: any) {
  // @ts-ignore
  navigationRef.current?.navigate(name, params || {})
}
