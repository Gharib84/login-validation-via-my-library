"use strict";

var fields = {
    email: {
        message: "Email Address",
        required: "This Is Required",
        isEmail: "Email Address Is Invalid"
    },
    password: {
        message: "Required Field",
        required: "Password Is Required"
    },
    verify: {
        required: "Required Field",
        noMatch: ["is not match", "password"]
    }

};//end objc