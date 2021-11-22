/*
 * @Author: your name
 * @Date: 2021-05-17 20:47:26
 * @LastEditTime: 2021-05-19 21:46:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settitangsanshao7
 * @FilePath: \blog2\docs\.vuepress\config.js
 */
const path = require("path");
const nav = require("./config/nav/");
const sidebar = require("./config/sidebar/");
const plugins = require("./config/plugins/");

module.exports = {
  // dest: 'gb-pages',//打包目录
  //base: "/tangsanshao7.github.io/",
  title: "唐基炜",
  description: "待人友善是修养，独来独往是性格。",
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://infinitypro-img.infinitynewtab.com/custom-icon/8001de1jd3n68lbfnxxt564xvb0vl5.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim",
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
        src: "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js",
      },
    ],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
  ],

  //主题配置
  theme: "reco",
  themeConfig: {
    nav,
    // sidebar: 'auto',// 自动形成侧边导航
    sidebar,
    // logo: '/vuepress/head-fish.jpg', //导航栏头像
    authorAvatar: "/vuepress/head-fish.jpg", //首页右侧头像
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    sidebarDepth: 2,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
    },
    // 最后更新时间
    lastUpdated: true,
    lastUpdated: "上次更新", // string | boolean
    // 作者
    author: "tangjiwei",
    // 备案号
    record: "京ICP备17067634号-1",
    // 项目开始时间
    startYear: "2019",
    //git地址
    // repo: "tangsanshao7/blog",
    // 如果你的文档不在仓库的根部
    docsDir: "docs",
    // 可选，默认为 master
    //docsBranch: 'vuepress',
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页！",
    //评论
    valineConfig: {
      appId: "XlEMeG9KsAboAT8cIAQ9yC43-gzGzoHsz",
      appKey: "2FNHy5Rvqsw3Tsk0y1yJKNcW",
      placeholder: "填写邮箱可以收到回复哦!",
      notify: true, // 邮件提醒
      verify: true, // 验证码
      recordIP: true,
    },
  },
  plugins,
  markdown: {
    lineNumbers: true,
  },
};
