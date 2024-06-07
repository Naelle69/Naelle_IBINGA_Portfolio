<template> 
<!-- Section: Design Block -->
<header class="header mb-40 flex items-center">
  <div class="container  mx-auto md:px-6">
    <!-- Section: Design Block -->
    <section class="text-center lg:text-left">
      <div class="px-6 py-12 md:px-12">
        <div class="grid items-center lg:grid-cols-2 lg:gap-x-12">
          <div class="mb-12 lg:mb-0">
            <h2 class="my-12 text-xl md:text-5xl leading-tight tracking-tight">
              N2I Studio, <br />
              <span class="text-success dark:text-success-400">le meilleur choix pour donner vie à vos projets</span>
            </h2>
            <a class="button mb-2 inline-block rounded-sm shadow-dark-mild dark:bg-surface-dark bg-success px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Me contacter</a>
            <!--  <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:text-success-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Nous contacter</a> -->
          </div>

          <div class=" mb-12 md:mb-0">
              <img src="@/assets/images/images-sect-contact/cafePC.png"
              class="" alt="" />
          </div>
        </div>
      </div>
    </section>
</div>
</header>

</template>


<style scoped>
.header {
  width: 100%;
  height: 100vh;
  background-color: #498e8e; /* vert 4d621d  415c02*/
}

.fond-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  -webkit-backdrop-filter: blur(4.2px);
  z-index: 2;
}

h2, span{
  color: rgb(255, 255, 255);
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif
}

.bloc-image{
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  -webkit-backdrop-filter: blur(4.2px);
}

/* span{
  color:#aa7a43;
} */

.button{
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  -webkit-backdrop-filter: blur(4.2px);
  color: white;
}

</style>
