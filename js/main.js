$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var t=window.navigator.userAgent,e=(t.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}});function a(){return(t=navigator.userAgent).indexOf("MSIE ")>-1||t.indexOf("Trident/")>-1}function s(t,a){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),e.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+t),""!=a&&null!=a&&$(".popup-"+t+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+a+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+t).fadeIn(300).delay(300).addClass("active"),$(".popup-"+t).find(".slick-slider").length>0&&$(".popup-"+t).find(".slick-slider").slick("setPosition")}function r(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(e.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))}),200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function i(t){if(t.addClass("err"),t.parent().addClass("err"),t.parent().find(".form__error").remove(),t.hasClass("email")){var e="";null!=(e=(""==t.val()||(t.val(),t.attr("data-value")),t.data("error")))&&t.parent().append('<div class="form__error">'+e+"</div>")}else null!=t.data("error")&&0==t.parent().find(".form__error").length&&t.parent().append('<div class="form__error">'+t.data("error")+"</div>");t.parents(".select-block").length>0&&(t.parents(".select-block").parent().addClass("err"),t.parents(".select-block").find(".select").addClass("err"))}function n(t){t.removeClass("err"),t.parent().removeClass("err"),t.parent().find(".form__error").remove(),t.parents(".select-block").length>0&&(t.parents(".select-block").parent().removeClass("err"),t.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function o(t){""==t.val()&&(t.inputmask("remove"),t.val(t.attr("data-value")),t.removeClass("focus"),t.parent().removeClass("focus"))}if(a()&&$("body").addClass("ie"),e.any()&&$("body").addClass("touch"),$(".pl").click((function(t){return s($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(t){return r(),!1})),$(".popup").click((function(t){if(!$(t.target).is(".popup>.popup-table>.cell *")||$(t.target).is(".popup-close")||$(t.target).is(".popup__close"))return r(),!1})),$(document).on("keydown",(function(t){27==t.which&&r()})),$("input,textarea").focus((function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),n($(this))})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))}))})),$(".form-input__viewpass").click((function(t){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")})),$.each($("input.phone"),(function(t,e){$(this).attr("type","tel"),$(this).focus((function(){$(this).inputmask("+7(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){o($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.phone").focusout((function(t){o($(this))})),$.each($("input.num"),(function(t,e){$(this).focus((function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){o($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.num").focusout((function(t){o($(this))})),$("form button[type=submit]").click((function(){var t=0,e=$(this).parents("form"),a=e.data("ms");return $.each(e.find(".req"),(function(e,a){t+=function(t){var e=0,a=t.parents("form");if("email"==t.attr("name")||t.hasClass("email")){if(t.val()!=t.attr("data-value")){var s=t.val().replace(" ","");t.val(s)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(t.val())&&t.val()!=t.attr("data-value")?n(t):(e++,i(t))}else""==t.val()||t.val()==t.attr("data-value")?(e++,i(t)):n(t);"checkbox"==t.attr("type")&&(1==t.prop("checked")?t.removeClass("err").parent().removeClass("err"):(e++,t.addClass("err").parent().addClass("err")));t.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(t.val())||(e++,i(t)));t.hasClass("pass-2")&&(a.find(".pass-1").val()!=a.find(".pass-2").val()?i(t):n(t));return e}($(this))})),0==t&&(function(t){t.find(".form__generalerror").hide().html("")}(e),null!=a&&""!=a?(function(t){$(".popup").hide(),s("message."+t,"")}(a),!1):void 0)})),(e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}}).any(),location.hash){var l=location.hash.replace("#","");$(".popup-"+l).length>0?s(l):$("div."+l).length>0&&$("body,html").animate({scrollTop:$("div."+l).offset().top},500,(function(){}))}$(".wrapper").addClass("loaded");if(e.iOS());!function(){if(a()){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&null!=e[t].querySelector("img").getAttribute("src")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}}()})),$(".slider").length>0&&$(".slider").slick({dots:!0,arrows:!1,slidesToShow:3,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:478,settings:{slidesToShow:1}}]});