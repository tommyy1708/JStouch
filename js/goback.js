window.addEventListener('load',function () {
    var back = document.querySelector('.back')
    var nav = document.querySelector('.nav')
    var wrap = document.querySelector('.wrap')
   window.addEventListener('scroll',function (e) {
       if(window.pageYOffset >= nav.offsetTop ){
           back.style.display = 'block'
        }else {
            back.style.display = 'none'
            
       }
     })
    back.addEventListener('click', function (e) {
        window.scroll(0,0)
      })
  })