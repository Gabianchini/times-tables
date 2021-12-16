function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
if(num.value.length == 0){
    // comandoo para que se usuario apertar no botao sem digitar um numero ele pede com um alerta q ele digite um numero
    window.alert('Por favor, digite um número')
}else{
    let n = Number(num.value)
    let c = 1
    while(c <= 10) {
        let item = document.createElement('option')//criação de option para aparecer cada valor da tabuada
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }

    }
}

