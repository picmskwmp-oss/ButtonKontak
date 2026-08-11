<!-- =========================================
     RZA28 - FLOATING SOSMED BUTTON
========================================= -->

<style>

/* =========================
   CONTAINER
========================= */

.RZA28-sosmed{
  position:fixed;
  left:2px;
  bottom:25px;
  z-index:9999;
  font-family:Arial,sans-serif;
}


/* =========================
   LIST ICON
========================= */

.RZA28-sosmed ul{
  margin:0;
  padding:0;
  position:relative;
}

.RZA28-sosmed ul li{
  position:absolute;
  left:0;
  bottom:0;

  list-style:none;

  opacity:0;

  transform:
    translateY(0)
    scale(.85);

  transition:
    transform .35s ease,
    opacity .25s ease;

  pointer-events:none;
}


/* =========================
   POSISI ICON SAAT OPEN
========================= */

.RZA28-sosmed.open ul li:nth-child(1){
  transform:translateY(-55px) scale(1);
  opacity:1;
  transition-delay:.04s;
}

.RZA28-sosmed.open ul li:nth-child(2){
  transform:translateY(-105px) scale(1);
  opacity:1;
  transition-delay:.08s;
}

.RZA28-sosmed.open ul li:nth-child(3){
  transform:translateY(-155px) scale(1);
  opacity:1;
  transition-delay:.12s;
}

.RZA28-sosmed.open ul li:nth-child(4){
  transform:translateY(-205px) scale(1);
  opacity:1;
  transition-delay:.16s;
}

.RZA28-sosmed.open ul li:nth-child(5){
  transform:translateY(-255px) scale(1);
  opacity:1;
  transition-delay:.20s;
}


/* =========================
   BOX ICON
========================= */

.RZA28-sosmed ul li a{

  width:40px;
  height:40px;

  display:flex;

  align-items:center;
  justify-content:center;

  background:#000;

  border:2px solid #8dff00;

  border-radius:7px;

  overflow:hidden;

  text-decoration:none;

  box-shadow:
    0 0 5px rgba(141,255,0,.65),
    inset 0 0 3px rgba(255,255,255,.15);

}


/* Aktif ketika menu terbuka */

.RZA28-sosmed.open ul li{
  pointer-events:auto;
}


/* =========================
   GAMBAR ICON
========================= */

.RZA28-sosmed ul li a img{

  width:100%;
  height:100%;

  display:block;

  object-fit:cover;

}


/* =========================
   TOMBOL HAMBURGER
========================= */

.RZA28-hamburg{

  position:relative;

  width:54px;
  height:36px;

  display:flex;

  flex-direction:column;

  justify-content:center;
  align-items:center;

  gap:5px;

  cursor:pointer;

  border:2px solid #7dff00;

  border-radius:5px;

  background:
    linear-gradient(
      180deg,
      #86e600 0%,
      #5aa700 45%,
      #377200 100%
    );

  box-shadow:
    0 0 6px rgba(125,255,0,.65),
    inset 0 2px 2px rgba(255,255,255,.30),
    inset 0 -2px 3px rgba(0,0,0,.40);

  z-index:10;

}


/* =========================
   3 GARIS PUTIH
========================= */

.RZA28-line{

  width:28px;

  height:3px;

  background:#fff;

  border-radius:3px;

  box-shadow:
    0 0 2px rgba(255,255,255,.6);

  transition:
    transform .30s ease,
    opacity .20s ease;

}


/* =========================
   HAMBURGER → X
========================= */

.RZA28-sosmed.open
.RZA28-hamburg
.RZA28-line:nth-child(1){

  transform:
    translateY(8px)
    rotate(45deg);

}


.RZA28-sosmed.open
.RZA28-hamburg
.RZA28-line:nth-child(2){

  opacity:0;

}


.RZA28-sosmed.open
.RZA28-hamburg
.RZA28-line:nth-child(3){

  transform:
    translateY(-8px)
    rotate(-45deg);

}


/* =========================
   HOVER
========================= */

.RZA28-hamburg:hover{

  filter:brightness(1.08);

}

.RZA28-sosmed ul li a:hover{

  filter:brightness(1.10);

  transform:scale(1.05);

}


/* =========================
   MOBILE
========================= */

@media(max-width:768px){

  .RZA28-sosmed{

    left:2px;
    bottom:20px;

  }

  .RZA28-sosmed ul li a{

    width:38px;
    height:38px;

  }

  .RZA28-hamburg{

    width:52px;
    height:35px;

  }

}

</style>



<!-- =========================================
     HTML
========================================= -->

<div class="RZA28-sosmed">

  <!-- BUTTON -->

  <div
    class="RZA28-hamburg"
    onclick="RZA28Function()"
  >

    <span class="RZA28-line"></span>

    <span class="RZA28-line"></span>

    <span class="RZA28-line"></span>

  </div>


  <!-- ICON -->

  <ul>


    <!-- WHATSAPP -->

    <li>

      <a
        href="https://linkshortener.live/wa-rtt-klikwin88"
        target="_blank"
        rel="noopener"
        title="Whatsapp"
      >

        <img
          src="https://i.postimg.cc/8z1tpjNt/KW-WHATSAPP-200.webp"
          alt="Whatsapp"
        >

      </a>

    </li>



    <!-- TELEGRAM -->

    <li>

      <a
        href="https://linkshortener.live/teleofficial-klikwin88"
        target="_blank"
        rel="noopener"
        title="Telegram"
      >

        <img
          src="https://i.postimg.cc/N0n4kDTT/KW-TELEGRAM-200.webp"
          alt="Telegram"
        >

      </a>

    </li>



    <!-- RTP MAXWIN -->

    <li>

      <a
        href="https://linkshortener.live/rtp-klikwin"
        target="_blank"
        rel="noopener"
        title="RTP Maxwin"
      >

        <img
          src="https://i.postimg.cc/sxd4t2TC/KW-RTP-200.webp"
          alt="RTP Maxwin"
        >

      </a>

    </li>



    <!-- PENGADUAN -->

    <li>

      <a
        href="https://linkshortener.live/pengaduanmember"
        target="_blank"
        rel="noopener"
        title="Pengaduan Layanan"
      >

        <img
          src="https://i.postimg.cc/kMKcWx5s/KW-PENGADUAN-200.webp"
          alt="Pengaduan Layanan"
        >

      </a>

    </li>



    <!-- JADWAL BOLA -->

    <li>

      <a
        href="https://linkshortener.live/livescore-klikwin88"
        target="_blank"
        rel="noopener"
        title="Jadwal Bola"
      >

        <img
          src="https://i.postimg.cc/d3r41Chr/KW-JADWALBOLA.webp"
          alt="Jadwal Bola"
        >

      </a>

    </li>


  </ul>

</div>



<!-- =========================================
     JAVASCRIPT
========================================= -->

<script>

(function(){

  const RZA28 =
    document.querySelector(
      '.RZA28-sosmed'
    );


  window.RZA28Function =
    function(){

      if(!RZA28) return;

      RZA28.classList.toggle(
        'open'
      );

    };

})();

</script>

<!-- =========================================
     END RZA28
========================================= -->
