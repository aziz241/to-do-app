"use strict";
var div = document.getElementById('gorevdiv');

var text = document.getElementById('gorevtext');
var buton = document.getElementById('gorevbuton');

var silbuton = document.getElementById('temizlebuton');

var gorevler = new Array();


const displaytasks = function (event) {
    let ul = document.getElementById('gorevul');
    ul.innerHTML = "";


    for (let gorev of gorevler) {

        var li = `
            <li id="${gorev.gorevid}"> ${gorev.gorevadi} <a href="#" onclick="removeone(${gorev.gorevid})" class="btn btn-danger">Sil</a></li>
            
            `;

        ul.insertAdjacentHTML('beforeend', li);

    }




}

const add = function (gorevAdi) {

    gorevler.push({ 'gorevid': gorevler.length + 1, 'gorevadi': gorevAdi })



}

const remove = function () {



    gorevler = [];


}
const removeone = function (id) {
    console.log(id)
    var removeid;
    for (let index in gorevler) {
        if (gorevler[index].gorevid == id) {
            removeid = index;
        }
    }
    console.log(removeid);
    gorevler.splice(removeid, 1);
    displaytasks();

}

const add_2 = function () {
    if (text.value == "") {
        alert("Lütfen görev giriniz!")

    }
    else {
        add(text.value);
        displaytasks();
        text.value = '';
    }

}

buton.addEventListener("click", function () {

    add_2();


})

document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {


        add_2();
    }

})

silbuton.addEventListener("click", function () {

    remove();
    displaytasks();
})


