# koishi-plugin-cybersecurity-assistant

[![npm](https://img.shields.io/npm/v/koishi-plugin-cybersecurity-assistant?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-cybersecurity-assistant)

提供了一些有助于安全研究人员的小功能。

## 目录 Contents

- [使用方法 Usage](#使用方法-usage)
- [功能 Features](#功能-features)

## 使用方法 Usage

程序使用yml格式的配置文件，第一次使用时请使用`init`参数对插件和数据库进行初始化，在配置文件中设置API相关配置，具体功能可以在[功能 Features](#功能-features)中查看，可以设置每日推送时间以及是否开启API。

> The English text below was translated using the Deepk translator, so please bear with me if there are any inaccuracies. (And remind me to make corrections, thanks!)

```bash
#   ____      _                                        _ _              _            _     _              _   
#  / ___|   _| |__   ___ _ __ ___  ___  ___ _   _ _ __(_) |_ _   _     / \   ___ ___(_)___| |_ __ _ _ __ | |_ 
# | |  | | | | '_ \ / _ \ '__/ __|/ _ \/ __| | | | '__| | __| | | |   / _ \ / __/ __| / __| __/ _` | '_ \| __|
# | |__| |_| | |_) |  __/ |  \__ \  __/ (__| |_| | |  | | |_| |_| |  / ___ \\__ \__ \ \__ \ || (_| | | | | |_ 
#  \____\__, |_.__/ \___|_|  |___/\___|\___|\__,_|_|  |_|\__|\__, | /_/   \_\___/___/_|___/\__\__,_|_| |_|\__|
#       |___/                                                |___/                                            

Options:
  init
        init cybersecurity assistant.
  start
        start cybersecurity assistant.
  reload
        reload cybersecurity assistant.
  stop
        stop cybersecurity assistant.
  check
        check network status.
  reset
        reset cybersecurity assistant(All settings will be restored, and the belonging database will be emptied, and the previously downloaded data and cache files will be deleted).
  restore <name>
        restore the state of the specified child plugin (including the plugin's configuration file, cache file, saved data).
  -r, --requirement
        download the required resources and set them for offline access.
  -c, --command
        command execution.
  -h, --help
        print help info.
  -v, --version
        print version info.
```

全局选项：

- 使用`init`对插件和数据库进行初始化
- 使用`start`启动插件
- 使用`reload`重新载入本插件
- 使用`stop`终止插件
- 使用`reset`重置插件本体(将还原所有设置，并清空所属数据库，删除以往下载的数据及缓存文件)
- 使用`restore`恢复指定的子插件的状态（包括该插件的配置文件、缓存文件、已保存的数据）
- 使用`check`检查API状态
- 使用`-r`或`--requirement`下载所需资源，并设置为离线访问
- 使用`-h`或`--help`输出指令帮助
- 使用`-v`或`--version`输出版本信息

示例：简单运行命令

```bash
csa init
# Cybersecurity Assistant 正在初始化...
# 初始化完毕！请使用"ca start"启动

csa start
# Cybersecurity Assistant 正在启动...
# 启动成功！可使用"ca help"查看指令帮助，或使用"ca check"检查API状态

csa reload
# Cybersecurity Assistant 正在重启...
# 启动成功！可使用"ca help"查看指令帮助，或使用"ca check"检查API状态

csa stop
# Cybersecurity Assistant 正在终止...
# Cybersecurity Assistant 已终止，感谢您的使用

csa check
# 正在检查网络状态...
# 检查完毕！网络连接正常
# HTTP Status 200 - example.com
#
# 正在检查API状态...
# 检查完毕！总计21个API，其中4个无法正常访问
# HTTP Status 502 - api.example-1.com
# HTTP Status 403 - api.example-2.com
# HTTP Status 403 - api.example-3.com
# HTTP Status 508 - api.example-4.com

csa -c --help
# 使用方法: -c, --command <模块名称> <参数1> [参数2] [参数3] ...
```

详细请查看[指令查阅](docs\commands.md)

## 功能 Features

- **Web相关**
  - Whois
  - 子域名查询
  - 指纹识别
  - \[未来将会更新...\]

- **漏洞数据库**
  - Exploit DB
  - \[未来将会更新...\]

- **漏洞知识库**
  - PeiQi文库
  - \[未来将会更新...\]

- **杂项**
  - MD5加密/解密
  - Base64加密/解密
  - ICON Hash获取
  - 安全日报
  - 提取页面指定信息
  - 网页截图（由koishi-plugin-screenshot提供）。
  - \[未来将会更新...\]

## 安装 Installation

安装前请确保安装环境满足下列需求：

> - koishi ^4.12.3
> - cron ^2.5.0
> - puppeteer ^3.5.0

在 koishi 官方插件市场**一键安装**或在工作区中输入以下命令：

```bash
yarn add koishi-plugin-cybersecurity-assistant
```

也可以使用`npm`进行安装：

```bash
npm install koishi-plugin-cybersecurity-assistant
```

## 配置 Configuration

```yml
plugins:
  cybersecurity-assistant:
    test: 'text'
```

\[未来将会补充...\]

## 已知问题 Known Issues

- **表现**，描述

## 参与开发 Join Development

\[未来将会补充...\]

## 相关项目 Relative Repositories

- [koishijs/koishi: koishi是一个跨平台、可扩展、高性能的跨平台聊天机器人框架](https://koishi.chat/)

## 联系我们 Contact Us

- QQ 群：[292746028](https://jq.qq.com/?_wv=1027&k=EZ55XUNK)
- Telegram: 暂未开放

## 开源许可证 License

本项目遵循 [MIT](LICENSE) 协议
