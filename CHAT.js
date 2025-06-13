function SAVE(){
    localStorage.setItem="names",value;
    localStorage.setItem="comments",value;
    const sel1 = document.getElementByld("se1");
    const sel2 = document.getElementByld("se2");
    const sel3 = document.getElementByld("se3");
    const sel4 = document.getElementByld("se4");
    const sel5 = document.getElementByld("se5");
    const key1 = selected1;
    const key2 = selected2;
    const key3 = selected3;
    const ket4 = selected4;
    const key5 = selected5;
    var names = localStorage.getItem("name")
    var comments = localStorage.getItem("comment");
    var texts ="[" + names + "]" + comments + "/n";
    texts.innerText = texts;
    localStorage.setItem="texts",value;
    selectElement.addEventListener("change",() => {
        localStorage.setItem(key1,sel1.value);
        localStorage.setItem(key2,sel2.value);
        localStorage.setItem(key3,sel3.value);
        localStorage.setItem(key4,sel4.value);
        localStorage.setItem(key5,sel5.value);
    });
    window.addEventListener("DOMContentLoaded", () => {
        const Savevalue1 = localStorage.getItem("sel1");
        const Savevalue2 = localStorage.getItem("sel2");
        const Savevalue3 = localStorage.getItem("sel3");
        const Savevalue4 = localStorage.getItem("sel4");
        const Savevalue5 = localStorage.getItem("sel5");
        if (Savevalue1){
            sel1.value = Savevalue1;}
        if (Savevalue2){
            sel1.value = Savevalue2;}
        if (Savevalue3){
            sel1.value = Savevalue3;}
        if (Savevalue4){
            sel1.value = Savevalue4;}
        if (Savevalue5){
            sel1.value = Savevalue5;}
    });
}
