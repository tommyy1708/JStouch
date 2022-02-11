window.addEventListener('load',function () {
    
    /*
    本地临时存储，关闭页面则失去数据
    var inpt = this.document.querySelector('input')
     var sto = document.querySelector('.sto')
     var get = document.querySelector('.get')
     var del = document.querySelector('.del')
     var empt = document.querySelector('.empt')
     sto.addEventListener('click',function () {
         var value = inpt.value
         sessionStorage.setItem('name',value)
       })
       get.addEventListener('click',function () {
           //获取key为name的值
           sessionStorage.getItem('name')
         })
         del.addEventListener('click',function () {
             sessionStorage.removeItem('name')
           })
           empt.addEventListener('click',function () {
               sessionStorage.clear()
             })
             */

        //本地永久存储
        var inpt = this.document.querySelector('input')
        var sto = document.querySelector('.sto')
        var get = document.querySelector('.get')
        var del = document.querySelector('.del')
        var empt = document.querySelector('.empt')
        sto.addEventListener('click',function () {
            var val = inpt.value
            localStorage.setItem('name',val)
          })
          get.addEventListener('click',function () {
           alert(localStorage.getItem('name')) 
          })
          del.addEventListener('click',function () {
              localStorage.removeItem('name')
              
            })
            empt.addEventListener('click',function () {
                localStorage.clear()
              })
  })