
let resultat = document.querySelector('.resultat');
let apikey = "6c5b4f0066b10cd4b57cf6b6571c0ade";
let rech = document.querySelector('form');
let input = document.querySelector('#rechercher')


fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
.then(res => res.json())
.then(film => {
    let films = film.results
//    console.log(films.results);

   affichage(films)

} )

rech.addEventListener('submit', (e) => {
    e.preventDefault();
    let search = input.value;


   console.log(search);

   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${search}`)
        .then(res => res.json())
         .then(films => {
            //  films=films.results
            films = films?.results
             console.log(films);
            //  affichage(films.results); 
            resultat.innerHTML = ''
            affichage(films)          
    })
   
    
})

function affichage(films) {

for (let i = 0; i < films.length; i++) {
    

    resultat.innerHTML+= `
    <div class="film">
    <div class="img"> <img src="https://image.tmdb.org/t/p/w500${films[i].backdrop_path || films[i].poster_path}" /> </div>
    
     <div class="infos">
     <h2> Titre: ${films[i].title}</h2> 
    <h3>Date:  ${films[i].release_date} <h3>
    </div>
    `;
}   
    
}


































// const  recherche = async() => {

//     films = await fetch(` https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
//     .then(res => res.json()) 
//     return films.results;
// }

// const affichage = async() => {
//     film =await recherche();

//     if (film == null) {
//         resultat.innerHTML = `Aucun resultat`;
//     }
    
// for (let i = 0; i < film.length; i++) {
//     const element = film[i];

//     resultat.innerHTML+= `
//     <div class="film">
//     <div class="img"> <img src="https://image.tmdb.org/t/p/w500${film[i].backdrop_path}" /> </div>
    
//      <div class="infos">
//      <h2> Titre: ${film[i].title}</h2> 
//     <h3>Date:  ${film[i].release_date} <h3>
//     </div>
//     `;
// }   
 
// }
//  affichage();


// let search ='';


// rech.addEventListener('submit', (e) => {
//     e.preventDefault();
//    search= input.value;


//    console.log(search);

//    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${search}`)
//         .then(res => res.json())
//          .then(films => {
//              films=films.results
//             console.log(films);
//             for (let i = 0; i < films.length; i++) {
//                 const element = films[i];
            
//                 resultat.innerHTML+= `
//                 <div class="film">
//                 <div class="img"> <img src="https://image.tmdb.org/t/p/w500${films[i].backdrop_path}" /> </div>
                
//                  <div class="infos">
//                  <h2> Titre: ${films[i].title}</h2> 
//                 <h3>Date:  ${films[i].release_date} <h3>
//                 </div>
//                 `;
//             }   
             
            




       
//     })
   

// })

























 let pagenext = 1;

window.addEventListener('scroll', () => {
    

    const {scrollTop, scrollHeight, clientHeight } = document.documentElement;
    let defile = scrollHeight - clientHeight;
    console.log("ttttt");
    
    if (defile == scrollY ) {
        pagenext++
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&languague=en-US&page=${pagenext}`)
        .then(res => res.json())
         .then(films => {
             films=films.results
            console.log("rrrr");
            for (let i = 0; i < films.length; i++) {
                const element = films[i];
            console.log('gfgnbgf');
                resultat.innerHTML+= `
                <div class="film">
                <div class="img"> <img src="https://image.tmdb.org/t/p/w500${films[i].backdrop_path}" /> </div>
                
                 <div class="infos">
                 <h2> Titre: ${films[i].title}</h2> 
                <h3>Date:  ${films[i].release_date} <h3>
                </div>
                `;
            } ;  





       
    })
}
})

// fetch("https://api.themoviedb.org/3/discover/movie?api_key=7843f8d22a43911f15301ef8d76338ae&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false")
// .then(res => res.json())
// .then(films => {
//    console.log(films.results);
//     for (let i = 0; i < films.results.length; i++) {
//         const element = films.results[i];

//         resultat.innerHTML+= `
//         <div class="film">
//         <div class="img"> <img src="https://image.tmdb.org/t/p/w500${films.results[i].backdrop_path}" /> </div>
        
//          <div class="infos">
//          <h2> Titre: ${films.results[i].original_title}</h2> 
//         <h3>Date:  ${films.results[i].release_date} <h3>
//         </div>
//         `;
// }   

// } )