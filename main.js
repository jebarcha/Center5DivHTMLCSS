function init() {
    let divParent = document.getElementById("div2");
    let divSon = document.getElementById("square2");

    divSon.style.position = "relative";
    divSon.style.left = (divParent.offsetWidth / 2) -
                        (divSon.offsetWidth / 2) + 'px';
    divSon.style.top = (divParent.offsetHeight / 2) -
                        (divSon.offsetHeight / 2) + 'px';
    

}




//-----------------------------------------------
//Demo to return an array without duplication
// const myArr = ['a', 'a', 'b', 'c', 'd','c'];
// const mySet = new Set(myArr);
// const uniqueArr = Array.from(mySet);
// console.log(JSON.stringify(uniqueArr));

// //another option
// const seen = new Set();
// const arr = [
//     { id: 1, name: 'test1'},
//     { id: 2, name: 'test2'},
//     { id: 2, name: 'test3'},
//     { id: 3, name: 'test4'},
//     { id: 4, name: 'test5'},
//     { id: 5, name: 'test6'},
//     { id: 5, name: 'test7'},
//     { id: 6, name: 'test8'}
// ];

// const filteredArr = arr.filter(el => {
//     const duplicate = seen.has(el.id);
//     seen.add(el.id);
//     return !duplicate;
// });
// //console.log(JSON.stringify(filteredArr));
// console.log(filteredArr);

