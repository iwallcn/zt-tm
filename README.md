## 框架搭建

```bash
# 使用npm进行项目初始化，其中zt-tm是项目名
$ npm init ice zt-tm

# 然后选择模板，这里我们选择pro ts
$ Fusion Design Pro TypeScript template
```

## 框架使用

```bash
# 进入到zt-tm目录下
$ cd zt-tm

# 安装项目依赖
$ npm install

# 启动项目
$ npm start
```

## 框架代码质量保障

```bash
@iceworks/spec

eslint

stylelint

@commitlint/cli
```

## 框架中加入如下功能点

```bash
iconfont: https://www.iconfont.cn/ 矢量图标库  【OK】

react-intl: 国际化方案

百度统计：https://tongji.baidu.com/

权限控制
```

## 框架目录

```md
├── build/ # 构建产物
├── mock/ # 本地模拟数据
│ ├── index.[j,t]s
├── public/
│ ├── index.html # 应用入口 HTML
│ └── favicon.png # Favicon
├── src/ # 源码路径
│ ├── components/ # 自定义业务组件
│ │ └── Guide/
│ │ ├── index.[j,t]sx
│ │ ├── index.module.scss
│ ├── layouts/ # 布局组件
│ │ └── BasicLayout/
│ │ ├── index.[j,t]sx
│ │ └── index.module.scss
│ ├── pages/ # 页面
│ │ └── Home/ # home 页面，约定路由转成小写
│ │ ├── components/ # 页面级自定义业务组件
│ │ ├── models.[j,t]sx # 页面级数据状态
│ │ ├── index.[j,t]sx # 页面入口
│ │ └── index.module.scss # 页面样式文件
│ ├── configs/ # [可选] 配置文件
│ │ └── menu.[j,t]s # [可选] 菜单配置
│ ├── models/ # [可选] 应用级数据状态
│ │ └── user.[j,t]s
│ ├── utils/ # [可选] 工具库
│ ├── global.scss # 全局样式
│ ├── routes.[j,t]s # 路由配置
│ └── app.[j,t]s[x] # 应用入口脚本
├── build.json # 工程配置
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── .stylelintrc.[j,t]s
├── .gitignore
└── [j,t]sconfig.json
```
