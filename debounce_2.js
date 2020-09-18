var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    console.log(this); //指向了 div.container 了
    container.innerHTML = ++count;
    return count
};

container.onmousemove =  debounce(getUserAction, 1000)


function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context)
        }, wait);
    }
}
