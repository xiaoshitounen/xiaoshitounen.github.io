$(document).ready(function(){function s(){$(o+" "+t).removeClass(t.substring(1))}var o,e,t;o=".post-toc",e=$(o),t=".active-current",e.on("activate.bs.scrollspy",function(){var t=$(o+" .active").last();s(),t.addClass("active-current"),e.scrollTop(t.offset().top-e.offset().top+e.scrollTop()-e.height()/2)}).on("clear.bs.scrollspy",s),$("body").scrollspy({target:o})}),$(document).ready(function(){var e=$("html"),i=200,l=$.isFunction(e.velocity);$(".sidebar-nav li").on("click",function(){var t,s,o=$(this),e="sidebar-nav-active",a="sidebar-panel-active";o.hasClass(e)||(t=$("."+a),s=$("."+o.data("target")),l?t.velocity("transition.slideUpOut",i,function(){s.velocity("stop").velocity("transition.slideDownIn",i).addClass(a)}):t.animate({opacity:0},i,function(){t.hide(),s.stop().css({opacity:0,display:"block"}).animate({opacity:1},i,function(){t.removeClass(a),s.addClass(a)})}),o.siblings().removeClass(e),o.addClass(e))}),$(".post-toc a").on("click",function(t){t.preventDefault();var s=NexT.utils.escapeSelector(this.getAttribute("href")),o=$(s).offset().top;l?e.velocity("stop").velocity("scroll",{offset:o+"px",mobileHA:!1}):$("html, body").stop().animate({scrollTop:o},500)});var t=$(".post-toc-content"),s="post"===CONFIG.sidebar.display||"always"===CONFIG.sidebar.display,o=0<t.length&&0<t.html().trim().length;s&&o&&(CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar())});