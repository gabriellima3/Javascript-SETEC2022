

function save(event){
     event.preventDefault();
}



function showTotalPrice(event){
    const price = document.getElementById('price').value;
    const installation = document.getElementById('installation').value;

    console.log('price');
    console.log('installation');

    //const total = price + installation;
    document.getElementById('totalPrice').innerHTML = price + installation;

}