<script setup>
  import { onMounted } from "vue";
  import { Collapse,
  Dropdown, Tooltip, initTWE } from "tw-elements";

  onMounted(() => {
    initTWE({ Collapse,
  Dropdown, Tooltip });
  });

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var headerHeight = document.querySelector('header').offsetHeight;
        var navigation = document.querySelector('.navigation');
        
        if (window.scrollY >= headerHeight - 100) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });
});
</script>

<template>
  <!-- Main navigation container -->
  <nav
    class="navigation flex-no-wrap relative flex w-full items-center bg-zinc-50 my-12 px-12 py-2 shadow-dark-mild dark:bg-surface-dark lg:flex-wrap lg:justify-start lg:py-4">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <!-- Hamburger button for mobile view -->
      <button
        class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-twe-collapse-init
        data-twe-target="#navbarSupportedContent12"
        aria-controls="navbarSupportedContent12"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span
          class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <!-- Collapsible navigation container -->
      <div
        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent12"
        data-twe-collapse-item>
        <!-- Logo -->
        <a
          class="mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0"
          href="#">
          <img
            src="@/assets/icones/N2I.svg"
            style="height: 15px"
            alt="TE Logo"
            loading="lazy" />
        </a>
        <!-- Left navigation links -->
        <ul
          class="menu-nav list-style-none me-auto flex flex-col ps-0 lg:flex-row"
          data-twe-navbar-nav-ref>
          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <!-- Dashboard link -->
            <a
              class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#"
              data-twe-nav-link-ref
              ><router-link class=nav-link to="/">About me</router-link></a
            >
          </li>
          <!-- Team link -->
          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#"
              data-twe-nav-link-ref
              ><router-link class=nav-link to="/MyWork">Réalisations </router-link></a
            >
          </li>
          <!-- Projects link -->
          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
            <a
              class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#"
              data-twe-nav-link-ref
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <!-- Right elements -->
      <div class="icones relative flex items-center">
        <img src="@/assets/icones/blanc_mage_behance.svg"/>
        <img src="@/assets/icones/blanc_ri_instagram-fill.svg"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation{
  display: flex;
  justify-content: space-evenly;
  background: rgba(255, 255, 255, 0.256);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: fixed;
  z-index: 10;
}

.navigation.scrolled {
    /* Ajoutez ici les styles que vous souhaitez appliquer lorsque la barre de navigation est scrollée */
    background-color: #b58144;
    /* From https://css.glass */
    background: rgba(181, 129, 68, 0.71);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);
    border: 1px solid rgba(192, 147, 97, 0.3);
}

.menu-nav{
  display: flex;
  align-self: center;
}

a {
  color: rgb(255, 255, 255);
  font-style: normal;
}
</style>

<!-- <script>
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var headerHeight = document.querySelector('header').offsetHeight;
        var navigation = document.querySelector('.navigation');
        
        if (window.scrollY >= headerHeight - 100) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });
});
</script> -->

<!-- <script>
document.addEventListener("DOMContentLoaded", function() {
    var headerExists = document.querySelector('header');
    var navigation = document.querySelector('.navigation');

    if (headerExists) {
        window.addEventListener("scroll", function() {
            var headerHeight = headerExists.offsetHeight;
            
            if (window.scrollY >= headerHeight - 100) {
                navigation.classList.add('scrolled');
            } else {
                navigation.classList.remove('scrolled');
            }
        });
    } else {
        navigation.classList.remove('navigation');
        navigation.classList.add('scrolled');
    }
});
</script> -->
