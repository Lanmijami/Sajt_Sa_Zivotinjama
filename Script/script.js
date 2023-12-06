let brojac = 0;
let nizZivotinja = [
  '../Img/dabar.png',
  '../Img/lav.png',
  '../Img/lisica.png',
  '../Img/majmunce.png',
  '../Img/meda.png',
  '../Img/panda.png',
  '../Img/rakun.png',
  '../Img/slon.png',
  '../Img/sova.png',
  '../Img/tigar.png',
  '../Img/veverica.png',
  '../Img/vuk.png',
  '../Img/zeka.png',
  '../Img/zirafa.png',
];

let nizZivotinjaAg = [
  '../ImgAg/dabar.png',
  '../ImgAg/lav.png',
  '../ImgAg/lisica.png',
  '../ImgAg/majmunce.png',
  '../ImgAg/meda.png',
  '../ImgAg/panda.png',
  '../ImgAg/rakun.png',
  '../ImgAg/slon.png',
  '../ImgAg/sova.png',
  '../ImgAg/tigar.png',
  '../ImgAg/veverica.png',
  '../ImgAg/vuk.png',
  '../ImgAg/zeka.png',
  '../ImgAg/zirafa.png',
];

let nizZivotinjaAu = [
  '../ImgAu/dabar.png',
  '../ImgAu/lav.png',
  '../ImgAu/lisica.png',
  '../ImgAu/majmunce.png',
  '../ImgAu/meda.png',
  '../ImgAu/panda.png',
  '../ImgAu/rakun.png',
  '../ImgAu/slon.png',
  '../ImgAu/sova.png',
  '../ImgAu/tigar.png',
  '../ImgAu/veverica.png',
  '../ImgAu/vuk.png',
  '../ImgAu/zeka.png',
  '../ImgAu/zirafa.png',
];

function dodaj() {
  if (brojac % 2 == 0) {
    document.getElementById('popUpHolder').style.display = 'block';
  } else {
    document.getElementById('popUpHolder').style.display = 'none';
  }

  document.getElementById('input').value = '';

  brojac = brojac + 1;
}

function posalji() {
  let input = document.getElementById('input').value;

  const random = Math.floor(Math.random() * 14);

  document.getElementById('popUpHolder').style.display = 'none';

  if (input < 30) {
    document.getElementById('zivotinja1').style.display = 'none';
    alert('Učili ste premalo danas :(');
  } else if (input < 60) {
    document.getElementById('zivotinja1').src = nizZivotinja[random];
    document.getElementById('zivotinja1').style.display = 'block';
    alert('Učili ste manje od sat vremena i zaslužili ste nagradu :)');
  } else if (input < 120) {
    document.getElementById('zivotinja1').src = nizZivotinjaAg[random];
    document.getElementById('zivotinja1').style.display = 'block';
    alert('Učili ste do dva sata i zaslužili ste dobru nagradu :)');
  } else {
    document.getElementById('zivotinja1').src = nizZivotinjaAu[random];
    document.getElementById('zivotinja1').style.display = 'block';
    alert('Učili ste više od dva sata i zaslužili ste najbolju nagradu :))');
  }

  brojac = brojac + 1;
}
