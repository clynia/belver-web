// Belver. Interacciones minimas: navegacion en movil y acuse del formulario.
(function () {
  var boton = document.querySelector('.nav-abrir');
  var nav = document.getElementById('nav');
  if (boton && nav) {
    boton.addEventListener('click', function () {
      var abierta = nav.classList.toggle('nav--abierta');
      boton.setAttribute('aria-expanded', abierta ? 'true' : 'false');
      boton.textContent = abierta ? 'Cerrar' : 'Menú';
    });
  }

  var form = document.getElementById('contratacion');
  if (!form) return;
  var aviso = document.getElementById('aviso-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var faltan = [];
    ['nombre', 'email', 'tipo', 'contexto'].forEach(function (id) {
      var c = document.getElementById(id);
      if (c && !c.value.trim()) faltan.push(c);
    });
    var rgpd = document.getElementById('rgpd');
    if (rgpd && !rgpd.checked) faltan.push(rgpd);

    if (faltan.length) {
      aviso.hidden = false;
      aviso.textContent = 'Faltan campos obligatorios. Revísalos y vuelve a enviar.';
      faltan[0].focus();
      return;
    }
    aviso.hidden = false;
    aviso.textContent = 'Formulario de maqueta: todavía no hay buzón conectado. En producción, el mensaje se envía y se responde en dos días laborables.';
  });
})();
