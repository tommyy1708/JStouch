window.addEventListener('load',function () {
    var wrap = document.querySelector('.wrap')
    var ul = wrap.children[0];
    var w = wrap.offsetWidth;
    var startX = 0;
    var moveX = 0;
    var x = 0;
    var y = 0;
    var index = 0;
   var timer = setInterval(() => {
       index++ ;
       var translateX = -index * w;
    ul.style.transform = 'translateX('+ translateX + "px)"
   }, 2000);
   this.clearInterval(timer)
    ul.addEventListener('touchstart',function (e) {
      startX = e.targetTouches[0].pageX
      console.log(startX)
        this.offsetLeft = x ;
        this.offsetTop = y;
      })
    ul.addEventListener('touchmove',function (e) {
         moveX = e.targetTouches[0].pageX - startX;
        console.log(moveX)
        ul.style.left = moveX + 'px'
      })
   
    
  })