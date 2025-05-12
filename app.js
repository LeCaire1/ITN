// Liste des vidéos (films ou séries) à afficher dans la galerie
const videos = [
    {
        title: "Film 1",
        thumbnail: "https://via.placeholder.com/200x300",
        videoUrl: "https://www.example.com/video1.mp4"
    },
    {
        title: "Film 2",
        thumbnail: "https://via.placeholder.com/200x300",
        videoUrl: "https://www.example.com/video2.mp4"
    },
    {
        title: "Film 3",
        thumbnail: "https://via.placeholder.com/200x300",
        videoUrl: "https://www.example.com/video3.mp4"
    },
    {
        title: "Film 4",
        thumbnail: "https://via.placeholder.com/200x300",
        videoUrl: "https://www.example.com/video4.mp4"
    }
];

// Fonction pour afficher les vidéos
function displayVideos() {
    const gallery = document.querySelector(".video-gallery");

    videos.forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <button onclick="playVideo('${video.videoUrl}')">Regarder</button>
        `;

        gallery.appendChild(videoItem);
    });
}

// Fonction pour jouer une vidéo
function playVideo(url) {
    const videoPlayer = document.createElement("video");
    videoPlayer.src = url;
    videoPlayer.controls = true;
    videoPlayer.autoplay = true;

    const contentSection = document.querySelector(".content");
    contentSection.innerHTML = "";
    contentSection.appendChild(videoPlayer);
}

// Affichage des vidéos dès le chargement de la page
window.onload = displayVideos;
