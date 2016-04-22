Komento.module("komento.common",function(e){var t=this;Komento.require().library("ui/effect-highlight","scrollTo").script("komento.language").done(function(){var n=e.fn.hide,r=e.fn.show,i=function(t){e.scrollTo(t,500)};e.fn.hide=function(){return n.apply(this,arguments),this.addClass("hidden"),this},e.fn.show=function(){return r.apply(this,arguments),this.removeClass("hidden"),this},e.fn.scroll=function(){i(this)},e.fn.highlight=function(){return this.effect("highlight",{color:"#FDFFE0"},2e3),this},e.fn.enable=function(){return this.removeClass("disabled"),this},e.fn.disable=function(){return this.addClass("disabled"),this},e.fn.switchOn=function(){return this.removeClass("cancel"),this},e.fn.switchOff=function(){return this.addClass("cancel"),this},e.fn.checkSwitch=function(){return this.hasClass("cancel")?!1:!0},e.fn.checkClick=function(){return this.hasClass("disabled")?!1:(this.addClass("disabled"),!0)},e.fn.clearClick=function(){return this.removeClass("disabled"),this},e.fn.loading=function(){return this.addClass("loading"),this},e.fn.doneLoading=function(){return this.removeClass("loading"),this},e.fn.exists=function(){return this.length>0?!0:!1},e.fn.acl=function(e,t,n){Komento.ajax("site.views.komento.checkAcl",{component:e,rule:t},{success:function(){return n&&n()}})},e.fn.permission=function(e,t,n){Komento.ajax("site.views.komento.checkPermission",{id:e,action:t},{success:function(){return n&&n()}})},e.shortenlink=function(e,t){Komento.ajax("site.views.komento.shortenLink",{url:e},{success:function(e){return Komento.shortenLink=e,t&&t(e)}})},e.stripHtml=function(t){return e("<div>"+t+"</div>").text()},e.bugReport=function(t){Komento.require().library("dialog").view("dialogs/error").done(function(){e.dialog({title:e.language("COM_KOMENTO_ERROR"),width:500,customClass:"kmt-dialog",content:Komento.View("dialogs/error",{status:t.status,statusText:t.statusText,responseText:e.stripHtml(t.responseText)})})})},e.loadSHBrushes=function(){Komento.require().script("syntaxhighlighter").done(function(){e(".kmt-item pre code").each(function(e,t){hljs.highlightBlock(t)})})},t.resolve()})});