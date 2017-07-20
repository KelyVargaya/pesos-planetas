function pesoPlaneta(){
    var resultado = document.getElementById("resultado");
    var g_mercurio = (3.70 * calcularPeso()).toFixed(2);
    var g_venus = (8.87 * calcularPeso()).toFixed(2);
    var g_marte = (3.71 * calcularPeso()).toFixed(2);
    var g_jupiter = (23.12 * calcularPeso()).toFixed(2);
    var g_saturno = (8.96 * calcularPeso()).toFixed(2);
    var g_urano = (8.69 * calcularPeso()).toFixed(2);
    var g_neptuno = (11 * calcularPeso()).toFixed(2);
    var g_pluton = (0.81 * calcularPeso()).toFixed(2);

    resultado.innerHTML = (
      "Tu peso en Mercurio es: " + g_mercurio + "</br>" +
      "Tu peso en Venus es: " + g_venus + "</br>" +
      "Tu peso en Marte es: " + g_marte + "</br>" +
      "Tu peso en Júpiter es: " + g_jupiter + "</br>" +
      "Tu peso en Saturno es: " + g_saturno + "</br>" +
      "Tu peso en Urano es: " + g_urano + "</br>" +
      "Tu peso en Neptuno es: " + g_neptuno + "</br>" +
      "Tu peso en Plutón es: " + g_pluton + "</br>");
  }

  function calcularPeso (){
    var usuario = parseFloat(document.getElementById("pesoUser").value);
    var g_tierra = 9.8;
    var m_tierra = usuario/g_tierra;
    return m_tierra.toFixed(2);
  }
