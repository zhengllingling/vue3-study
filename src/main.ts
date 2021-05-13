import { createApp } from 'vue'
import {ElButton,ElInput,ElForm,ElFormItem} from 'element-plus'
import App from './App.vue'
import router from './router'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App);
app.use(ElButton);
app.use(ElInput);
app.use(ElForm);
app.use(ElFormItem);
app.use(router).mount('#app');