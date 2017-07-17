  var usuario = prompt("Cual es tu peso?");
  var planeta = parseInt(prompt("Elige tu planeta\n 1 es Marte , 2 es Jupiter"));
  var peso = parseInt(usuario);
  var g_tierra = 9.8;
  var g_marte = 3.7;
  var g_jupiter = 24.8;
  var peso_final;
  var nombre;
  if(planeta == 1)
  {
    peso_final = peso * g_marte / g_tierra;
    nombre = "Marte";
  }

else if(planeta == 2)

  {
    peso_final = peso * g_jupiter / g_tierra;
    nombre = "Jupiter";
  }

else
{
  peso_final = 100000;
  nombre = "krypton";
}
peso_final = parseInt(peso_final);
alert("Tu peso en " + nombre + " es <strong>" + peso_final + " kilos</strong>");