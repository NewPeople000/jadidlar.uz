const koruvlarItems = [
  {
    id: 204,
    title: "Prezident tashabbusi: jadidlar avlodlari birlashdi",
    poster: "",
    videoUrl: "https://www.youtube.com/watch?v=IaqaD04T2gg&t=1s",
  },
  {
    id: 203,
    title:
      "Farg'ona davlat universitetida jadidchilik milliy harakati vakili Obidjon Mahmud merosiga...",
    poster: "",
    videoUrl: "",
  },
  {
    id: 202,
    title: "Cho'lpon. Ey, Go'zal Farg'ona",
    poster: "",
    videoUrl: "",
  },
  {
    id: 201,
    title: "Cho'lpon. Aldanish",
    poster: "",
    videoUrl: "",
  },
];

let activeIndex = 0;
let isPlayingInline = false;

const breadcrumbTitleEl = document.getElementById("breadcrumbTitle");
const playerStageEl = document.getElementById("playerStage");
const videoPlaylistEl = document.getElementById("videoPlaylist");

async function injectComponent(id, path) {
  const el = document.getElementById(id);
  if (!el || el.children.length > 0) return;

  try {
    const res = await fetch(path);
    if (res.ok) {
      el.innerHTML = await res.text();
    }
  } catch (_) {
    // layout.js yuklagan bo'lsa jim o'tkazib yuboriladi
  }
}

function extractYouTubeId(url) {
  if (!url || typeof url !== "string") return "";

  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})(?:[?&/]|$)/,
  ];

  for (const regex of patterns) {
    const match = url.trim().match(regex);
    if (match && match[1]) return match[1];
  }

  return "";
}

function extractStartSeconds(url) {
  if (!url || typeof url !== "string") return 0;

  const tMatch = url.match(/[?&](?:t|start|time_continue)=(\d+)s?/);
  return tMatch ? Number(tMatch[1]) || 0 : 0;
}

function getYouTubeEmbedUrl(url) {
  const videoId = extractYouTubeId(url);
  if (!videoId) return "";

  const startSec = extractStartSeconds(url);
  const startParam = startSec > 0 ? `&start=${startSec}` : "";
  return `https://www.youtube.com/embed/${videoId}?autoplay=1${startParam}`;
}

function getItemPoster(item) {
  if (item.poster) return item.poster;
  const videoId = extractYouTubeId(item.videoUrl);
  if (videoId) return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return "https://via.placeholder.com/960x540?text=Koruvlar";
}

function renderMainPlayer() {
  const item = koruvlarItems[activeIndex];
  if (!item || !playerStageEl) return;

  if (breadcrumbTitleEl) {
    breadcrumbTitleEl.textContent = item.title;
  }

  const posterSrc = getItemPoster(item);

  if (!isPlayingInline) {
    playerStageEl.innerHTML = `
        <div class="player-poster" id="playerPoster" role="button" tabindex="0" aria-label="${item.title} videosini ko'rish">
          <img
            src="${posterSrc}"
            alt="${item.title}"
            onerror="this.src='https://via.placeholder.com/960x540?text=Koruvlar'"
          />
          <button type="button" class="play-trigger-btn" id="playTriggerBtn" aria-label="Videoni ijro etish">
            <span class="play-triangle"></span>
          </button>
        </div>
      `;

    const posterEl = document.getElementById("playerPoster");
    const triggerPlay = () => {
      isPlayingInline = true;
      renderMainPlayer();
    };

    if (posterEl) {
      posterEl.addEventListener("click", triggerPlay);
      posterEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerPlay();
        }
      });
    }
    return;
  }

  const ytEmbed = getYouTubeEmbedUrl(item.videoUrl);

  if (ytEmbed) {
    playerStageEl.innerHTML = `
        <iframe
          src="${ytEmbed}"
          title="${item.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
  } else if (item.videoUrl) {
    playerStageEl.innerHTML = `
        <video src="${item.videoUrl}" poster="${posterSrc}" controls autoplay playsinline></video>
      `;
  } else {
    playerStageEl.innerHTML = `
        <video poster="${posterSrc}" controls autoplay playsinline>
          <source src="" type="video/mp4" />
        </video>
      `;
  }
}

function renderPlaylist() {
  if (!videoPlaylistEl) return;

  videoPlaylistEl.innerHTML = koruvlarItems
    .map((item, idx) => {
      const thumbSrc = getItemPoster(item);
      const activeClass = idx === activeIndex ? "is-active" : "";
      return `
          <article class="playlist-card ${activeClass}" data-index="${idx}">
            <div class="playlist-thumb">
              <img
                src="${thumbSrc}"
                alt="${item.title}"
                onerror="this.src='https://via.placeholder.com/240x150?text=Video'"
              />
            </div>
            <h3 class="playlist-title">${item.title}</h3>
          </article>
        `;
    })
    .join("");
}

if (videoPlaylistEl) {
  videoPlaylistEl.addEventListener("click", (e) => {
    const card = e.target.closest(".playlist-card");
    if (!card) return;
    const idx = Number(card.dataset.index);
    if (!Number.isInteger(idx) || !koruvlarItems[idx]) return;

    activeIndex = idx;
    isPlayingInline = false;
    renderMainPlayer();
    renderPlaylist();
  });
}

injectComponent("navbar", "../../../components/navbar.html");
injectComponent("footer", "../../../components/footer.html");
renderMainPlayer();
renderPlaylist();
