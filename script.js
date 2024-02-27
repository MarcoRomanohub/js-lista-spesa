const lista = document.querySelector('h1');
const listaDellaSpesa = [' Pasta ', ' Verdure', ' Pomodoro', ' Carne', ' Patate', ' Farina', ' Acqua', ' Frutta',];
let i = 0;
while(i < listaDellaSpesa.length) {
  console.log(listaDellaSpesa[i]);

  lista.innerHTML += listaDellaSpesa[i]; 
  i++;
}
