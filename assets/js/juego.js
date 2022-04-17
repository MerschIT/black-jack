/* 2c = Clubs
  2D = Diamons
  2H = Hearts
  2S = Spades
  */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");

const puntosHTML = document.querySelectorAll("small");

// Esta funcion crea una nueva baraja (deck)
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};

crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay mas cartas en la baraja";
  }

  const carta = deck.pop();
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  if (isNaN(valor)) {
    puntos = valor === "A" ? 11 : 10;
  } else {
    puntos = valor * 1;
  }

  return puntos;
};
const valor = valorCarta(pedirCarta());

//EVENTOS
btnPedir.addEventListener("click", function () {
  const carta = pedirCarta();

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;
});
