# 开源组件来源

获取日期：2026-10-15。所有组件均从维护者的官方 Registry 下载源代码，保留在项目中；不是根据效果手写仿制。许可全文保存在 `licenses/`。Magic UI、shadcn/ui、Kokonut UI 使用 MIT；React Bits 使用 MIT + Commons Clause，允许作为网站的一部分使用。

| 组件 | 官方源文件 | 下载源码 SHA-256 | 适配 |
| --- | --- | --- | --- |
| magic-card | [https://magicui.design/r/magic-card.json](https://magicui.design/r/magic-card.json) | `6139e78ed228ebca18ed144f4a2714a89214c2ef604f1f82bc2f61204c3f3fa3` | 源码不变 |
| marquee | [https://magicui.design/r/marquee.json](https://magicui.design/r/marquee.json) | `779f360a107409bfa35cda13bcef7d54cd620a15ab4a0ee50412442a4dd6b9c7` | 源码不变 |
| tabs | [https://ui.shadcn.com/r/styles/new-york/tabs.json](https://ui.shadcn.com/r/styles/new-york/tabs.json) | `d41aded0394298102614635e15d709369c6bdae8fe79b918b8341ef39407ee03` | 源码不变 |
| sheet | [https://ui.shadcn.com/r/styles/new-york/sheet.json](https://ui.shadcn.com/r/styles/new-york/sheet.json) | `363f8e06aa5b53c6475f445117f60fa9294be79e9e4f1f5bf70886800188124e` | 仅增加 closeLabel 属性以本地化关闭按钮 |
| Background Paths | [https://kokonutui.com/r/background-paths.json](https://kokonutui.com/r/background-paths.json) | `97549dd26f946864051d0fd4584d2c9674e3a024c4f6dcbdc4fc9401d6c55956` | 源码不变，使用公开 props |
| Threads | [https://reactbits.dev/r/Threads-TS-TW.json](https://reactbits.dev/r/Threads-TS-TW.json) | `f9da44441e10dbb346b2ef191e4f9a5a084dea302a837992f70addcf817a1d4c` | 源码不变，使用公开 props |
| Topography | [https://reactbits.dev/r/Topography-TS-TW.json](https://reactbits.dev/r/Topography-TS-TW.json) | `9f7664b84d21b9506b9808c832c40302861fafec8e390d4589921b7b3a41f7a4` | 源码不变，使用公开 props |

## 在本页的用途

- Magic UI Magic Card：项目卡片的鼠标跟随灰阶边缘光效。通过公开 props 配置灰色，不使用默认彩色效果。
- Magic UI Marquee：两行低速技能展示，悬停和暂停按钮可停止；减少动态效果偏好下显示静态列表。滚动关键帧来自官方 Registry 的 css / cssVars 声明。
- shadcn/ui Tabs（Radix）：全部项目、AI 应用、供应链项目分组，保留键盘方向键与选中状态。
- shadcn/ui Sheet（Radix Dialog）：项目详情侧边面板，使用库提供的焦点限制、Esc 关闭、遮罩和进出动画。唯一源文件扩展是关闭按钮的语言文案；业务内容与关闭后的焦点恢复在应用层组合。

原有 Avatar、Accordion、Dock、BlurFade、Tooltip 等继续使用原模板实现。项目分类、翻译与内容填充属于应用层连接；没有另写一套 Tabs、Sheet、滚动或背景绘制实现。

官方文档：[Magic Card](https://magicui.design/docs/components/magic-card)、[Marquee](https://magicui.design/docs/components/marquee)、[Tabs](https://ui.shadcn.com/docs/components/radix/tabs)、[Sheet](https://ui.shadcn.com/docs/components/radix/sheet)。

用户已从 20 项选型页选择页顶浅色 01、深色 06。浅色使用 Kokonut UI Background Paths，深色使用 React Bits Threads，由 next-themes 自动切换。“聊聊你的想法”联系区在两种主题下均使用 15 React Bits Topography 流动地形，使用原生 lightMode 属性适配浅色模式，并按主题配置灰阶颜色、发光与透明度。保留向下渐隐；按后续要求将页面顶部留白增加 60%，页顶背景覆盖高度也由 100px 增至 160px，深色 Threads 的内部画布与裁切位置同比扩大。联系区地形覆盖整张卡片并向下渐隐，卡片本身尺寸和文字排版保持不变。Threads 仅在深色模式按需加载，Topography 按需加载；三个上游组件均内置减少动态效果与视口可见性处理。来源：[Background Paths](https://kokonutui.com/docs/backgrounds/background-paths)、[Threads](https://reactbits.dev/backgrounds/threads)、[Topography](https://reactbits.dev/backgrounds/topography)。
