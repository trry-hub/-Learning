interface ResponseType<T> {
  code: number
  data: T
  message: string
}

/**
 * 接口数据正确返回
 * @param result 数据
 * @param message 提示信息
 */
export function successFn<T>(result: T, message = 'Ok'): ResponseType<T> {
  return {
    code: 0,
    data: result,
    message,
  }
}
