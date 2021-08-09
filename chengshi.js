let  j1=document.getElementById('j1');
let  j2=document.getElementById('j2');
let  cs=document.getElementById('cs');
let  xx=document.getElementById('xx');
let  sheng=document.getElementById('sheng');
let  chengs=document.getElementById('chengs');
let  chengs2=document.getElementById('chengs2');
let  chengs3=document.getElementById('chengs3');
let  chengs4=document.getElementById('chengs4');
let  chengs5=document.getElementById('chengs5');
let  s01=document.getElementById('s01');
let  s02=document.getElementById('s02');
let  s03=document.getElementById('s03');
let  s04=document.getElementById('s04');
let  s05=document.getElementById('s05');
let  option=document.getElementById('option');
let  option2=document.getElementById('option2');
let  ll=document.getElementsByClassName('ll');

j1.onclick=()=>{
  cs.style.display='block'
  sheng.style.display='block'
  chengs.style.display='none'
  chengs2.style.display='none'
  chengs3.style.display='none'
  chengs4.style.display='none'
  chengs5.style.display='none'
   ll[1].style.backgroundColor='#ffffff'
    ll[1].style.color='#666'
    ll[0].style.backgroundColor='#56B4F8'
    ll[0].style.color='#ffffff'
    option.style.display='none'
}
xx.onclick=()=>{
  cs.style.display='none'
}
ll[0].onclick=()=>{
    ll[1].style.backgroundColor='#ffffff'
    ll[1].style.color='#666'
    ll[0].style.backgroundColor='#56B4F8'
    ll[0].style.color='#ffffff'
    chengs.style.display='none'
    sheng.style.display='block'
}
ll[1].onclick=()=>{
    ll[0].style.backgroundColor='#ffffff'
    ll[0].style.color='#666'
    ll[1].style.backgroundColor='#56B4F8'
    ll[1].style.color='#ffffff'
    chengs.style.display='block'
    sheng.style.display='none'
}
s01.onclick=()=>{
    ll[0].style.backgroundColor='#ffffff'
    ll[0].style.color='#666'
    ll[1].style.backgroundColor='#56B4F8'
    ll[1].style.color='#ffffff'
    chengs.style.display='block'
    sheng.style.display='none'
}
s02.onclick=()=>{
    ll[0].style.backgroundColor='#ffffff'
    ll[0].style.color='#666'
    ll[1].style.backgroundColor='#56B4F8'
    ll[1].style.color='#ffffff'
    chengs2.style.display='block'
    sheng.style.display='none'
}
s03.onclick=()=>{
    ll[0].style.backgroundColor='#ffffff'
    ll[0].style.color='#666'
    ll[1].style.backgroundColor='#56B4F8'
    ll[1].style.color='#ffffff'
    chengs3.style.display='block'
    sheng.style.display='none'
}
s04.onclick=()=>{
    ll[0].style.backgroundColor='#ffffff'
    ll[0].style.color='#666'
    ll[1].style.backgroundColor='#56B4F8'
    ll[1].style.color='#ffffff'
    chengs4.style.display='block'
    sheng.style.display='none'
}
s05.onclick=()=>{
    ll[0].style.backgroundColor='#ffffff'
    ll[0].style.color='#666'
    ll[1].style.backgroundColor='#56B4F8'
    ll[1].style.color='#ffffff'
    chengs5.style.display='block'
    sheng.style.display='none'
}
k01.onclick=()=>{
  j1.innerHTML='安徽-宣城市'
  cs.style.display='none'
  option.innerHTML='宣城市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k02.onclick=()=>{
  j1.innerHTML='安徽-芜湖市'
  cs.style.display='none'
  option.innerHTML='芜湖市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k03.onclick=()=>{
  j1.innerHTML='安徽-铜陵市'
  cs.style.display='none'
  option.innerHTML='铜陵市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k04.onclick=()=>{
  j1.innerHTML='安徽-马鞍山市'
  cs.style.display='none'
  option.innerHTML='马鞍山市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k05.onclick=()=>{
  j1.innerHTML='安徽-六安市'
  cs.style.display='none'
  option.innerHTML='六安市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k06.onclick=()=>{
  j1.innerHTML='安徽-黄山市'
  cs.style.display='none'
  option.innerHTML='黄山市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k07.onclick=()=>{
  j1.innerHTML='安徽-淮南市'
  cs.style.display='none'
  option.innerHTML='淮南市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k08.onclick=()=>{
  j1.innerHTML='安徽-合肥市'
  cs.style.display='none'
  option.innerHTML='合肥市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k09.onclick=()=>{
  j1.innerHTML='江苏-无锡市'
  cs.style.display='none'
  option.innerHTML='铜陵市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k10.onclick=()=>{
  j1.innerHTML='江苏-镇江市'
  cs.style.display='none'
  option.innerHTML='镇江市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k11.onclick=()=>{
  j1.innerHTML='江苏-苏州市'
  cs.style.display='none'
  option.innerHTML='苏州市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k12.onclick=()=>{
  j1.innerHTML='江西-抚州市'
  cs.style.display='none'
  option.innerHTML='抚州市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k13.onclick=()=>{
  j1.innerHTML='浙江-杭州市'
  cs.style.display='none'
  option.innerHTML='杭州市新世纪汽车贸易有限公司'
  option.style.display='block'
}
k14.onclick=()=>{
  j1.innerHTML='上海-闵行区'
  cs.style.display='none'
  option.innerHTML='闵行区新世纪汽车贸易有限公司'
  option.style.display='block'
}