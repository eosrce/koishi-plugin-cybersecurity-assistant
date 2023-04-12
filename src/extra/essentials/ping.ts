/**
 * LICENSE MIT
 * (C) E#Index
 * https://github.com/eosrce/koishi-plugin-ping
 * 
 * Simple ping plugin implementation that relies on node-ping.
 */

import { Context, segment } from 'koishi';

import * as ping from 'ping';

export const name = 'ping';

export function apply(ctx: Context) {

  ctx.command('csa/ping <host:>', 'Ping指定的主机')
    .option('count', '-c <count> Ping指定的次数')
    .option('wait', '-w <timeout> 等待每次回复的超时时间（以毫秒为单位）')
    .option('6', '-6 使用IPv6协议')
    .option('l', '-l <size> 指定数据包大小（以字节为单位）')
    .option('i', '-i <ttl> 设置TTL（生存时间）')
    .action(async ({ session, options }, host) => {

      if (!host) {
        session.send('请输入要测试的域名或IP');
        return;
      }

      const config: ping.PingConfig = {
        timeout: options.wait ? options.wait : 5,
        retries: options.count ? options.count : 4,
        v6: !!options[6],
        packetSize: options.l ? options.l : 56,
        ttl: options.i ? options.i : undefined,
      };

      if (isNaN(config.timeout) || isNaN(config.retries) || isNaN(config.packetSize) || (config.ttl !== undefined && isNaN(config.ttl))) {
        return '参数格式错误，请检查输入。';
      }

      try {
        const res = await ping.promise.probe(host, config);

        if (!res.alive) {
          return `${host} 无法访问。`;
        }

        const stats = { 'avg': Number(res.avg), 'min': Number(res.min), 'max': Number(res.max), 'stddev': Number(res.stddev), 'packetLoss': Number(res.packetLoss) }

        const quote = segment('quote', (`Ping 统计信息：
    目标主机：${host}
    发送次数：${config.retries}
    超时时间：${config.timeout} ms
    协议版本：${config.v6 ? 'IPv6' : 'IPv4'}
    数据包大小：${config.packetSize} 字节
    TTL：${config.ttl || '默认'}
    平均延迟：${stats.avg.toFixed(2)} ms
    最小延迟：${stats.min.toFixed(2)} ms
    最大延迟：${stats.max.toFixed(2)} ms
    标准差：${stats.stddev.toFixed(2)} ms
    丢包率：${stats.packetLoss.toFixed(2)}%`));

        session.send(quote);
        return

      } catch (err) {
        return `出现错误：${err.message}`;
      }
    });
}
