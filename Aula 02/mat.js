function somar() {
  var numero1 = parseFloat(document.getElementById("n1").value);
  var numero2 = parseFloat(document.getElementById("n2").value);
  var res = document.getElementById("res");
  res.innerHTML = numero1 + numero2;
  return res;
}

function sub() {
  var numero1 = parseFloat(document.getElementById("n3").value);
  var numero2 = parseFloat(document.getElementById("n4").value);
  var res = document.getElementById("resSub");
  res.innerHTML = numero1 - numero2;
  return res;
}
function mult() {
  var numero1 = parseFloat(document.getElementById("n5").value);
  var numero2 = parseFloat(document.getElementById("n6").value);
  var res = document.getElementById("resMult");
  res.innerHTML = numero1 * numero2;
  return res;
}
function div() {
  document.getElementById("n8").style.border = "1px solid black";
  var numero1 = parseFloat(document.getElementById("n7").value);
  var numero2 = parseFloat(document.getElementById("n8").value);
  var res = document.getElementById("resDiv");
  if (numero2 !== 0) {
    res.innerHTML = (numero1 / numero2).toFixed(1);
  } else {
    res.innerHTML = "Não é permitido divisão por 0";
    document.getElementById("n8").style.border = "2px solid red";
  }
}
function media() {
  var m1 = parseFloat(document.getElementById("m1").value);
  var m2 = parseFloat(document.getElementById("m2").value);
  var m3 = parseFloat(document.getElementById("m3").value);
  var m4 = parseFloat(document.getElementById("m4").value);
  var m5 = parseFloat(document.getElementById("m5").value);
  var media = document.getElementById("respMedia");
  var res = (m1 + m2 + m3 + m4 + m5) / 5;
  var msg = Document.getElementById("msg");

  if (res >= 7) {
    media.textContent = res;
    msg.textContent = "Passou";
    msg.style.color = "green";
  } else {
    media.textContent = res;
    msg.textContent = "Reprovou";
    msg.style.color = "red";
  }
}
function imc() {
  var v1 = parseFloat(document.getElementById("v1").value);
  var v2 = parseFloat(document.getElementById("v2").value);
  var imc = document.getElementById("respImc");
  var res = v1 / (v2 * v2);
  var msg = Document.getElementById("msg");
  if (res > 40) {
    msg.textContent = "Obesidade grau 3";
  }
  if (res > 35 && res < 39.9) {
    msg.textContent = "Obesidade grau 2";
  }
  if (res > 30 && res < 34.9) {
    msg.textContent = "Obesidade grau 1";
  }
  if (res > 25 && res < 29.9) {
    msg.textContent = "Sobrepeso";
  }
  if (res > 18.6 && res < 24.9) {
    msg.textContent = "Normal";
  } else {
    msg.textContent = "Abaixo do normal";
  }
}

function idade(){
  var v3 = parseFloat(document.getElementById("v3").value)
  var idade = document.getElementById("respId")
  var msg = document.getElementById("msg")

  if(idade>18){
    msg.textContent ="Liberado"
  }else{
    msg.textContent ="Menor de idade"
  }
}
