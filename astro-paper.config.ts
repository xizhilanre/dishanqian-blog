import { defineAstroPaperConfig } from "./src/types/config";

/**
 * ============================================================
 * 个人博客全局配置
 * ============================================================
 * 你日常几乎不需要碰其他代码，只需维护 Markdown 与这个文件。
 *
 * 所有标了 `[FILL_ME]` 的字段，是发布前必须替换成你自己的真实信息。
 * 其余字段按你的偏好调整即可。
 */
export default defineAstroPaperConfig({
  site: {
    // [FILL_ME] 正式部署后的站点 URL（带协议，末尾斜杠可带可不带）。
    // canonical / sitemap / RSS 都基于它生成。
    url: "https://dishanqian-blog.pages.dev/",
    // [FILL_ME] 博客名称，显示在顶部与各页面标题。
    title: "地山谦のBlog",
    // [FILL_ME] 站点描述，用于 SEO 与 RSS。
    description:
      "长期记录 AI、Agent、软件开发与生活思考的个人博客。技术学习与实践的笔记集。",
    // [FILL_ME] 作者名字，用于文章默认作者与 SEO。
    author: "地山谦",
    // [FILL_ME] 作者个人主页（例如关于页 / 个人站点），用于结构化数据。可留空。
    profile: "",
    // 默认分享图（public/default-og.jpg）。换成你自己的图后改这里文件名。
    ogImage: "default-og.jpg",
    // 站点语言。中文博客用 zh-CN。
    lang: "zh-CN",
    // 文章日期所用的时区。
    timezone: "Asia/Shanghai",
    dir: "ltr",
    // [FILL_ME] 可选：Google Search Console 验证码，不需要则留空。
    // googleVerification: "",
  },
  posts: {
    perPage: 8, // 文章列表每页条数
    perIndex: 5, // 首页“最近文章”条数
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    // 保持默认分享图即可，无需为每篇生成动态图，也因此不必下载额外字体。
    dynamicOgImage: false,
    // 首页导航保持克制：文章 / 标签 / 关于。归档页仍可用 /archives 访问。
    showArchives: false,
    showBackButton: true,
    // 未配置 Git 仓库前关闭“编辑此页”，避免跳出错误链接。
    editPost: { enabled: false },
    search: "pagefind", // 静态站内搜索
  },
  // 底部社交入口：只保留 GitHub 与 Email，克制一点。
  socials: [
    // [FILL_ME] 替换成你的 GitHub 主页。
    { name: "github", url: "https://github.com/xizhilanre" },
    // [FILL_ME] 替换成你的邮箱。
    { name: "mail", url: "mailto:xizhilanre@gmail.com" },
  ],
  // 文章页“分享到”入口，保留常用的即可。不需要就清空数组。
  shareLinks: [
    // { name: "whatsapp", url: "https://wa.me/?text=" },
    // { name: "x", url: "https://x.com/intent/post?url=" },
    // { name: "telegram", url: "https://t.me/share/url?url=" },
    // { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});