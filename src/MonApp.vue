<script setup>
  import { onMounted } from "vue";
  import { Tooltip, initTWE } from "tw-elements";

  onMounted(() => {
    initTWE({ Tooltip });
  });
</script>

<template>
  <NavBar/>
  <router-view/>
  <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'MonApp.vue',
  components: {
    NavBar,
    FooterBar
  }
}
</script>