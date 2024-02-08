var _a, _b, _c, _d, _e;
console.log('hi');
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
var createACard = function () {
    var _a;
    var card = document.createElement("div");
    card.className = "card";
    var text1 = document.createElement('h5');
    var test2 = document.createElement('p');
    text1.innerHTML = "h5 is here";
    test2.innerHTML = 'paragraph is here';
    card.appendChild(text1);
    card.appendChild(test2);
    var yo = (_a = document.getElementById("title")) === null || _a === void 0 ? void 0 : _a.value;
    console.log(yo);
    return card;
};
console.log(createACard());
(_a = document.getElementById("cards")) === null || _a === void 0 ? void 0 : _a.appendChild(createACard());
(_b = document.getElementById("cards")) === null || _b === void 0 ? void 0 : _b.appendChild(createACard());
(_c = document.getElementById("cards")) === null || _c === void 0 ? void 0 : _c.appendChild(createACard());
(_d = document.getElementById("cards")) === null || _d === void 0 ? void 0 : _d.appendChild(createACard());
(_e = document.getElementById("cards")) === null || _e === void 0 ? void 0 : _e.appendChild(createACard());
