<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1189868609708933');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1189868609708933&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1501570807767460');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1501570807767460&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQQQML64');</script>
<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQQQML64"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L7NF132B7S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L7NF132B7S');
</script>

<!-- Start Button Sosmed (J24 - Vertical Up | Green Theme | FIX SIMPLE: tidak nutup menu) -->
<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:900&display=swap);

:root{
  --accent-color:#9ff600;
  --base-color:#006400;
}

/* tombol utama */
.hamburg{
  position:absolute;
  width:55px;
  height:auto;
  left:1px;
  padding:.6rem;
  border:solid 1px var(--accent-color);
  background-image:linear-gradient(20deg,#1a4700 10%,#71bf01 40%,#1a4700 100%);
  border-radius:10px;

  /* ✅ cukup tinggi untuk tampil, tapi tidak niban menu */
  z-index:2;

  box-shadow:0 0 12px 1px rgba(255,255,255,.7);
}

/* container utama */
.J24-sosmed{
  display:block;
  cursor:pointer;
  position:fixed;
  bottom:15%;
  left:1px;
  font-family:Raleway,sans-serif;

  /* ✅ INI KUNCI: turunin z-index biar menu/sidebar di atas */
  z-index:2;
}

.J24-sosmed ul{
  margin:0;
  padding:0;
  position:relative;
}

.J24-sosmed ul li{
  position:absolute;
  list-style:none;
  transform:translateY(0);
  transition:all .45s ease;
  opacity:0;
}

/* OPEN: ikon naik lurus ke atas */
.J24-sosmed.open ul li:nth-child(1){ transform:translateY(-70px);  transition-delay:.05s; opacity:1; }
.J24-sosmed.open ul li:nth-child(2){ transform:translateY(-140px); transition-delay:.10s; opacity:1; }
.J24-sosmed.open ul li:nth-child(3){ transform:translateY(-210px); transition-delay:.15s; opacity:1; }
.J24-sosmed.open ul li:nth-child(4){ transform:translateY(-280px); transition-delay:.20s; opacity:1; }
.J24-sosmed.open ul li:nth-child(5){ transform:translateY(-350px); transition-delay:.25s; opacity:1; }
.J24-sosmed.open ul li:nth-child(6){ transform:translateY(-420px); transition-delay:.30s; opacity:1; }
.J24-sosmed.open ul li:nth-child(7){ transform:translateY(-490px); transition-delay:.35s; opacity:1; }

.J24-sosmed ul li a img{
  height:90%;
  width:auto;
}

.J24-sosmed ul li a{
  display:flex;
  width:50px;
  height:50px;
  border:solid 1px var(--accent-color);
  border-radius:8px;
  justify-content:center;
  align-items:center;
  background-color:#000;
  pointer-events:none;
}

.J24-sosmed.open ul li a{ pointer-events:auto; }

/* icon burger */
.bar1,.bar2,.bar3{
  width:80%;
  height:5px;
  background-color:#fff;
  margin:6px auto;
  transition:.4s;
  position:relative;
  transform:translateY(-1px);
}
.open .bar1{ transform:translate(0,10px) rotate(-225deg); }
.open .bar2{ opacity:0; transform:translate(0,-1px) rotate(-225deg); }
.open .bar3{ transform:translate(0,-12px) rotate(-315deg); }

/* tooltip */
.J24-sosmed ul li div{
  position:absolute;
  transition:all .3s ease;
  opacity:0;
  scale:.1;
  font-family:"Times New Roman",sans-serif;
  font-size:medium;
  background-image:linear-gradient(20deg,#1a4700 10%,#71bf01 40%,#1a4700 100%);
  color:#fff;
  text-wrap:nowrap;
  border:solid 1px var(--accent-color);
  padding:3px;
  border-radius:8px;

  left:60px;
  top:50%;
  transform:translateY(-50%);
}
.J24-sosmed ul li:hover div{ opacity:1; scale:1; }

/* teks attention */
.attention{
  position:relative;
  clip-path:polygon(0 0,100% 0,100% 75%,1% 75%,22% 100%,22% 75%,0 75%);
  width:100px;
  white-space:nowrap;
  height:25px;
  margin-bottom:5px;
  left:1px;
  background-color:transparent;
  cursor:default;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  padding-bottom:10px;
  opacity:0;
}

.whore{ animation:flicker .6s infinite; }
.whore:hover{ animation-duration:10s; }

@keyframes flicker{
  0%{ opacity:1 }
  50%{ opacity:0 }
  100%{ opacity:1 }
}
</style>

<div class="J24-sosmed">
  <div class="attention whore">Click Disini</div>

  <div class="hamburg" onclick="J24Function()">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>

  <ul>
    <li>
      <a href="https://linkshortener.live/wa-rtt-klikwin88" target="_blank" rel="noopener">
        <img src="https://i.postimg.cc/8z1tpjNt/KW-WHATSAPP-200.webp" alt="Whatsapp">
      </a>
      <div>Whatsapp</div>
    </li>

    <li>
      <a href="https://linkshortener.live/teleofficial-klikwin88" target="_blank" rel="noopener">
        <img src="https://i.postimg.cc/N0n4kDTT/KW-TELEGRAM-200.webp" alt="Telegram">
      </a>
      <div>Telegram</div>
    </li>


    <li>
      <a href="https://linkshortener.live/rtp-klikwin" target="_blank" rel="noopener">
        <img src="https://i.postimg.cc/sxd4t2TC/KW-RTP-200.webp" alt="Rtp Maxwin">
      </a>
      <div>Rtp Maxwin</div>
    </li>

    <li>
      <a href="https://linkshortener.live/pengaduanmember" target="_blank" rel="noopener">
        <img src="https://i.postimg.cc/kMKcWx5s/KW-PENGADUAN-200.webp" alt="Pengaduan Layanan">
      </a>
      <div>Pengaduan Layanan</div>
    </li>

    <li>
      <a href="https://linkshortener.live/livescore-klikwin88" target="_blank" rel="noopener">
        <img src="https://i.postimg.cc/d3r41Chr/KW-JADWALBOLA.webp" alt="Jadwal Bola">
      </a>
      <div>Jadwal Bola</div>
    </li>
  </ul>
</div>

<script>
const J24 = document.querySelector('.J24-sosmed');
const attention_whore = document.querySelector('.attention.whore');

function J24Function(){
  J24.classList.toggle("open");
  attention_whore.classList.remove("whore");
}
</script>
<!-- End Button Sosmed (J24 - Vertical Up | Green Theme | FIX SIMPLE) -->





<style>
  :root{
    --bg:#061A2E;              /* background banner */
    --text:#EAF6FF;
    --cta-text:#FFFFFF;
  }

  #promo-banner{
    display:none;
  }

  @media (max-width:768px){

    #promo-banner{
      display:flex;
      position:fixed;

      /* POSISI DISAMAIN DENGAN FOOTER KOTAK MERAH */
      left:8px;           /* jarak kiri */
      right:95px;         /* supaya aman dari 2 tombol bulat kanan */
      bottom:50px;        /* disesuaikan dengan tinggi footer hijau bawah */

      padding:5px 9px;
      background:var(--bg);
      color:var(--text);
      z-index:9999;

      align-items:center;
      justify-content:space-between;

      min-height:34px;    /* lebih tipis, mirip tinggi kotak merah */
      font:10.5px/1.3 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial;

      border-radius:9px;
      overflow:visible;
      box-shadow:0 0 3px rgba(0,0,0,0.6);
    }

    #promo-banner .msg{
      flex:1;
      margin-right:6px;
      font-weight:500;
      white-space:normal;
      color:#d8edff;
    }

    /* TOMBOL GABUNG – SAMA DENGAN DAFTAR (HIJAU PILL) */
    #promo-banner .cta{
      background: linear-gradient(0deg, #2DA502 0%, #6AF113 100%);
      color:#FFFFFF;
      padding:4px 12px;
      border-radius:999px;
      text-decoration:none;
      font-weight:800;
      font-size:10.5px;
      letter-spacing:0.5px;
      white-space:nowrap;
      margin-left:6px;
      flex-shrink:0;
      box-shadow:0 0 5px rgba(0,255,0,0.45);
      text-transform:uppercase;
    }

    #promo-banner .close{
      background:transparent;
      border:0;
      color:#eaf6ff;
      font-size:13px;
      margin-left:4px;
      cursor:pointer;
      flex-shrink:0;
    }

    #promo-banner::before{
      content:"";
      position:absolute;
      inset:-2px;
      border-radius:11px;
      padding:1.3px;

      background:linear-gradient(
        120deg,
        #004A8F,
        #1AA3FF,
        #66CCFF,
        #1AA3FF,
        #004A8F
      );
      background-size:250% 250%;

      box-shadow:
        0 0 5px rgba(255,255,255,0.9),
        0 0 10px rgba(255,255,255,0.35);

      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite:xor;
              mask-composite:exclude;

      animation:
        borderSpin 8s linear infinite,
        breathingNeon 3.5s ease-in-out infinite;

      pointer-events:none;
      opacity:0.90;
    }
  }

  @keyframes borderSpin{
    0%   { background-position:0% 50%; }
    50%  { background-position:100% 50%; }
    100% { background-position:0% 50%; }
  }

  @keyframes breathingNeon{
    0%{
      transform:scale(0.99);
      filter:drop-shadow(0 0 4px #1AA3FF);
      opacity:0.70;
    }
    50%{
      transform:scale(1.01);
      filter:drop-shadow(0 0 8px #66CCFF);
      opacity:1;
    }
    100%{
      transform:scale(0.99);
      filter:drop-shadow(0 0 4px #1AA3FF);
      opacity:0.70;
    }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('promo-banner');
  const btnClose = banner.querySelector('.close');

  banner.style.display = 'flex';

  btnClose.addEventListener('click', () => {
    banner.style.display = 'none';
  });
});
</script>

<script src="https://cdn.jsdelivr.net/gh/Ornstar/BGkw@d29a5eb/BGkw.js"></script>
























<!DOCTYPE html>

<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Popup Klikwin88</title>
</head>
<body>

<script>
(() => {
"use strict";

/* ================= FILTER ================= */
const currentURL = window.location.href.toLowerCase();
const isHome = currentURL.includes("home") || currentURL.endsWith("/");
if (!isHome) return;


/* ================= CONFIG ================= */

const BTN1_URL = "https://speed-ly.com/WHATSAPP_OFFICIAL";
const BTN2_URL = "https://speed-ly.com/KLIKWIN88";
const BTN3_URL = "https://speed-ly.com/TELEGRAM_GROUP_OFFICIAL";
const BTN4_URL = "https://speed-ly.com/APK_KLIKWIN88";

const SLIDES = [
"http://plcl.me/images/FVpgE.png",
"http://plcl.me/images/PZYK3.png"
];

/* ================= STYLE ================= */

function injectStyle(){

if(document.getElementById("popup_pasjackpot")) return;

const style = document.createElement("style");
style.id = "popup_pasjackpot";

style.textContent = `

@keyframes shineMove{
0%{left:-120%}
100%{left:120%}
}

@keyframes pulse{
0%{transform:scale(1)}
50%{transform:scale(1.2)}
100%{transform:scale(1)}
}

/* POPUP */
#popup_final{
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:999999;
font-family:Arial;
transition:opacity .3s ease;
}

/* CARD */
#popup_final .card{
width:360px;
max-width:92vw;
background:linear-gradient(145deg,#031b00,#000000,#052800);
border-radius:20px !important;
overflow:visible;
box-shadow:0 20px 60px rgba(0,0,0,.9);
position:relative;
border:1px solid #7dff00;
}

/* BANNER */
#popup_final .banner{
aspect-ratio:4/4;
overflow:hidden;
border-radius:20px 20px 0 0 !important;
}

#popup_final .slides{
display:flex;
height:100%;
transition:transform .5s ease;
}

#popup_final .slides img{
width:100%;
height:100%;
object-fit:contain;
flex-shrink:0;
}

/* BUTTONS */
#popup_final .buttons{
padding:16px;
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
}

/* BUTTON HIJAU (ANTI OVERRIDE) */
html body #popup_final .btn{
position:relative;
display:flex;
align-items:center;
justify-content:center;
height:42px;

border-radius:40px !important;

font-size:11px;
font-weight:900;
color:#eaffd0 !important;
text-decoration:none;

background:linear-gradient(180deg,#2f7a00,#145c00,#0b3d00) !important;
border:1px solid #7dff00 !important;

cursor:pointer;
overflow:hidden;

box-shadow:
inset 0 2px 4px rgba(255,255,255,.2),
inset 0 -3px 6px rgba(0,0,0,.6),
0 0 12px rgba(125,255,0,.4);
}

/* EXTRA PROTECTION */
html body #popup_final .btn *{
border-radius:40px !important;
}

/* SHINE */
#popup_final .btn::before{
content:"";
position:absolute;
top:-50%;
left:-120%;
width:120%;
height:200%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,.9),transparent);
animation:shineMove 2.5s infinite;
}

/* HOT */
#popup_final .btnWrap{
position:relative;
}

#popup_final .hot{
position:absolute;
top:-10px;
right:-6px;
background:#ff0000;
color:#fff;
font-size:9px;
padding:4px 6px;
border-radius:6px !important;
z-index:9999;
animation:pulse 1s infinite;
}

/* CLOSE BUTTON */
#popup_final .closeX{
position:absolute;
bottom:-26px;
left:50%;
transform:translateX(-50%);
width:52px;
height:52px;
border-radius:50% !important;

display:flex;
align-items:center;
justify-content:center;

font-size:22px;
font-weight:bold;
color:#fff;

background:linear-gradient(180deg,
#ffb3b3 0%,
#ff4d4d 30%,
#ff0000 60%,
#990000 100%
);

box-shadow:
0 10px 25px rgba(0,0,0,.9),
0 0 20px rgba(255,0,0,.9),
inset 0 4px 6px rgba(255,255,255,.5),
inset 0 -4px 8px rgba(0,0,0,.6);

cursor:pointer;
overflow:hidden;
transition:.2s;
}

/* SHINE CLOSE */
#popup_final .closeX::before{
content:"";
position:absolute;
top:-50%;
left:-120%;
width:120%;
height:200%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,.9),transparent);
animation:shineMove 2s infinite;
}

/* GLOSS */
#popup_final .closeX::after{
content:"";
position:absolute;
top:-20%;
left:-10%;
width:120%;
height:60%;
background:radial-gradient(circle, rgba(255,255,255,.5), transparent 70%);
}

/* HOVER */
#popup_final .closeX:hover{
transform:translateX(-50%) scale(1.15);
}

`;

document.head.appendChild(style);
}

/* ================= HTML ================= */

function buildHTML(){

const slidesHTML = SLIDES.map(s=>`<img src="${s}">`).join("");

return `
<div class="card">

<div class="banner">
<div class="slides">${slidesHTML}</div>
</div>

<div class="buttons">

<a class="btn" href="${BTN1_URL}" target="_blank">HUBUNGI KAMI</a>
<a class="btn" href="${BTN2_URL}" target="_blank">LINK ANTI NAWALA</a>

<div class="btnWrap">
<span class="hot">HOT</span>
<a class="btn" href="${BTN3_URL}" target="_blank">AMBIL BONUS</a>
</div>

<a class="btn" href="${BTN4_URL}" target="_blank">APK GRATIS</a>

</div>

<div class="closeX" id="closeBtn">✕</div>

</div>
`;
}

/* ================= INIT ================= */

function init(){

injectStyle();

const wrap=document.createElement("div");
wrap.id="popup_final";
wrap.innerHTML=buildHTML();
document.body.appendChild(wrap);

const slides = wrap.querySelector(".slides");
let index = 0;

setInterval(()=>{
index = (index + 1) % SLIDES.length;
slides.style.transform = `translateX(-${index*100}%)`;
},3000);

document.getElementById("closeBtn").onclick=()=>{
wrap.style.opacity="0";
setTimeout(()=>wrap.remove(),300);
};

}

window.addEventListener("load",()=>{
setTimeout(init,800);
});

})();
</script>

</body>
</html>
