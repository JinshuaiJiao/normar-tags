import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import JinsButton from "jins-button";
import "jins-button/jins-button.css";
import NormalTags from "normal-tags";
import "normal-tags/normal-tags.css";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(JinsButton);
app.use(NormalTags);
app.use(ElementPlus);

app.mount("#app");
