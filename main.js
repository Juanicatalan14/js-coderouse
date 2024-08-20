let matrizRiesgo = true;
const probabilidades = [1, 2, 4, 8]; // 1: Improbable, 2: Remoto, 4: Ocasional, 8: Probable
const impactos = [1, 2, 4, 8]; // 1: Insignificante, 2: Dañina, 4: Crítica, 8: Catastrófico
const maxImpacto = 64; // Nivel máximo de riesgo (8 * 8)

// Función para calcular el nivel de riesgo
function calcularNivelRiesgo(probabilidad, impacto) {
    return probabilidad * impacto
}

// Función para calcular el porcentaje de riesgo
function calcularPorcentajeRiesgo(nivelRiesgo, nivelRiesgoMaximo) {
    return (nivelRiesgo / nivelRiesgoMaximo) * 100
}
// Función para sugerir medidas preventivas o correctivas basadas en el nivel de riesgo
function sugerirMedidas(nivelRiesgo) {
    if (nivelRiesgo >= 1 && nivelRiesgo <= 8) {
        return "Riesgo Bajo: Monitoreo regular y uso de EPP básico."
    } else if (nivelRiesgo >= 9 && nivelRiesgo <= 24) {
        return "Riesgo Moderado: Implementar controles administrativos y capacitación."
    } else if (nivelRiesgo >= 25 && nivelRiesgo <= 48) {
        return "Riesgo Alto: Requiere medidas correctivas inmediatas, como ingeniería de control."
    } else if (nivelRiesgo >= 49 && nivelRiesgo <= 64) {
        return "Riesgo Crítico: Detener la actividad hasta implementar medidas de control."
    } else {
        return "Nivel de riesgo no clasificado. Revise los valores ingresados."
    }
}

const matriz = "Matriz de Riesgo Laboral"
console.log(matriz)
const matrizPonderada = "Matriz de Riesgo Laboral Ponderada"

while (matrizRiesgo) {
    let riesgoSeleccionado = parseInt(prompt("Seleccione el riesgo a ponderar de la actividad - Mantenimiento de secadora: 1- Corte por objeto 2- Caída de objeto 3- Caída de persona en altura 4- Atrapamiento"))

    switch (riesgoSeleccionado) {
        case 1: {
            let nombre = "Corte por objeto"
            let probabilidad = parseInt(prompt("Ingrese la probabilidad del riesgo " + nombre + " del 1 al 8, siendo 1: Improbable, 2: Remoto, 4: Ocasional, 8: Probable"))
            let impacto = parseInt(prompt("Ingrese el impacto que puede generar en el trabajador, siendo 1: Insignificante, 2: Dañina, 4: Crítica, 8: Catastrófico"))

            if (probabilidades.includes(probabilidad) && impactos.includes(impacto)) {
                let nivelRiesgo = calcularNivelRiesgo(probabilidad, impacto);
                let porcentajeRiesgo = calcularPorcentajeRiesgo(nivelRiesgo, maxImpacto); // 64 es el nivel máximo (8 * 8)
                let medidas = sugerirMedidas(nivelRiesgo)
                console.log("Riesgo: " + nombre + ", Probabilidad: " + probabilidad + ", Impacto: " + impacto + ", Nivel de Riesgo: " + nivelRiesgo + ", Porcentaje de Riesgo: " + porcentajeRiesgo.toFixed(2) + "%")
                console.log("Medidas recomendadas: " + medidas);
            } else {
                alert("Valores inválidos. Deben ser: 1, 2, 4, 8.")
            }
            break
        }
        case 2: {
            let nombre = "Caída de objeto"
            let probabilidad = parseInt(prompt("Ingrese la probabilidad del riesgo " + nombre + " del 1 al 8, siendo 1: Improbable, 2: Remoto, 4: Ocasional, 8: Probable"))
            let impacto = parseInt(prompt("Ingrese el impacto que puede generar en el trabajador, siendo 1: Insignificante, 2: Dañina, 4: Crítica, 8: Catastrófico"))

            if (probabilidades.includes(probabilidad) && impactos.includes(impacto)) {
                let nivelRiesgo = calcularNivelRiesgo(probabilidad, impacto)
                let porcentajeRiesgo = calcularPorcentajeRiesgo(nivelRiesgo, maxImpacto)
                let medidas = sugerirMedidas(nivelRiesgo)
                console.log("Riesgo: " + nombre + ", Probabilidad: " + probabilidad + ", Impacto: " + impacto + ", Nivel de Riesgo: " + nivelRiesgo + ", Porcentaje de Riesgo: " + porcentajeRiesgo.toFixed(2) + "%")
                console.log("Medidas recomendadas: " + medidas)
            } else {
                alert("Valores inválidos. Deben ser: 1, 2, 4, 8.")
            }
            break
        }
        case 3: {
            let nombre = "Caída de persona en altura"
            let probabilidad = parseInt(prompt("Ingrese la probabilidad del riesgo " + nombre + " del 1 al 8, siendo 1: Improbable, 2: Remoto, 4: Ocasional, 8: Probable"))
            let impacto = parseInt(prompt("Ingrese el impacto que puede generar en el trabajador, siendo 1: Insignificante, 2: Dañina, 4: Crítica, 8: Catastrófico"))

            if (probabilidades.includes(probabilidad) && impactos.includes(impacto)) {
                let nivelRiesgo = calcularNivelRiesgo(probabilidad, impacto)
                let porcentajeRiesgo = calcularPorcentajeRiesgo(nivelRiesgo, maxImpacto)
                let medidas = sugerirMedidas(nivelRiesgo)
                console.log("Riesgo: " + nombre + ", Probabilidad: " + probabilidad + ", Impacto: " + impacto + ", Nivel de Riesgo: " + nivelRiesgo + ", Porcentaje de Riesgo: " + porcentajeRiesgo.toFixed(2) + "%")
                console.log("Medidas recomendadas: " + medidas);
            } else {
                alert("Valores inválidos. Deben ser: 1, 2, 4, 8.")
            }
            break
        }
        case 4: {
            let nombre = "Atrapamiento"
            let probabilidad = parseInt(prompt("Ingrese la probabilidad del riesgo " + nombre + " del 1 al 8, siendo 1: Improbable, 2: Remoto, 4: Ocasional, 8: Probable"))
            let impacto = parseInt(prompt("Ingrese el impacto que puede generar en el trabajador, siendo 1: Insignificante, 2: Dañina, 4:Crítica, 8: Catastrófico"))
            if (probabilidades.includes(probabilidad) && impactos.includes(impacto)) {
                let nivelRiesgo = calcularNivelRiesgo(probabilidad, impacto)
                let porcentajeRiesgo = calcularPorcentajeRiesgo(nivelRiesgo, maxImpacto)
                let medidas = sugerirMedidas(nivelRiesgo)
                console.log("Riesgo: " + nombre + ", Probabilidad: " + probabilidad + ", Impacto: " + impacto + ", Nivel de Riesgo: " + nivelRiesgo + ", Porcentaje de Riesgo: " + porcentajeRiesgo.toFixed(2) + "%")
                console.log("Medidas recomendadas: " + medidas)
            } else {
                alert("Valores inválidos. Deben ser: 1, 2, 4, 8.")
            }
            break
        }
        default: {
            console.log("Opción no válida. Finalizando el proceso.")
            matrizRiesgo = false
            break
        }
    }
    
    if (riesgoSeleccionado >= 1 && riesgoSeleccionado <= 4) {
        let continuar = prompt("¿Desea evaluar otro riesgo? (si/no)").toLowerCase()
        if (continuar !== "si") {
            matrizRiesgo = false
        }
    }
}

console.log(matrizPonderada)