function calcularIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  if (!peso || !altura) {
    alert("Por favor ingrese su peso y altura.");
    return;
  }

  const imc = peso / (altura * altura);
  let resultado = `Su IMC es: ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    resultado += " (Bajo peso)";
  } else if (imc < 25) {
    resultado += " (Peso normal)";
  } else if (imc < 30) {
    resultado += " (Sobrepeso)";
  } else {
    resultado += " (Obesidad)";
  }

  document.getElementById("resultado").innerHTML = resultado;
}
