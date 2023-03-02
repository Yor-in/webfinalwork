let user = [
    {
      id: 1,
      username: "telly_tawin",
      fullname: "Worapon Klabsri",
      profile_img: "images/user-1.jpg",
      posts: "69 posts",
      follower: "101 follower",
      following: "1 following",
    },
    {
      id: 2,
      username: "bright.att",
      fullname: "Bright Athit",
      profile_img: "images/user-2.jpg",
      posts: "1412 posts",
      follower: "579 follower",
      following: "230 follwing",
    },
    {
      id: 3,
      username: "k.yor_in",
      fullname: "Yor-in Udomwattanakul",
      profile_img: "images/user-3.jpg",
      posts: "101 posts",
      follower: "491 follower",
      following: "2.04m following",
    },
    {
      id: 4,
      username: "py_keen",
      fullname: "Prachya Chaisermtawan",
      profile_img: "images/user-4.jpg",
      posts: "24 posts",
      follower: "547 follower",
      following: "299 following",
    },
    {
      id: 5,
      username: "lnwmalee",
      fullname: "Malee SoBeautiful",
      profile_img: "images/user-5.png",
      posts: "1,234 posts",
      follower: "2k follower",
      following: "1.8k following",
    }
];

const searchBx = document.getElementById("searchBox");
const searchOut = document.querySelector(".searchOut");
const commuBtn = document.querySelector(".sb-disBtn-comunity");
const commuBtnData = document.querySelector(".sb-disBtn-comunity-data")

let imgPrf = document.querySelector("#imgPrf");
let namePrf = document.querySelector("#namePrf");
let postPrf = document.querySelector("#postPrf");
let followerPrf = document.querySelector("#followerPrf");
let followingPrf = document.querySelector("#followingPrf");

searchBx.onkeyup = (e) => {
  let kb = e.target.value
  let emptyArr = [];
  if (kb) {
    emptyArr = user.filter((data) => {
      return data.username.toLocaleLowerCase().startsWith(kb.toLocaleLowerCase());
    });
    emptyArr = emptyArr.map((data) => {
      return data =`<li>
                      <a href="index2.html?q=${data.username}?id=${String(data.id).padStart(6, '0')}">
                        <div class="searchUserInfo">
                          <img class="userImg" src="${data.profile_img}"></img>
                          <h5>${data.username}</h5>
                        </div>
                      </a>
                    </li>`;
    })
    showUserData(emptyArr);
    searchOut.classList.add("active");
  }else {
    searchOut.classList.remove("active");
  }
}

let showUserData = (list) => {
  let listData;
  if(!list.length) {
    userValue = searchBx.value;
    listData = `<li>
                  <div class="searchUserInfo">
                    <h5>${"can't found anything..."}</h5>
                  </div>
                </li>`;
  }else {
    listData = list.join('');
  }
  searchOut.innerHTML = listData;
}

if(window.location.pathname == "/index2.html") {

  console.log(window.location.pathname)
  let searchPath = window.location.search;
  let number = "0123456789"
    let check = (x) => number.includes(x)  ? true : false;
    let matches = [...searchPath].reduce((x, y) => check(y) ? x+y : x, '')
    
    let imgPrfAll = document.querySelectorAll("[id='imgPrf']");
    let namePrfAll = document.querySelectorAll("[id='namePrf']");

    for(let i=0; i<user.length; i++) {
      if(matches-1 == i) {
            document.title = `Triple-F | ${user[i].username}`
            for(let a=0; a<imgPrfAll.length; a++) {
                imgPrfAll[a].src = user[i].profile_img;
                namePrfAll[a].innerHTML = user[i].username;
            }
            postPrf.innerHTML = user[i].posts;
            followerPrf.innerHTML = user[i].follower;
            followingPrf.innerHTML = user[i].following;
        }
    }
  }
  