// EDIT TANGGAL SPESIAL DI BAWAH INI (format: YYYY-MM-DD)
const tanggalJadian = "2022-04-02"; // Ganti dengan tanggal kalian mulai bersama

function updateCounter(){
  const start = new Date(tanggalJadian + "T00:00:00");
  const now = new Date();
  if (Number.isNaN(start.getTime())) return;
  let diff = Math.max(0, now - start);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCounter(); setInterval(updateCounter,1000);

document.querySelector(".menu-toggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("surpriseBtn").addEventListener("click",()=>{
  document.getElementById("surpriseMessage").classList.toggle("show");
});

function makeHeart(){
  const heart=document.createElement("span");
  heart.className="floating-heart";
  heart.textContent=["♡","♥","ღ"][Math.floor(Math.random()*3)];
  heart.style.left=Math.random()*100+"%";
  heart.style.fontSize=(12+Math.random()*20)+"px";
  heart.style.animationDuration=(7+Math.random()*7)+"s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),15000);
}
setInterval(makeHeart,1200);
