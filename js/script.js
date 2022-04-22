
//creare griglia da 1 a 100
//passare arg alla function
const newArray = gridGame(100);
console.log(newArray);
//prendere elemento griglia html 
const container = document.querySelector('.container');
//creare ciclo for e gli passiamo l'array
for(let i = 0; i < newArray.length; i++){
    const arrayI = newArray[i];
    const div = document.createElement('div');
    div.innerHTML = `<span>${arrayI}</span>`;
    div.classList.add('square')
    container.append(div);
}


//al click di ogni casella aggiungere classe bg-blue


//FUNCTION
//questa funziona crea un array con tot numeri aggiunti con ciclo
//argument numero che si riferisce a fine ciclo
//return un array con tot numeri
function gridGame(num){
    //creo array vuoto
    const box = [];
    //creo ciclo di numeri da ind=serire nell array
    let i = 1;
    while(box.length < num){
        box.push(i);
        i++;
    }
    return box;
}

