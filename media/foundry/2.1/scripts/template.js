dispatch.to("Foundry/2.1 Core Plugins").at(function($,manifest){$.template=function(){var defaultTemplate={content:"",type:"ejs"};var self=function(name,content){if(name===undefined){return self.templates}var template;if(typeof content=="string"){if($.isPlainObject(content)){template=content}else{template=$.extend({},defaultTemplate,{name:name,content:content})}self.templates[name]=template;return template}else{template=self.templates[name]||{};return template.content||""}};$.extend(self,{templates:{},remove:function(name){delete self.templates[name];delete self.loaders[name]},loaders:{},createLoader:function(name){var loader=self.loaders[name]=$.Deferred().done(function(content){self(name,content)});loader.name=name;loader.reset=function(){return self.createLoader(name)};return loader},loader:function(name){return self.loaders[name]||self.createLoader(name)}});return self}()});