define("app/init",["jquery"],function(t){"use strict";var e={path:{img:"public/img/",getCaptcha:"api/user/getCaptcha",sendInviteKey:"api/user/sendInvite",logIn:"api/user/logIn",logOut:"api/user/logOut",deleteLog:"api/user/deleteLog",saveUserConfig:"api/user/saveConfig",saveSharingConfig:"api/user/saveSharingConfig",deleteAccount:"api/user/deleteAccount",searchAccess:"api/access/search",initMap:"api/map/init",updateMapData:"api/map/updateData",updateUserData:"api/map/updateUserData",saveMap:"api/map/save",deleteMap:"api/map/delete",importMap:"api/map/import",searchSystem:"api/system/search",saveSystem:"api/system/save",deleteSystem:"api/system/delete",getSystemGraphData:"api/system/graphData",getConstellationData:"api/system/constellationData",saveConnection:"api/connection/save",deleteConnection:"api/connection/delete",getSignatures:"api/signature/getAll",saveSignatureData:"api/signature/save",deleteSignatureData:"api/signature/delete",searchRoute:"api/route/search"},url:{ccpImageServer:"https://image.eveonline.com/",zKillboard:"https://zkillboard.com/api/"},animationSpeed:{splashOverlay:300,headerLink:100,mapOverlay:200,mapMoveSystem:300,mapDeleteSystem:200,mapModule:200,dialogEvents:180},mapIcons:[{"class":"fa-desktop",label:"desktop",unicode:"&#xf108;"},{"class":"fa-bookmark",label:"bookmark",unicode:"&#xf02e;"},{"class":"fa-cube",label:"cube",unicode:"&#xf1b2;"},{"class":"fa-plane",label:"plane",unicode:"&#xf072;"},{"class":"fa-globe",label:"globe",unicode:"&#xf0ac;"},{"class":"fa-rocket",label:"rocket",unicode:"&#xf135;"},{"class":"fa-life-ring",label:"life ring",unicode:"&#xf1cd;"},{"class":"fa-heart",label:"heart",unicode:"&#xf004;"}],classes:{logTypes:{info:{"class":"pf-log-info",label:"info"},warning:{"class":"pf-log-warning",label:"warning"},error:{"class":"pf-log-error",label:"error"}},systemEffects:{effect:{"class":"pf-system-effect",name:"no effect"},magnetar:{"class":"pf-system-effect-magnetar",name:"magnetar"},redGiant:{"class":"pf-system-effect-redgiant",name:"red gaint"},pulsar:{"class":"pf-system-effect-pulsar",name:"pulsar"},wolfRayet:{"class":"pf-system-effect-wolfrayet",name:"wolf rayet"},cataclysmic:{"class":"pf-system-effect-cataclysmic",name:"cytaclysmic"},blackHole:{"class":"pf-system-effect-blackhole",name:"black hole"}},systemSecurity:{security:{"class":"pf-system-sec"},H:{"class":"pf-system-sec-highSec"},L:{"class":"pf-system-sec-lowSec"},"0.0":{"class":"pf-system-sec-nullSec"},C6:{"class":"pf-system-sec-high"},C5:{"class":"pf-system-sec-high"},C4:{"class":"pf-system-sec-mid"},C3:{"class":"pf-system-sec-mid"},C2:{"class":"pf-system-sec-low"},C1:{"class":"pf-system-sec-low"}},trueSec:{"0.0":{"class":"pf-system-security-0-0"},.1:{"class":"pf-system-security-0-1"},.2:{"class":"pf-system-security-0-2"},.3:{"class":"pf-system-security-0-3"},.4:{"class":"pf-system-security-0-4"},.5:{"class":"pf-system-security-0-5"},.6:{"class":"pf-system-security-0-6"},.7:{"class":"pf-system-security-0-7"},.8:{"class":"pf-system-security-0-8"},.9:{"class":"pf-system-security-0-9"},"1.0":{"class":"pf-system-security-1-0"}},systemInfo:{rally:{"class":"pf-system-info-rally",label:"rally point"}},pieChart:{"class":"pf-pie-chart",pieChartMapCounterClass:"pf-pie-chart-map-timer"}},defaultMapScope:"wh",connectionTypes:{jumpbridge:{cssClass:"pf-map-connection-jumpbridge",paintStyle:{dashstyle:"4 2 1 2"}},stargate:{cssClass:"pf-map-connection-stargate",paintStyle:{dashstyle:"0"}},wh_eol:{cssClass:"pf-map-connection-wh-eol",paintStyle:{dashstyle:"0"}},wh_fresh:{cssClass:"pf-map-connection-wh-fresh",paintStyle:{dashstyle:"0"}},wh_reduced:{cssClass:"pf-map-connection-wh-reduced",paintStyle:{dashstyle:"0"}},wh_critical:{cssClass:"pf-map-connection-wh-critical",paintStyle:{dashstyle:"0"}},frigate:{cssClass:"pf-map-connection-frig",paintStyle:{dashstyle:"0.99"},overlays:[["Label",{label:"frig",cssClass:["pf-map-connection-overlay","frig"].join(" ")}]]},preserve_mass:{cssClass:"pf-map-connection-preserve-mass",overlays:[["Label",{label:'<i class="fa fa-warning"></i>&nbsp;save mass',cssClass:["pf-map-connection-overlay","mass"].join(" "),width:50,length:30,location:.5}]]}},signatureGroups:{1:{name:"combat site",label:"Combat"},2:{name:"relic site",label:"Relic"},3:{name:"data site",label:"Data"},4:{name:"gas site",label:"Gas"},5:{name:"wormhole",label:"Wormhole"},6:{name:"ore site",label:"Ore"},7:{name:"ghost",label:"Ghost"}},frigateWormholes:{1:{},2:{1:"L005 - C2",2:"C008 - C5",3:"Q003 - 0.0"},3:{1:"E004 - C1",2:"L005 - C2",3:"M001 - C4"},4:{1:"L005 - C2",2:"G008 - C6",3:"Q003 - 0.0"},5:{1:"E004 - C1",2:"L005 - C2",3:"Z006 - C3",4:"C008 - C5",5:"Q003 - 0.0"},6:{1:"E004 - C1",2:"Z006 - C3",5:"Q003 - 0.0"}},incomingWormholes:{1:"K162 - C1/2/3 (unknown)",2:"K162 - C4/5 (dangerous)",3:"K162 - C6 (deadly)"}};return e});!function(t){"function"==typeof define&&define.amd?define("pnotify",["jquery"],t):t(jQuery)}(function(t){var e,i,s={dir1:"down",dir2:"left",push:"bottom",spacing1:25,spacing2:25,context:t("body")},o=t(window),n=function(){i=t("body");PNotify.prototype.options.stack.context=i;o=t(window);o.bind("resize",function(){e&&clearTimeout(e);e=setTimeout(function(){PNotify.positionAll(!0)},10)})};PNotify=function(t){this.parseOptions(t);this.init()};t.extend(PNotify.prototype,{version:"2.0.1",options:{title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"bootstrap3",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"notice",icon:!0,opacity:1,animation:"fade",animate_speed:"slow",position_animate_speed:500,shadow:!0,hide:!0,delay:8e3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:s},modules:{},runModules:function(t,e){var i;for(var s in this.modules){i="object"==typeof e&&s in e?e[s]:e;"function"==typeof this.modules[s][t]&&this.modules[s][t](this,"object"==typeof this.options[s]?this.options[s]:{},i)}},state:"initializing",timer:null,styles:null,elem:null,container:null,title_container:null,text_container:null,animating:!1,timerHide:!1,init:function(){var e=this;this.modules={};t.extend(!0,this.modules,PNotify.prototype.modules);"object"==typeof this.options.styling?this.styles=this.options.styling:this.styles=PNotify.styling[this.options.styling];this.elem=t("<div />",{"class":"ui-pnotify "+this.options.addclass,css:{display:"none"},mouseenter:function(t){if(e.options.mouse_reset&&"out"===e.animating){if(!e.timerHide)return;e.cancelRemove()}e.options.hide&&e.options.mouse_reset&&e.cancelRemove()},mouseleave:function(t){e.options.hide&&e.options.mouse_reset&&e.queueRemove();PNotify.positionAll()}});this.container=t("<div />",{"class":this.styles.container+" ui-pnotify-container "+("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice)}).appendTo(this.elem);""!==this.options.cornerclass&&this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass);this.options.shadow&&this.container.addClass("ui-pnotify-shadow");this.options.icon!==!1&&t("<div />",{"class":"ui-pnotify-icon"}).append(t("<span />",{"class":this.options.icon===!0?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container);this.title_container=t("<h4 />",{"class":"ui-pnotify-title"}).appendTo(this.container);this.options.title===!1?this.title_container.hide():this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title);this.text_container=t("<div />",{"class":"ui-pnotify-text"}).appendTo(this.container);this.options.text===!1?this.text_container.hide():this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text);"string"==typeof this.options.width&&this.elem.css("width",this.options.width);"string"==typeof this.options.min_height&&this.container.css("min-height",this.options.min_height);"top"===this.options.stack.push?PNotify.notices=t.merge([this],PNotify.notices):PNotify.notices=t.merge(PNotify.notices,[this]);"top"===this.options.stack.push&&this.queuePosition(!1,1);this.options.stack.animation=!1;this.runModules("init");this.options.auto_display&&this.open();return this},update:function(e){var i=this.options;this.parseOptions(i,e);this.options.cornerclass!==i.cornerclass&&this.container.removeClass("ui-corner-all "+i.cornerclass).addClass(this.options.cornerclass);this.options.shadow!==i.shadow&&(this.options.shadow?this.container.addClass("ui-pnotify-shadow"):this.container.removeClass("ui-pnotify-shadow"));this.options.addclass===!1?this.elem.removeClass(i.addclass):this.options.addclass!==i.addclass&&this.elem.removeClass(i.addclass).addClass(this.options.addclass);if(this.options.title===!1)this.title_container.slideUp("fast");else if(this.options.title!==i.title){this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title);i.title===!1&&this.title_container.slideDown(200)}if(this.options.text===!1)this.text_container.slideUp("fast");else if(this.options.text!==i.text){this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text);i.text===!1&&this.text_container.slideDown(200)}this.options.type!==i.type&&this.container.removeClass(this.styles.error+" "+this.styles.notice+" "+this.styles.success+" "+this.styles.info).addClass("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice);if(this.options.icon!==i.icon||this.options.icon===!0&&this.options.type!==i.type){this.container.find("div.ui-pnotify-icon").remove();this.options.icon!==!1&&t("<div />",{"class":"ui-pnotify-icon"}).append(t("<span />",{"class":this.options.icon===!0?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container)}this.options.width!==i.width&&this.elem.animate({width:this.options.width});this.options.min_height!==i.min_height&&this.container.animate({minHeight:this.options.min_height});this.options.opacity!==i.opacity&&this.elem.fadeTo(this.options.animate_speed,this.options.opacity);this.options.hide?i.hide||this.queueRemove():this.cancelRemove();this.queuePosition(!0);this.runModules("update",i);return this},open:function(){this.state="opening";this.runModules("beforeOpen");var t=this;this.elem.parent().length||this.elem.appendTo(this.options.stack.context?this.options.stack.context:i);"top"!==this.options.stack.push&&this.position(!0);"fade"===this.options.animation||"fade"===this.options.animation.effect_in?this.elem.show().fadeTo(0,0).hide():1!==this.options.opacity&&this.elem.show().fadeTo(0,this.options.opacity).hide();this.animateIn(function(){t.queuePosition(!0);t.options.hide&&t.queueRemove();t.state="open";t.runModules("afterOpen")});return this},remove:function(e){this.state="closing";this.timerHide=!!e;this.runModules("beforeClose");var i=this;if(this.timer){window.clearTimeout(this.timer);this.timer=null}this.animateOut(function(){i.state="closed";i.runModules("afterClose");i.queuePosition(!0);i.options.remove&&i.elem.detach();i.runModules("beforeDestroy");if(i.options.destroy&&null!==PNotify.notices){var e=t.inArray(i,PNotify.notices);-1!==e&&PNotify.notices.splice(e,1)}i.runModules("afterDestroy")});return this},get:function(){return this.elem},parseOptions:function(e,i){this.options=t.extend(!0,{},PNotify.prototype.options);this.options.stack=PNotify.prototype.options.stack;var s,o=[e,i];for(var n in o){s=o[n];if("undefined"==typeof s)break;if("object"!=typeof s)this.options.text=s;else for(var a in s)this.modules[a]?t.extend(!0,this.options[a],s[a]):this.options[a]=s[a]}},animateIn:function(t){this.animating="in";var e;e="undefined"!=typeof this.options.animation.effect_in?this.options.animation.effect_in:this.options.animation;if("none"===e){this.elem.show();t()}else"show"===e?this.elem.show(this.options.animate_speed,t):"fade"===e?this.elem.show().fadeTo(this.options.animate_speed,this.options.opacity,t):"slide"===e?this.elem.slideDown(this.options.animate_speed,t):"function"==typeof e?e("in",t,this.elem):this.elem.show(e,"object"==typeof this.options.animation.options_in?this.options.animation.options_in:{},this.options.animate_speed,t);this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"});"slide"!==e&&this.elem.css("overflow","visible");this.container.css("overflow","hidden")},animateOut:function(t){this.animating="out";var e;e="undefined"!=typeof this.options.animation.effect_out?this.options.animation.effect_out:this.options.animation;if("none"===e){this.elem.hide();t()}else"show"===e?this.elem.hide(this.options.animate_speed,t):"fade"===e?this.elem.fadeOut(this.options.animate_speed,t):"slide"===e?this.elem.slideUp(this.options.animate_speed,t):"function"==typeof e?e("out",t,this.elem):this.elem.hide(e,"object"==typeof this.options.animation.options_out?this.options.animation.options_out:{},this.options.animate_speed,t);this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"});"slide"!==e&&this.elem.css("overflow","visible");this.container.css("overflow","hidden")},position:function(t){var e=this.options.stack,s=this.elem;s.parent().hasClass("ui-effects-wrapper")&&(s=this.elem.css({left:"0",top:"0",right:"0",bottom:"0"}).parent());"undefined"==typeof e.context&&(e.context=i);if(e){"number"!=typeof e.nextpos1&&(e.nextpos1=e.firstpos1);"number"!=typeof e.nextpos2&&(e.nextpos2=e.firstpos2);"number"!=typeof e.addpos2&&(e.addpos2=0);var n="none"===s.css("display");if(!n||t){var a,c,p,l={};switch(e.dir1){case"down":p="top";break;case"up":p="bottom";break;case"left":p="right";break;case"right":p="left"}a=parseInt(s.css(p).replace(/(?:\..*|[^0-9.])/g,""));isNaN(a)&&(a=0);if("undefined"==typeof e.firstpos1&&!n){e.firstpos1=a;e.nextpos1=e.firstpos1}var r;switch(e.dir2){case"down":r="top";break;case"up":r="bottom";break;case"left":r="right";break;case"right":r="left"}c=parseInt(s.css(r).replace(/(?:\..*|[^0-9.])/g,""));isNaN(c)&&(c=0);if("undefined"==typeof e.firstpos2&&!n){e.firstpos2=c;e.nextpos2=e.firstpos2}if("down"===e.dir1&&e.nextpos1+s.height()>(e.context.is(i)?o.height():e.context.prop("scrollHeight"))||"up"===e.dir1&&e.nextpos1+s.height()>(e.context.is(i)?o.height():e.context.prop("scrollHeight"))||"left"===e.dir1&&e.nextpos1+s.width()>(e.context.is(i)?o.width():e.context.prop("scrollWidth"))||"right"===e.dir1&&e.nextpos1+s.width()>(e.context.is(i)?o.width():e.context.prop("scrollWidth"))){e.nextpos1=e.firstpos1;e.nextpos2+=e.addpos2+("undefined"==typeof e.spacing2?25:e.spacing2);e.addpos2=0}if(e.animation&&e.nextpos2<c)switch(e.dir2){case"down":l.top=e.nextpos2+"px";break;case"up":l.bottom=e.nextpos2+"px";break;case"left":l.right=e.nextpos2+"px";break;case"right":l.left=e.nextpos2+"px"}else"number"==typeof e.nextpos2&&s.css(r,e.nextpos2+"px");switch(e.dir2){case"down":case"up":s.outerHeight(!0)>e.addpos2&&(e.addpos2=s.height());break;case"left":case"right":s.outerWidth(!0)>e.addpos2&&(e.addpos2=s.width())}if("number"==typeof e.nextpos1)if(e.animation&&(a>e.nextpos1||l.top||l.bottom||l.right||l.left))switch(e.dir1){case"down":l.top=e.nextpos1+"px";break;case"up":l.bottom=e.nextpos1+"px";break;case"left":l.right=e.nextpos1+"px";break;case"right":l.left=e.nextpos1+"px"}else s.css(p,e.nextpos1+"px");(l.top||l.bottom||l.right||l.left)&&s.animate(l,{duration:this.options.position_animate_speed,queue:!1});switch(e.dir1){case"down":case"up":e.nextpos1+=s.height()+("undefined"==typeof e.spacing1?25:e.spacing1);break;case"left":case"right":e.nextpos1+=s.width()+("undefined"==typeof e.spacing1?25:e.spacing1)}}return this}},queuePosition:function(t,i){e&&clearTimeout(e);i||(i=10);e=setTimeout(function(){PNotify.positionAll(t)},i);return this},cancelRemove:function(){this.timer&&window.clearTimeout(this.timer);if("closing"===this.state){this.elem.stop(!0);this.state="open";this.animating="in";this.elem.css("height","auto").animate({width:this.options.width,opacity:this.options.opacity},"fast")}return this},queueRemove:function(){var t=this;this.cancelRemove();this.timer=window.setTimeout(function(){t.remove(!0)},isNaN(this.options.delay)?0:this.options.delay);return this}});t.extend(PNotify,{notices:[],removeAll:function(){t.each(PNotify.notices,function(){this.remove&&this.remove()})},positionAll:function(i){e&&clearTimeout(e);e=null;t.each(PNotify.notices,function(){var t=this.options.stack;if(t){t.nextpos1=t.firstpos1;t.nextpos2=t.firstpos2;t.addpos2=0;t.animation=i}});t.each(PNotify.notices,function(){this.position()})},styling:{jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert"},bootstrap2:{container:"alert",notice:"",notice_icon:"icon-exclamation-sign",info:"alert-info",info_icon:"icon-info-sign",success:"alert-success",success_icon:"icon-ok-sign",error:"alert-error",error_icon:"icon-warning-sign"},bootstrap3:{container:"alert",notice:"alert-warning",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign"}}});PNotify.styling.fontawesome=t.extend({},PNotify.styling.bootstrap3);t.extend(PNotify.styling.fontawesome,{notice_icon:"fa fa-exclamation-circle",info_icon:"fa fa-info",success_icon:"fa fa-check",error_icon:"fa fa-warning"});document.body?n():t(n);return PNotify});!function(t){"function"==typeof define&&define.amd?define("pnotify.nonblock",["jquery","pnotify"],t):t(jQuery,PNotify)}(function(t,e){var i,s=/^on/,o=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,n=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,a=/^(scroll|resize|(un)?load|abort|error)$/,c=function(e,i){var c;e=e.toLowerCase();if(document.createEvent&&this.dispatchEvent){e=e.replace(s,"");if(e.match(o)){t(this).offset();c=document.createEvent("MouseEvents");c.initMouseEvent(e,i.bubbles,i.cancelable,i.view,i.detail,i.screenX,i.screenY,i.clientX,i.clientY,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,i.button,i.relatedTarget)}else if(e.match(n)){c=document.createEvent("UIEvents");c.initUIEvent(e,i.bubbles,i.cancelable,i.view,i.detail)}else if(e.match(a)){c=document.createEvent("HTMLEvents");c.initEvent(e,i.bubbles,i.cancelable)}if(!c)return;this.dispatchEvent(c)}else{e.match(s)||(e="on"+e);c=document.createEventObject(i);this.fireEvent(e,c)}},p=function(e,s,o){e.elem.css("display","none");var n=document.elementFromPoint(s.clientX,s.clientY);e.elem.css("display","block");var a=t(n),p=a.css("cursor");e.elem.css("cursor","auto"!==p?p:"default");if(!i||i.get(0)!=n){if(i){c.call(i.get(0),"mouseleave",s.originalEvent);c.call(i.get(0),"mouseout",s.originalEvent)}c.call(n,"mouseenter",s.originalEvent);c.call(n,"mouseover",s.originalEvent)}c.call(n,o,s.originalEvent);i=a};e.prototype.options.nonblock={nonblock:!1,nonblock_opacity:.2};e.prototype.modules.nonblock={myOptions:null,init:function(t,e){var s=this;this.myOptions=e;t.elem.on({mouseenter:function(e){s.myOptions.nonblock&&e.stopPropagation();s.myOptions.nonblock&&t.elem.stop().animate({opacity:s.myOptions.nonblock_opacity},"fast")},mouseleave:function(e){s.myOptions.nonblock&&e.stopPropagation();i=null;t.elem.css("cursor","auto");s.myOptions.nonblock&&"out"!==t.animating&&t.elem.stop().animate({opacity:t.options.opacity},"fast")},mouseover:function(t){s.myOptions.nonblock&&t.stopPropagation()},mouseout:function(t){s.myOptions.nonblock&&t.stopPropagation()},mousemove:function(e){if(s.myOptions.nonblock){e.stopPropagation();p(t,e,"onmousemove")}},mousedown:function(e){if(s.myOptions.nonblock){e.stopPropagation();e.preventDefault();p(t,e,"onmousedown")}},mouseup:function(e){if(s.myOptions.nonblock){e.stopPropagation();e.preventDefault();p(t,e,"onmouseup")}},click:function(e){if(s.myOptions.nonblock){e.stopPropagation();p(t,e,"onclick")}},dblclick:function(e){if(s.myOptions.nonblock){e.stopPropagation();p(t,e,"ondblclick")}}})},update:function(t,e){this.myOptions=e}}});!function(t){"function"==typeof define&&define.amd?define("pnotify.desktop",["jquery","pnotify"],t):t(jQuery,PNotify)}(function(t,e){var i,s=function(t,e){s="Notification"in window?function(t,e){return new Notification(t,e)}:"mozNotification"in navigator?function(t,e){return navigator.mozNotification.createNotification(t,e.body,e.icon).show()}:"webkitNotifications"in window?function(t,e){return window.webkitNotifications.createNotification(e.icon,t,e.body)}:function(t,e){return null};return s(t,e)};e.prototype.options.desktop={desktop:!1,icon:null,tag:null};e.prototype.modules.desktop={tag:null,icon:null,genNotice:function(t,e){null===e.icon?this.icon="http://sciactive.com/pnotify/includes/desktop/"+t.options.type+".png":e.icon===!1?this.icon=null:this.icon=e.icon;(null===this.tag||null!==e.tag)&&(this.tag=null===e.tag?"PNotify-"+Math.round(1e6*Math.random()):e.tag);t.desktop=s(t.options.title,{icon:this.icon,body:t.options.text,tag:this.tag});"close"in t.desktop||(t.desktop.close=function(){t.desktop.cancel()});t.desktop.onclick=function(){t.elem.trigger("click")};t.desktop.onclose=function(){"closing"!==t.state&&"closed"!==t.state&&t.remove()}},init:function(t,s){if(s.desktop){i=e.desktop.checkPermission();0==i&&this.genNotice(t,s)}},update:function(t,e,s){0==i&&e.desktop&&this.genNotice(t,e)},beforeOpen:function(t,e){0==i&&e.desktop&&t.elem.css({left:"-10000px",display:"none"})},afterOpen:function(t,e){if(0==i&&e.desktop){t.elem.css({left:"-10000px",display:"none"});"show"in t.desktop&&t.desktop.show()}},beforeClose:function(t,e){0==i&&e.desktop&&t.elem.css({left:"-10000px",display:"none"})},afterClose:function(t,e){if(0==i&&e.desktop){t.elem.css({left:"-10000px",display:"none"});t.desktop.close()}}};e.desktop={permission:function(){"undefined"!=typeof Notification&&"requestPermission"in Notification?Notification.requestPermission():"webkitNotifications"in window&&window.webkitNotifications.requestPermission()},checkPermission:function(){return"undefined"!=typeof Notification&&"permission"in Notification?"granted"==Notification.permission?0:1:"webkitNotifications"in window?window.webkitNotifications.checkPermission():1}};i=e.desktop.checkPermission()});!function(t){"function"==typeof define&&define.amd?define("pnotify.callbacks",["jquery","pnotify"],t):t(jQuery,PNotify)}(function(t,e){var i=e.prototype.init,s=e.prototype.open,o=e.prototype.remove;e.prototype.init=function(){this.options.before_init&&this.options.before_init(this.options);i.apply(this,arguments);this.options.after_init&&this.options.after_init(this)};e.prototype.open=function(){var t;this.options.before_open&&(t=this.options.before_open(this));if(t!==!1){s.apply(this,arguments);this.options.after_open&&this.options.after_open(this)}};e.prototype.remove=function(t){var e;this.options.before_close&&(e=this.options.before_close(this,t));if(e!==!1){o.apply(this,arguments);this.options.after_close&&this.options.after_close(this,t)}}});define("app/notification",["jquery","app/init","pnotify","pnotify.nonblock","pnotify.desktop","pnotify.callbacks"],function(t,e,i){"use strict";var s={title:"",text:"",type:"",icon:!1,opacity:.8,styling:"fontawesome",animate_speed:200,position_animate_speed:100,hide:!0,delay:5e3,mouse_reset:!0,shadow:!0,addclass:"stack-bottomright",width:"250px",animation:{effect_in:"fade",options_in:{easing:"linear"},effect_out:"fade",options_out:{easing:"linear"}},nonblock:{nonblock:!0,nonblock_opacity:.2},desktop:{desktop:!1,icon:e.path.img+"notifications/logo.png"}},o={bottomRight:{stack:{dir1:"up",dir2:"left",firstpos1:30,firstpos2:10,spacing1:5,spacing2:5,push:"bottom"},addclass:"stack-bottomright",width:"250px",opacity:.8},barTop:{stack:{dir1:"down",dir2:"right",push:"top",spacing1:0,spacing2:0},addclass:"stack-bar-top",width:"80%",opacity:1},barBottom:{stack:{dir1:"up",dir2:"right",firstpos1:30,spacing1:0,spacing2:0},addclass:"stack-bar-bottom",width:"100%",opacity:1}},n=function(e,n){e=t.extend({},s,e);if(n&&n.desktop===!0){i.desktop.permission();e.delay=1e4;e.desktop.desktop=!0;a(e.title)}else{e.delay=5e3;e.desktop.desktop=!1}if(n&&n.stack){e.stack=o[n.stack].stack;e.addclass=o[n.stack].addclass;e.width=o[n.stack].width;e.opacity=o[n.stack].opacity}else{e.stack=o.bottomRight.stack;e.addclass=o.bottomRight.addclass;e.opacity=o.bottomRight.opacity}switch(e.type){case"info":e.icon="fa fa-info fa-fw fa-lg";break;case"success":e.icon="fa fa-check fa-fw fa-lg";break;case"warning":e.icon="fa fa-exclamation-triangle fa-fw fa-lg";break;case"error":e.icon="fa fa-close fa-fw fa-lg";break;case"lock":e.icon="fa fa-lock fa-fw fa-lg";e.type="success";break;case"unlock":e.icon="fa fa-unlock fa-fw fa-lg";e.type="info";break;default:e.icon=!1}new i(e)},a=function(t){var e=function(t){var e,i=document.title,s=function(){document.title=document.title===t?i:t},o=function(){clearInterval(e);document.title=i;window.onmousemove=null;e=null};return function(){if(!e){e=setInterval(s,1e3);window.onmousemove=o}}}(t);e()};return{showNotify:n,startTabBlink:a}});
//# sourceMappingURL=notification.js.map