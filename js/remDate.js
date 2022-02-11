window.addEventListener('load',function () {
    var box = document.querySelector('#remember')
    var inpt = document.querySelector('#username')
     if(localStorage.getItem('username')){
        inpt.value = this.localStorage.getItem('username') 
        box.checked = true;
     }
     box.addEventListener('change',function(){
         if(this.checked){
             localStorage.setItem('username',inpt.value)
         }else {
             localStorage.removeItem('username')
         }
     })
  })