

function save(event){
     event.preventDefault();
}



function showTotalPrice(event){
    const price = parseInt(document.getElementById('price').value);
    const installation = parseInt(document.getElementById('installation').value);

    console.log('price');
    console.log('installation');

    //const total = price + installation;
    document.getElementById('totalPrice').innerHTML = price + installation;

}