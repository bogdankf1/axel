import { RootState } from './../interfaces/RootState'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export const MOCKUP_WIDTH = 375
export const MOCKUP_HEIGHT = 812

export const getNumberWithComas = (num: number = 0): string => {
  const strNum = num.toString()
  return strNum.replace(/(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g, (m, s1, s2) => s2 || s1 + ',')
}

export const getIsLoading = (state: RootState): boolean => {
  const authLoading = state.auth.loading
  const appLoading = !state.app.ready
  const categoriesLoading = state.categories.loading
  const questionsLoading = state.questions.loading
  const userLoading = state.user.loading
  return [authLoading, appLoading, categoriesLoading, questionsLoading, userLoading].some(
    loading => loading,
  )
}

// Calculating relatively to mockup (width: 375px, height: 812px)
export const relativeSizeToWidth = (value: number) =>
  widthPercentageToDP((value * 100) / MOCKUP_WIDTH)

export const relativeSizeToHeight = (value: number) =>
  heightPercentageToDP((value * 100) / MOCKUP_HEIGHT)
