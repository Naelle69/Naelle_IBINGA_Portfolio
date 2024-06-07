import { createApp } from 'vue'
import MonApp from './MonApp.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './css/style.css'
import './css/Michroma-Regular.ttf'
import 'tw-elements'
// Initialization for ES Users
import {
    Carousel,
    Collapse,
    Dropdown,
    Ripple,
    initTWE,
    Input,
  } from "tw-elements";
  
  initTWE({ Collapse, Dropdown, Ripple, Carousel, initTWE, Input });

createApp(MonApp).use(store).use(router).mount('#monapp')
