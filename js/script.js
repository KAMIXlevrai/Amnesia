const games = [
    { title: "Adobe After Effects 2024 v24.5.0.052", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/640px-Adobe_After_Effects_CC_icon.svg.png", url: "https://pixeldrain.com/api/file/4FMZuktL?download" },
    { title: "Adobe Photoshop 2024 v25.9.1.626", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png", url: "https://pixeldrain.com/api/file/vCy7qcyB?download" },
    { title: "Adobe Premiere Pro 2024 v24.3", image: "https://paas-file-pro.igv.com/shop/64d8f560438ce6523ecf9e56.png", url: "https://pixeldrain.com/api/file/aN5mGXWk?download" },
    { title: "Wondershare Filmora 13 v13.3.12.7152", image: "https://cdn.webandseo.fr/wp-content/uploads/2024/12/filmora-logo-1.png", url: "https://pixeldrain.com/api/file/y9CcbFKT?download" },
    { title: "FL Studio 20.9.2 Producer Edition", image: "https://www.pugetsystems.com/wp-content/uploads/2023/02/FL-Studio-Logo-Icon.png?wsr", url: "https://pixeldrain.com/api/file/QjuZ4A56?download" },
    { title: "Adobe Illustrator CC 2020", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png", url: "https://pixeldrain.com/api/file/9RBPbKW2?download" },
    { title: "Topaz Video AI Pro v6.1.0", image: "https://cdn-tlc.01net.com/h20PLMJ48fVlDFOV7UsMVWSkpdl5yqctPLoAEpGG.png", url: "https://pixeldrain.com/api/file/34oXsoro?download" },
    { title: "Sony VEGAS Pro v21", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Vegas_Pro_21_logo.svg/1200px-Vegas_Pro_21_logo.svg.png", url: "https://pixeldrain.com/api/file/zsXPx6uS?download" },
    { title: "Adobe InDesign 2024", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png", url: "https://pixeldrain.com/api/file/aeRETgBe?download" },
    { title: "SoundPad Pro", image: "https://cdn2.steamgriddb.com/icon_thumb/3aa67d197dc70446f36ddbd2fd537d7d.png", url: "https://pixeldrain.com/api/file/kaj6E8Lg?download" },
    { title: "Adobe Illustrator 2024", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png", url: "https://pixeldrain.com/api/file/nm8BBF5h?download" },
    { title: "Adobe Acrobat", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/800px-Adobe_Acrobat_DC_logo_2020.svg.png", url: "https://pixeldrain.com/api/file/Cv81uCEQ?download" },
    { title: "DaVinci Resolve Studio v18.6.6.0007", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DaVinci_Resolve_Studio.png/640px-DaVinci_Resolve_Studio.png", url: "https://pixeldrain.com/api/file/QpEXWxh8?download" },
    { title: "Adobe Animate 2024 v24.0", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1200px-Adobe_Animate_CC_icon_%282020%29.svg.png", url: "https://pixeldrain.com/api/file/CCUDf5SX?download" },
    { title: "Wallpaper Engine v2.1.32", image: "https://play-lh.googleusercontent.com/MumkEpSL7dj16Rt_JfqgKPmMhaWlBhQN5HD2sxNpCgKhUEiIkfcktW_pllWM3wfKeQ=w240-h480-rw", url: "https://pixeldrain.com/api/file/ZcCSz5EX?download" }
];

let currentPage = 0;
const gamesPerPage = 6;
let filteredGames = [...games];

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

    updatePagination();
}

function filterGames() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm));
    currentPage = 0;
    renderGames();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i + 1;
        button.onclick = () => {
            currentPage = i;
            renderGames();
        };
        if (i === currentPage) button.classList.add("active");
        paginationContainer.appendChild(button);
    }
}

function confirmDownload(url, title) {
    if (confirm(`Voulez-vous télécharger ${title} ?`)) {
        window.open(url, "_blank");
    }
}

renderGames();
