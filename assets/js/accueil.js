
import { animate } from "https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm";

// On cible l'ID du texte
animate(
    ".hero-title", 
    { 
        opacity: [0, 1], // De invisible à visible
        y: [50, 0]       // De 50px plus bas à sa place d'origine
    }, 
    { 
        duration: 0.8,
        easing: "ease-out" 
    }
); 

animate(
    ".hero-description", 
    { 
        opacity: [0, 1], // De invisible à visible
        y: [50, 0]       // De 50px plus bas à sa place d'origine
    }, 
    { 
        duration: 0.7,
        easing: "ease-out",
        delay: 0.2
    }
);  