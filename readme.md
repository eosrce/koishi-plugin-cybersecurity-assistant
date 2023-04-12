# koishi-plugin-cybersecurity-assistant

[![npm](https://img.shields.io/npm/v/koishi-plugin-cybersecurity-assistant?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-cybersecurity-assistant)

一些有助于安全研究人员的小功能。

## 目录 Contents

- [koishi-plugin-cybersecurity-assistant](#koishi-plugin-cybersecurity-assistant)
  - [目录 Contents](#目录-contents)
  - [使用方法 Usage](#使用方法-usage)
  - [功能 Features](#功能-features)
  - [安装 Installation](#安装-installation)
  - [配置 Configuration](#配置-configuration)
  - [已知问题 Known Issues](#已知问题-known-issues)
  - [待办 TODO](#待办-todo)
  - [参与开发 Join Development](#参与开发-join-development)
  - [相关项目 Relative Repositories](#相关项目-relative-repositories)
  - [联系我们 Contact Us](#联系我们-contact-us)
  - [开源许可证 License](#开源许可证-license)

## 使用方法 Usage

程序使用yml格式的配置文件，第一次使用时请使用`init`参数对插件和数据库进行初始化，在配置文件中设置API相关配置，具体功能可以在[功能 Features](#功能-features)中查看，可以设置每日推送时间以及是否开启API。

> The English text below was translated using the DeppL translator, so please bear with me if there are any inaccuracies. (And remind me to make corrections, thanks!)

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
  offline
        download the required resources and set them for offline access.
  run
        command execution.
  check
        check network and api status.
  -h, --help
        print help info.
```

全局选项：

- 使用`init`对插件和数据库进行初始化
- 使用`check`检查网络及 API 状态
- 使用`run`执行指令
- 使用`offline`下载所需资源，并设置为离线访问
- 使用`-h`或`--help`输出指令帮助

示例：简单运行命令

```bash
csa init
# Cybersecurity Assistant 正在初始化...
# 初始化完毕！请使用"ca start"启动

csa check
# 正在检查网络状态...
# 检查完毕！网络连接正常
# HTTP Status 200 - example.com

# 正在检查 API 状态...
# 检查完毕！总计21个API，其中4个无法正常访问
# HTTP Status 502 - api.example-1.com
# HTTP Status 403 - api.example-2.com
# HTTP Status 403 - api.example-3.com
# HTTP Status 508 - api.example-4.com

csa run
# 使用方法: csa run <模块名称> [参数1] [参数2] [参数3] ...

csa [-h --help]
# init 初始化
# check 检查
# run 执行指令
# -h, --help 查看帮助
```

详细请查看[指令查阅](docs/commands.md)

## 功能 Features

- **基础工具集**
  - ping
  - whois

- **IP 工具集**
  - IP 归属查询
  - IP 权重查询

- **Web 工具集**
  - 子域名查询
  - 指纹识别
  - ...
  - \[未来将会更新...\]

- **漏洞数据库**
  - Exploit DB
  - CVE
  - ...
  - \[未来将会更新...\]

- **漏洞知识库**
  - PeiQi文库
  - 白阁文库
  - ...
  - \[未来将会更新...\]

- **杂项**
  - MD5加密/解密（依赖 CMD5 API）
  - Base64加密/解密
  - ICON Hash获取
  - 安全日报
  - 提取页面指定信息
  - 网页截图
  - ...
  - \[未来将会更新...\]

## 安装 Installation

安装前请确保安装环境满足下列需求：

> - koishi ^4.12.3

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
    proxy: null
```

\[未来将会补充...\]

## 已知问题 Known Issues

- [x] **命令执行失败：... ping: applet not found**，ping 模块暂不可用，后期更新将解决

## 待办 TODO

- [ ] 完善功能清单
- [ ] 完善插件配置选项
- [ ] 完善主程序架构，使用统一的入口
- [ ] 缓存、数据库支持
- [ ] 将 busybox 模块分离，独立发布

## 参与开发 Join Development

- \[未来将会补充...\]

## 相关项目 Relative Repositories

- [koishijs/koishi: koishi是一个跨平台、可扩展、高性能的跨平台聊天机器人框架](https://koishi.chat/)

## 联系我们 Contact Us

- QQ 群：[292746028](https://jq.qq.com/?_wv=1027&k=EZ55XUNK)
- Telegram: 暂未开放

## 开源许可证 License

本项目遵循 [MIT](LICENSE) 协议
