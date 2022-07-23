document.getElementById("btn").onclick = function () {
    document.getElementById("btn").style.display = 'none';
    document.getElementById("js-del").style.display = 'flex';
    document.querySelectorAll(".js-choose").forEach(a=>a.style.display = "flex");
};

document.getElementById("canncel").onclick = function(){
    document.getElementById("btn").style.display = 'flex';
    document.getElementById("js-del").style.display = 'none';
    document.querySelectorAll(".js-choose").forEach(a=>a.style.display = "none");
}


const check = document.querySelector('#select_all');

document.getElementById("select_all").onclick = function () 
            {
                var i = check.checked === true
                if(i)
                {
                    var checkboxes = document.querySelectorAll(".js-choose");
                    if(checkboxes)
                    // Lặp và thiết lập checked
                    for (var i = 0; i < checkboxes.length; i++){
                        checkboxes[i].checked = true;
                    }
                }
                else {
                    // Lấy danh sách checkbox
                    var checkboxes = document.querySelectorAll(".js-choose");
                    if(checkboxes)
                    // Lặp và thiết lập checked
                    for (var i = 0; i < checkboxes.length; i++){
                        checkboxes[i].checked = false;
                    }
                }
                
            };

