function start() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("lock").classList.remove("hidden");
}

function unlock() {
  document.getElementById("lock").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  const music = document.getElementById("music");
  music.play().catch(() => {});

  fadeMusic();
  hearts();
  typing();
}

/* 🎵 MUSIC FADE */
function fadeMusic() {
  const music = document.getElementById("music");
  music.volume = 0;

  let v = 0;
  const t = setInterval(() => {
    if (v < 1) {
      v += 0.05;
      music.volume = v;
    } else {
      clearInterval(t);
    }
  }, 200);
}

/* 💬 TYPING */
function typing() {
  const text =
    "You are my favourite person in the world 💖 I’m so grateful for you. Happy Birthday ✨";

  let i = 0;

  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text[i];
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

/* 💖 HEARTS */
function hearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.classList.add("heart");
    h.innerHTML = "💖";

    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 6000);
  }, 200);
}