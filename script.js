
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item'); 
        item2 = document.querySelector('#item2'); 
   document.getElementById("form").addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<div class="row">'+ '<li>'    +
       item.value + '\t \t'  +'<span class="t">' +item2.value +'</span>' +  
       '\t \t '+'<i  id="alarm" class="bi bi-alarm">' +'</i>'+'</li>'+ '</div>';
      store();
      item.value = "";
      item2.value="";
    },false) 

    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
    },false)
    setInterval(store,1000);

    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {
        list.innerHTML = '<li>hey,where is your to-do</li>';              
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
    function store() {
  
      window.localStorage.myitems = list.innerHTML;  
  }
  
function alarm()
{
  var compared_time;
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() ;
  var items=document.querySelectorAll("li .t ");
  for(let i=0;i<items.length;i++)
  {
    console.log(items[i].innerHTML);
    console.log(time);
   if(today.getHours()=='0' )
   {

    time = '00' + ":" + today.getMinutes();
   }
   else if (today.getMinutes()=='0')
   {
    time = today.getHours() + ":" +'0'+today.getMinutes();
    console.log(time);
   }
   if( items[i].innerHTML==time )
    { 
    var audioEle = document.getElementById("one_mp3");
    audioEle.play(); 
  document.getElementById("alert").style.display="block";
      setTimeout(function(){ audioEle.pause();},10000);
     
  }
}
}

document.getElementById("btn1").addEventListener("click",function(){
  document.getElementById("alert").style.display="none";
})
setInterval(alarm,10000);
  $(document).ready(function(){
  $( function() {
      $(".sortable" ).sortable();
    });
})

