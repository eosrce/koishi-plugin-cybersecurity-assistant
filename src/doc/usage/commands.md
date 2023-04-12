# 指令查阅

## whois

```bash
csa run whois [-h, --help]
# 使用方法: whois <url> [-s, --source] [序号, URL]
#
# 可使用序号或域名指定数据源，不在数据库中的数据源将无法指定
# //////////////////////////////
# 现存数据源: [1]whois.com, [2]who.is, [3]chinaz.com(默认)

csa run whois example.com
# 正在获取 example.com 的 Whois 信息，请耐心等待...
#
# 站点: example.com
# IP: xx.xx.xx.xx
# DNS: dns.example.com, dns1,example.com
# 注册人: Example
# 公司名称: Example
# ...
# //////////////////////////////
# 数据来源：chinaz.com

csa run whois example.com -s 1
# csa run whois example.com --source whois.com
# 正在获取 example.com 的 Whois 信息，请耐心等待...
#
# 站点: example.com
# IP: xx.xx.xx.xx
# DNS: dns.example.com, dns1,example.com
# 注册人: Example
# 公司名称: Example
# ...
# //////////////////////////////
# 数据来源：whois.com
```
