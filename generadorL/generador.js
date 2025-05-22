document.getElementById('generator-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fecha = document.getElementById('fecha').value;
    const titulo = document.getElementById('titulo').value;
    const mensajeInferior = document.getElementById('mensajeInferior').value;
    const mensajeCarta = document.getElementById('mensajeCarta').value;
    const fotoURL = document.getElementById('fotoURL').value;
    const musicaURL = document.getElementById('musicaURL').value;

    // Codificar parámetros
    const params = new URLSearchParams();
    if (fecha) params.append('fecha', fecha);
    if (titulo) params.append('titulo', titulo);
    if (mensajeInferior) params.append('mensajeInferior', mensajeInferior);
    if (mensajeCarta) params.append('mensajeCarta', mensajeCarta);
    if (fotoURL) params.append('fotoURL', fotoURL);
    if (musicaURL) params.append('musicaURL', musicaURL);

    // URL base fija para GitHub Pages
    const urlBase = 'https://zero3-web.github.io/Contador/Contador/';
    const enlace = urlBase + (params.toString() ? '?' + params.toString() : '');

    document.getElementById('enlace').value = enlace;
    document.getElementById('resultado').style.display = 'block';
});

document.getElementById('copiar').addEventListener('click', function() {
    const enlace = document.getElementById('enlace');
    enlace.select();
    enlace.setSelectionRange(0, 99999);
    document.execCommand('copy');
});

document.getElementById('abrir').addEventListener('click', function() {
    const enlace = document.getElementById('enlace').value;
    if (enlace) window.open(enlace, '_blank');
});
