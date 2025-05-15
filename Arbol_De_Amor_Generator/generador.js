document.getElementById('generate-btn').onclick = function() {
  const text = encodeURIComponent(document.getElementById('dedication-text').value);
  const start = document.getElementById('start-date').value;
  const eventDate = document.getElementById('event-date').value;
  const firma = encodeURIComponent(document.getElementById('firma').value);
  // Cambia TU_USUARIO por tu usuario real de GitHub
  let url = `https://zero3-web.github.io/Arbol_De_Amor/?text=${text}&start=${start}&event=${eventDate}`;
  if (firma && firma !== "") url += `&firma=${firma}`;
  document.getElementById('result-url').value = url;
};

document.getElementById('copy-btn').onclick = function() {
  const input = document.getElementById('result-url');
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
};
