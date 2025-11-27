function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Declaração da variável que irá armazenar o nível
    let nivel = "";

    // Verifica em qual faixa de vitórias o jogador se encontra e atribui o nível correspondente
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Mestre";
    } else if (vitorias >= 101) {
        nivel = "Grão-Mestre";
    }

    // Exibe o resultado com o saldo de vitórias e o nível do jogador
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Testando a função
console.log(calcularRank(45, 20));  // Exemplo com 45 vitórias e 20 derrotas
console.log(calcularRank(5, 2));    // Exemplo com 5 vitórias e 2 derrotas
console.log(calcularRank(55, 10));  // Exemplo com 55 vitórias e 10 derrotas
console.log(calcularRank(101, 30)); // Exemplo com 101 vitórias e 30 derrotas