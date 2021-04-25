import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Provider, useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { configureStore } from './store/configureStore'
import { startup } from './app/app/actions'
import LoaderModal from './ui/components/Loader/Loader'
import { getIsLoading } from './utils/helpers'
import colors from './ui/theme/colors'
import { AppNavigator } from './navigation/AppNavigator'

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    SplashScreen.hide()
    dispatch(startup())
  }, [])

  return (
    <AppWrapper>
      <AppNavigator />
      <LoaderModal isVisible={isLoading} />
    </AppWrapper>
  )
}

const AppWrapper = styled.View`
  flex: 1;
  position: relative;
  background-color: ${colors.blue};
  height: 100%;
  min-height: 100%;
`

export const store = configureStore()

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
