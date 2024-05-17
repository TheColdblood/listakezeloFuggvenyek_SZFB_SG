//import { emberekLISTA } from "./adat.js";
import { rendez, szures } from "./adatKezelo.js";
import { deleteAdat, getAdat } from "./aszinkron.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js"
import { adatokListaba } from "./urlapkezelo.js";

getAdat("http://localhost:3000/emberekLISTA", init)

let irany = 1; /* 1 - növekvő rendezés , -1 csökkenő rendezés */
/* init(emberekLISTA); */
szuresEsemeny();

function init(lista) {
  console.log(lista)
  megjelenit(htmlOsszeallit(lista));
  rendezEsemeny(lista);
  torolEsemeny(lista);
  adatokListaba(lista);
}
/* 
a függvény akkor fut le, ha a táblázat név fejlécére kattintunk. */
function rendezEsemeny(lista) {
  const nevELEM = $(".adatok table th").eq(0);
  nevELEM.on("click", function () {
    const rLISTA = rendez(lista, irany);
    console.log(rLISTA);
    init(rLISTA);
    irany *= -1;
  });
}
function szuresEsemeny(lista) {
  /* akkor kell lefutnia, ha megváltozik a keresőmező tartalma */
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let keresoSzoveg = keresoELEM.val();
    const szLISTA = szures(lista, keresoSzoveg);
    init(szLISTA);
  });
}

function torolEsemeny(lista) {
  /* Akkor fog lefutni, ha sor melletti torol gombra kattintunk.  */
  const torolGOMB = $(".torol");
  torolGOMB.on("click", function (event) {
    /*  event.target az az elem, amelyik kiváltotta az eseményt */
    let id = event.target.id;
    console.log(id);
    /* const LISTA = torol(lista, id);
    init(LISTA); */
    deleteAdat("http://localhost:3000/emberekLISTA", id)
  });
}
