<template>
  <div>
  
    <HeaderRea />  
     <DevWeb />
     <GraphicsDesign />
     
    <!-- <DesignUiUx /> 
    -->
  </div>
</template>
  
<script>
import HeaderRea from '@/components/Conception/HeaderRea.vue'
import GraphicsDesign from '@/components/Conception/GraphicsDesign.vue'


import DevWeb from '@/components/developpement/DevWeb.vue' 
/*import DesignUiUx from '@/components/Conception/DesignUiUx.vue'
*/

export default {
  name: 'MyWork',
  components: {
   
    HeaderRea,
    GraphicsDesign,
    DevWeb,
   /* 
   DesignUiUx,
     */
  }
}
</script>
