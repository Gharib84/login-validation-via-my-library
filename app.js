"use strict";
class Validate{
    constructor(){

    }
    isBlank(text){
        return (text === "");
    }
    isMatch(text1, text2){
        return (text1 === text2);
    }
    isEmail(text){
        if (text.length === 0) return false;
        var parts = text.split("@");
        if (parts.length !== 2) return false;
        if (parts[0].length > 64) return false;
        if (parts[1].length > 255) return false;
        var address = "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
        var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
        var localPart = new RegExp(address + "|" + quotedText);
        if (!parts[0].match(localPart)) return false;
        var hostnames = "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
        var tld = "[a-zA-Z0-9]{2,6}";
        var domainPart = new RegExp("^" + hostnames + tld + "$");
        if (!parts[1].match(domainPart)) return false;
        return true
       
    }

};

class RegisterForm extends Validate{
    constructor(){
        super();
    }
    ValidateFields(fieldName, text){
        var field = fields[fieldName];
        if(field.required){
            if(super.isBlank(text)){
                throw new Error(field.required);
            }
        }
        if(field.noMatch){
            if(! super.isMatch(text, $(field.noMatch[1]).value)){
                throw new Error(field.noMatch[0]);
            }
        }
        if(field.isEmail){
            if(! super.isEmail(text)){
                throw new Error(field.isEmail);
            }
        }
    }
    setError(fieldName, message){
        $(fieldName + "_error").setAttribute("class", "error");
        $(fieldName + "_error").firstChild.nodeValue = message;

    }
    clearError(fieldName, message){
        $(fieldName + "_error").setAttribute("class", "");
        $(fieldName + "_error").firstChild.nodeValue = message || "";
    }
    resetForm(){
        for(var fieldName in fields){
            this.clearError(fieldName, fields[fieldName].message);
            $(fieldName).value = "";
        }
    }
    validateForm() {
        var isOK = true;
        for (var fieldName in fields) {
          this.clearError(fieldName);
          try {
            this.ValidateFields(fieldName, $(fieldName).value);
          } catch (error) {
            isOK = false;
            this.setError(fieldName, error.message);
          }
        }
        return isOK;
      }
}







