
let btn1 = document.getElementById('btn1')
btn1.onclick = mostrarlista1

function mostrarlista1 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-PowerTrop.png">
    <p class="textMainCentrado">Bioestimulante y antiestresante 3% de ácido indol acético y aminoácidos. </p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-StimuTrop.png">
    <p class="textMainCentrado">Fertilizante mineral mixto con características únicas de fisioactivación que combina la estimulación del desarrollo de las plantas.</p>
  </div>
  <div class="dProductos">
  <img src="./img/Logo-BioCalda.png">
  <p class="textMainCentrado">Fertilizante mineral foliar mixto, que contiene Nitrógeno y Boro. Una combinación equilibrada de aditivos, estabilizantes y aceites.</p>
</div>
<div class="dProductos">
<img src="./img/Logo-Stamina.png">
<p class="textMainCentrado">Bioestimulante y antiestresante. Por la formulación DOP, asegura una alta concentración de metabolitos ricos en aminoácidos, hormonas de crecimiento y nutrientes, provenientes de la
fermentación de microorganismos.</p>
</div>`
}

let btn2 = document.getElementById('btn2')
btn2.onclick = mostrarlista2

function mostrarlista2 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-BioFungi.png">
    <p class="textMainCentrado"> Info</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-BioKato.png">
    <p class="textMainCentrado">Bioinsecticida de excelencia para el control de chicharritas y chinches. Recomendado en el manejo integrado de plagas.</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-Bioexos.png">
    <p class="textMainCentrado">info2</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-VCore.png">
    <p class="textMainCentrado">info2</p>
  </div>`
}

let btn3 = document.getElementById('btn3')
btn3.onclick = mostrarlista3

function mostrarlista3 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-TotalNitro.png">
    <p class="textMainCentrado">Inoculante para soja con alta concentración de bacterias Brasyrhizobium Japonicum que aseguran la óptima fijación de Nitrógeno atmosférico por parte del cultivo.</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-Protege.png">
    <p class="textMainCentrado">Protector de Brady. Factores NOD de reconocimiento bacteria-planta.  </p>
  </div>`
}

let btn4 = document.getElementById('btn4')
btn4.onclick = mostrarlista4

function mostrarlista4 () {
    document.getElementById('Datos1').innerHTML =
    `<div class="dProductos">
    <img src="./img/Logo-Promotor.png">
    <p class="textMainCentrado">Tratamiento biológico de semilla. De acción fungicida, PGPR y Nematicida.</p>
  </div>
  <div class="dProductos">
    <img src="./img/Logo-BioFree.png">
    <p class="textMainCentrado">Exclusivo inoculante promotor del crecimiento compuesto por la combinación de Pseudomonas fluorescens y Azospirillum brasilense.</p>
  </div>`
}
