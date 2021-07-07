let $inicio = document.querySelector('#inicio');
let $ranking = document.querySelector('#ranking');
let $messi = document.querySelector('#messi');

function pantallaInicio () {
    
    let borrarranking = document.getElementById("ranking");
    while (borrarranking.firstChild) {
    borrarranking.removeChild(borrarranking.firstChild);
    }
    
    let borrarinicio = document.getElementById("inicio");
    while (borrarinicio.firstChild) {
    borrarinicio.removeChild(borrarinicio.firstChild);
    }
    
    let sectionInicio = document.createElement('section');
    sectionInicio.classList.add('text-center', 'pt-5');
    
    let tituloInicio = document.createElement('h1');
    tituloInicio.classList.add('pb-4');
    tituloInicio.textContent = "NOTI FÚTBOL";
    
    let div1 = document.createElement('div');
    div1.classList.add('row', 'ml-0', 'mr-0');
    
    let div2 = document.createElement('div');
    div2.classList.add('card', 'mb-3');
    
    let div3= document.createElement('div');
    div3.classList.add('row', 'g-0'); 
    
    let div4 = document.createElement('div');
    div4.classList.add('col-md-4');
    
    let imgInicio = document.createElement('img');
    imgInicio.setAttribute('src', 'img/favicon.png');
    imgInicio.classList.add('img-fluid', 'rounded-start');
    imgInicio.setAttribute('alt', 'logo');
    
    let div5 = document.createElement('div');
    div5.classList.add('card-body', 'col-md-8');
    
    let p1 = document.createElement('p');
    p1.classList.add('card-text');
    p1.textContent = 'Bienvenido a Noti Futbol!';
    
    let p2 = document.createElement('p');
    p2.classList.add('card-text');
    p2.textContent = 'En esta maravillosa app podras navegar para ver como esta el ranking fifa actual y los numeros del mejor jugador de la historia mundial, galactica y universal, asi es, Liones Andres Messi.';
    
    div4.appendChild(imgInicio);
    div5.appendChild(p1);
    div5.appendChild(p2);
    div3.appendChild(div4);
    div3.appendChild(div5);
    div2.appendChild(div3);
    div1.appendChild(div2);
    sectionInicio.appendChild(tituloInicio);
    sectionInicio.appendChild(div1);
    $inicio.appendChild(sectionInicio);
    
    
}

function ranking () {
    
    
    let borrarinicio = document.getElementById("inicio");
    while (borrarinicio.firstChild) {
    borrarinicio.removeChild(borrarinicio.firstChild);
    }
    
    let borrarranking = document.getElementById("ranking");
    while (borrarranking.firstChild) {
    borrarranking.removeChild(borrarranking.firstChild);
    }
    
    
    let section = document.createElement('section');
    section.classList.add('text-center', 'pt-5');
    
    let titulo = document.createElement('h1');
    titulo.classList.add('pb-4');
    titulo.textContent = 'Ranking FIFA';
    
    //---------------------------------------------------------
    
    let divDesc = document.createElement('div');
    divDesc.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let Puesto = document.createElement('p');
    Puesto.classList.add('my-2', 'col-3');
    Puesto.textContent = 'Puesto';
    
    let Equipo = document.createElement('p');
    Equipo.classList.add('my-2', 'col-6');
    Equipo.textContent = 'Equipo';
    
    let Puntos = document.createElement('p');
    Puntos.classList.add('my-2', 'col-3');
    Puntos.textContent = 'Puntos';
    
    //---------------------------------------------------------
    
    let div1 = document.createElement('div');
    div1.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto1 = document.createElement('p');
    puesto1.classList.add('my-auto', 'col-3');
    puesto1.textContent = '1';
    
    let pimg1 = document.createElement('p');
    pimg1.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img1 = document.createElement('img');
    img1.classList.add('rounded', 'mx-auto', 'd-block');
    img1.setAttribute('src', 'img/BEL.png');
    img1.setAttribute('alt', 'BEL');
    
    let equipo1 = document.createElement('p');
    equipo1.classList.add('my-auto', 'col-3');
    equipo1.textContent = 'Bélgica';
    
    let puntos1 = document.createElement('p');
    puntos1.classList.add('my-auto', 'col-3');
    puntos1.textContent = '1783';
    
    //---------------------------------------------------------
    
    let div2 = document.createElement('div');
    div2.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto2 = document.createElement('p');
    puesto2.classList.add('my-auto', 'col-3');
    puesto2.textContent = '2';
    
    let pimg2 = document.createElement('p');
    pimg2.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img2 = document.createElement('img');
    img2.classList.add('rounded', 'mx-auto', 'd-block');
    img2.setAttribute('src', 'img/FRA.png');
    img2.setAttribute('alt', 'FRA');
    
    let equipo2 = document.createElement('p');
    equipo2.classList.add('my-auto', 'col-3');
    equipo2.textContent = 'Francia';
    
    let puntos2 = document.createElement('p');
    puntos2.classList.add('my-auto', 'col-3');
    puntos2.textContent = '1757'; 
    //---------------------------------------------------------
    
    let div3 = document.createElement('div');
    div3.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto3 = document.createElement('p');
    puesto3.classList.add('my-auto', 'col-3');
    puesto3.textContent = '3';
    
    let pimg3 = document.createElement('p');
    pimg3.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img3 = document.createElement('img');
    img3.classList.add('rounded', 'mx-auto', 'd-block');
    img3.setAttribute('src', 'img/BRA.png');
    img3.setAttribute('alt', 'BRA');
    
    let equipo3 = document.createElement('p');
    equipo3.classList.add('my-auto', 'col-3');
    equipo3.textContent = 'Brasil';
    
    let puntos3 = document.createElement('p');
    puntos3.classList.add('my-auto', 'col-3');
    puntos3.textContent = '1743';
    
    //---------------------------------------------------------
    
    let div4 = document.createElement('div');
    div4.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto4 = document.createElement('p');
    puesto4.classList.add('my-auto', 'col-3');
    puesto4.textContent = '4';
    
    let pimg4 = document.createElement('p');
    pimg4.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img4 = document.createElement('img');
    img4.classList.add('rounded', 'mx-auto', 'd-block');
    img4.setAttribute('src', 'img/ENG.png');
    img4.setAttribute('alt', 'ENG');
    
    let equipo4 = document.createElement('p');
    equipo4.classList.add('my-auto', 'col-3');
    equipo4.textContent = 'Inglaterra';
    
    let puntos4 = document.createElement('p');
    puntos4.classList.add('my-auto', 'col-3');
    puntos4.textContent = '1687';
    
    //---------------------------------------------------------
    
    let div5 = document.createElement('div');
    div5.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto5 = document.createElement('p');
    puesto5.classList.add('my-auto', 'col-3');
    puesto5.textContent = '5';
    
    let pimg5 = document.createElement('p');
    pimg5.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img5 = document.createElement('img');
    img5.classList.add('rounded', 'mx-auto', 'd-block');
    img5.setAttribute('src', 'img/POR.png');
    img5.setAttribute('alt', 'POR');
    
    let equipo5 = document.createElement('p');
    equipo5.classList.add('my-auto', 'col-3');
    equipo5.textContent = 'Portugal';
    
    let puntos5 = document.createElement('p');
    puntos5.classList.add('my-auto', 'col-3');
    puntos5.textContent = '1666';
    
    //---------------------------------------------------------
    
    let div6 = document.createElement('div');
    div6.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto6 = document.createElement('p');
    puesto6.classList.add('my-auto', 'col-3');
    puesto6.textContent = '6';
    
    let pimg6 = document.createElement('p');
    pimg6.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img6 = document.createElement('img');
    img6.classList.add('rounded', 'mx-auto', 'd-block');
    img6.setAttribute('src', 'img/ESP.jpg');
    img6.setAttribute('alt', 'ESP');
    
    let equipo6 = document.createElement('p');
    equipo6.classList.add('my-auto', 'col-3');
    equipo6.textContent = 'Español';
    
    let puntos6 = document.createElement('p');
    puntos6.classList.add('my-auto', 'col-3');
    puntos6.textContent = '1648';
    
    //---------------------------------------------------------
    
    let div7 = document.createElement('div');
    div7.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto7 = document.createElement('p');
    puesto7.classList.add('my-auto', 'col-3');
    puesto7.textContent = '7';
    
    let pimg7 = document.createElement('p');
    pimg7.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img7 = document.createElement('img');
    img7.classList.add('rounded', 'mx-auto', 'd-block');
    img7.setAttribute('src', 'img/ITA.png');
    img7.setAttribute('alt', 'ITA');
    
    let equipo7 = document.createElement('p');
    equipo7.classList.add('my-auto', 'col-3');
    equipo7.textContent = 'Italia';
    
    let puntos7 = document.createElement('p');
    puntos7.classList.add('my-auto', 'col-3');
    puntos7.textContent = '1642';
    
    //---------------------------------------------------------
    
    let div8 = document.createElement('div');
    div8.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto8 = document.createElement('p');
    puesto8.classList.add('my-auto', 'col-3');
    puesto8.textContent = '8';
    
    let pimg8 = document.createElement('p');
    pimg8.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img8 = document.createElement('img');
    img8.classList.add('rounded', 'mx-auto', 'd-block');
    img8.setAttribute('src', 'img/ARG.jpg');
    img8.setAttribute('alt', 'ARG');
    
    let equipo8 = document.createElement('p');
    equipo8.classList.add('my-auto', 'col-3');
    equipo8.textContent = 'Argentina';
    
    let puntos8 = document.createElement('p');
    puntos8.classList.add('my-auto', 'col-3');
    puntos8.textContent = '1642';
    
    //---------------------------------------------------------
    
    let div9 = document.createElement('div');
    div9.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto9 = document.createElement('p');
    puesto9.classList.add('my-auto', 'col-3');
    puesto9.textContent = '9';
    
    let pimg9 = document.createElement('p');
    pimg9.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img9 = document.createElement('img');
    img9.classList.add('rounded', 'mx-auto', 'd-block');
    img9.setAttribute('src', 'img/URU.png');
    img9.setAttribute('alt', 'URU');
    
    let equipo9 = document.createElement('p');
    equipo9.classList.add('my-auto', 'col-3');
    equipo9.textContent = 'Uruguay';
    
    let puntos9 = document.createElement('p');
    puntos9.classList.add('my-auto', 'col-3');
    puntos9.textContent = '1639';
    
    //---------------------------------------------------------
    
    let div10 = document.createElement('div');
    div10.classList.add('row', 'ml-0', 'col-12', 'border');
    
    let puesto10 = document.createElement('p');
    puesto10.classList.add('my-auto', 'col-3');
    puesto10.textContent = '10';
    
    let pimg10 = document.createElement('p');
    pimg10.classList.add('my-auto', 'col-3', 'img-fluid');
    
    let img10 = document.createElement('img');
    img10.classList.add('rounded', 'mx-auto', 'd-block');
    img10.setAttribute('src', 'img/DEN.png');
    img10.setAttribute('alt', 'DEN');
    
    let equipo10 = document.createElement('p');
    equipo10.classList.add('my-auto', 'col-3');
    equipo10.textContent = 'Dinamarca';
    
    let puntos10 = document.createElement('p');
    puntos10.classList.add('my-auto', 'col-3');
    puntos10.textContent = '1632';
    
    //---------------------------------------------------------
    
    divDesc.appendChild(Puesto);
    divDesc.appendChild(Equipo);
    divDesc.appendChild(Puntos);
    div1.append(puesto1);
    div1.append(equipo1);
    pimg1.append(img1);
    div1.append(pimg1);
    div1.append(puntos1);
    div2.append(puesto2);
    div2.append(equipo2);
    pimg2.append(img2);
    div2.append(pimg2);
    div2.append(puntos2);
    div3.append(puesto3);
    div3.append(equipo3);
    pimg3.append(img3);
    div3.append(pimg3);
    div3.append(puntos3);
    div4.append(puesto4);
    div4.append(equipo4);
    pimg4.append(img4);
    div4.append(pimg4);
    div4.append(puntos4);
    div5.append(puesto5);
    div5.append(equipo5);
    pimg5.append(img5);
    div5.append(pimg5);
    div5.append(puntos5);
    div6.append(puesto6);
    div6.append(equipo6);
    pimg6.append(img6);
    div6.append(pimg6);
    div6.append(puntos6);
    div7.append(puesto7);
    div7.append(equipo7);
    pimg7.append(img7);
    div7.append(pimg7);
    div7.append(puntos7);
    div8.append(puesto8);
    div8.append(equipo8);
    pimg8.append(img8);
    div8.append(pimg8);
    div8.append(puntos8);
    div9.append(puesto9);
    div9.append(equipo9);
    pimg9.append(img9);
    div9.append(pimg9);
    div9.append(puntos9);
    div10.append(puesto10);
    div10.append(equipo10);
    pimg10.append(img10);
    div10.append(pimg10);
    div10.append(puntos10);
    section.appendChild(titulo);
    section.appendChild(divDesc);
    section.appendChild(div1);
    section.appendChild(div2);
    section.appendChild(div3);
    section.appendChild(div4);
    section.appendChild(div5);
    section.appendChild(div6);
    section.appendChild(div7);
    section.appendChild(div8);
    section.appendChild(div9);
    section.appendChild(div10);
    $ranking.appendChild(section);
    
    
    
    
    
    
}

function messi () {
    

    let divTotal = document.createElement('div');
    divTotal.classList.add('card-body', 'row', 'bg-dark', 'text-white', 'm-auto', 'p-0', 'pb-4');
    
    let imgTotal = document.createElement('img');
    imgTotal.setAttribute('src', 'img/Messi.jpg');
    imgTotal.setAttribute('alt', 'messi');
    imgTotal.classList.add('col-lg-8', 'img-fluid', 'p-0');
        
    let divTextTotal = document.createElement('div');
    divTextTotal.classList.add('col-lg-4', 'bg-dark', 'bg-gradient');
    
    let tituloTotal = document.createElement('h5');
    tituloTotal.classList.add('card-title', 'pt-3');
    tituloTotal.textContent = 'Total';
    
    let golesTotal = document.createElement('p');
    golesTotal.classList.add('card-text');
    golesTotal.textContent = 'Goles: 748';
    
    let promGolTotalTitulo = document.createElement('p');
    promGolTotalTitulo.classList.add('card-text');
    promGolTotalTitulo.textContent = 'Promedio de gol:';
    
    let promGolTotal = document.createElement('div');
    promGolTotal.classList.add('progress');
    
    let barraGolTotal = document.createElement('div');
    barraGolTotal.classList.add('progress-bar');
    barraGolTotal.setAttribute('role', 'progressbar');
    barraGolTotal.setAttribute('style', 'width: 81%');
    barraGolTotal.setAttribute('aria-valuenow', '0.81');
    barraGolTotal.setAttribute('aria-valuemin', '0');
    barraGolTotal.setAttribute('aria-valuemax', '100');
    barraGolTotal.textContent = '0.81';
    
    let asistenciasTotal = document.createElement('p');
    asistenciasTotal.classList.add('card-text', 'pt-4');
    asistenciasTotal.textContent = 'Asistencias: 315';
    
    let promAsistenciasTotalTitulo = document.createElement('p');
    promAsistenciasTotalTitulo.classList.add('card-text');
    promAsistenciasTotalTitulo.textContent = 'Promedio de asistencias:';
    
    let promAsistenciasTotal = document.createElement('div');
    promAsistenciasTotal.classList.add('progress');
    
    let barraAsistenciasTotal = document.createElement('div');
    barraAsistenciasTotal.classList.add('progress-bar');
    barraAsistenciasTotal.setAttribute('role', 'progressbar');
    barraAsistenciasTotal.setAttribute('style', 'width: 34%');
    barraAsistenciasTotal.setAttribute('aria-valuenow', '0.34');
    barraAsistenciasTotal.setAttribute('aria-valuemin', '0');
    barraAsistenciasTotal.setAttribute('aria-valuemax', '100');
    barraAsistenciasTotal.textContent = '0.34';
    
    let partidosTotal = document.createElement('p');
    partidosTotal.classList.add('card-text', 'pt-4');
    partidosTotal.textContent = 'Partidos: 928';
    
    let titulosTotal = document.createElement('p');
    titulosTotal.classList.add('card-text');
    titulosTotal.textContent = 'Titulos: 37';
    
    let premiosTotal = document.createElement('p');
    premiosTotal.classList.add('card-text');
    premiosTotal.textContent = 'Premios: 78';
    
    //---------------------------------------------------------
    
    let divArg = document.createElement('div');
    divArg.classList.add('card-body', 'row', 'bg-dark', 'text-white', 'm-auto', 'p-0', 'pb-4');
    
    let imgArg = document.createElement('img');
    imgArg.setAttribute('src', 'img/Messi-arg.jpg');
    imgArg.setAttribute('alt', 'messi');
    imgArg.classList.add('col-lg-8', 'img-fluid', 'p-0');
        
    let divTextArg = document.createElement('div');
    divTextArg.classList.add('col-lg-4', 'bg-dark', 'bg-gradient');
    
    let tituloArg = document.createElement('h5');
    tituloArg.classList.add('card-title', 'pt-3');
    tituloArg.textContent = 'Argentina';
    
    let golesArg = document.createElement('p');
    golesArg.classList.add('card-text');
    golesArg.textContent = 'Goles: 76';
    
    let promGolArgTitulo = document.createElement('p');
    promGolArgTitulo.classList.add('card-text');
    promGolArgTitulo.textContent = 'Promedio de gol:';
    
    let promGolArg = document.createElement('div');
    promGolArg.classList.add('progress');
    
    let barraGolArg = document.createElement('div');
    barraGolArg.classList.add('progress-bar');
    barraGolArg.setAttribute('role', 'progressbar');
    barraGolArg.setAttribute('style', 'width: 51%');
    barraGolArg.setAttribute('aria-valuenow', '0.51');
    barraGolArg.setAttribute('aria-valuemin', '0');
    barraGolArg.setAttribute('aria-valuemax', '100');
    barraGolArg.textContent = '0.51';
    
    let asistenciasArg = document.createElement('p');
    asistenciasArg.classList.add('card-text', 'pt-4');
    asistenciasArg.textContent = 'Asistencias: 47';
    
    let promAsistenciasArgTitulo = document.createElement('p');
    promAsistenciasArgTitulo.classList.add('card-text');
    promAsistenciasArgTitulo.textContent = 'Promedio de asistencias:';
    
    let promAsistenciasArg = document.createElement('div');
    promAsistenciasArg.classList.add('progress');
    
    let barraAsistenciasArg = document.createElement('div');
    barraAsistenciasArg.classList.add('progress-bar');
    barraAsistenciasArg.setAttribute('role', 'progressbar');
    barraAsistenciasArg.setAttribute('style', 'width: 31%');
    barraAsistenciasArg.setAttribute('aria-valuenow', '0.31');
    barraAsistenciasArg.setAttribute('aria-valuemin', '0');
    barraAsistenciasArg.setAttribute('aria-valuemax', '100');
    barraAsistenciasArg.textContent = '0.31';
    
    let partidosArg = document.createElement('p');
    partidosArg.classList.add('card-text', 'pt-4');
    partidosArg.textContent = 'Partidos: 150';
    
    let titulosArg = document.createElement('p');
    titulosArg.classList.add('card-text');
    titulosArg.textContent = 'Titulos: 2';
    
    let premiosArg = document.createElement('p');
    premiosArg.classList.add('card-text');
    premiosArg.textContent = 'Premios: 72';
    
    //---------------------------------------------------------
    
    let divBar = document.createElement('div');
    divBar.classList.add('card-body', 'row', 'bg-dark', 'text-white', 'm-auto', 'p-0', 'pb-4');
    
    let imgBar = document.createElement('img');
    imgBar.setAttribute('src', 'img/Messi-bar.jpg');
    imgBar.setAttribute('alt', 'messi');
    imgBar.classList.add('col-lg-8', 'img-fluid', 'p-0');
    
    let divTextBar = document.createElement('div');
    divTextBar.classList.add('col-lg-4', 'bg-dark', 'bg-gradient');
    
    let tituloBar = document.createElement('h5');
    tituloBar.classList.add('card-title', 'pt-3');
    tituloBar.textContent = 'Barcelona';
    
    let golesBar = document.createElement('p');
    golesBar.classList.add('card-text');
    golesBar.textContent = 'Goles: 672';
    
    let promGolBarTitulo = document.createElement('p');
    promGolBarTitulo.classList.add('card-text');
    promGolBarTitulo.textContent = 'Promedio de gol:';
    
    let promGolBar = document.createElement('div');
    promGolBar.classList.add('progress');
    
    let barraGolBar = document.createElement('div');
    barraGolBar.classList.add('progress-bar');
    barraGolBar.setAttribute('role', 'progressbar');
    barraGolBar.setAttribute('style', 'width: 86%');
    barraGolBar.setAttribute('aria-valuenow', '0.86');
    barraGolBar.setAttribute('aria-valuemin', '0');
    barraGolBar.setAttribute('aria-valuemax', '100');
    barraGolBar.textContent = '0.86';
    
    let asistenciasBar = document.createElement('p');
    asistenciasBar.classList.add('card-text', 'pt-4');
    asistenciasBar.textContent = 'Asistencias: 268';
    
    let promAsistenciasBarTitulo = document.createElement('p');
    promAsistenciasBarTitulo.classList.add('card-text');
    promAsistenciasBarTitulo.textContent = 'Promedio de asistencias:';
    
    let promAsistenciasBar = document.createElement('div');
    promAsistenciasBar.classList.add('progress');
    
    let barraAsistenciasBar = document.createElement('div');
    barraAsistenciasBar.classList.add('progress-bar');
    barraAsistenciasBar.setAttribute('role', 'progressbar');
    barraAsistenciasBar.setAttribute('style', 'width: 34%');
    barraAsistenciasBar.setAttribute('aria-valuenow', '0.34');
    barraAsistenciasBar.setAttribute('aria-valuemin', '0');
    barraAsistenciasBar.setAttribute('aria-valuemax', '100');
    barraAsistenciasBar.textContent = '0.34';
    
    let partidosBar = document.createElement('p');
    partidosBar.classList.add('card-text', 'pt-4');
    partidosBar.textContent = 'Partidos: 778';
    
    let titulosBar = document.createElement('p');
    titulosBar.classList.add('card-text');
    titulosBar.textContent = 'Titulos: 35';
    
    let premiosBar = document.createElement('p');
    premiosBar.classList.add('card-text');
    premiosBar.textContent = 'Premios: 78';
    
    //---------------------------------------------------------
    
    divTextTotal.appendChild(tituloTotal);
    divTextTotal.appendChild(golesTotal);
    divTextTotal.appendChild(promGolTotalTitulo);
    promGolTotal.appendChild(barraGolTotal);
    divTextTotal.appendChild(promGolTotal);
    divTextTotal.appendChild(asistenciasTotal);
    divTextTotal.appendChild(promAsistenciasTotalTitulo);
    promAsistenciasTotal.appendChild(barraAsistenciasTotal);
    divTextTotal.appendChild(promAsistenciasTotal);
    divTextTotal.appendChild(partidosTotal);
    divTextTotal.appendChild(titulosTotal);
    divTextTotal.appendChild(premiosTotal);
    divTotal.appendChild(imgTotal);
    divTotal.appendChild(divTextTotal);
    
    //---------------------------------------------------------
    
    divTextArg.appendChild(tituloArg);
    divTextArg.appendChild(golesArg);
    divTextArg.appendChild(promGolArgTitulo);
    promGolArg.appendChild(barraGolArg);
    divTextArg.appendChild(promGolArg);
    divTextArg.appendChild(asistenciasArg);
    divTextArg.appendChild(promAsistenciasArgTitulo);
    promAsistenciasArg.appendChild(barraAsistenciasArg);
    divTextArg.appendChild(promAsistenciasArg);
    divTextArg.appendChild(partidosArg);
    divTextArg.appendChild(titulosArg);
    divTextArg.appendChild(premiosArg);
    divArg.appendChild(imgArg);
    divArg.appendChild(divTextArg);    
    
    //---------------------------------------------------------
    
    divTextBar.appendChild(tituloBar);
    divTextBar.appendChild(golesBar);
    divTextBar.appendChild(promGolBarTitulo);
    promGolBar.appendChild(barraGolBar);
    divTextBar.appendChild(promGolBar);
    divTextBar.appendChild(asistenciasBar);
    divTextBar.appendChild(promAsistenciasBarTitulo);
    promAsistenciasBar.appendChild(barraAsistenciasBar);
    divTextBar.appendChild(promAsistenciasBar);
    divTextBar.appendChild(partidosBar);
    divTextBar.appendChild(titulosBar);
    divTextBar.appendChild(premiosBar);
    divBar.appendChild(imgBar);
    divBar.appendChild(divTextBar);    
    
    //---------------------------------------------------------
    
    $messi.appendChild(divTotal);
    $messi.appendChild(divArg);
    $messi.appendChild(divBar);
}


pantallaInicio();

