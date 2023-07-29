var mainOperation = '';
var preRes = mainOperation;
const operation = document.getElementById('result')
const preResult = document.getElementById('preResult')

function addOperator(value)
{
    if((isAnOperator(mainOperation[mainOperation.length - 1]) || mainOperation == '') && isAnOperator(value)) return
    if(containsTwoDecimals(mainOperation + value)) return

    operation.innerText += value
    mainOperation += value
    preResult.innerText = eval(mainOperation)
    preRes = eval(mainOperation)
}

function containsTwoDecimals(str)
{
    var contador = 0;
    
    for(char of str)
    {
        if(char == '.') contador++
        if(isAnOperator(char)) contador = 0
    }

    return contador > 1 ? true: false;
}

function isAnOperator(str)
{
    const opera = {
        '+': true,
        '-': true,
        '/': true,
        '*': true
    }

    return opera[str] ? true : false
}

function popIt()
{
    mainOperation = mainOperation.length > 1 ? mainOperation.slice(0,(mainOperation.length - 1)) : ''
    operation.innerText = mainOperation;
    preRes = mainOperation.length == 0 ? 0 : eval(mainOperation)
    preResult.innerText = preRes
}


function getOff()
{
    mainOperation = ''
    preRes = ''
    preResult.innerText = ''
    operation.innerText = ''
}

function resolve()
{
    operation.innerText = preRes
    mainOperation = preRes
}