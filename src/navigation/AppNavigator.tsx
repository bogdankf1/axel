import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../ui/screens/Login/Login'
import Register from '../ui/screens/Register/Register'
import Home from '../ui/screens/Home/Home'
import Categories from '../ui/screens/Categories/Categories'
import AddNewCategory from '../ui/screens/AddNewCategory/AddNewCategory'
import Questions from '../ui/screens/Questions/Questions'
import AddNewQuestion from '../ui/screens/AddNewQuestion/AddNewQuestion'
import Question from '../ui/screens/Question/Question'
import TopQuestions from '../ui/screens/TopQuestions/TopQuestions'
import { SCREEN_NAMES } from './AppNavigator.constants'
import { navigationRef } from './NavigationService'
import colors from '../ui/theme/colors'

const Stack = createStackNavigator()

export const AppNavigator = () => {
  return (
    // @ts-ignore
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTintColor: colors.white,
        }}>
        <Stack.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
        <Stack.Screen name={SCREEN_NAMES.REGISTER} component={Register} />
        <Stack.Screen name={SCREEN_NAMES.SELECT_CATEGORY} component={Categories} />
        <Stack.Screen name={SCREEN_NAMES.ADD_NEW_CATEGORY} component={AddNewCategory} />
        <Stack.Screen name={SCREEN_NAMES.CATEGORY_QUESTIONS} component={Questions} />
        <Stack.Screen name={SCREEN_NAMES.ADD_NEW_QUESTION} component={AddNewQuestion} />
        <Stack.Screen name={SCREEN_NAMES.QUESTION} component={Question} />
        <Stack.Screen name={SCREEN_NAMES.TOP_QUESTIONS} component={TopQuestions} />
        <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
