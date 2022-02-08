window.addEventListener('load', function () {
  var wrap = document.querySelector('.wrap')
  var ul = wrap.children[0];
  var w = wrap.offsetWidth;
  var startX = 0;
  var moveX = 0;
  var x = 0;
  var y = 0;
  var index = 0;
  var ol = document.querySelector('.spots')
  var flag = false;

  var timer = setInterval(() => {
    index++;
    var translateX = -index * w;
    ul.style.transition = 'all .3s'
    ul.style.transform = 'translateX(' + translateX + "px)"
   
  }, 2000);
  ul.addEventListener('transitionend', function () {
    if (index >= 3) {
      index = 0;
      var translateX = -index * w;
      ul.style.transition = 'none'
      ul.style.transform = 'translateX(' + translateX + "px)"
    }else if(index <= 0){
      index = 2;
      var translateX = -index * w;
      ul.style.transition = 'none'
      ul.style.transform = 'translateX(' + translateX + "px)"
    }
    // spots
    
    console.log(ol);
    
    ol.querySelector('.current').classList.remove('current');
    ol.children[index].classList.add('current')
  })

  ul.addEventListener('touchstart', function (e) {
    clearInterval(timer)
    startX = e.targetTouches[0].pageX
    this.offsetLeft = x;
    this.offsetTop = y;
  })
  ul.addEventListener('touchmove', function (e) {
    moveX = e.targetTouches[0].pageX ;
    var translateX = -index * w + moveX;
    ul.style.transition = 'none'
      ul.style.transform = 'translateX(' + translateX + "px)"
      flag = true
      e.preventDefault() //组织冒泡
  })
  ul.addEventListener('touchend',function (e) { 
    if(flag){
      if(Math.abs(moveX) >= 50){
        if(moveX > 0){
          index--;
        }else{
          index++;
        }
        var translateX = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translateX + "px)"
      }else {
        var translateX = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translateX + "px)"
      }
      
      clearInterval(timer);
      timer = setInterval(() => {
        index++;
        var translateX = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translateX + "px)"
       
      }, 2000);
    }
    
   })


})