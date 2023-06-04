
let btn1 = document.getElementById('btn1')
btn1.onclick = mostrarlista1

function mostrarlista1 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-BioFree.png">
    <p class="textMainCentrado">BIOFREE es un exclusivo inoculante promotor de crecimiento compuesto por la combinación de Pseudomonas fluorescens y Azospirillum brasilense.</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-Promotor.png">
    <p class="textMainCentrado">Tratamiento biológico de semilla.De excelente acción: fungicida, PGPR y Nematicida. </p>
  </div>`
}

let btn2 = document.getElementById('btn2')
btn2.onclick = mostrarlista2

function mostrarlista2 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-TotalNitro.png">
    <p class="textMainCentrado"> Inoculante para soja con alta concentración de bacterias Brasyrhizobium Japonicum que aseguran la óptima fijación de Nitrógeno atmosférico por parte del cultivo.</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-Protege.png">
    <p class="textMainCentrado">info2</p>
  </div>`
}

let btn3 = document.getElementById('btn3')
btn3.onclick = mostrarlista3

function mostrarlista3 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-BioFungi.png">
    <p class="textMainCentrado">info</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-BioKato.png">
    <p class="textMainCentrado">Bioinsecticida de excelencia para el control de chicharritas y chinches. Recomendado en manejo integrado de plagas.</p>
  </div>
  <div class="dProductos">
  <img src="./img/Logo-Bioexos.png">
  <p class="textMainCentrado">BIOEXOS es el bioinsecticida de excelencia en el manejo integrado de plagas. Compuesto por Azadiractina, su formulación permite la máxima eficacia.</p>
</div>
<div class="dProductos">
<img src="./img/Logo-VCore.png">
<p class="textMainCentrado">info4</p>
</div>`
}

let btn4 = document.getElementById('btn4')
btn4.onclick = mostrarlista4

function mostrarlista4 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-Stimutrop.png">
    <p class="textMainCentrado">STIMUTROP es un fertilizante mineral mixto con características únicas de fisioactivación.</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-BioCalda.png">
    <p class="textMainCentrado">BIOCALDA es un fertilizante mineral foliar mixto, que contiene Nitrógeno y Boro.</p>
  </div>
  <div class="dProductos">
  <img src="./img/Logo-Stamina.png">
  <p class="textMainCentrado"> Antiestresante/recuperador de cultivos.Formulación exclusiva con aminoácidos de altísima calidad y nutrientes.</p>
</div>`
}
