
function showTotalPrice(event){
    const price =+ (document.getElementById('price').value) | 0;
    const installation =+ (document.getElementById('installation').value) | 0;
        

    //const total = price + installation;
    document.getElementById('totalPrice').innerHTML = price + installation;

}

function populateDueDate(){
    const selectDueDate = document.getElementById('dueDate');
    let optionsDueDate = (5,10,15,20,15);

    optionsDueDate.forEach((option) => {
        selectDueDate.innerHTML += <option value="${option}">${option}</option>
        
    });
    optionsDueDate.map((option) => {
        

    })

    for(const value of options){
    }


}