import { createWebHistory, createRouter } from "vue-router";
// 获取页面meta配置信息
const pageJson = import.meta.glob("../views/**/page.ts", {
  eager: true,
  import: "default",
});
// 获取组件
const componentJson = import.meta.glob("../views/**/index.vue");
export const routes: any[] = Object.keys(pageJson).map((path) => {
  const _originPath = path;
  // 获取path
  let _path = path.replace("../views", "").replace("/page.ts", "") || "/";
  // 规定以_开头为动态路由，转成 :
  _path = _path.replace("_", ":");
  // 获取component path
  const _componentPath = _originPath.replace("page.ts", "index.vue");
  // 获取name
  const _name = _path.split("/").filter(Boolean).join("-");
  return {
    path: _path,
    name: _name,
    component: componentJson[_componentPath],
    meta: pageJson[_originPath],
  };
});
routes.unshift({
  path: "/",
  name: "index",
  redirect: "/index",
});
console.log("-- routes", routes);
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
