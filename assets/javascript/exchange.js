let treeArray = [
  {
    id: 1,
    name: "Sen đá",
    src: "/assets/img/caysenda.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 300,
  },
  {
    id: 2,
    name: "Cây dây nhện",
    src: "/assets/img/caydaynhen.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 200,
  },
  {
    id: 3,
    name: "Cây tuyết tùng",
    src: "/assets/img/caytuyettung.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 500,
  },
  {
    id: 4,
    name: "Xương rồng",
    src: "/assets/img/cayxuongrong.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 100,
  },
  {
    id: 5,
    name: "Sen đá",
    src: "/assets/img/caysenda.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 300,
  },
  {
    id: 6,
    name: "Cây dây nhện",
    src: "/assets/img/caydaynhen.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 200,
  },
  {
    id: 7,
    name: "Cây tuyết tùng",
    src: "/assets/img/caytuyettung.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 500,
  },
  {
    id: 8,
    name: "Xương rồng",
    src: "/assets/img/cayxuongrong.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dol.",
    point: 100,
  },
];

showT(treeArray);

function showT(curArray) {
  for (var i = 0; i < curArray.length; i++) {
    document.getElementById("list-tree").innerHTML += `
    <div class="col l-5 m-12 c-12">
        <div class="exchange__wrap-item">
            <div class="circle"></div>
            <div class="exchange__wrap-info">
                <h1>${curArray[i].name}</h1>
                <p>
                    ${curArray[i].desc}
                </p>
                <p><span>Điểm: </span>${curArray[i].point}</p>
                <button>Đổi ngay</button>
            </div>
            <img src="${curArray[i].src}" alt="" />
        </div>
    </div>
        `;
  }
}
