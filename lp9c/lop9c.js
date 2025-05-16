const intro = document.getElementById('introText');
const image = document.getElementById('mainImage');
const container = document.getElementById('container');
const body = document.body;
const classInfoBtn = document.getElementById('classInfoBtn');
const classInfo = document.getElementById('classInfo');
const buttonContainer = document.getElementById('buttonContainer');
const albumBtn = document.getElementById('albumBtn');

albumBtn.onclick = () => {
  window.open("https://online.fliphtml5.com/phxda/cxvj/");
};

const texts = [
  "Welcome to our class",
  "Trang web này dành riêng cho lớp 9C-THCS Nam Hồng",
  "Được phát triển và hoàn thiện bởi Trần Chí Huy",
  "Cùng với sự trợ giúp của"
];

function showTexts(index = 0) {
  if (index >= texts.length) {
    setTimeout(() => {
      image.style.display = "block";
      setTimeout(() => {
        image.style.opacity = 1;
      }, 100);
    }, 500);

    setTimeout(() => {
      intro.style.opacity = 0;
      image.style.opacity = 0;
    }, 2500);

    setTimeout(() => {
      document.querySelector('.fog').style.display = 'none';
      body.style.background = "#d6f5f7";
      container.style.display = "block";
    }, 3500);
    return;
  }

  intro.textContent = texts[index];
  intro.style.opacity = 1;

  setTimeout(() => {
    intro.style.opacity = 0;
    setTimeout(() => {
      showTexts(index + 1);
    }, 1000);
  }, 1000);
}

window.onload = () => {
  showTexts();
};

const namesAndLinks = [
  { name: "Việt An", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Hà An", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Việt Anh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
   name: "Nguyễn Hữu Gia Bảo(không có đường dẫn)", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Lê Bùi Gia Bảo", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Thành An", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Nguyễn Gia Bảo", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
   name: "Ánh Dương(không có đường dẫn)", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Khánh Linh", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Thảo Linh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Tuệ Linh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
   name: "Phương Linh", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Chí Huy", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Nhật Huy", color: "pink", url: "https://www.facebook.com/viet.anh309" },
 name: "Việt An", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Hà An", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Việt Anh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
{ name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
 name: "Việt An", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Hà An", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Việt Anh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
 name: "Việt An", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Hà An", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Việt Anh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
 name: "Việt An", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Hà An", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Việt Anh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
 name: "Việt An", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Hà An", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Việt Anh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
  { name: "Thầy giáo chủ nhiệm: Kiều Mạnh Hoàng", color: "blue", url: "https://www.facebook.com/profile.php?id=100008250704964" }
];

namesAndLinks.forEach(item => {
  const btn = document.createElement("button");
  btn.textContent = item.name;
  btn.className = `btn3d ${item.color}`;
  btn.onclick = () => window.open(item.url, "_blank");
  buttonContainer.appendChild(btn);
});

let showingInfo = false;
classInfoBtn.onclick = () => {
  showingInfo = !showingInfo;
  if (showingInfo) {
    container.style.display = "none";
    classInfo.style.display = "block";
  } else {
    container.style.display = "block";
    classInfo.style.display = "none";
  }
};
