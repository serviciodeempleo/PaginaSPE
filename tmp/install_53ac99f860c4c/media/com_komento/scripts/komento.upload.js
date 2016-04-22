Komento.module("komento.upload",function(e){var t=this;Komento.require().view("comment/form/uploadrow").library("plupload").done(function(){Komento.Controller("UploadForm",{defaults:{uploadUrl:e.indexUrl+"?option=com_komento&controller=file&task=upload&component="+Komento.component,uploadedId:[],"{uploader}":".uploaderForm","{uploadButton}":".uploadButton","{uploadArea}":".uploadArea","{uploadQueue}":".uploadQueue","{queueHeader}":".queueHeader","{queueRow}":".queueRow","{dragDrop}":".dragDrop","{removeFile}":".removeFile","{fileCounter}":".fileCounter",view:{uploadrow:"comment/form/uploadrow"}}},function(t){return{init:function(){t.uploader().implement("plupload",{settings:{url:t.options.uploadUrl,drop_element:"uploadArea",max_file_size:Komento.options.config.upload_max_size+"mb",filters:[{title:"Allowed File Type",extensions:Komento.options.config.upload_allowed_extension}]},"{uploader}":".uploaderForm","{uploadButton}":".uploadButton"},function(){t.plupload=this.plupload,t.plupload.runtime=="html5"&&t.enableDragDrop()})},"{uploader} FilesAdded":function(e,n,r,i){t.addFiles(i)},"{uploader} UploadComplete":function(n,r,i,s){e(".queueRow").each(function(n,r){t.removeRow(e(r).attr("id"))}),t.kmt.form.postComment()},"{uploader} FileUploaded":function(n,r,i,s,o){o.status==1&&t.options.uploadedId.push(o.id);if(o.status=="notallowed"){t.plupload.stop(),t.kmt.form.errorNotification(e.language("COM_KOMENTO_FORM_NOTIFICATION_UPLOAD_NOT_ALLOWED"));return}if(o.status=="exceedfilesize"){t.plupload.stop(),t.kmt.form.errorNotification(e.language("COM_KOMENTO_FORM_NOTIFICATION_MAX_FILE_SIZE",Komento.options.config.upload_max_size+"mb"));return}},"{uploader} QueueChanged":function(e,n,r){t.fileCounter().text(r.files.length)},"{uploader} Error":function(n,r,i,s){t.kmt.form.clearNotification();switch(s.code){case-600:t.kmt.form.errorNotification(e.language("COM_KOMENTO_FORM_NOTIFICATION_MAX_FILE_SIZE",Komento.options.config.upload_max_size+"mb"));break;case-601:t.kmt.form.errorNotification(e.language("COM_KOMENTO_FORM_NOTIFICATION_FILE_EXTENSION",Komento.options.config.upload_allowed_extension))}},"{removeFile} click":function(e){var n=e.parents(".queueRow").attr("id");t.removeRow(n)},enableDragDrop:function(){t.dragDrop().show()},startUpload:function(){t.plupload.files.length>0?t.plupload.start():t.kmt.form.postComment()},addFiles:function(n){e.each(n,function(n,r){t.kmt.form.clearNotification();if(t.plupload.files.length>Komento.options.config.upload_max_file)return t.plupload.removeFile(r),t.kmt.form.errorNotification(e.language("COM_KOMENTO_FORM_NOTIFICATION_MAX_FILE_ITEM",Komento.options.config.upload_max_file)),!0;if(r.status!=1)return!0;var i=parseInt(r.size/1024),s=t.view.uploadrow({id:r.id,filename:r.name,size:i});s.data("fileitem",r),t.uploadQueue().append(s)})},removeRow:function(n){e("#"+n).remove();var r=t.plupload.getFile(n);t.plupload.removeFile(r)}}}),t.resolve()})});