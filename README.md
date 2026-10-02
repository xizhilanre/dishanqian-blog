# 我的博客

个人博客站点，基于 [Astro](https://astro.build/) 构建的纯静态站。
内容围绕 **AI、Agent、AI 产品、软件开发、技术学习、随笔**。

## 快速上手

- **写文章**：在 `src/content/posts/` 新建 Markdown，见 [创建文章](docs/操作手册.md)
- **本地预览**：`pnpm install && pnpm dev`
- **构建**：`pnpm build`（产物在 `dist/`，可部署到任意静态托管）
- **改个人配置**：集中在根目录 `astro-paper.config.ts`

## 文档

- 📘 **操作手册** → `docs/操作手册.md`（创建文章、预览、构建、部署、配置、改外观）
  可点击这里查看： [docs/操作手册.md](docs/操作手册.md)

## 设计

参考示例文章 [`src/content/posts/ai-agents.md`](src/content/posts/ai-agents.md)，正文支持代码、表格、图片、引用与目录。保持克制、安静、文字优先。