# 王鑫 · 个人主页

站点：[cuhksz-cross-lab.github.io/wangxin](https://cuhksz-cross-lab.github.io/wangxin/)。使用 Next.js 静态导出、React、Tailwind CSS，沿用已确认的 Magic UI Portfolio 布局与自托管 Geist 字体。

支持中英切换、明暗主题、项目分类和详情面板。头像与项目图片保留彩色，邮箱为蓝色。页顶背景为浅色 Background Paths、深色 Threads；联系区为适配两种主题的 Topography 流动地形。

## 本地开发

需要 Node.js 22+、pnpm 11.25.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## 发布

推送到 main 后，现有 GitHub Actions 工作流会安装锁定的依赖，按 `/wangxin` 子路径构建，并将 `out/` 发布到 GitHub Pages。也可在 Actions 中手动运行 Deploy to GitHub Pages。

本地复现正式构建：

```sh
NEXT_PUBLIC_BASE_PATH=/wangxin pnpm build
```

只有 `out/` 会作为部署产物上传；源码、资料说明和依赖目录不属于部署产物。Git 历史保留旧版页面，需要回退时可恢复旧提交并重新运行部署。

## 内容与组件

- `src/data/`：个人经历、项目与中英文内容。
- `src/lib/site.ts`：正式网址与公共图片路径，支持部署子目录。
- `src/app/fonts/`、`src/app/fonts.css`：原始 Geist 字体，通过构建工具生成带子路径的字体地址。
- `src/components/page-background.tsx`：页顶明暗背景。
- `src/components/contact-background.tsx`：联系区 Topography 与明暗适配。
- `COMPONENTS.md`、`licenses/`：官方组件来源、校验和与许可证。
- `SOURCES.md`、`ASSETS.md`：内容及素材出处。

本站保留“曾任深圳市大数据研究院高级工程师”的表述；未添加未知任职年月或现职。项目封面为行业配图。
