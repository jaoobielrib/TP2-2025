function mostrarCampos() {
  const forma = document.getElementById("forma").value;
  const dadosD = document.getElementById("dados");
  dadosD.innerHTML = "";

  switch (forma) {
    case "quadrado":
      dadosD.innerHTML = `
                          <label for="lado">Lado:</label>
                          <input type="number" id="lado" required>
                      `;
      break;

    case "ret":
      dadosD.innerHTML = `
                          <label for="largura">Largura:</label>
                          <input type="number" id="largura" required>
                          <br>
                          <label for="comprimento">Comprimento:</label>
                          <input type="number" id="comprimento" required>
                      `;
      break;

    case "paral":
      dadosD.innerHTML = `
                          <label for="base">Base:</label>
                          <input type="number" id="base" required>
                          <br>
                          <label for="altura">Altura:</label>
                          <input type="number" id="altura" required>
                      `;
      break;

    case "trap":
      dadosD.innerHTML = `
                          <label for="baseMaior">Base Maior:</label>
                          <input type="number" id="baseMaior" required>
                          <br>
                          <label for="baseMenor">Base Menor:</label>
                          <input type="number" id="baseMenor" required>
                          <br>
                          <label for="alturaTrap">Altura:</label>
                          <input type="number" id="alturaTrap" required>
                      `;
      break;

    case "los":
      dadosD.innerHTML = `
                          <label for="diagonalMaior">Diagonal Maior:</label>
                          <input type="number" id="diagonalMaior" required>
                          <br>
                          <label for="diagonalMenor">Diagonal Menor:</label>
                          <input type="number" id="diagonalMenor" required>
                      `;
      break;

    case "tria":
      dadosD.innerHTML = `
                          <label for="baseT">Base:</label>
                          <input type="number" id="baseT" required>
                          <br>
                          <label for="alturaT">Altura:</label>
                          <input type="number" id="alturaT" required>
                      `;
      break;

    case "circ":
      dadosD.innerHTML = `
                          <label for="raio">Raio:</label>
                          <input type="number" id="raio" required>
                      `;
      break;

    case "el":
      dadosD.innerHTML = `
                          <label for="semiEMa">Semi-Eixo Maior:</label>
                          <input type="number" id="semiEMa" required>
                          <br>
                          <label for="semiEMe">Semi-Eixo Menor:</label>
                          <input type="number" id="semiEMe" required>
                      `;
      break;

    case "esf":
      dadosD.innerHTML = `
                          <label for="raioEsfera">Raio:</label>
                          <input type="number" id="raioEsfera" required>
                      `;
      break;

    case "cil":
      dadosD.innerHTML = `
                          <label for="raioCil">Raio:</label>
                          <input type="number" id="raioCil" required>
                          <br>
                          <label for="alturaCil">Altura:</label>
                          <input type="number" id="alturaCil" required>
                      `;
      break;

    default:
      document.getElementById("resultadoA").innerText =
        "Inválido";
      break;
  }
}

function calcularA() {
  const forma = document.getElementById("forma").value;
  resultadoA = 0;

  switch (forma) {
    case "quadrado":
      const lado = parseFloat(document.getElementById("lado").value);
      resultadoA = lado * lado;
      break;

    case "ret":
      const largura = parseFloat(document.getElementById("largura").value);
      const comprimento = parseFloat(
        document.getElementById("comprimento").value
      );
      resultadoA = largura * comprimento;
      break;

    case "paral":
      const base = parseFloat(document.getElementById("base").value);
      const altura = parseFloat(document.getElementById("altura").value);
      resultadoA = base * altura;
      break;

    case "trap":
      const baseMaior = parseFloat(document.getElementById("baseMaior").value);
      const baseMenor = parseFloat(document.getElementById("baseMenor").value);
      const alturaTrap = parseFloat(
        document.getElementById("alturaTrap").value
      );
      resultadoA = ((baseMaior + baseMenor) * alturaTrap) / 2;
      break;

    case "los":
      const diagonalMaior = parseFloat(
        document.getElementById("diagonalMaior").value
      );
      const diagonalMenor = parseFloat(
        document.getElementById("diagonalMenor").value
      );
      resultadoA = (diagonalMaior * diagonalMenor) / 2;
      break;

    case "tria":
      const baseT = parseFloat(document.getElementById("baseT").value);
      const alturaT = parseFloat(document.getElementById("alturaT").value);
      resultadoA = (baseT * alturaT) / 2;
      break;

    case "circ":
      const raio = parseFloat(document.getElementById("raio").value);
      resultadoA = Math.PI * Math.pow(raio, 2);
      break;

    case "el":
      const semiEMa = parseFloat(document.getElementById("semiEMa").value);
      const semiEMe = parseFloat(document.getElementById("semiEMe").value);
      resultadoA = Math.PI * semiEMa * semiEMe;
      break;

    case "esf":
      const raioEsfera = parseFloat(
        document.getElementById("raioEsfera").value
      );
      resultadoA = 4 * Math.PI * Math.pow(raioEsfera, 2);
      break;

    case "cil":
      const raioCil = parseFloat(document.getElementById("raioCil").value);
      const alturaCil = parseFloat(document.getElementById("alturaCil").value);
      resultadoA = Math.PI * Math.pow(raioCil, 2) * alturaCil;
      break;

    default:
      document.getElementById("resultadoA").innerText =
        "Inválido";
      break;
  }

  document.getElementById("resultadoA").innerText = `Área = ${resultadoA}`;
}

function calcularP() {
    const forma = document.getElementById("forma").value;
    let resultadoP = 0;
  
    switch (forma) {
      case "quadrado":
        const lado = parseFloat(document.getElementById("lado").value);
        resultadoP = lado * 4;
        break;
  
      case "ret":
        const largura = parseFloat(document.getElementById("largura").value);
        const comprimento = parseFloat(document.getElementById("comprimento").value);
        resultadoP = 2 * (largura + comprimento);
        break;
  
      case "paral":
        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);
        resultadoP = 2 * (base + altura);
        break;
  
      case "trap":
        const baseMaior = parseFloat(document.getElementById("baseMaior").value);
        const baseMenor = parseFloat(document.getElementById("baseMenor").value);
        const alturaTrap = parseFloat(document.getElementById("alturaTrap").value);
        resultadoP = baseMaior + baseMenor + 2 * alturaTrap;
        break;
  
      case "los":
        const diagonalMaior = parseFloat(document.getElementById("diagonalMaior").value);
        const diagonalMenor = parseFloat(document.getElementById("diagonalMenor").value);
        resultadoP = diagonalMaior + diagonalMenor
        break;
  
      case "tria":
        const baseT = parseFloat(document.getElementById("baseT").value);
        const alturaT = parseFloat(document.getElementById("alturaT").value);
        resultadoP = 3 * baseT
        break;
  
      case "circ":
        const raio = parseFloat(document.getElementById("raio").value);
        resultadoP = 2 * Math.PI * raio
        break;
  
      case "el":
        const semiEMa = parseFloat(document.getElementById("semiEMa").value);
        const semiEMe = parseFloat(document.getElementById("semiEMe").value);
        resultadoP = 2 * Math.PI * Math.sqrt((Math.pow(semiEMa, 2) + Math.pow(semiEMe, 2))/2)
        break;
  
      case "esf":
        const raioEsfera = parseFloat(
          document.getElementById("raioEsfera").value
        );
        resultadoP = 2 * Math.PI * raioEsfera
        break;
  
      case "cil":
        const raioCil = parseFloat(document.getElementById("raioCil").value);
        const alturaCil = parseFloat(document.getElementById("alturaCil").value);
        resultadoP = 2 * Math.PI * raioCil
        break;
  
      default:
        document.getElementById("resultadoP").innerText =
          "Inválido";
        break;
    }
  
    document.getElementById("resultadoP").innerText = `Área = ${resultadoP}`;
  }

