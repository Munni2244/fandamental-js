const addLocalStorage = ()=>{
const inputId= document.getElementById('storage-id').value;
const inputValue= document.getElementById('storage-value').value;

//
if (inputId && inputValue) {
    localStorage.setItem(inputId, inputValue);

}

document.getElementById('storage-id').value=''
document.getElementById('storage-value').value=''

}