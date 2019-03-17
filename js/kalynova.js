function first() {
    alert('внеено текст: ' + document.myForm.myText.value);
}
function second(){
    var myString = 'Прапорець ';
    if (document.myForm.myCheckbox.checked) myString+= 'висловлено'
    else myString+= 'не висловлено';
    alert(myString);
}