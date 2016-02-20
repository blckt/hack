$(function() {
    var a=document.querySelectorAll('a[href*="#"]');
    console.log(a);
    for(var i=0;i<a.length;i++){
        a[i].addEventListener('click',function (e) {
            console.log(this.href);
        })
    }
});