# 视觉资源

- Geist 字体许可证：[官方 OFL.txt](https://github.com/vercel/geist-font/blob/main/OFL.txt)，保存在 `licenses/GEIST-OFL.txt`。

- 设计、组件和字体声明： https://portfolio-magicui.vercel.app/ ，原始代码 https://github.com/magicuidesign/portfolio （MIT）。
- 字体：直接保存参考站加载的 Geist / Geist Mono WOFF2 文件及其 @font-face 声明，自托管字体，无运行时外部字体依赖。原字重、字间距、行高和 Geist Fallback 声明保持一致。Geist 不含中文字形，末尾增加 PingFang SC / Microsoft YaHei / sans-serif 中文回退，避免中文掉到浏览器的宋体默认字体。英文仍使用原站同一份 Geist 文件。
- 肖像：用户提供的 WangXin_CV(1).pdf。
- 机构标识：各机构官网 favicon，保存为本地文件；IBM 来自 https://www.ibm.com/favicon.ico，其余通过 Google favicon 服务提取官网图标。
- 项目封面为行业配图，并非客户现场照片或项目产品截图；这一点在详情中注明。均本地保存：
  - 电力：Lidong / Unsplash，https://unsplash.com/photos/mYM5DkdXFbE
  - 茶叶：Charles Chen / Unsplash，https://unsplash.com/photos/le0BPvGzUg0
  - 仓储：Ruchindra Gunasekara / Unsplash，https://unsplash.com/photos/GK8x_XCcDZg
  - 服务器：imgix / Unsplash，https://unsplash.com/photos/pgdaAwf6IJg
- 项目列表沿用原始 ProjectCard 尺寸和样式，原 Website 徽章换为中英双语项目详情入口，打开 shadcn/ui Sheet 侧边面板。未将原作者的项目画面或社交账号用于王鑫。

- 配色：头像、项目照片和 Logo 按用户最新要求使用原始彩色，邮箱超链接使用蓝色，其他界面和 Magic Card 光效使用中性灰阶。
- 新增组件来自 Magic UI 与 shadcn/ui 官方 Registry，完整来源见 COMPONENTS.md，MIT 许可见 licenses/。Marquee 的边缘渐隐及 Sheet 标题平衡换行通过应用层 className 配置，未改写组件实现。
