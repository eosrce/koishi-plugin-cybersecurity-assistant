//   ____      _                                        _ _              _            _     _              _   
//  / ___|   _| |__   ___ _ __ ___  ___  ___ _   _ _ __(_) |_ _   _     / \   ___ ___(_)___| |_ __ _ _ __ | |_ 
// | |  | | | | '_ \ / _ \ '__/ __|/ _ \/ __| | | | '__| | __| | | |   / _ \ / __/ __| / __| __/ _` | '_ \| __|
// | |__| |_| | |_) |  __/ |  \__ \  __/ (__| |_| | |  | | |_| |_| |  / ___ \\__ \__ \ \__ \ || (_| | | | | |_ 
//  \____\__, |_.__/ \___|_|  |___/\___|\___|\__,_|_|  |_|\__|\__, | /_/   \_\___/___/_|___/\__\__,_|_| |_|\__|
//       |___/                                                |___/                                           
//
//
//

import { Context, Schema } from 'koishi'

import * as csaWhois from './extra/essentials/whois';
import * as csaPing from './extra/essentials/ping';

export const name = 'cybersecurity-assistant'

export interface Config {
  proxy?: string
  timeout?: number
}

export const Config: Schema<Config> = Schema.object({
  proxy: Schema.string().description('代理服务器').default(''),
  timeout: Schema.number().description('最终等待时间').default(600),
})

// export const logger = new Logger('Cybersecurity-Assistant')

export  function apply(ctx: Context, config: Config) {
  ctx.i18n.define('zh', require('./locales/zh-CN'))

  ctx.command('csa', { authority: 1 })

  ctx.plugin(csaWhois)
  ctx.plugin(csaPing)


  // ctx.command('csa.init', { authority: 6 })
  //   .shortcut('初始化CSA', { args: ['init'] })
  //   .action(async ({ session }) => {
  //     return session.text('[Cybersecurity Assistant] 正在初始化...')
  //   });

  // ctx.command('csa.run <command> [arg]', { authority: 1 })
  // .option('whois', 'Whois')
  // .shortcut('whois', { args: ['whois'] })
  //   .action(async ({ session }, command, arg) => {
  // if (config.whois.enabled)

  //   });

  // ctx.command('csa.check', { authority: 1 })
  //   .shortcut('检查API状态', { args: ['check'] })
  //   .action(async ({ session }) => {
  //     return session.text('功能开发中...')
  //   });

  // ctx.command('csa.offline', { authority: 6 })
  //   .shortcut('CSA离线缓存', { args: ['offline'] })
  //   .action(async ({ session }) => {
  //     return session.text('功能开发中...')
  //   });

  // ctx.command('csa.clean', { authority: 6 })
  //   .shortcut('CSA清除缓存', { args: ['offline'] })
  //   .action(async ({ session }) => {
  //     return session.text('功能开发中...')
  //   });
}
