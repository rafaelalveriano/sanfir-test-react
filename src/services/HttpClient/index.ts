import axios from 'axios'

const HOSTAPI = 'http://localhost:3000/api/'

const HttpClient = (url?: string) => ({
  get: async (path: string) =>
    await axios.get(url ? `${url}${path}` : `${HOSTAPI}${path}`),

  post: async (path: string, data: any) =>
    await axios.post(url ? `${url}${path}` : `${HOSTAPI}${path}`, data),

  remove: async (path: string) =>
    await axios.delete(url ? `${url}${path}` : `${HOSTAPI}${path}`),

  update: async (path: string, data: any) =>
    await axios.put(url ? `${url}${path}` : `${HOSTAPI}${path}`, data),
})

export default HttpClient
