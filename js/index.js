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

  var timer = setInterval(() => {
    index++;
    var translateX = -index * w;
    ul.style.transition = 'all .3s'
    ul.style.transform = 'translateX(' + translateX + "px)"
   
  }, 1500);
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
    ol.children[index].classList.add('current');
  })

  ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX
    console.log(startX)
    this.offsetLeft = x;
    this.offsetTop = y;
  })
  ul.addEventListener('touchmove', function (e) {
    moveX = e.targetTouches[0].pageX - startX;
    console.log(moveX)
    ul.style.left = moveX + 'px'
  })


})