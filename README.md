![输入图片说明](https://foruda.gitee.com/images/1734515019438418872/8d983064_10776309.png "Snipaste_2024-12-18_17-43-18.png")



 **本插件是用于二次封装自定义tag标签** 

```
参数：
    label     标签名称 string类型
    type      按钮类型 支持类型和el-tag相同：info、success、warning、danger、primary
    content   文本，这个字段不为空则标签右边出现icon，鼠标悬浮文本
    placement 和el-tooltip属性相同 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
    effect    和el-tooltip熟悉相同 'dark' | 'light'
    minWidth  标签最小宽度

使用：
     1. npm i normal-tags / pnpm add normal-tags
     2. import NormalTags from 'normal-tags'   import 'normal-tags/normal-tags.css' 引入插件及样式
     3. app.use(NormalTags) 挂载app
     4. 使用示例： <normal-tags label="我的标签" placement="bottom" content="666" type="success" />
```
