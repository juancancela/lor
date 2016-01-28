"use strict";

class LinkFactory {
    
    /**
     * Creates HTML a links
     * @param rel HTML a rel param
     * @param href HTML a href param
     * @param ctx context object
     * 
     * @returns an HTML a tag customized with the given parameters
     */
    a(rel, href, ctx) {
        if(!href) href = "";
        return `<a rel=${rel} href="${ctx.request.origin}/${href}">${rel}</a>`; 
    }
    
    form(inputParameters, action, method){
        var _inputParameters = function(inputParameters){
           var inputParametersString = "";
           inputParameters.forEach(function(inputParameter){
           inputParametersString += `${inputParameter.descr}:<br><input type="text" name="${inputParameter.name}"><br>`;
        });  
        return inputParametersString; 
        }
        
        return `<form action="${action}"><br/>${_inputParameters(inputParameters)}<input type="submit" value="submit"></form>`    
    }
}

module.exports = {
    LinkFactory : LinkFactory
}