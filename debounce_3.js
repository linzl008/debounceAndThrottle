var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this,e); //指向了 div.container 了, e :MouseEvent 对象
    container.innerHTML = ++count;
    return count
};

container.onmousemove =  debounce(getUserAction, 1000 )


function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}

