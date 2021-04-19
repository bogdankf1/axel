import axios from 'axios'
import config from './config'

const client = axios.create(config)

export default client
