window.addEventListener('load', function () {
    loadData()
    $("#title").on('keydown', function (event) {
        if (event.key == 'Enter') {
            if ($(this).val() === '') {
                alert('you should input something')
            } else {
                var local = getData()
                local.push({ title: $(this).val(), done: false })
                saveData(local);
                loadData(local);
                $(this).val('')
            }
        }
    })
    function getData() {
        var data = localStorage.getItem("todo")
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    function saveData(data) {
        localStorage.setItem("todo", JSON.stringify(data))
    }

    function loadData() {
        var data = getData()
        var todoCount = 0;
        var doneCount = 0;
        $('.todocount').text(todoCount);
        $('.donecount').text(doneCount);
        $('ol,ul').empty();
        $.each(data, function (i, n) {

            if (n.done) {
                $("ul").prepend("<li> <input type='checkbox' checked='checked'> <p>" + n.title + "</p> <a id='" + i + "' href='javascript:;'>delet</a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li> <input type='checkbox' > <p>" + n.title + "</p> <a id='" + i + "' href='javascript:;'>delet</a></li>");
                todoCount++
            }
            $('.todocount').text(todoCount);
            $('.donecount').text(doneCount);
        })
    }

    //   删除
    $('ol,ul').on('click', 'a', function () {
        var index = $(this).attr('id')
        var data = getData();
        data.splice(index, 1);
        // save location
        saveData(data)
        // 重新取回数据
        loadData()
    });

    // 正在进行和已经完成的任务操作
    $('ol, ul').on('click', 'input', function () {
        var data = getData()
        var index = $(this).siblings('a').attr('id');
        console.log(index);
        data[index].done = $(this).prop('checked');

        saveData(data)
        loadData()
    });
})


