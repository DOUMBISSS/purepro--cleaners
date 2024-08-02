const initialState = {
    prestations: [
        {
            id:1,
            img:"femme-afro-tenant-seau-articles-nettoyage_58466-11246.avif",
            name:"Nettoyage Grand ménage",
            services:["Nettoyage fenetres/stores/murs","Nettoyage complet cuisine/chambres","Nettoyage meubles/locaux","Nettoyages des surfaces/dépoussierage"],
            price:"100 000 FCFA"
    },
    {
        id:2,
        img:"sourire-tenant-pointe-vers-seau-outils-nettoyage-jeune-homme-nettoyeur-afro-americain-uniforme-gants-isoles-fond-vert_141793-135154.avif",
        name:"Nettoyage Standard",
        services:["Nettoyage régulier de bureau,des aires communes et des sanitaires","Nettoyage cuisine/chambres/meubles","Nettoyage meubles/locaux","Nettoyages des surfaces/dépoussierage"],
        price:"120 000 FCFA"
},
{
    id:3,
    img:"femme-afro-a.avif",
    name:"Nettoyage Résidentiel",
    services:["Nettoyage régulier des surfaces/depoussierages/aspirations","Nettoyage cuisine/chambres/salle d'eau"],
    price:"70 000 FCFA"
},
{
    id:4,
    img:"plein-coup-homme-poussant-bouton-ascenseur_23-2149345535.avif",
    name:"Nettoyage Bureau",
    services:["Nettoyage régulier des bureaux/locaux archives","Nettoyage sols/meubles/vitres"],
    price:"80 000 FCFA"
},
{
    id:5,
    img:"jardinier-tondre-herbe-faux-motorisee-dans-jardin_835648-119.avif",
    name:"Nettoyage espaces extérieurs",
    services:["Nettoyage régulier des espaces extérieures/parkings/terrasses","Elimination des débris extérieurs"],
    price:"10 000 FCFA"
},
{
    id:6,
    img:"plein-coup-hommes-portant-equipement_23-2149345538.avif",
    name:"Nettoyage évènementiel",
    services:["Nettoyage après des réunions/conférences/évènements/receptions...","Gestion rapide des déchets générés lors d'évènements"],
    price:"100 000 FCFA"
},
{
    id:7,
    img:"asiatique-travailleur-nettoyage-sable-lavage-exterieur-passerelle_30478-3047.avif",
    name:"Nettoyage spécifique",
    services:["Nettoyage des travaux de rénovations/constructions"],
    price:"100 000 FCFA"
},
{
    id:8,
    img:"gros.avif",
    name:"Nettoyage Fauteuils",
    services:["Nettoyage des fauteils/canapés"],
    price:"20 000 FCFA"
},
{
    id:9,
    img:"service-moquette-1.jpg",
    name:"Nettoyage Simples ",
    services:["Nettoyage des moquettes/tapis"],
    price:"100 000 FCFA"
},
]
}

export function prestationReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-ALL-PRESTATIONS": {
            return {
                ...state,prestations : action.payload
            } 
        }
        default: {
            return state
        }
    }
  
}