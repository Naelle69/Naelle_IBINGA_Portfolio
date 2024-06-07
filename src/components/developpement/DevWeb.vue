<template>
  <div class="container mx-auto mt-24 md:mt-32 p-6 md:p-24">
    <!-- Section: Design Block -->
    <section class="text-center">
      <h2 class="mb-12 pb-4 text-center text-3xl font-bold">
        Développement
      </h2>

      <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">

        <div class="card-projet mb-6 lg:mb-0 z-0">
          <div class="relative z-1 block rounded-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex">
              <div class="relative mx-4 -mt-4 w-full bg-[#feeeda] overflow-hidden rounded-sm bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="@/assets/images/sites/pokGourmet/logo principal.png" class="w-3/5 md:w-2/4 h-auto" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="mb-4 text-lg font-bold">Pok'Gourmet</h5>
              <p class="mb-6">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                diam orci, nec ornare metus semper sed. Integer volutpat
                ornare erat sit amet rutrum.
              </p>
              <button class="button" popovertarget="mypopoverGourmet" popovertargetaction="show">Voir plus</button>
              
              <div id="mypopoverGourmet" popover class="custom-popover">
                  <div class="pop scroller flex h-full justify-center items-center">
                    <div class="cardScroll bg-[#ffffff] p-5 flex flex-col justify-center" >
                      <img src="@/assets/images/sites/pokGourmet/logo principal.png" alt="Image 1" height="auto" width="200px">
                      <h5>Logo</h5>
                    </div>
                    
                    <!-- Column -->
                    <div class="cardScroll">
                      <img class="maquette-gourmet" src="@/assets/images/sites/pokGourmet/capture-logo.jpg" alt="Image 3" height="auto" width=""> 
                      <h5>Logo</h5>
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img class="maquette-gourmet" src="@/assets/images/sites/pokGourmet/capture-svg.jpg" alt="Image 2" height="auto" width="">
                      <h5>Fonds SVG</h5>
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img class="maquette-gourmet" src="@/assets/images/sites/pokGourmet/Group 115.png" alt="Image 2" height="auto" width="">
                      <h5>Mobile</h5>
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img class="maquette-gourmet" src="@/assets/images/sites/pokGourmet/Group 113.jpg" alt="Image 2" height="auto" width="">
                      <h5>Tablette</h5>
                    </div>

                    <div class="cardScroll">
                      <img class=" maquette-gourmet" src="@/assets/images/sites/pokGourmet/Group 114.jpg" alt="Image 1" height="auto" width="">
                      <h5>PC</h5>
                    </div> 
                  </div>
                  <a class="p-5" href="https://github.com/Naelle69/site_pg_symfony.git">Lien github</a>
                </div>
            </div>
          </div>
        </div>

        <div class="card-projet mb-6 lg:mb-0 z-0">
          <div class=" relative block rounded-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex ">
              <div class="relative mx-4 -mt-4 w-full bg-[#fbecd0] overflow-hidden rounded-sm bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                data-te-ripple-init data-te-ripple-color="light">
                <a class="logoGame">Games'<br>Society</a>
                
              </div>
            </div>
            <div class="p-6">
              <h5 class="mb-4 text-lg font-bold">Games'Society</h5>
              <p class="mb-6">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                diam orci, nec ornare metus semper sed. Integer volutpat
                ornare erat sit amet rutrum.
              </p>
              <button class="button" popovertarget="mypopoverGame" popovertargetaction="show">Voir plus</button>
              
              <div id="mypopoverGame" popover class="custom-popover">
                  <div class="pop scroller flex justify-center items-center">

                    <!-- Column -->
                    <div class="cardScroll">
                      <img  class=" ImageGame" src="@/assets/images/sites/game society/mobile1.jpg" alt="Image 3" height="" width=""> 
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img class=" ImageGame" src="@/assets/images/sites/game society/MOBILE2.jpg" alt="Image 2" height="" width="">
                    </div>

                    <div class="cardScroll">
                      <img class=" ImageGame" src="@/assets/images/sites/game society/MOBILE3.jpg" alt="Image 1" height="" width="">
                    </div>
                   
                    <!-- Column -->
                    <div class="cardScroll">
                      <img  class=" ImageGame" src="@/assets/images/sites/game society/page1.jpg" alt="Image 2" height="" width="">
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img class=" ImageGame" src="@/assets/images/sites/game society/page2.jpg" alt="Image 2" height="" width="">
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img  class=" ImageGame" src="@/assets/images/sites/game society/carte boissons.jpg" alt="Image 2" height="" width="">
                    </div>

                    <div class="cardScroll">
                      <img  class=" ImageGame" src="@/assets/images/sites/game society/carte encas.jpg" alt="Image 1" height="" width="">
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img  class=" ImageGame" src="@/assets/images/sites/game society/carte jeux.jpg" alt="Image 2" height="" width="">
                    </div>
                  </div>
                  <div class="p-5"><a href="https://site-bar-jeux-5pmp-94fgpwhvy-naelle69.vercel.app/"  target="_blank">Voir le site</a></div>
                </div>              
            </div>
          </div>
        </div>

        <div class="card-projet mb-6 lg:mb-0 z-0">
          <div class="relative block rounded-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex">
              <div class="relative mx-4 -mt-4 w-full bg-[#ffdbbb] overflow-hidden rounded-sm bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="@/assets/images/images-sect-contact/packagings/BallerineMixte/logo-ballerine-mixte.svg" class="w-auto h-1/3 md:h-2/5" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="mb-4 text-lg font-bold">La ballerine mixte</h5>
              <p class="mb-6">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                diam orci, nec ornare metus semper sed. Integer volutpat
                ornare erat sit amet rutrum.
              </p>
              <button class="button" popovertarget="mypopovermixte" popovertargetaction="show">Voir plus</button>
              
              <div id="mypopovermixte" popover class="custom-popover">
                  <div class=" scroller flex h-full justify-center items-center">
                      <!-- Column -->
                    <div class="cardScroll bg-[#ffffff] p-11 flex justify-center">
                      <img class="logoBallerine" src="@/assets/images/images-sect-contact/packagings/BallerineMixte/logo-ballerine-mixte.svg" alt="Image 3"> 
                    </div>

                    <div class="cardScroll flex justify-center">
                      <img class="ImageBallerine"  src="@/assets/images/images-sect-contact/packagings/BallerineMixte/maquette.jpg" alt="Image 1">
                    </div>
                    
                    <div class="cardScroll bg-[#ffdbbb] pt-11 flex justify-center">
                      <img class="ImageGame"  src="@/assets/images/images-sect-contact/packagings/BallerineMixte/pc.png" alt="Image 1">
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img class="ImageGame" src="@/assets/images/images-sect-contact/packagings/BallerineMixte/maquette2.jpg" alt="Image 2">
                    </div>

                    <div class="cardScroll flex justify-center">
                      <img class="ImageBallerine"  src="@/assets/images/images-sect-contact/packagings/BallerineMixte/maquette.jpg" alt="Image 1">
                    </div>
                    
                    <div class="cardScroll bg-[#ffdbbb] pt-11 flex justify-center">
                      <img class="ImageGame"  src="@/assets/images/images-sect-contact/packagings/BallerineMixte/pc.png" alt="Image 1">
                    </div>

                    <!-- Column -->
                    <div class="cardScroll">
                      <img class="ImageGame" src="@/assets/images/images-sect-contact/packagings/BallerineMixte/maquette2.jpg" alt="Image 2">
                    </div>
                  </div>
                  <div class="p-5"><a href="https://ballerine-264z83txw-naelle69s-projects.vercel.app/" target="_blank">Voir le site</a></div>
              </div>            
            </div>      
          </div>
        </div>


      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>


<style scoped>

h2 {
    color: #aa7a43;
    /* font-size: clamp(18px, 4vw, 44px); */
    font-size: clamp(18px, 3vw, 44px);
    line-height: 44px;
    margin: 0 0 20px;
    font-family: 'Oswald', sans-serif;
    font-weight:lighter;
    text-transform: uppercase;
}

h5{
  color:#aa7d43;
  font-family: 'Oswald', sans-serif;
}

.logoGame{
  color: #6B8196;
  font-size: xx-large;
  font-weight: bold;
}

a{
  color:rgba(73, 142, 142) ;
}

.maquette-gourmet{
  height:300px;
  width: auto;
}

.logoBallerine{
  height:auto;
  width:200px ;
}
 
.ImageGame{
  height: 200px;
  width: auto;
}

.ImageBallerine{
  height: auto;
  width: 200px;
}

.flex .relative{
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block{
  background: rgba(231, 231, 231, 0.256);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.button{
  border: 1px solid hsla(0, 0%, 89%, 0.3);
  background: rgba(73, 142, 142);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(4.2px);
  color: rgb(255, 255, 255);
  padding: 10px 15px;
}

.custom-popover{
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(170, 122, 67, 0.297);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.2px);
  -webkit-backdrop-filter: blur(4.2px);
  min-width: 200px;
  width: 80%;
  padding: 20px;
  overflow-x: auto; /* Activer le défilement horizontal */
  white-space: nowrap; /* Empêcher le retour à la ligne des éléments */
}

.cardScroll {
  flex: 0 0 auto; /* Empêcher les cartes de s'étirer */
  margin-right: 10px; /* Marge entre chaque carte */
  width: auto;
}

.scroller {
  width: 100%;
  height: 100%;
  scrollbar-color: rgb(170, 122, 67) rgb(247, 242, 235);
  scrollbar-width: 20px;
  display: flex; /* Utiliser un conteneur flex pour les éléments enfants */
  overflow-x: auto; /* Activer le défilement horizontal */
  white-space: nowrap; /* Empêcher le retour à la ligne des éléments */
  justify-content: flex-start; /* Aligner le contenu au début */
}

</style>