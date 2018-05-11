## 使用 phaser3 + es6 + webpack4.x 开发



## 安装依赖

```javascript
npm install // 或 yarn
```



## 本地运行查看

```javascript
npm start
```



## 发布生产

```javascript
npm run prod // 生成到根目录下的 dist 目录中
```



## 知识点

1. 安装使用 yarn

   [更多 yarn 命令](https://yarnpkg.com/)

   ```bash
   # 安装 yarn
   brew install yarn --without-node

   # 更新 yarn
   brew upgrade yarn

   # 查看 yarn 是否安装成功
   yarn --version

   # yarn 最常用的命令
   yarn init # 初始化项目

   yarn add [package] # 安装最新，默认安装写进 dependencies 中
   yarn add [package]@[version] # 安装指定版本
   yarn add [package]@[tag] # 安装指定标签

   yarn add [package] --dev # 开发包
   yarn add [package] --peer # 同等依赖包
   yarn add [package] --optional # 可选择依赖包

   yarn upgrade [package] # 更新
   yarn upgrade [package]@[version] # 更新
   yarn upgrade [package]@[tag] # 更新

   yarn remove [package] # 移除指定包

   yarn # 安装所有依赖 等效于 yarn install
   yarn install # 安装所有依赖
   ```

   ​

2. 安装配置 webpack

   1. `conf/webpack.dev.js` 配置本地开发环境
   2. `conf/webpack.prod.js` 配置发布生产环境

   ​