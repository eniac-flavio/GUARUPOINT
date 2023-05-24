
// POP-UP
const showModalBtns = document.querySelectorAll(".grupo");

showModalBtns.forEach((showModalBtn) => {
  const bottomSheet = showModalBtn.nextElementSibling;
  const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
  const sheetContent = bottomSheet.querySelector(".content");
  const dragIcon = bottomSheet.querySelector(".drag");

  let isDragging = false,
    startY,
    startHeight;

  const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeight(50);
  };

  const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`;
    bottomSheet.classList.toggle("fullscreen", height === 100);
  };

  const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";
  };

  const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + (delta / window.innerHeight) * 100;
    updateSheetHeight(newHeight);
  };

  const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    sheetHeight < 25
      ? hideBottomSheet()
      : sheetHeight > 65
      ? updateSheetHeight(100)
      : updateSheetHeight(50);
  };

  dragIcon.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  dragIcon.addEventListener("touchstart", dragStart);
  document.addEventListener("touchmove", dragging);
  document.addEventListener("touchend", dragStop);
  sheetOverlay.addEventListener("click", hideBottomSheet);
  showModalBtn.addEventListener("click", showBottomSheet);
});

// Scroll
/*
document.addEventListener("DOMContentLoaded", function() {
  const voltar = document.querySelector(".voltar");
  const avancar = document.querySelector(".avancar");
  const contentes = document.querySelector(".contente");


  function menos() {
      const contentes = document.querySelectorAll(".contente");
      contentes.forEach(contente => {
          if (contente.classList.contains("um")) {
              contente.classList.remove("um");
              contente.classList.add("dois");
          } else if (contente.classList.contains("dois")) {
              contente.classList.remove("dois");
              contente.classList.add("tres");
          } else if (contente.classList.contains("tres")) {
              contente.classList.remove("tres");
              contente.classList.add("quatro");
          } else if (contente.classList.contains("quatro")) {
              contente.classList.remove("quatro");
              contente.classList.add("cinco");
          } else if (contente.classList.contains("cinco")) {
              contente.classList.remove("cinco");
              contente.classList.add("seis");
          } else if (contente.classList.contains("seis")) {
              contente.classList.remove("seis");
              contente.classList.add("sete");
          } else if (contente.classList.contains("sete")) {
              contente.classList.contains("sete");
          } else {
              contente.classList.add("um");
          }
      });
  }

  voltar.onclick = menos; 


  function mais() {
      const contentes = document.querySelectorAll(".contente");
      contentes.forEach(contente => {
          if (contente.classList.contains("sete")) {
              contente.classList.remove("sete");
              contente.classList.add("seis");
          } else if (contente.classList.contains("seis")) {
              contente.classList.remove("seis");
              contente.classList.add("cinco");
          } else if (contente.classList.contains("cinco")) {
              contente.classList.remove("cinco");
              contente.classList.add("quatro");
          } else if (contente.classList.contains("quatro")) {
              contente.classList.remove("quatro");
              contente.classList.add("tres");
          } else if (contente.classList.contains("tres")) {
              contente.classList.remove("tres");
              contente.classList.add("dois");
          } else if (contente.classList.contains("dois")) {
              contente.classList.remove("dois");
              contente.classList.add("um");
          } else if (contente.classList.contains("um")) {
              contente.classList.remove("um");
          }
      });
  }

  avancar.onclick = mais;

});

document.querySelectorAll('.grupo.contente.um:not(:nth-child(n+1))').setAttribute('style', 'display: none !important');
document.querySelectorAll('.grupo.contente.dois:not(:nth-child(n+2))').setAttribute('style', 'display: none !important');
document.querySelectorAll('.grupo.contente.tres:not(:nth-child(n+3))').setAttribute('style', 'display: none !important');
document.querySelectorAll('.grupo.contente.quatro:not(:nth-child(n+4))').setAttribute('style', 'display: none !important');
document.querySelectorAll('.grupo.contente.cinco:not(:nth-child(n+5))').setAttribute('style', 'display: none !important');
document.querySelectorAll('.grupo.contente.seis:not(:nth-child(n+6))').setAttribute('style', 'display: none !important');
document.querySelectorAll('.grupo.contente.sete:not(:nth-child(n+7))').setAttribute('style', 'display: none !important');
*/

// localização

document.addEventListener("DOMContentLoaded", function() {
  var pElements = document.querySelectorAll(".p");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      pElements.forEach(function(pElement) {
        pElement.innerHTML = "Distância não suportada pelo navegador.";
      });
    }
  }

  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var destinos = [
      {nome: "eniac", latitude: -23.4728014, longitude: -46.5356785},
      {nome: "palyra tagliari", latitude: -23.4313118, longitude: -46.5612862 },
      {nome: "escola jose scaramelli", latitude: -23.4724056, longitude: -46.544724},
      {nome: "colegio guilherme de almeida", latitude: -23.4873471, longitude: -46.6271665},
      {nome: "evanira vieira romao", latitude: -23.4810143, longitude: -46.5491934 },
      {nome: "escola aconchego", latitude: -23.4962596, longitude: -46.5560301},
      {nome: "dr jair miranda", latitude: -23.468596, longitude: -46.5525671},
      {nome: "colegio ruios", latitude: -23.4798559, longitude: -46.5409044},
      {nome: "teatro adamastor", latitude: -23.4638372, longitude: -46.6008042},
      {nome: "hmu", latitude: -23.4524871, longitude: -46.5352509},
      {nome: "luna fit", latitude: -23.4475692, longitude: -46.5235849},
      {nome: "praca getulio vargas", latitude: -23.4660437, longitude: -46.53343},
      {nome: "cemea", latitude: -23.4588808, longitude: -46.4927138},
      {nome: "cemea", latitude: -23.4588808, longitude: -46.4927138},
      {nome: "nhangussu", latitude: -23.3532844, longitude: -46.402016},
      {nome: "parque julio francalanza", latitude: -23.4644059, longitude: -46.5694878},
      {nome: "pe de fava", latitude: -23.4685611, longitude: -46.5267795 }
      // Adicione mais destinos conforme necessário
    ];

    destinos.forEach(function(destino, index) {
      var distance = calculateDistance(latitude, longitude, destino.latitude, destino.longitude);
      var pElement = document.querySelector(".p.div-" + destino.nome.replace(/ /g, "_"));
      pElement.innerHTML = "Você está a " + distance.toFixed(2) + " km de distância de " + destino.nome;
    });
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Raio da Terra em quilômetros
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  getLocation();
});


