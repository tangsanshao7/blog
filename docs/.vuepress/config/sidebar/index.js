//侧边栏
module.exports = {
  "/views/": [
    "",
    {
      title: "前端 Front-end",
      collapsable: true,
      children: ["frontend/vue", "frontend/git", "frontend/jacascript"],
    },

    {
      title: "随笔 Essay",
      collapsable: true,
      children: [],
    },
  ],
};
