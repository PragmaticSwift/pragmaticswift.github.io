!function(e){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e(function(){var i=e(window),o=e("body");o.addClass("is-loading"),i.on("load",function(){window.setTimeout(function(){o.removeClass("is-loading")},100)}),skel.vars.touch&&o.addClass("is-touch");var n=e("form");n.find("textarea").each(function(){var i=e(this),o=e('<div class="textarea-wrapper"></div>');i.find('input[type="submit"]');i.wrap(o).attr("rows",1).css("overflow","hidden").css("resize","none").on("keydown",function(i){13==i.keyCode&&i.ctrlKey&&(i.preventDefault(),i.stopPropagation(),e(this).blur())}).on("blur focus",function(){i.val(e.trim(i.val()))}).on("input blur focus --init",function(){o.css("height",i.height()),i.css("height","auto").css("height",i.prop("scrollHeight")+"px")}).on("keyup",function(e){9==e.keyCode&&i.select()}).triggerHandler("--init"),("ie"==skel.vars.browser||skel.vars.mobile)&&i.css("max-height","10em").css("overflow-y","auto")}),n.placeholder(),skel.on("+medium -medium",function(){e.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)});var t=e("#menu");t.wrapInner('<div class="inner"></div>'),t._locked=!1,t._lock=function(){return!t._locked&&(t._locked=!0,window.setTimeout(function(){t._locked=!1},350),!0)},t._show=function(){t._lock()&&o.addClass("is-menu-visible")},t._hide=function(){t._lock()&&o.removeClass("is-menu-visible")},t._toggle=function(){t._lock()&&o.toggleClass("is-menu-visible")},t.appendTo(o).on("click",function(e){e.stopPropagation()}).on("click","a",function(i){var o=e(this).attr("href");i.preventDefault(),i.stopPropagation(),t._hide(),"#menu"!=o&&window.setTimeout(function(){window.location.href=o},350)}).append('<a class="close" href="#menu">Close</a>'),o.on("click",'a[href="#menu"]',function(e){e.stopPropagation(),e.preventDefault(),t._toggle()}).on("click",function(){t._hide()}).on("keydown",function(e){27==e.keyCode&&t._hide()})})}(jQuery);