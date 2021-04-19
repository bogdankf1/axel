import {Epic} from 'redux-observable';
import {ready} from './actions';
import {AppActionTypes} from './actionTypes';
import StorageService from './StorageService';
import {noop, asyncConcat, delay} from '../../utils/epicHelpers';
import {loginTokenRetrieved, AuthTokenParams} from '../auth/actions';
import {
  AuthActionTypes,
  LoginTokenRetrievedAction,
  LogoutAction,
} from '../auth/actionTypes';
import {StatusBar, Platform} from 'react-native';
import colors from '../../ui/theme/colors';
import {mergeMap} from 'rxjs/operators';
// import NavigationService from '../../navigation/NavigationService'
// import { AppScreens } from '../../navigation/routes'

export const startup: Epic = action$ => {
  return action$.ofType(AppActionTypes.STARTUP).pipe(
    mergeMap(async () => {
      const authData = await StorageService.read<AuthTokenParams>('token');

      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(colors.blue);
      }

      // // make splash screen to not blink fast
      // const actions = [ready()] as any[]
      if (authData && authData.accessToken) {
        // NavigationService.navigate(AppScreens.HOME)
        return loginTokenRetrieved(authData);
      } else {
        return ready();
      }
      // return actions
    }),
  );
  // .mergeMap(asyncConcat)
};

export const persistAuth: Epic = action$ => {
  return action$.ofType(AuthActionTypes.LOGIN_TOKEN_RETRIEVED).pipe(
    mergeMap(async (action: LoginTokenRetrievedAction) => {
      StorageService.persist('token', action.payload);
      return ready();
    }),
  );
  // .pipe(mergeMap(noop))
};

export const removeAuth: Epic = action$ => {
  return action$.ofType(AuthActionTypes.LOGOUT).pipe(
    mergeMap(async (action: LogoutAction) => {
      StorageService.remove('token');
      return ready();
    }),
  );
  // .mergeMap(noop)
};

export default [startup, persistAuth, removeAuth];
