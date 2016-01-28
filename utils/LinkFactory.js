"use strict";

class LinkFactory {
    
    a(rel, href, ctx) {
        if(!href) href = "";
        return {"rel":rel,"url":`${ctx.request.origin}/${href}`, "type":"a"}
    }
}

module.exports = {
    LinkFactory : LinkFactory
}