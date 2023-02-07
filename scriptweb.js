const searchbox = document.querySelector("search-input");
const inputbox = searchbox.querySelector("input");
const searchlistbox = searchbox.querySelector(".autocom-box");
const icon = searchbox.querySelector(".icon");
let linktag = searchbox.querySelector("a");
let textfix = document.querySelector("text");
let searchlist = [
    "Jarib",
    "TellyTwin",
    "RIHITO",
    "BrightAthid",
    "Ef Chanachol",
];
let weblink;

console.log();

inputbox.onkeyup = (e) => {
    let userdata = e.target.value;
    let emptyArrays = [];

    if (userdata) {
        icon.onclick = () => {
            weblink = `https://www.google.com/search?q=${userdata}`;
            textfix.innerHTML = "SE65";
            linktag.setAttribute("href",weblink);
            linktag.click();
        }
        emptyArrays = searchlist.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
        });
        emptyArrays = emptyArrays.map((data)=>{
            return data =`<li>${data}</li>`;
        });
        searchbox.classList.add("active");
        showSuggestions(emptyArrays);
        let boxList = searchlistbox.querySelector("li");
        for (let i = 0 ;  i < boxList.length ; i++) {
            boxList[i].setAttribute("onclick","select(this)");
        }
    }else{
        searchbox.classList.remove("active");
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        weblink = `https://www.google.com/search?q=${selectData}`;
        linktag.setAttribute("href",weblink);
        linktag.click();
    }
    searchbox.classList.remove("active");
}

function showsearchlist(list){
    let listData;
    if(!list.length) {
        uservalue = inputbox.value;
        listData = `<li>${uservalue}</li>`
    }else{
        listData = list.join('');
    }
    searchlistbox.innerHTML = listData;
}

function onclicktest() {
    switch()
}