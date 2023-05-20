function porcentagem(){
    let neleitores = parseFloat(prompt("Quantos eleitores o município teve no total?"));
    let votosNulos = parseFloat(prompt("Quantos votos nulos o município teve no total?"));
    let votosBrancos = parseFloat(prompt("Quantos votos brancos o município teve no total?"));
    let votosValidos = parseFloat(prompt("Quantos votos validos o município teve no total?"));
    let porcentN = votosNulos/neleitores*100
    let porcentB = votosBrancos/neleitores*100
    let porcentV = votosValidos/neleitores*100
    alert ("Esta é a porcentagem de votos nulos do município: "+ porcentN.toFixed(2) + "%");
    alert ("Esta é a porcentagem de votos brancos no município: "+ porcentB.toFixed(2) + "%");
    alert ("Esta é a porcentagem de votos válidos no município: "+ porcentV.toFixed(2) + "%");
}