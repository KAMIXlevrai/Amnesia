const games = [
    { 
        title: "Adobe After Effects v24.5.0.052", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/640px-Adobe_After_Effects_CC_icon.svg.png",
        url: "https://pixeldrain.com/api/file/4FMZuktL?download"
    },
    { 
        title: "Adobe Photoshop 2024 v25.9.1.626", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
        url: "https://pixeldrain.com/api/file/vCy7qcyB?download"
    },
    { 
        title: "Adobe Premiere Pro 2024 v.24.3", 
        image: "https://paas-file-pro.igv.com/shop/64d8f560438ce6523ecf9e56.png",
        url: "https://pixeldrain.com/api/file/aN5mGXWk?download"
    },
    { 
        title: "Wondershare Filmora 13.3.12.7152", 
        image: "https://cdn.webandseo.fr/wp-content/uploads/2024/12/filmora-logo-1.png",
        url: "https://pixeldrain.com/api/file/y9CcbFKT?download"
    },
    { 
        title: "FL Studio 20.9.2 Producer Edition", 
        image: "https://www.pugetsystems.com/wp-content/uploads/2023/02/FL-Studio-Logo-Icon.png?wsr",
        url: "https://pixeldrain.com/api/file/QjuZ4A56?download"
    },
    { 
        title: "Adobe Illustrator CC 2020", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
        url: "https://pixeldrain.com/api/file/9RBPbKW2?download"
    },
    { 
        title: "Topaz Video AI Pro 6.1.0", 
        image: "https://cdn-tlc.01net.com/h20PLMJ48fVlDFOV7UsMVWSkpdl5yqctPLoAEpGG.png",
        url: "https://pixeldrain.com/api/file/34oXsoro?download"
    },
    { 
        title: "MAGIX VEGAS Pro v21", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Vegas_Pro_21_logo.svg/1200px-Vegas_Pro_21_logo.svg.png",
        url: "https://pixeldrain.com/api/file/zsXPx6uS?download"
    },
    { 
        title: "Adobe InDesign 2024", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
        url: "https://pixeldrain.com/api/file/aeRETgBe?download"
    },
    { 
        title: "Zelda: Breath of the Wild", 
        image: "https://upload.wikimedia.org/wikipedia/en/6/60/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        url: "https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/"
    },
    { 
        title: "League of Legends", 
        image: "https://upload.wikimedia.org/wikipedia/en/b/bb/League_of_Legends_logo.png",
        url: "https://www.leagueoflegends.com/"
    },
    { 
        title: "Among Us", 
        image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Among_Us_cover_art.jpg",
        url: "https://store.steampowered.com/app/945360/Among_Us/"
    }
];

let currentPage = 0;
const gamesPerPage = 6;
let filteredGames = [...games]; // Copie de la liste filtrée des jeux

function renderGames() {
    const gameList = document.getElementById("game-list");
    gameList.innerHTML = "";
    const start = currentPage * gamesPerPage;
    const end = start + gamesPerPage;
    
    filteredGames.slice(start, end).forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h2>${game.title}</h2>
            <a href="#" class="download-btn" onclick="confirmDownload('${game.url}', '${game.title}')">Download</a>
        `;
        gameList.appendChild(card);
    });

    updatePaginationButtons();
}

function filterGames() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm));
    currentPage = 0; // Revenir à la première page après une recherche
    renderGames();
}

function updatePaginationButtons() {
    document.querySelector(".pagination button:first-child").disabled = currentPage === 0;
    document.querySelector(".pagination button:last-child").disabled = (currentPage + 1) * gamesPerPage >= filteredGames.length;
}

function nextPage() {
    if ((currentPage + 1) * gamesPerPage < filteredGames.length) {
        currentPage++;
        renderGames();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        renderGames();
    }
}

// ✅ Fonction pour demander une confirmation avant de rediriger vers la page du jeu
function confirmDownload(url, title) {
    if (confirm(`Voulez-vous télécharger ${title} ?`)) {
        window.open(url, "_blank"); // Ouvre le lien dans un nouvel onglet
    }
}

// Affichage initial des jeux
renderGames();
