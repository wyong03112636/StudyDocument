# 网络方面记录

## CDN 原理

### 概念

#### CDN

> CDN 即内容分发网络，是建立在承载网络的虚拟分布式网络中，能够将原站内容智能的缓存到全球各节点服务器上。这样可以方便用户就近获取资源，提高资源的访问速度，也分担了原站的压力

#### 加速域名

> 加速域名指的是需要使用 cdn 的加速域名。加速域名也是一个域名。加速域名一般配置 CNAME 记录，指向 cdn 的网络节点。普通域名一般配置 A 记录，指向提供服务的业务服务器

#### CNAME 记录、A 记录、NS 记录

> DNS 提供了将域名转化为 IP 地址的服务，为了完成这个转化工作，DNS 的数据库中需要维护相关的数据，这些数据被叫做 RR（Resource Record）。资源记录有很多种类型，比如 A、NS、SOA、CNAME 和 PTR 记录。

- A（Adress）记录是一条从域名到 IP 地址的映射记录。
- CNAME（Canonical Name）是一个域名到另一域名的映射记录。它在 CDN 技术中有举足轻重的作用，很好的实现了业务域名与 CDN 系统域名的解耦。
- NS（Name Server）记录是和 DNS 服务器相关的一条记录，它指定了该域名应该由哪一台 DNS 服务器解析。

#### 源站

> 提供原始资源（使用 CDN 加速的资源）的业务服务器，可以指定为域名或 IP 地址。

#### 回源

> CDN 节点未缓存请求资源或缓存资源已过期，回到源站获取资源，返回客户端

### 工作原理

假设我建立了一个网站，域名为“www.tt.com”，用户访问的主页链接为“www.tt.com/idx.html”。为了缓解服务端压力和加快访问速度，决定使用阿里云 CDN 服务。
为了更好地理解工作原理，先了解一下 CDN 的接入流程。

#### 接入流程

- 主要接入步骤如下：

  1. 到某域名供应商处申请一个加速域名：“js.tt.com”。
  2. 到阿里云 CDN 平台添加加速域名“js.tt.com”，同时设置其源站域名为“www.tt.com”。
  3. 阿里云 CDN 平台自动分配一个 CNAME 域名：“js.tt.com.ali.com”。
  4. 到域名供应商处给加速域名“js.tt.com”添加 CNAME 记录，其值为上一步得到的 CNAME 域名：“js.tt.com.ali.com”。

- 对以上步骤的说明
  - 为了使用 CDN，必需另外再申请一个加速域名，作为使用 CDN 的入口。
  - 加速域名配置的是 CNAME 记录，值为 CDN 平台提供的 CNAME 域名，该 CNAME 域名指向 CDN 系统节点。
  - 添加加速域名时需要配置源站域名，据此，CDN 平台保存了加速域名与源站域名的映射关系。
  - CNAME 域名的格式一般是：<加速域名> + <供应商主域名>。

## TCP/IP

### 应用层

### 传输控制层

### 网络层

### 链路层

### 物理层
