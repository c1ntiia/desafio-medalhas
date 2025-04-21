const prompt = require('prompt-sync')();

function rankingMedalhas() {
    let paises = [];
    let medalhas = [];

    while (true) {
        let pais = prompt("Digite o nome do país ou 'sair' para encerrar:");

        if (pais.toLowerCase() === "sair") {
            break;
        }

        console.log(`\n${pais}`)
        let ouroMedalha = parseInt(prompt("Quantidade de medalhas de ouro do país:"));
        let prataMedalha = parseInt(prompt("Quantidade de medalhas de prata do país:"));
        let bronzeMedalha = parseInt(prompt("Quantidade de medalhas de bronze do país:"));
        console.log("\n");

        if (!isNaN(ouroMedalha) && !isNaN(prataMedalha) && !isNaN(bronzeMedalha) &&
            ouroMedalha >= 0 && prataMedalha >= 0 && bronzeMedalha >= 0) {
            paises.push(pais);
            medalhas.push(ouroMedalha + prataMedalha + bronzeMedalha);
        } else {
            console.log("Insira valores numéricos válidos para a quantidade de medalhas.");
        }
    }

    if (paises.length > 0) {
        console.log("\n####### Ranking de Medalhas #######\n");

        for (let i = 0; i < paises.length; i++) {
            let primeiro = -1;
            let ranking = -1;

            for (let j = 0; j < medalhas.length; j++) {
                if (medalhas[j] > primeiro) {
                    primeiro = medalhas[j];
                    ranking = j;
                }
            }

            console.log(`${paises[ranking]}: ${medalhas[ranking]} medalhas`);

            medalhas[ranking] = -1;
        }

    } else {
        console.log("\nNenhum dado foi inserido. Tente novamente!");
    }

}
rankingMedalhas();