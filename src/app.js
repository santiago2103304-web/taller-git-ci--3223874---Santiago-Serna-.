export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById("lista");
  if (!lista) return;
  const li = document.createElement("li");
  li.textContent = String(texto ?? "Elemento");
  lista.appendChild(li);
}

if (typeof window !== "undefined") {
  // comportamiento en la página
  const btn = document.getElementById("btnAgregar");
  const input = document.getElementById("inputItem");
  if (btn && input) {
    btn.addEventListener("click", () => {
      agregarItem(input.value);
      input.value = "";
    });
  }
  console.log("App lista");
}
