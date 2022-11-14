document.addEventListener("DOMContentLoaded", () => {
    extraer();
})

const extraer = async () => {
     for (let i = 1; i <= 20; i++) {
         await fetchData(i);
    }
}


const fetchData = async (id) => {
    try{
        loadingData (true);

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json()

        mostrarCard(data)
    } catch (error) {
        console.log(error)
    } finally{
        loadingData (false);
    }
}

const mostrarCard = (pokemon) => {
    const cards = document.getElementById("card-dinamicas")
    const templateCard = document.getElementById("template-card").content
    const fragment = document.createDocumentFragment()
    const clone = templateCard.cloneNode(true)

    clone.querySelector("h5").textContent = pokemon.name
    clone.querySelector("img").setAttribute("src", pokemon.sprites.other.dream_world.front_default)


    fragment.appendChild(clone)
    cards.appendChild(fragment)
}

const loadingData = estado => {
    const loading = document.getElementById("loading")
    if(estado){
        loading.classList.remove("d-none")
    } else{
        loading.classList.add("d-none")
    }
    
}

