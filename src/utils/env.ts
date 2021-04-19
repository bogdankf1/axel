import Config from 'react-native-config'

export interface EnvConfig {
  apiBaseUrl: string
  env: string
}

const AppEnvConfig: EnvConfig = {
  apiBaseUrl: Config.API_ENDPOINT,
  env: Config.ENV
}

export default AppEnvConfig
