let sectionSong = document.getElementById("sectionsong")
let section1 = document.getElementById("Section1")
let check1 = document.getElementById("checkbox1")
let check2 = document.getElementById("checkbox2")
let check3 = document.getElementById("checkbox3")
let check4 = document.getElementById("checkbox4")
let check5 = document.getElementById("checkbox5")
let check6 = document.getElementById("checkbox6")
let check7 = document.getElementById("checkbox7")
let check8 = document.getElementById("checkbox8")
let check9 = document.getElementById("checkbox9")
let check10 = document.getElementById("checkbox10")

function section2() {
    // section1.classList.add("d-none")
    sectionSong.classList.remove("section_class")
    sectionSong.classList.add("d-block")
}

var list0 = [];
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function submit1() {
    var addrow = document.getElementById("show")
    var newrow = addrow.insertRow(n);

    list1[x] = document.getElementById("SongName").value;
    list2[x] = document.getElementById("Date").value;
    if (check1.checked) {
        list3[x] = check1.value;
        list0[x] = document.getElementById("first")
    }
    if (check2.checked) {
        list3[x] = check2.value;
    }
    if (check3.checked) {
        list3[x] = check3.value;
    }
    if (check4.checked) {
        list3[x] = check4.value;
    }
    if (check5.checked) {
        list3[x] = check5.value;
    }
    if (check6.checked) {
        list3[x] = check6.value;
    }
    if (check7.checked) {
        list3[x] = check7.value;
    }
    if (check8.checked) {
        list3[x] = check8.value;
    }
    if (check9.checked) {
        list3[x] = check9.value;
    }
    if (check10.checked) {
        list3[x] = check10.value;
    }

    list4[x] = document.getElementById("ok2").innerHTML


    document.getElementById("Art").value;

    var cel1 = newrow.insertCell(0)
    var cel2 = newrow.insertCell(1)
    var cel3 = newrow.insertCell(2)
    var cel4 = newrow.insertCell(3)
    var cel5 = newrow.insertCell(4)

    cel1.innerHTML = list0[x];
    cel2.innerHTML = list1[x];
    cel3.innerHTML = list2[x];
    // cel3.innerHTML = list3[x];
    cel4.innerHTML = list3[x];
    cel5.innerHTML = list4[x]
    n++;
    x++;


}

let count = 0

function save() {
    let new_Artist = document.getElementById("artistname")









}