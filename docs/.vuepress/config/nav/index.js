//导航栏
module.exports = [
  { text: "主页", link: "/index.html", icon: "reco-home" },
  {
    text: "其它",
    icon: "reco-document",
    items: [
      {
        text: "Projects🎈",
        items: [
          {
            text: "My Project",
            link: "/other/project",
          },
        ],
      },
      {
        text: "Common sites🎈",
        items: [
          {
            text: "炫酷页面",
            link: "https://castang.top/homepage/",
          },
          // {
          // text: '友 链',
          // link: '/other/friends',
          // },
          // {
          //     text: 'Java SE API Documentation',
          //     link: 'https://docs.oracle.com/javase/8/docs/api/index.html',
          // },
          // {
          //     text: 'Program Creek',
          //     link: 'https://www.programcreek.com/',
          // },
          // {
          //     text: 'Spring',
          //     link: 'https://spring.io/',
          // },
          // {
          //     text: 'Stackoverflow',
          //     link: 'https://stackoverflow.com/',
          // },
          // {
          //     text: 'LeetCode',
          //     link: 'https://leetcode-cn.com/',
          // },
          {
            text: "Vue3.js",
            link: "https://v3.cn.vuejs.org/",
          },
          {
            text: "MDN Web Docs",
            link: "https://developer.mozilla.org/zh-CN/",
          },
          {
            text: "ES6",
            link: "https://es6.ruanyifeng.com/#README",
          },
          // {
          //     text: 'BootCDN',
          //     link: 'https://www.bootcdn.cn/',
          // },
          // {
          //     text: 'Linux命令大全',
          //     link: 'https://www.linuxcool.com/',
          // },
          // {
          //     text: '编程语言排行榜',
          //     link: 'https://www.tiobe.com/tiobe-index/',
          // }
        ],
      },
    ],
  },
  { text: "时间线", link: "/timeline/", icon: "reco-date" },
  { text: "关于我", link: "/about/", icon: "reco-message" },
];
