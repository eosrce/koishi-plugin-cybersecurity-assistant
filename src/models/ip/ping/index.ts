import { Context } from 'koishi';

interface Config { }

export const name = 'ping';

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
    // 在这里解析输出，并返回一个字符串，以供输出到聊天室
    return output;
  }

  // 获取 busybox 的完整路径
  const busyboxPath = path.resolve(__dirname, '../../../busybox', 'busybox.exe');

  ctx.command('csa/ping <target>', 'ping 一台目标主机（暂不可用）')
    .option('-c <count>', '--count 设定请求次数.')
    .option('-s <size>', '--size 设定数据包的大小')
    .option('-t <timeout>', '--timeout 设定超时时间（秒）')
    .action(async ({ session, options }, target) => {
      // 过滤出所有存在值的选项，并生成命令参数字符串
      const args = Object.entries(options)
        .filter(([key, value]) => value)
        .map(([key, value]) => `-${key[0]} ${value}`)
        .join(' ');

      // 判断输入是否为空
      if (!target) {
        session.send('请输入要测试的IP');
        return;
      }

      try {
        // 构造 ping 命令
        const cmd = `${busyboxPath} ping ${args} ${target}`;

        // 执行 ping 命令，并解析输出
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