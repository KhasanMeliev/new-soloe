const discussArr = [
  {
    votes: 1132,
    answers: 232,
    discuss_name: "what is js array",
    button: "javascript",
    name: "Khasan",
    date: "1 hours ago",
    pic: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    votes: 1000,
    answers: 932,
    discuss_name: "html marquee",
    button: "html",
    name: "Khasan",
    date: "3 hours ago",
    pic: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    votes: 3200,
    answers: 1432,
    discuss_name: "css font-size",
    button: "css",
    name: "Khasan",
    date: "5 hours ago",
    pic: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    votes: 42000,
    answers: 2332,
    discuss_name: "javascript object",
    button: "javascript",
    name: "Khasan",
    date: "23 hours ago",
    pic: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
  {
    votes: 5400,
    answers: 4432,
    discuss_name: "what is array[0]",
    button: "javascript",
    name: "Khasan",
    date: "1 day ago",
    pic: "https://api.sololearn.com/Uploads/Avatars/24698460.jpg",
  },
];
function Showdiscuss(data) {
  var discusses = document.getElementById("trending_discusses");

  for (var i = 0; i < data.length; i++) {
    var discuss = data[i];

    var output = `
    <div id="box">
      <div id="vote_ans">
      <div><p>${discuss.votes}</p><p id="vote_text">Votes</p></div>
     <div> <p>${discuss.answers}</p><p id="ans_text">Answers</p></div>
      </div>
      <div id="texts">
        <p>${discuss.discuss_name}</p>
        <button>${discuss.button}</button>
      </div>
      <div id="profile">
       <div id="name_date">
       <p>${discuss.name}</p>
       <p>${discuss.date}</p>
       </div>
        <div id ="picture"><img src=${discuss.pic} alt="profile_pic"></div>
      </div>
    </div>
      `;

    console.log(data[i]);
    discusses.innerHTML += output;
  }
}

window.onload = function () {
  Showdiscuss(discussArr);
};
