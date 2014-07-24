Komento.module("komento.famelist",function(e){var t=this;Komento.require().library("ui/effect-highlight","ui/effect-fade","ui/effect-drop").image(Komento.options.spinner).script("sharelinks","markitup","komento.common","komento.commentitem").done(function(){Komento.Controller("FameList",{defaults:{"{commentList}":".kmt-list","{stickList}":".stickList .kmt-list","{loveList}":".loveList .kmt-list","{commentItem}":".kmt-item","{stickItem}":".stickList .kmt-list .kmt-item","{loveItem}":".loveList .kmt-list .kmt-item","{noComment}":".kmt-empty-comment","{loadMore}":".loadMore","{navs}":".navs","{tabs}":".tabs","{commentText}":".commentText","{commentInfo}":".commentInfo","{commentForm}":".commentForm","{deleteButton}":".deleteButton","{editButton}":".editButton","{saveEditButton}":".saveEditButton","{editForm}":".editForm","{editInput}":".editInput","{replyButton}":".replyButton","{shareBox}":".shareBox","{reportButton}":".reportButton","{statusButton}":".statusButton","{statusOptions}":".statusOptions","{publishButton}":".publishButton","{unpublishButton}":".unpublishButton","{stickButton}":".stickButton","{likeButton}":".likeButton","{likesCounter}":".likesCounter","{parentLink}":".parentLink","{parentContainer}":".parentContainer","{socialButton}":".socialButton",view:{editForm:"comment/item/edit.form",deleteDialog:"dialogs/delete.affectchild",publishDialog:"dialogs/publish.affectchild",unpublishDialog:"dialogs/unpublish.affectchild",deleteAttachment:"dialogs/delete.attachment"}}},function(t){return{init:function(){t.navs().length>0&&t.navs().eq(0).trigger("click")},ajaxinit:function(){t.generateSharelinks()},generateSharelinks:function(){var n=function(){t.socialButton().each(function(t,n){e(n).sharelinks()})};t.generateShortLinks(n)},generateShortLinks:function(n){var r=function(r){t.socialButton().each(function(t,n){if(!e(n).attr("loaded")){var i=e(n).attr("commentid"),s=r+"#kmt"+i;e(n).attr("url",s),e(n).parents(".kmt-share-balloon").find(".short-url").val(s)}}),n&&n()};Komento.shortenLink?r(Komento.shortenLink):e.shortenlink(Komento.contentLink,r)},"{navs} click":function(n){var r=e(n).attr("func"),i=e(n).attr("tab"),s=e("."+i);s.attr("loaded")||(t[r](),(i=="stickList"&&Komento.options.konfig.enforce_live_stickies!="1"||i=="loveList"&&Komento.options.konfig.enforce_live_lovies!="1")&&s.attr("loaded",1)),t.tabs().hide(),s.show(),t.navs().removeClass("active"),n.addClass("active")},loadMainList:function(){t.loadComments("main")},loadStickList:function(){Komento.options.acl.read_stickies==1&&Komento.options.config.enable_stickies==1&&Komento.options.konfig.enable_ajax_load_stickies==1&&t.loadComments("stickies")},loadLoveList:function(){Komento.options.acl.read_lovies==1&&Komento.options.config.enable_lovies==1&&Komento.options.konfig.enable_ajax_load_lovies==1&&t.loadComments("lovies")},loadComments:function(n){var r,i,s,o;s=0;switch(n){case"stickies":r=".stickList",i=1,o="default",limit=parseInt(Komento.options.config.max_stickies);break;case"lovies":r=".loveList",i="all",o="love",limit=parseInt(Komento.options.config.max_lovies);break;default:r=".mainList",i="all",o="default",limit=parseInt(Komento.options.config.max_comments_per_page)}e(r).html('<div class="loading"><img src="'+Komento.options.spinner+'" />'+e.language("COM_KOMENTO_COMMENTS_LOADING")+"</div>"),Komento.ajax("site.views.komento.loadcomments",{type:n,component:Komento.component,cid:Komento.cid,sticked:i,threaded:s,sort:o,limit:limit,contentLink:Komento.contentLink},{success:function(n){var i=e(n);e(r).html(i),t.ajaxinit()},fail:function(){e(r).text(e.language("COM_KOMENTO_ERROR"))}})},stickComment:function(n){n=e(n),n.children(".kmt-wrap").attr("style","left-margin: 0px !important");var r=n.attr("id").split("-")[1],i=0;t.stickItem().length==0?t.loadStickList():t.stickItem().length<Komento.options.config.max_stickies&&(t.stickItem().each(function(t,s){if(e(s).attr("id").split("-")[1]>r){e(s).before(n),i=1;return}}),i==0&&t.stickList().append(e(n)))},unstickComment:function(e){t.stickList().find("#"+e).remove()},set:function(e){t.item=e.itemset(t.options)},"{deleteButton} click":function(e){t.set(e),t.showDeleteDialog()},"{editButton} click":function(e){t.set(e),e.checkClick()&&(e.loading(),e.checkSwitch()?t.edit(e):t.cancelEdit(e))},"{saveEditButton} click":function(e){t.set(e),t.saveEdit(e)},"{replyButton} click":function(e){t.set(e),Komento.options.konfig.enable_inline_reply==1?e.checkSwitch()?t.reply(e):t.cancelReply(e):t.kmt.form.staticReply(t.item.parentid)},"{reportButton} click":function(e){t.set(e),e.checkClick()&&(e.loading(),e.checkSwitch()?t.reportComment(e):t.cancelreportComment(e))},"{unpublishButton} click":function(){t.set(el),t.childs>0?t.showUnpublishDialog(el):t.unpublishComment(el)},"{stickButton} click":function(e){t.set(e),e.checkClick()&&(e.loading(),e.checkSwitch()?t.stick(e):t.unstick(e))},"{likesCounter} click":function(e){t.set(e),t.showLikesDialog()},"{likeButton} click":function(e){t.set(e),e.checkClick()&&(e.find("span").loading(),e.checkSwitch()?t.like(e):t.unlike(e))},"{parentLink} mouseover":function(n){t.set(n),Komento.options.config.enable_threaded==1?e("#"+t.item.parentid).addClass("kmt-highlight"):(t.item.element.mine.parentContainer.show(),t.item.element.mine.parentContainer.attr("loaded")==0&&(t.item.element.mine.parentContainer.html('<img src="'+Komento.options.spinner+'" />'),t.loadParent()))},"{parentLink} mouseout":function(n){t.set(n),Komento.options.config.enable_threaded==1?e("#"+t.item.parentid).removeClass("kmt-highlight"):t.item.element.mine.parentContainer.hide()},"{parentLink} click":function(n){t.set(n);var r=e("."+t.item.parentid);r.highlight()},"{attachmentDelete} click":function(e){t.set(e),t.showAttachmentDeleteDialog(e)},closeDialog:function(){e(".foundryDialog").length>0&&e(".foundryDialog").controller().close()},edit:function(){var n=t.item.mine.find("#"+t.item.commentid+"-edit");n.length==0?Komento.ajax("site.views.komento.getcommentraw",{id:t.item.id},{success:function(n){t.item.element.mine.editButton.text(e.language("COM_KOMENTO_COMMENT_EDIT_CANCEL")).switchOff().doneLoading().enable();var r=t.view.editForm({commentId:t.item.commentid,commentText:n});t.item.element.mine.commentText.after(r),t.item.element.mine.editForm=e(r),t.item.element.mine.editInput=t.item.element.mine.editForm.find(".editInput"),t.item.mine.data("item",t.item),t.item.element.mine.editInput.markItUp(e.getBBcodeSettings())},fail:function(){t.item.element.mine.editButton.text(e.language("COM_KOMENTO_ERROR")).doneLoading()}}):(n.show(),t.item.element.mine.editButton.text(e.language("COM_KOMENTO_COMMENT_EDIT_CANCEL")).switchOff().doneLoading().enable())},cancelEdit:function(){t.item.element.mine.editButton.text(e.language("COM_KOMENTO_COMMENT_EDIT")).switchOn().doneLoading().enable(),t.item.element.mine.editForm.hide()},saveEdit:function(){Komento.ajax("site.views.komento.editcomment",{id:t.item.id,edittedComment:t.item.element.mine.editInput.val()},{success:function(n,r,i){t.item.element.both.commentText.html(n),t.item.element.both.commentInfo.text(e.language("COM_KOMENTO_COMMENT_EDITTED_BY",r,i)).show(),Komento.options.config.enable_syntax_highlighting==1&&e.loadSHBrushes(),t.cancelEdit()},fail:function(t){e.dialog({content:message})}})},reply:function(){var n=e(".commentForm");e(".formAlert").hide().text(""),e(t.options["{replyButton}"]).switchOn().find("span").text(e.language("COM_KOMENTO_COMMENT_REPLY")),t.item.element.mine.replyButton.switchOff().find("span").text(e.language("COM_KOMENTO_COMMENT_REPLY_CANCEL")),t.kmt.form.reply(t.item)},cancelReply:function(){e(t.options["{replyButton}"]).switchOn().find("span").text(e.language("COM_KOMENTO_COMMENT_REPLY")),t.kmt.form.cancelReply()},showDeleteDialog:function(){e.dialog({content:t.view.deleteDialog(!0,{childs:t.childs}),afterShow:function(){e(".foundryDialog").find(".delete-affectChild").click(function(){t.deleteComment(1)}),e(".foundryDialog").find(".delete-moveChild").click(function(){t.deleteComment(0)})}})},deleteComment:function(n){e(".foundryDialog").find(".kmt-delete-status").show(),Komento.ajax("site.views.komento.deletecomment",{id:t.item.id,affectChild:n},{success:function(){t.closeDialog(),n?t.deleteChild(t.item.id):t.moveChildUp(t.item.id,t.item.parentid),t.item.both.hide("fade",function(){t.item.both.remove()})},fail:function(){e(".foundryDialog").find(".kmt-delete-status").text(e.language("COM_KOMENTO_ERROR"))}})},deleteChild:function(n){e('li[parentid="'+n+'"]').each(function(){t.deleteChild(e(this).attr("id"))}).hide("fade",function(){e(this).remove()})},moveChildUp:function(n,r){e('li[parentid="'+n+'"]').attr("parentid",r).each(function(){e(this).removeClass("kmt-child-"+e(this).attr("depth")).addClass("kmt-child-"+(e(this).attr("depth")-1)),e(this).attr("depth",e(this).attr("depth")-1),t.moveChildUp(e(this).attr("id"))})},reportComment:function(){Komento.ajax("site.views.komento.action",{id:t.item.id,type:"report",action:"add"},{success:function(){t.item.element.both.reportButton.text(e.language("COM_KOMENTO_COMMENT_REPORTED")).switchOff().doneLoading().enable()},fail:function(){t.item.element.both.reportButton.text(e.language("COM_KOMENTO_ERROR"))}})},cancelreportComment:function(){Komento.ajax("site.views.komento.action",{id:t.item.id,type:"report",action:"remove"},{success:function(){t.item.element.both.reportButton.text(e.language("COM_KOMENTO_COMMENT_REPORT")).switchOn().doneLoading().enable()},fail:function(){t.item.element.both.reportButton.text(e.language("COM_KOMENTO_ERROR"))}})},showUnpublishDialog:function(){e.dialog({content:t.view.unpublishDialog(!0,{childs:t.childs}),afterShow:function(){e(".foundryDialog").find(".unpublish-affectChild").click(function(){t.unpublishComment()})}})},unpublishComment:function(){Komento.ajax("site.views.komento.unpublish",{id:t.item.id},{success:function(){t.closeDialog(),t.unpublishChild(t.item.id),t.item.both.hide("fade",function(){t.item.both.remove()})},fail:function(){}})},unpublishChild:function(n){e('li[parentid="'+n+'"]').each(function(){t.unpublishChild(e(this).attr("id"))}).hide("fade",function(){e(this).remove()})},stick:function(n){Komento.ajax("site.views.komento.stick",{id:t.item.id},{success:function(){t.item.element.mine.stickButton.text(e.language("COM_KOMENTO_COMMENT_UNSTICK")).switchOff().doneLoading().enable(),t.item.mine.addClass("kmt-sticked"),t.kmt.famelist.stickComment(t.item.mine.clone())},fail:function(){t.item.element.mine.stickButton.text(e.language("COM_KOMENTO_ERROR"))}})},unstick:function(){Komento.ajax("site.views.komento.unstick",{id:t.item.id},{success:function(){t.item.element.both.stickButton.text(e.language("COM_KOMENTO_COMMENT_STICK")).switchOn().doneLoading().enable(),t.item.both.removeClass("kmt-sticked"),t.unstickComment(t.item.commentid)},fail:function(){t.stickButton.text(e.language("COM_KOMENTO_ERROR"))}})},like:function(){Komento.ajax("site.views.komento.action",{id:t.item.id,type:"likes",action:"add"},{success:function(){t.item.element.both.likeButton.switchOff().enable().find("span").doneLoading().text(e.language("COM_KOMENTO_COMMENT_UNLIKE"));var n=parseInt(t.item.element.mine.likesCounter.find("span").text())+1;t.item.element.both.likesCounter.find("span").text(n)},fail:function(e){t.item.element.both.likesCounter.find("span").doneLoading().text(e)}})},unlike:function(){Komento.ajax("site.views.komento.action",{id:t.item.id,type:"likes",action:"remove"},{success:function(){t.item.element.both.likeButton.switchOn().enable().find("span").doneLoading().text(e.language("COM_KOMENTO_COMMENT_LIKE"));var n=parseInt(t.item.element.mine.likesCounter.find("span").text())-1;t.item.element.both.likesCounter.find("span").text(n)},fail:function(){t.item.element.both.likesCounter.find("span").doneLoading().text(e.language("COM_KOMENTO_ERROR"))}})},showLikesDialog:function(n){Komento.ajax("site.views.komento.getLikedUsers",{id:t.item.id},{success:function(t){e.dialog({title:e.language("COM_KOMENTO_COMMENT_PEOPLE_WHO_LIKED_THIS"),content:t})}})},loadParent:function(){var n=e("#"+t.item.parentid);if(n.length!=0){var r=n.find(".kmt-avatar:not(.parentContainer > .kmt-avatar)").clone(),i=n.find(".kmt-author:not(.parentContainer > .kmt-author)").clone(),s=n.find(".kmt-time:not(.parentContainer > .kmt-time)").clone(),o=n.find(".commentText:not(.parentContainer > .commentText)").clone();t.item.element.both.parentContainer.html("").append(r).append(i).append(s).append(o)}else{var u=t.item.parentid.split("-")[1];Komento.ajax("site.views.komento.getcomment",{id:u},{success:function(e){t.item.element.both.parentContainer.html(e)},fail:function(){}})}t.item.element.both.parentContainer.attr("loaded",1)},showAttachmentDeleteDialog:function(n){var r=e(n).parents(".attachmentFile").attr("attachmentid"),i=e(n).parents(".attachmentFile").attr("attachmentname");e.dialog({content:t.view.deleteAttachment(!0,{attachmentname:i}),afterShow:function(){e(".foundryDialog").find(".delete-attachment").click(function(){t.closeDialog(),t.deleteFile(r)}),e(".foundryDialog").find(".delete-attachment-cancel").click(function(){t.closeDialog()})}})},deleteFile:function(e){var n=t.item.id;Komento.ajax("site.views.komento.deleteAttachment",{id:n,attachmentid:e},{success:function(){t.item.element.both.attachmentFile.filter(".file-"+e).remove(),t.item.mine.find(".attachmentFile").length==0&&t.item.element.both.attachmentWrap.remove()},fail:function(e){alert("error deleting attachment at "+e)}})}}}),t.resolve()})});