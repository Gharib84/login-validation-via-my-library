"use strict";
var $ = (id) => document.getElementById(id);

class Navigate{
    constructor(){

    }
    show_form(){
        $("registeration_form").setAttribute("class", "show");
        $("registeration_results").setAttribute("class", "hide");
    }
    show_results(){
        $("registeration_form").setAttribute("class", "hide");
        $("registeration_results").setAttribute("class", "show");
    }
}