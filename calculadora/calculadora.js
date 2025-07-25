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
                          <br>
                          <label for="lado1">Lado 1:</label>
                          <input type="number" id="lado1" required>
                          <br>
                          <label for="lado2">Lado 2:</label>
                          <input type="number" id="lado2" required>
                      `;
      break;

    case "los":
      dadosD.innerHTML = `
                          <label for="diagonalMaior">Diagonal Maior:</label>
                          <input type="number" id="diagonalMaior" required>
                          <br>
                          <label for="diagonalMenor">Diagonal Menor:</label>
                          <input type="number" id="diagonalMenor" required>
                          <br>
                          <label for="ladoL">Lado:</label>
                          <input type="number" id="ladoL" required>
                      `;
      break;

    case "tria":
      dadosD.innerHTML = `
                          <label for="baseT">Base:</label>
                          <input type="number" id="baseT" required>
                          <br>
                          <label for="alturaT">Altura:</label>
                          <input type="number" id="alturaT" required>
                          <br>
                          <label for="ladoT1">Lado 1:</label>
                          <input type="number" id="ladoT1" required>
                          <br>
                          <label for="ladoT2">Lado 2:</label>
                          <input type="number" id="ladoT2" required>
                          <br>
                          <label for="ladoT3">Lado 3:</label>
                          <input type="number" id="ladoT3" required>
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
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA}`;
      break;

    case "ret":
      const largura = parseFloat(document.getElementById("largura").value);
      const comprimento = parseFloat(
        document.getElementById("comprimento").value
      );
      resultadoA = largura * comprimento;
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA}`;
      break;

    case "paral":
      const base = parseFloat(document.getElementById("base").value);
      const altura = parseFloat(document.getElementById("altura").value);
      resultadoA = base * altura;
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA}`;
      break;

    case "trap":
      const baseMaior = parseFloat(document.getElementById("baseMaior").value);
      const baseMenor = parseFloat(document.getElementById("baseMenor").value);
      const alturaTrap = parseFloat(
        document.getElementById("alturaTrap").value
      );
      resultadoA = ((baseMaior + baseMenor) * alturaTrap) / 2;
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA}`;
      break;

    case "los":
      const diagonalMaior = parseFloat(
        document.getElementById("diagonalMaior").value
      );
      const diagonalMenor = parseFloat(
        document.getElementById("diagonalMenor").value
      );
      resultadoA = (diagonalMaior * diagonalMenor) / 2;
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA}`;
      break;

    case "tria":
      const baseT = parseFloat(document.getElementById("baseT").value);
      const alturaT = parseFloat(document.getElementById("alturaT").value);
      resultadoA = (baseT * alturaT) / 2;
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA}`;
      break;

    case "circ":
      const raio = parseFloat(document.getElementById("raio").value);
      resultadoA = Math.PI * Math.pow(raio, 2);
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA.toFixed(2)}`;
      break;

    case "el":
      const semiEMa = parseFloat(document.getElementById("semiEMa").value);
      const semiEMe = parseFloat(document.getElementById("semiEMe").value);
      resultadoA = Math.PI * semiEMa * semiEMe;
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA.toFixed(2)}`;
      break;

    case "esf":
      const raioEsfera = parseFloat(
        document.getElementById("raioEsfera").value
      );
      resultadoA = 4 * Math.PI * Math.pow(raioEsfera, 2);
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA.toFixed(2)}`;
      break;

    case "cil":
      const raioCil = parseFloat(document.getElementById("raioCil").value);
      const alturaCil = parseFloat(document.getElementById("alturaCil").value);
      resultadoA = 2 * Math.PI * raioCil * alturaCil + 2 * Math.PI * Math.pow(raioCil, 2);
      document.getElementById("resultadoA").innerText = `Área = ${resultadoA.toFixed(2)}`;
      break;

    default:
      document.getElementById("resultadoA").innerText =
        "Inválido";
      break;
  }

}

function calcularP() {
    const forma = document.getElementById("forma").value;
    let resultadoP = 0;
  
    switch (forma) {

      case "esf":
      case "cil":
        document.getElementById("resultadoP").innerText = "Por ser uma figura tridimensional, não é possível calcular o perímetro"
        break;

      case "quadrado":
        const lado = parseFloat(document.getElementById("lado").value);
        resultadoP = lado * 4;
        document.getElementById("resultadoP").innerText = `Perímetro = ${resultadoP}`;
        break;
  
      case "ret":
        const largura = parseFloat(document.getElementById("largura").value);
        const comprimento = parseFloat(document.getElementById("comprimento").value);
        resultadoP = 2 * (largura + comprimento);
        document.getElementById("resultadoP").innerText = `Perímetro = ${resultadoP}`;
        break;
  
      case "paral":
        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);
        resultadoP = 2 * (base + altura);
        document.getElementById("resultadoP").innerText = `Perímetro = ${resultadoP}`;
        break;
  
      case "trap":
        const baseMaior = parseFloat(document.getElementById("baseMaior").value);
        const baseMenor = parseFloat(document.getElementById("baseMenor").value);
        const lado1 = parseFloat(document.getElementById("lado1").value);
        const lado2 = parseFloat(document.getElementById("lado2").value);
        resultadoP = baseMaior + baseMenor + lado1 + lado2;
        document.getElementById("resultadoP").innerText = `Perímetro = ${resultadoP}`;
        break;
  
      case "los":
        const ladoL = parseFloat(document.getElementById("ladoL").value)
        resultadoP = 4 * ladoL
        document.getElementById("resultadoP").innerText = `Perímetro = ${resultadoP}`;
        break;
  
      case "tria":
        const ladoT1 = parseFloat(document.getElementById("ladoT1").value)
        const ladoT2 = parseFloat(document.getElementById("ladoT2").value)
        const ladoT3 = parseFloat(document.getElementById("ladoT3").value)
        resultadoP = ladoT1 + ladoT2 + ladoT3
        document.getElementById("resultadoP").innerText = `Perímetro = ${resultadoP}`;
        break;
  
      case "circ":
        const raio = parseFloat(document.getElementById("raio").value);
        resultadoP = 2 * Math.PI * raio
        document.getElementById("resultadoP").innerText = `Perímetro = ${resultadoP.toFixed(2)}`;
        break;
  
      case "el":
        const semiEMa = parseFloat(document.getElementById("semiEMa").value);
        const semiEMe = parseFloat(document.getElementById("semiEMe").value);
        resultadoP = Math.PI*(3*(semiEMa + semiEMe) - Math.sqrt((3*semiEMa + semiEMe)*(semiEMa + 3*semiEMe)))
        document.getElementById("resultadoP").innerText = `Perímetro ≈ ${resultadoP.toFixed(2)}`;
        break;
  
      default:
        document.getElementById("resultadoP").innerText =
          "Inválido";
        break;
    }
  }

  function calcularV() {
    const forma = document.getElementById("forma").value;
    let resultadoV = 0
  
    switch (forma) {
      case "quadrado":
      case "ret":
      case "paral":
      case "trap":
      case "los":
      case "tria":
      case "circ":
      case "el":
        document.getElementById("resultadoV").innerText = "Por ser uma figura bidimensional, não é possível calcular o volume";
        break;
  
      case "esf":
        const raioEsfera = parseFloat(document.getElementById("raioEsfera").value); 
        resultadoV = (4 / 3) * Math.PI * Math.pow(raioEsfera, 3);
        document.getElementById("resultadoV").innerText = `Volume = ${resultadoV.toFixed(2)}`;
        break;
  
      case "cil":
        const raioCil = parseFloat(document.getElementById("raioCil").value);
        const alturaCil = parseFloat(document.getElementById("alturaCil").value);
        resultadoV = Math.PI * Math.pow(raioCil, 2) * alturaCil;
        document.getElementById("resultadoV").innerText = `Volume = ${resultadoV.toFixed(2)}`;
        break;
  
      default:
        document.getElementById("resultadoV").innerText = "Inválido";
        break;
    }
  }
