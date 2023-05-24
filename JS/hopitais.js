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
        {nome: "hospital geral", latitude: -23.4300685, longitude: -46.5227774 },
        {nome: "hmu", latitude: -23.4524871, longitude: -46.5352509},
        {nome: "hospital bom clima", latitude: -23.4569471, longitude: -46.5525335},
        {nome: "uni med", latitude: -23.4569471, longitude: -46.5525335},
        {nome: "hospital maternidade", latitude: -23.4593335, longitude: -46.5448166},
        {nome: "shopping maia", latitude: -23.4435468, longitude: -46.5428373},
        {nome: "nossa senhora da conceicao", latitude: -23.4702598, longitude: -46.5359583},
        {nome: "teatro adamastor", latitude: -23.4638372, longitude: -46.6008042},
        {nome: "plaza premium lounge", latitude: -23.4264621, longitude: -46.4843013},
        {nome: "horto florestal", latitude: -23.3738794, longitude: -46.399748},
        {nome: "mamonas assassinas", latitude: -23.4515513, longitude: -46.5003821},
        {nome: "praca getulio vargas", latitude: -23.4660437, longitude: -46.53343},
        {nome: "teatro padre bento", latitude: -23.4685561, longitude: -46.5520859},
        {nome: "nhangussu", latitude: -23.3532844, longitude: -46.402016},
        {nome: "parque transguarulhense", latitude: -23.4337119, longitude: -46.5538966},
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

