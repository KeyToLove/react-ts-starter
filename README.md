# React-ts-starter

开箱即用的 Webpack5.x + React18.x + Typescript web 项目模版

## 第三方核心模块

| Dependency                                                                    | Version  |
| ----------------------------------------------------------------------------- | -------- |
| [Webpack](https://webpack.docschina.org/)                                     | `5.88.x` |
| [TypeScript](https://www.typescriptlang.org)                                  | `5.1.x`  |
| [React](https://zh-hans.reactjs.org/)                                         | `18.2.x` |
| [React Router](https://reacttraining.com/react-router/web/guides/quick-start) | `6.14.x` |
| [Axios](https://axios-http.com/zh/docs/intro)                                 | `1.4.x`  |

## 目录结构

```
├── README.md
├── .vscode            # vscode配置相关
├── babel.config.js    # babel 配置
├── eslintrc.js        # eslint 配置
├── .eslintignore
├── .gitignore
├── .stylelintrc.js    # stylelint 配置
├── build              # webpack 配置
│   ├── webpack.analyse.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── package.json
├── postcss.config.js  # postcss 配置
├── public             # 静态资源
│   └── index.html
├── src
│   ├── App.less
│   ├── App.tsx
│   ├── api            # 请求
│   ├── assets         # 资源文件
│   ├── config         # 配置文件
│   ├── constants      # 常量
│   ├── components     # 可复用公共组件
│   ├── index.d.ts     # ts类型补充
│   ├── index.less     # 全局样式
│   ├── index.tsx      # 入口文件
│   ├── pages          # 页面
│   ├── router         # 路由
│   ├── types          # typescript
│   └── utils          # 工具函数
├── tsconfig.json      # typescript 配置
└── yarn.lock
```

## 相关规范

- 使用 `less` 作为 `css`预处理器,使用 `stylelint`约束样式文件格式规范

- 使用 `prettier`格式化代码，结合 `eslint`约束 `.js、.ts、.tsx` 规范

## 开发手册

- 安装依赖

```bash
yarn install
```

- 启动本地 server

```bash

# dev
yarn start:dev

# test
yarn start:test

# uat
yarn start:uat
```

- 元素检视

本地开发内置元素检视插件，可在页面上通过快捷键检视元素并跳转到编辑器，默认快捷键为`ctrl + shifp + f`,可通过 `InspectorWrapper` 组件自定义

## 打包构建

- 常规构建

```bash
yarn build
```

- 构建分析

```bash
yarn build:analyse
```
