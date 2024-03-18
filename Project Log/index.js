//Nome e Pontos (variáveis)
let userName = "LanaBanana01"
let pontosXP = 2490

// Estrt de Decisão
let nivelDoHeroi;

if (pontosXP <1000) {
    nivelDoHeroi = "Ferro";
} else if (pontosXP >= 1001 && pontosXP <=2000){
    nivelDoHeroi = "Bronze";
} else if (pontosXP >= 2001 && pontosXP <= 5000){
    nivelDoHeroi = "Prata"
} else if (pontosXP >= 5001 && pontosXP <= 7000){
    nivelDoHeroi = "Ouro"
} else if (pontosXP >= 7001 && pontosXP <= 8000){
    nivelDoHeroi = "Platina"
} else if (pontosXP >= 8001 && pontosXP <= 9000){
    nivelDoHeroi = "Ascendente"
} else if (pontosXP >=9001 && pontosXP <= 10000){
    nivelDoHeroi = "Implacável"
} else if (pontosXP >= 10001 && pontosXP ==10001){
    nivelDoHeroi = "Radiante"
}
console.log  (`Herói ${userName} está no level ${nivelDoHeroi}.`);

