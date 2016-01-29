"use strict";

/**
 * Utility class that allows creation of HTML hypermedia controls
 */
class LinkFactory {
    
    /**
     * Creates an HTML a hypermedia control
     * @param rel HTML a rel param
     * @param href HTML a href param
     * @param ctx context object
     * 
     * @returns an HTML a tag customized with the given parameters
     */
    a(rel, href, ctx) {
        if(!href) href = "";
        return `\t<a rel="${rel}" href="${ctx.request.origin}/${href}">${rel}</a>`; 
    }
    
    /**
     * Creates an HTML form hypermedia control
     * @param inputParameters an array containing input parameters. In example: [{"name":"players", "placeholder":"Number of Players (1 to 6)", "type":"text", "required":true}];
     * @param action the action parameter of an HTML form
     * @param method the method parameter of an HTML form (POST or GET)
     * @param rel the state to which application transitions if the client executes the control (since HTML does not provide a rel attribute, a CSS class is used instead)
     * 
     * @returns an HTML form tag customized with the given parameters
     */
    form(inputParameters, action, method, rel){
        var _inputParameters = function(inputParameters){
           var inputParametersString = "";
           inputParameters.forEach(function(inputParameter){
             var required = "";
             if(inputParameter.required) required = "required";   
             inputParametersString += `\t\t<input type="${inputParameter.type}" name="${inputParameter.name}" placeholder="${inputParameter.placeholder}" ${required}>`;
        });  
        return inputParametersString; 
        }
        
        return `\n\t<div class="${rel}">\n\t\t<form action="${action}">\n\t${_inputParameters(inputParameters)}\n\t\t\t<input type="submit" value="${rel}">\n\t\t</form>\n\t</div>`    
    }
}

module.exports = {
    LinkFactory : LinkFactory
}