console.log('lodes 2day')
let removeContainerDiv = document.getElementsByClassName('removeContainer')[0];
let paymentContainerDiv = document.getElementsByClassName('paymentContainer')[0]
let invoiceContainerDiv = document.getElementsByClassName('invoiceContainer')[0]
let susecssContainerDiv = document.getElementsByClassName('susecssContainer')[0]

function makePayment(){
    paymentContainerDiv.setAttribute('style',"visibility:hidden")
    invoiceContainerDiv.setAttribute('style',"visibility:hidden")
    susecssContainerDiv.setAttribute('style',"visibility:hidden")
    removeContainerDiv.setAttribute('style',"visibility:visible")
}
function takemeback(){
    paymentContainerDiv.setAttribute('style',"visibility:visible")
    invoiceContainerDiv.setAttribute('style',"visibility:hidden")
    susecssContainerDiv.setAttribute('style',"visibility:hidden")
    removeContainerDiv.setAttribute('style',"visibility:hidden")
}
function confirm(){
     setTimeout(()=>{
        paymentContainerDiv.setAttribute('style',"visibility:hidden")
        invoiceContainerDiv.setAttribute('style',"visibility:hidden")
        susecssContainerDiv.setAttribute('style',"visibility:visible")
        removeContainerDiv.setAttribute('style',"visibility:hidden")
    },2000)    
    setTimeout(()=>{
        paymentContainerDiv.setAttribute('style',"visibility:hidden")
        invoiceContainerDiv.setAttribute('style',"visibility:visible")
        susecssContainerDiv.setAttribute('style',"visibility:hidden")
        removeContainerDiv.setAttribute('style',"visibility:hidden")
    },3000)
}