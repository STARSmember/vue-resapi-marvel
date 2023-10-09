/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
})

const useApi = () => {
  return { instance }
}

export default useApi
