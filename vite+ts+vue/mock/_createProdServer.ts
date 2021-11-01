import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import userMock from './demo/user'

/**
 * @description: 创建Mock服务
 */
export function setupProdMockServer(): void {
  createProdMockServer([...userMock])
}
