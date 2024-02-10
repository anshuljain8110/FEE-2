var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('hi');
function createACard(text1, text2) {
    var card = document.createElement('div');
    card.className = 'card';
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    h5.innerHTML = text1;
    p.innerHTML = text2;
    card.appendChild(h5);
    card.appendChild(p);
    return card;
}
function validateAddButton() {
    var _a, _b;
    var bttn = document.getElementById("addItem");
    if ((((_a = document.getElementById('title')) === null || _a === void 0 ? void 0 : _a.value) === "") ||
        ((_b = document.getElementById('desc')) === null || _b === void 0 ? void 0 : _b.value) === "") {
        bttn.disabled = true;
    }
    else {
        bttn.disabled = false;
    }
}
function initialSetup() {
    if (!localStorage.getItem('feedata')) {
        localStorage.setItem("feedata", JSON.stringify({ 'data': [] }));
    }
    populate();
}
function populate() {
    var divToPopulate = document.getElementById('cards');
    if (!divToPopulate) {
        console.error("Element with id 'cards' not found.");
        return;
    }
    divToPopulate.innerHTML = "";
    var data = localStorage.getItem('feedata');
    var obj = JSON.parse(data ? data : JSON.stringify({ 'data': [] }))['data'];
    if (obj.length === 0) {
        divToPopulate.innerHTML = "<div></div><h2>Looks like you have no note show😅 <br>Please add one</h2>";
    }
    console.log(obj);
    for (var x = 0; x < obj.length; x++) {
        divToPopulate.appendChild(createACard(obj[x]['title'], obj[x]['desc']));
    }
}
function handleClick() {
    var title = document.getElementById('title');
    var desc = document.getElementById('desc');
    var data = localStorage.getItem('feedata');
    var arr = JSON.parse(data ? data : JSON.stringify({ 'data': [] }))['data'];
    arr = __spreadArray(__spreadArray([], arr, true), [{ 'title': title === null || title === void 0 ? void 0 : title.value, 'desc': desc === null || desc === void 0 ? void 0 : desc.value }], false);
    localStorage.setItem("feedata", JSON.stringify({ 'data': arr }));
    title.value = "";
    desc.value = "";
    var btn = document.getElementById("addItem");
    btn.disabled = true;
    populate();
}
initialSetup();
