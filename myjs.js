$(document).ready(function () {
    onSubmit();
    onCopy();
});


function onSubmit() {
    $("#submit-btn").click(function () {
        let inputVal = $("#area-input").val().trim();
        if (inputVal != '') {
            let result = {};
            // code here

            //
            $('#area-output').val(JSON.stringify(result));
        } else alert('Please type input');

    })
}

function onCopy() {
    $("#copy-btn").click(function () {
        copy($("#area-output").val());
        $("#coppied-message").removeClass('d-none');
        setTimeout(() => {
            $("#coppied-message").addClass('d-none');
        }, 2000);
    })
}

function copy(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}
