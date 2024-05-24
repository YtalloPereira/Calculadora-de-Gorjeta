/**
 * aplica o formato de  reais para os valores referentes ao preço e arredonda os valores para terem no maximo 
 * 2 casas decimais
 */
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value 
} 
//exibe pessoa ou pessoas dependendo do valor de split
function formatSplit(value) {
    if (value == 1) return value + ' pessoa'
    return value + ' pessoas'
}
/**
 * atualiza os resultados dos valores na calculador de acordo com os campos 
 */
function calculateTip(){
    let conta = Number(document.getElementById('yourBill').value)
    let porcentagemGorjeta = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let valorGorjeta = (conta * porcentagemGorjeta) / 100
    let totalPagar = valorGorjeta + conta
    let contaDividida = totalPagar/split

    document.getElementById('totalWithTip').innerHTML = formatMoney(totalPagar)
    document.getElementById('tipValue').innerHTML = formatMoney(valorGorjeta)
    document.getElementById('tipPercent').innerHTML = porcentagemGorjeta + ' %'
    document.getElementById('billEach').innerHTML = formatMoney(contaDividida)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    
}