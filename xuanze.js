let  bei=document.getElementById('bei');
let  p2=document.getElementById('p2');
let  toTop=document.getElementById('toTop');
let  name=document.getElementById('name');
let  phone=document.getElementById('phone');
let  button=document.getElementById('button');
let  red=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

button.onclick=()=>{
 if(name.value==''){
  toTop.style.display='none'
    bei.style.display='block'
    setTimeout(()=>{
      bei.style.display='none'
      toTop.style.display='block'
    },2000)
 }else if(phone.value==''){
  toTop.style.display='none'
   p2.innerHTML='请输入您的电话'
  bei.style.display='block'
  setTimeout(()=>{
    bei.style.display='none'
    toTop.style.display='block'
  },2000)
 }else if(!red.test(phone.value)){
  toTop.style.display='none'
  p2.innerHTML='电话格式不正确'
  bei.style.display='block'
  setTimeout(()=>{
    bei.style.display='none'
    toTop.style.display='block'
  },2000)
 }else if(j1.innerHTML=='请选择经销商地区'){
  toTop.style.display='none'
  p2.innerHTML='请选择经销商地区'
  bei.style.display='block'
  setTimeout(()=>{
    bei.style.display='none'
    toTop.style.display='block'
  },2000)
 }else if(option2.selected==true){
  toTop.style.display='none'
  p2.innerHTML='请选择经销商'
  bei.style.display='block'
  setTimeout(()=>{
    bei.style.display='none'
    toTop.style.display='block'
  },2000)
 }
   else{
    toTop.style.display='none'
    bei2.style.display='block'
    setTimeout(()=>{
      toTop.style.display='block'
      bei2.style.display='none'
    },2000)
   }
}


window.onload = function(){
	let  toTop=document.getElementById('toTop');
	function getTop(e){
		return e.offsetTop;
	}
	// 懒加载实现
	(function(toTop){
		// 可视区域高度
		var h = window.innerHeight;
		//滚动区域高度
		var s = document.documentElement.scrollTop || document.body.scrollTop;
			//图片距离顶部的距离大于可视区域和滚动区域之和时懒加载
			if ((h+s)>getTop) {
				toTop.style.display='blcok'
		}
	})
  (toTop)
}

