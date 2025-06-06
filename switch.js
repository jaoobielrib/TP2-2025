let valor = undefined
switch(typeof(valor)) {
    case "number":
        console.log("Tipo number")
        break
    case "boolean":
        console.log("Tipo boolean")
        break
    case "string":
        console.log("Tipo string")   
        break
    case "object":
        console.log("Tipo object")
        break
    case "function":
        console.log("Tipo function")
        break
    default:
        console.log("Outro tipo")
        break
}