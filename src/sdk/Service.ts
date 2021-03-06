import axios, { AxiosResponse } from "axios"

const Http = axios.create()

class Service {
  protected static Http = Http
  protected static getData = getData
}

function getData<T> (res: AxiosResponse<T>) {
  return res.data
}

Http.defaults.baseURL = 'https://plantvslag.herokuapp.com'

export default Service