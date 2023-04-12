import { Context } from 'koishi';

interface Config { }

export const name = 'whois';

export function apply(ctx: Context, config: Config) {
  const { exec, execSync } = require('child_process');
  const path = require('path');

  if (process.platform === 'win32') {
    // 设置控制台代码页为 65001，即 UTF-8
    execSync('chcp 65001');
  }

  function runCommand(command) {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  function parseOutput(output) {
    // 在这里解析 whois 输出，并返回一个字符串，以供输出到聊天室

    // 如果不需要 NOTICE 后面的内容，则截取字符串
    const index = output.indexOf(['NOTICE: ' && 'Terms of Use: ']);
    const whoisResult = index >= 0 ? output.slice(0, index) : output;
    return whoisResult;
  }

  // 获取 busybox 的完整路径
  const busyboxPath = path.resolve(__dirname, '../exec/lib', 'busybox');

  // 注册插件
  ctx.command('csa/whois <domain>', '获取域名的 whois 信息')
    .option('-h <server>', '--host 指定 whois 服务器')
    .option('-p <port>', '--port 指定 whois 服务器端口')
    .option('-t <ms>', '--timeout 指定超时时间')
    .option('-q', '--quiet 不输出 whois 服务器信息')
    .option('-r', '--raw 输出原始 whois 信息')
    .action(async ({ session, options }, domain) => {
      // 判断输入是否为空
      if (!domain) {
        session.send('请输入要查询的域名');
        return;
      }
      
      // 过滤出所有存在值的选项，并生成命令参数字符串
      const args = Object.entries(options)
        .filter(([key, value]) => value)
        .map(([key, value]) => `-${key[0]} ${value}`)
        .join(' ');

      try {
        // 构造 whois 命令
        const cmd = `${busyboxPath} whois ${args} ${domain}`;

        // 执行 whois 命令，并解析输出
        const output = await runCommand(cmd);
        const result = parseOutput(output);

        // 输出解析后的结果
        session.send(result);
      } catch (error) {
        // 如果命令执行失败，则输出错误信息
        session.send(`命令执行失败：${error.message}`);
      }
    });
}
