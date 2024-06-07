<template>
    <div class="image-fond">
        <div class="formations py-16 lg:py-24">
            <div class="grid  w-2/4 mx-auto gap-4 text-justify">
                <h2 class="mb-2 text-xl font-medium">Formations</h2>   
                <p class="mb-4 text-base fly-in-left">
                    Après avoir obtenu ma licence en Ressources Humaines, j'ai choisi de poursuivre mes études en me spécialisant dans le Management et la Stratégie d'Entreprise lors de mon mastère. Cependant, j'ai rapidement ressenti le besoin de m'épanouir pleinement, tant sur le plan personnel que professionnel. C'est ainsi que j'ai pris la décision de m'orienter vers un domaine où je pourrais pleinement exploiter ma créativité. Mon objectif était de trouver un emploi qui me sorte de la routine quotidienne et qui me confronte régulièrement à de nouveaux défis.
                </p>
                <p class="mb-4 text-base fly-in-right">
                    Passionnée par les défis et animée par une volonté constante de me réinventer, j'ai choisi un secteur d'activité qui nous pousse chaque jour à repousser nos limites. Dans cette optique d'apprentissage continu et d'adaptation permanente, j'ai suivi une première formation d'un an au Centre de Formation EDUMOTIV, où j'ai validé le titre de Concepteur Designer UI. Par la suite, j'ai enrichi mes compétences en suivant une deuxième formation de Développeur Web et Web Mobile au centre AFPA de Créteil.
                </p>
                <p class="mb-4 text-base fly-in-left">
                    Pour continuer à progresser et à me perfectionner, je reste constamment à l'affût des dernières avancées technologiques. Je participe activement à des événements liés à la tech, en particulier ceux centrés sur le numérique. Actuellement, je suis engagée dans un processus d'autoformation, cherchant toujours à approfondir mes connaissances et à rester à la pointe des innovations dans mon domaine.
                </p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

h2 {
    color: rgb(170, 122, 67);
    font-weight: bold;
    font-size: xx-large;
}

.image-fond{
    background-image: url("../assets/images/plumesBleu.jpg") ;
}

.formations {
    animation: animateBg 14s linear infinite;
    background: rgba(73, 142, 142, 0.769);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(73, 142, 142, 0.3);
    background-size: 300% 100%;
    color:white;
}
@keyframes animateBg {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
}



@keyframes fly-in-left {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fly-in-right {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fly-in-left {
    animation: fly-in-left 0.5s ease-out forwards;
}

.fly-in-right {
    animation: fly-in-right 0.5s ease-out forwards;
}

</style>