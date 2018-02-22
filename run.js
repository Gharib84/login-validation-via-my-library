"use strict";
var registerform;
window.onload = () => {
    registerform = new RegisterForm();
    registerform.resetForm();
    $("login").onclick = () => {
        if(registerform.validateForm()){
            //$("registeration_form").submit();
            var x = new Navigate();
            x.show_results();
            registerform.resetForm();
        }
    }
    $("reset").onclick =() => {
        registerform.resetForm();
    }
    $("back").onclick = () => {
        var y = new Navigate();
        y.show_form();
    }
}
