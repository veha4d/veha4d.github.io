function showBurgerBtn() {
    if(!document.getElementById('burger-toggle').checked) {
        document.getElementById('drop-btn-toggle-2').checked = false;
        document.getElementById('drop-btn-toggle-4').checked = false;
        document.getElementById('column-btn-toggle-22').checked = false;
        document.getElementById('column-btn-toggle-24').checked = false;
    }
}
function showDropBtn2() {
    if(document.getElementById('drop-btn-toggle-2').checked) {
        if(document.getElementById('drop-btn-toggle-4').checked = true) {
            document.getElementById('drop-btn-toggle-4').checked = false;
        }
    } else {
        document.getElementById('column-btn-toggle-22').checked = false;
        document.getElementById('column-btn-toggle-24').checked = false;
    }
}
function showDropBtn4() {
    if(document.getElementById('drop-btn-toggle-4').checked) {
        document.getElementById('column-btn-toggle-22').checked = false;
        document.getElementById('column-btn-toggle-24').checked = false;
        if(document.getElementById('drop-btn-toggle-2').checked = true) {
            document.getElementById('drop-btn-toggle-2').checked = false;
        }
    }
}
function showColumnBtn22() {
    if(document.getElementById('column-btn-toggle-22').checked) {
        if(document.getElementById('column-btn-toggle-24').checked = true) {
            document.getElementById('column-btn-toggle-24').checked = false;
        }
    }
}
function showColumnBtn24() {
    if(document.getElementById('column-btn-toggle-24').checked) {
        if(document.getElementById('column-btn-toggle-22').checked = true) {
            document.getElementById('column-btn-toggle-22').checked = false;
        }
    }
}
