  //Calculadora de partidas rankeadas
  let userHeroi = "SandáliaFranciscana202"
  let saldoDePartidas = partidas (600, 400)
  //Ativar função
      function partidas (vitorias, derrotas){
       let resultadoPartidas = vitorias - derrotas
        return resultadoPartidas 
  }
   //Rankings
  
   if (saldoDePartidas <10){
      ranking = "Ferro"
   } else if (saldoDePartidas >= 11 && saldoDePartidas <= 20){
      ranking = "Bronze"
   } else if (saldoDePartidas >= 21 && saldoDePartidas <= 50){
      ranking = "Prata"
   } else if (saldoDePartidas >= 51 && saldoDePartidas <= 80){
      ranking = "Ouro"
   } else if (saldoDePartidas >= 81 && saldoDePartidas <= 90){
      ranking = "Diamante"
   } else if (saldoDePartidas >= 91 && saldoDePartidas <= 100){
      ranking = "Lendário"
   } if (saldoDePartidas >= 101){
      ranking = "Imortal"
   }
   
      console.log (`O Herói ${userHeroi} tem um saldo de ${saldoDePartidas} vitória e está no ranking ${ranking}.`)