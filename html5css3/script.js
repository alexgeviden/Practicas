function aparece1() {
    var x = document.querySelector("#acerca");
    var y = document.querySelector("a[href='#acerca']");
    if (x.style.display === "none") {
      // Si el div está oculto, lo muestro
      x.style.display = "block";
      y.style.backgroundColor = "grey";
    } else {
      // Sino, lo oculto
      x.style.display = "none";
      y.style.backgroundColor = "#333";
    }
  }
  
  function aparece2() {
    var x = document.querySelector("#trabajos");
    var z1 = document.querySelector("#acerca");
    var z2 = document.querySelector("#contacto");
    var y = document.querySelector("a[href='#trabajos']");
    if (z1.style.display === "block" || z2.style.display === "block") {
      // Si alguno de los otros divs está visible, lo oculto
      z1.style.display = "none";
      z2.style.display = "none";
      y.style.backgroundColor = "#333";
    }
    if (x.style.display === "none") {
      // Si el div está oculto, lo muestro
      x.style.display = "block";
      y.style.backgroundColor = "grey";
    } else {
      // Sino, lo oculto
      x.style.display = "none";
      y.style.backgroundColor = "#333";
    }
  }
  
  function aparece3() {
    var x = document.querySelector("#contacto");
    var z1 = document.querySelector("#acerca");
    var z2 = document.querySelector("#trabajos");
    var y = document.querySelector("a[href='#contacto']");
    if (z1.style.display === "block" || z2.style.display === "block") {
      // Si alguno de los otros divs está visible, lo oculto
      z1.style.display = "none";
      z2.style.display = "none";
      y.style.backgroundColor = "#333";
    }
    if (x.style.display === "none") {
      // Si el div está oculto, lo muestro
      x.style.display = "block";
      y.style.backgroundColor = "grey";
    } else {
      // Sino, lo oculto
      x.style.display = "none";
      y.style.backgroundColor = "#333";
    }
  }
  const slider = document.getElementById('slider');
  function playVideo(videoId) {
    var iframe = document.getElementById(videoId);
    iframe.contentWindow.postMessage('{"method":"play"}', '*');
  }

  function pauseVideo(videoId) {
    var iframe = document.getElementById(videoId);
    iframe.contentWindow.postMessage('{"method":"pause"}', '*');
  }

