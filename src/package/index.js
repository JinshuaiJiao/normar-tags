//package/index.js
import normalTags from "./normal-tags"; // 引入封装好的组件
const coms = [normalTags]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
export default function (Vue) {
  coms.forEach((com) => {
    Vue.component('normal-tags', com);
  });
}