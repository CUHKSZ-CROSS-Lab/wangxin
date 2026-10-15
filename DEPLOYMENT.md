# GitHub Pages 发布说明

正式地址：https://cuhksz-cross-lab.github.io/wangxin/

该版本替换原有静态个人主页，保留原 GitHub Pages 地址、公开访问范围、main 分支与 github-pages 环境。旧版本仍保留在 Git 历史中。

## 发布前验证

- 生产构建、TypeScript、静态导出及锁定依赖检查通过。
- 以真实 `/wangxin/` 子路径运行静态导出，确认所有图片、Geist 字体和 JavaScript 文件正常加载，无 404 或浏览器错误。
- 桌面 1440px、手机 390px 的明暗截图已实际查看，保留已确认布局、彩照、蓝色邮箱与 Topography 联系区。
- 中英文、主题切换及刷新后的偏好记忆通过；页面无横向溢出。
- 减少动态效果模式正常显示背景。此前已验证 Topography 在该模式下静止。

## 部署方式

`.github/workflows/pages.yml` 使用 Node.js 22 与 pnpm 11.25.0，执行冻结锁文件安装、带 `NEXT_PUBLIC_BASE_PATH=/wangxin` 的构建，然后仅上传 `out/` 到 GitHub Pages。

页面公开元数据和 canonical 指向正式地址。网站按原有公开主页方式允许搜索引擎索引。个人资料及素材来源见 SOURCES.md 和 ASSETS.md。
