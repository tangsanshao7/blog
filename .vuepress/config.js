const sidebar = require("./sidebar.js");
module.exports = {
  title: "tangsanshao",
  description: "待人友善是修养，独来独往是性格",
  dest: "public",
  base: "/blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
      },
    ],
    // 引入鼠标点击脚本
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
  ],
  plugins: [
    ["vuepress-plugin-code-copy", true],
    "@vuepress/medium-zoom",
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000,
      },
    ],
    [
      "@vuepress/pwa", // 更新刷新插件
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
  ],
  theme: "reco",
  // theme: "vuepress-theme-yilia-plus",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/docs/theme-reco/",
          },
          {
            text: "前端",
            link: "/docs/Front-end/",
          },
        ],
      },
      {
        text: "关于我",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/tangsanshao7",
            icon: "reco-github",
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: sidebar,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "tangsanshao7",
    authorAvatar: "https://avatars.githubusercontent.com/u/41857884?v=4",
    record: "xxxx",
    startYear: "2017",
    // 备案
    record: "ICP 备案文案",
    recordLink: "ICP 备案指向链接",
    cyberSecurityRecord: "公安部备案文案",
    cyberSecurityLink: "公安部备案指向链接",
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    // 鼠标点击特效
    "cursor-effects": {
      size: 2,
      shape: "circle", // 点击形状: 'star', 'star' | 'circle'
      zIndex: 999999999,
    },
    // 音乐播放器
    meting: {
      meting: {
        // 歌单地址-> 如果输入可忽略server|type|mid
        // 但是不知道为什么不写上这三个会报错, 所以我都写上了
        auto: "https://music.163.com/#/playlist?id=2407253084",

        // 当前服务为netease -> 网易
        server: "netease",
        // 类型为歌单
        type: "playlist",
        // 歌单id
        mid: "2407253084",
      },
      aplayer: {
        // 歌单为随机
        order: "random",
        // 0为不显示歌词
        lrcType: 1,
        // 音量
        volume: 0.15,
        // 开启迷你模式
        mini: true,
        // 自动播放
        autoplay: true,
      },
    },
    // 看板娘
    "vuepress-plugin-helper-live2d": {
      // 是否开启控制台日志打印(default: false)
      log: true,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)
        model: "koharu",
        display: {
          vOffset: -55, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false, // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8, // 模型透明度(default: 0.8)
        },
      },
    },
  },
};
