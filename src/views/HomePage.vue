<template>
    <div>
      <HeaderApp />  
      <AboutMe /> 
      <MesFormations /> 
      <MesCompetences/>
      <ToolsTech />  
      <ContactForm/>
    </div>
</template>
  
<script>
  import HeaderApp from '@/components/HeaderApp.vue'
  import AboutMe from '@/components/AboutMe.vue'
  import MesFormations from '@/components/MesFormations.vue'
  import ToolsTech from '@/components/ToolsTech.vue'
  import ContactForm from '@/components/ContactForm.vue'
  import MesCompetences from '@/components/MesCompetences.vue'

  export default {
    name: 'HomePage',
    components: {
    HeaderApp,
    AboutMe,
    MesFormations,
    ToolsTech,
    ContactForm,
    MesCompetences
    },
  }
</script>