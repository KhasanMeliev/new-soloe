const codesArr = [
  {
    code_type: "web",
    code_name: "my portfolio😁",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 130,
    creator_name: "Khasan",
    hmha: "1 hours ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "sololearn clone😎",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 4232,
    creator_name: "Khasan",
    hmha: "5 hours ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "hello🤩",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 2330,
    creator_name: "Khasan",
    hmha: "8 hours ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "sololearn is the best😏",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 2310,
    creator_name: "Khasan",
    hmha: "12 hours ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "real 3d house🤩",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 5440,
    creator_name: "Khasan",
    hmha: "15 hours ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "real dog animation🐕‍🦺",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 32130,
    creator_name: "Khasan",
    hmha: "23 hours ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "car animation🚗",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 43130,
    creator_name: "Khasan",
    hmha: "1 day ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "my computer💻",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 53240,
    creator_name: "Khasan",
    hmha: "2 days ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    code_type: "web",
    code_name: "i know about ur age🎇🤨",
    like_icon: "thumbs-up",
    down_like_icon: "thumbs-down",
    like_count: 76450,
    creator_name: "Khasan",
    hmha: "3 days ago",
    img: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
];
function Showcodes(data) {
  var codes = document.getElementById("trending_codes");

  for (var i = 0; i < data.length; i++) {
    var code = data[i];

    var output = `<div id="code_box">
                        <div id="name_likes">
                        <div><div id="code_type">${code.code_type}</div></div>
                       <div id="name_like">
                        <p id="code_name">${code.code_name}</p>
                        <div id="likes"> <i class ="fa fa-${code.like_icon}" onclick="like_submit()"></i>
                         <p id="count_like">${code.like_count}</p>
                         <i class = "fa fa-${code.down_like_icon}" onclick="down_like_submit()"></i></div>
                        </div>
                        </div>
                        <div id="right">
                             <div id="name_and_hour">
                               <p id="creator_name">${code.creator_name}</p>
                               <p id="hmha">${code.hmha}</p>
                             </div>
                             <div id="profile_pic">
                               <img src=${code.img} alt="creator_picture">
                             </div>
                        </div>
                      </div>`;

    // console.log(data[i]);
    codes.innerHTML += output;
  }
}

const res = fetch("http://localhost:5000/api/codes")
  .then((response) => response.json())
  .then((json) => console.log(json));

window.onload = function () {
  Showcodes(codesArr);
};
