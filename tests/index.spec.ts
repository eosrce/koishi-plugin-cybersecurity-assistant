import { Context } from 'koishi'
import mock from '@koishijs/plugin-mock'
import * as csa from 'koishi-plugin-cybersecurity-assistant'

const ctx = new Context()
ctx.plugin(mock)
ctx.plugin(csa)

const client = ctx.mock.client('123')

describe('koishi-plugin-cybersecurity-assistant', () => {
  before(() => ctx.start())
  after(() => ctx.stop())

  it('basic support', async () => {
    await client.shouldReply('ping baidu.com', [
      '[运行开始] ping baidu.com',
      '[运行完毕] ping baidu.com',
    ])
  })
})
