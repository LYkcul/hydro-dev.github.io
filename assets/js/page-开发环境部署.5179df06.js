(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{502:function(t,r,a){"use strict";a.r(r);var e=a(2),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发环境部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境部署"}},[t._v("#")]),t._v(" 开发环境部署")]),t._v(" "),a("p",[t._v("如果您没有过 TypeScript 项目的开发经验，非常不建议自建开发环境。"),a("br"),t._v("\n使用自动脚本安装也可以基于插件系统完成大部分的定制需求（参照左侧【使用 TypeScript 编写插件】章节）。")]),t._v(" "),a("p",[t._v("您可以使用 "),a("a",{attrs:{href:"https://gitpod.io/#https://github.com/hydro-dev/Hydro",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitpod"),a("OutboundLink")],1),t._v(" 快速打开配置完成的开发环境或是按照下方说明进行手动配置。（由于 Gitpod 的限制，hydrojudge 模块无法正常运行，若需要开发 hydrojudge 相关内容请自行部署）")]),t._v(" "),a("h2",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("ul",[a("li",[t._v("MongoDB：Hydro 需要 "),a("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),a("OutboundLink")],1),t._v(" 提供数据库服务。")]),t._v(" "),a("li",[t._v("NodeJS：请安装 NodeJS >=14 版本。（若使用 apt 请使用 nodesource 提供的源替代官方源） （推荐使用 "),a("a",{attrs:{href:"https://nvm.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("li",[t._v("yarn：安装 yarn 前请先完成 NodeJS 安装。 "),a("code",[t._v("npm install -g yarn")])])]),t._v(" "),a("p",[t._v("尽管这不是必须的，但文档多数区域使用了 "),a("code",[t._v("npx")]),t._v(" 工具来调用工作区的程序。如果此命令不存在，你可以在 "),a("strong",[t._v("Hydro 项目文件夹外")]),t._v("使用 "),a("code",[t._v("yarn global add npx")]),t._v(" 安装它。")]),t._v(" "),a("h2",{attrs:{id:"安装-hydro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-hydro"}},[t._v("#")]),t._v(" 安装 Hydro")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/hydro-dev/Hydro.git /root/Hydro --recursive "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载至 /root/Hydro 文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /root/Hydro "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入工作目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build:ui:production "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译前端")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("开发环境部署完成后默认不启用任何插件。")]),t._v(" "),a("p",[t._v("所有官方插件均随源码仓库下载到安装文件夹的 "),a("code",[t._v("packages")]),t._v(" 子文件夹下，可以通过下面的命令启用官方插件（以启用 "),a("code",[t._v("@hydrooj/ui-default")]),t._v(" 为例）：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("npx hydrooj addon "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @hydrooj/ui-default\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("对于非官方插件，下载后通过下面的命令启用即可（以启用位置在 "),a("code",[t._v("/root/addon")]),t._v(" 下的插件为例）：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("npx hydrooj addon "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" /root/addon\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"启动-hydro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-hydro"}},[t._v("#")]),t._v(" 启动 Hydro")]),t._v(" "),a("p",[t._v("支持如下启动参数：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("--port=2333")]),t._v(" 指定启动端口")]),t._v(" "),a("li",[a("code",[t._v("--debug")]),t._v(" 启用开发模式")])]),t._v(" "),a("p",[t._v("您可以在后台运行 "),a("code",[t._v("yarn build:ui:dev")]),t._v("，这将对前端源码进行实时转译，并在 8000 端口启动 webpack-dev-server，可在反复修改时节省编译时间。"),a("br"),t._v("\n您可以使用 "),a("code",[t._v("yarn debug --port=2333 --watch")]),t._v(" 启动 Hydro，配合上述命令同时使用，您可以在 8000 端口访问到 Hydro 实例，且前端的任何更改将即时生效。（后端热重载可能存在 bug，部分模块修改后可能仍需重启才能生效）")]),t._v(" "),a("p",[t._v("首次启动会要求您填写数据库连接信息。请根据您数据库的安装填写（若无密码则留空）"),a("br"),t._v("\n请按照下文说明创建管理员账户即可正常使用。")]),t._v(" "),a("h2",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),a("p",[t._v("需要更新的时候进入对应仓库文件夹执行 "),a("code",[t._v("git pull")]),t._v("，然后重新 "),a("code",[t._v("yarn && yarn build:ui:production")]),t._v(" 即可。")])])}),[],!1,null,null,null);r.default=s.exports}}]);