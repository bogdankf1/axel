import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

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
import DrawerContent from './DrawerContent/DrawerContent'
import Charts from '../ui/screens/Charts/Charts'
import Profile from '../ui/screens/Profile/Profile'

const Drawer = createDrawerNavigator()

export const AppNavigator = () => {
  return (
    // @ts-ignore
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        initialRouteName="App"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
        <Drawer.Screen name={SCREEN_NAMES.REGISTER} component={Register} />
        <Drawer.Screen name={SCREEN_NAMES.SELECT_CATEGORY} component={Categories} />
        <Drawer.Screen name={SCREEN_NAMES.ADD_NEW_CATEGORY} component={AddNewCategory} />
        <Drawer.Screen name={SCREEN_NAMES.CATEGORY_QUESTIONS} component={Questions} />
        <Drawer.Screen name={SCREEN_NAMES.ADD_NEW_QUESTION} component={AddNewQuestion} />
        <Drawer.Screen name={SCREEN_NAMES.QUESTION} component={Question} />
        <Drawer.Screen name={SCREEN_NAMES.TOP_QUESTIONS} component={TopQuestions} />
        <Drawer.Screen name={SCREEN_NAMES.CHARTS} component={Charts} />
        <Drawer.Screen name={SCREEN_NAMES.PROFILE} component={Profile} />
        <Drawer.Screen name={SCREEN_NAMES.HOME} component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
