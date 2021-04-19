import { AppRegistry } from 'react-native'
import App from './App'
import 'rxjs'
import 'rxjs-compat'
import { name as appName } from '../app.json'

AppRegistry.registerComponent(appName, () => App)
