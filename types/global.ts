export interface IClient {
  get(url: string, params?: object): Promise<any>
  post(url: string, payload?: Object, params?: object): Promise<any>
  postFile(url: string, payload: FormData): Promise<any>
  patch(url: string, payload?: Object, params?: object): Promise<any>
  put(url: string, payload?: Object, params?: object): Promise<any>
}
