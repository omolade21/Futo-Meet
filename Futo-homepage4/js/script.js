function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value

    }
    emailjs.send("haleema","template_m016mrk", params).then(function (res){
        alert("Successfully submitted " + res.status);
    })
}