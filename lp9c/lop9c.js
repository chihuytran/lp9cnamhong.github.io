// script.js

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
  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    document.getElementById('shooting-stars').appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1500);
  }

  setInterval(createShootingStar, 1000); // Tạo sao băng mỗi giâ

const namesAndLinks = [
  { name: "Việt An", color: "blue", url: "https://www.facebook.com/yuean1046" },
  { name: "Hà An", color: "pink", url: "https://www.facebook.com/han.nguyen.12092" },
  { name: "Việt Anh", color: "pink", url: "https://www.facebook.com/viet.anh309" },
  { name: "Phương Anh", color: "pink", url: "https://www.facebook.com/profile.php?id=100075183654953" },
  { name: "Lê Bùi Gia Bảo", color: "blue", url: "https://www.facebook.com/profile.php?id=100081807525502" },
  { name: "Nguyễn Hữu Gia Bảo(không có link)", color: "blue", url: "https://example.com/2" },
  { name: "Nguyễn Gia Bảo", color: "blue", url: "https://www.facebook.com/profile.php?id=61572557385653" },
  { name: "Ánh Dương(không có link)", color: "pink", url: "https://example.com/4" },
  { name: "Minh Hiếu", color: "blue", url: "https://www.facebook.com/profile.php?id=100077097866531" },
  { name: "Nhật Huy", color: "blue", url: "https://www.facebook.com/nhat.huy.921244" },
  { name: "Chí Huy", color: "blue", url: "https://www.facebook.com/tran.huy.348157/" },
  { name: "Văn Hùng", color: "blue", url: "https://www.facebook.com/hung18t7" },
  { name: "Phương Linh", color: "pink", url: "https://www.facebook.com/phuong.linh.671494" },
  { name: "Khánh Linh", color: "pink", url: "https://www.facebook.com/khanh.linh.649107" },
  { name: "Tuệ Linh", color: "pink", url: "https://www.facebook.com/le.tue.linh.303694" },
  { name: "Thảo Linh", color: "pink", url: "https://www.facebook.com/thaolinh.p0" },
  { name: "Thanh Thảo", color: "pink", url: "https://www.facebook.com/thanh.thao.lknhanhoots" },
  { name: "Minh Thành", color: "blue", url: "https://www.facebook.com/profile.php?id=100091975759674" },
  { name: "Đức Thiện", color: "blue", url: "https://www.facebook.com/profile.php?id=100072824761992" },
  { name: "Mạnh Thắng", color: "blue", url: "https://www.facebook.com/profile.php?id=61559974231259" },
  { name: "Hoàng Anh Tuấn", color: "blue", url: "https://www.facebook.com/tuan.hoang.358576" },
  { name: "Nguyễn Minh Tuấn", color: "blue", url: "https://www.facebook.com/nguyen.minh.tuan.301487" },
  { name: "Phan Anh Tuấn", color: "blue", url: "https://www.facebook.com/profile.php?id=61558831420915" },
  { name: "Linh Nhy", color: "pink", url: "https://www.facebook.com/n.nhy15" },
  { name: "Thiên Nam", color: "blue", url: "https://www.facebook.com/paul.s.disciphes.tran" },
  { name: "Kỷ Nguyên", color: "blue", url: "https://www.facebook.com/profile.php?id=61570788825358" },
  { name: "Huyền Trân", color: "pink", url: "https://www.facebook.com/htran2101" },
  { name: "Tường Vy", color: "pink", url: "https://www.facebook.com/profile.php?id=100080126114417" },
  { name: "Nam Phong", color: "blue", url: "https://www.facebook.com/profile.php?id=61557038235107" },
  { name: "Bảo Ngọc", color: "pink", url: "https://www.facebook.com/mzgc.paii" },
  { name: "Thành An", color: "blue", url: "https://www.facebook.com/profile.php?id=61551468487445" },
  { name: "Minh Phương", color: "pink", url: "https://www.facebook.com/minh.phuong.637828" },
  { name: "Hoài Thu", color: "pink", url: "https://www.facebook.com/profile.php?id=100078925185328" },
  { name: "Thanh Tâm", color: "pink", url: "https://www.facebook.com/profile.php?id=100045739153687" },
  { name: "Gia Nhi", color: "pink", url: "https://www.facebook.com/nhii.nguyen.929894" },
  { name: "Anh Quân", color: "blue", url: "https://www.facebook.com/profile.php?id=61554936463697" },
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
  container.style.display = showingInfo ? "none" : "block";
  classInfo.style.display = showingInfo ? "block" : "none";
};
