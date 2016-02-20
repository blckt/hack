window.onload = function () {
    var btn = document.querySelector('.openDialog');
    btn.addEventListener('click', function (e) {
        var dialog = document.querySelector('#regForm');
        dialog.style.display = 'block';
        var close = dialog.querySelector('header button');
        close.addEventListener('click', function () {
            dialog.style.display = 'none';
        });
        var confirm = dialog.querySelector('input[type="submit"]');
        confirm.addEventListener('click', function (event) {
            dialog.style.display = 'none';
          
        });
        $("#formReg").on('submit',function (event) {
            event.preventDefault();
           
        var data=$(this).serialize();
        $.ajax({
            type:"POST",
            url:"https://hackaton-blckt.c9users.io/users",
            data:data,
            success:function (resp) {
                 localStorage.setItem("token",resp.token);
                location.replace("https://hackaton-blckt.c9users.io/main/player");
               
                
            }
        });
        });

    });



}