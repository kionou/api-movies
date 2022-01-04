

// const  recherche = async() => {

//     films = await fetch(` https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
//     .then(res => res.json()) 
//     console.log(films.results);
// }

// const affichage = async() => {
//     await recherche();
    
//     resultat.innerHTML = `
//        <div class="titre">
//         <h2>${films.original_title}</h2> 
//         <div class="infos">
//         <div> origine : ${films.adult}</div>
//         </div>
    
//     `
    

// };
//  affichage();

let resultat = document.querySelector('.resultat');
fetch("https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false")
.then(res => res.json())
.then(films => {
   
    for (let i = 0; i < films.results.length; i++) {
        const element = films.results[i];

        resultat.innerHTML= `
        <div class="film">
        <h2>${films.results.adult}</h2> 
         <div class="infos">
        <div> origine : ${films.adult}</div>
        </div>
        `;
        
    





    // console.log(element);
    // const html = films.results.map(fimls => {
    //     return`
    //     <div class="film">
    //     <h2>${films.results.adult}</h2> 
    //      <div class="infos">
    //     <div> origine : ${films.adult}</div>
    //     </div>
    //     `;
     
    // })
    // .join(" ");
    // resultat.insertAdjacentHTML("afterbegin", html) 

    // console.log(html);
}   

} )
