const listaDellaSpesa = [' Pasta ', ' Verdure', ' Pomodoro', ' Carne', ' Patate', ' Farina', ' Acqua', ' Frutta',];
const lista = document.querySelector('.list');
let i = 0;
while(i < listaDellaSpesa.length) {
  console.log(listaDellaSpesa[i]);

  lista.innerHTML += `<li>${listaDellaSpesa[i]}</li>`; 
  i++;
}
