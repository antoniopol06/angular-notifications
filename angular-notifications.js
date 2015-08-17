angular.module('angularNotifications', [])
  .factory('$notification', function() {
    var settings = {
        position: "top-right",
        backgroundColor : "bg-black",
        color: "white",
        animation: "slide-in-right",
        image: false,
        removable: true,
        srcImage: "http://api.ning.com/files/Dqlf20RAm4vk*NYNkBsByZjS7xZp4x2ZwDwqH2N9NMx161P-qV*2nJxYE2RbF7HJK5BUtGOxGL2zEhtyKLO2N7Yd2wV2uum7/13z4l881.gif",
        time: 3000,
        canUrl: false,
        url: "http://www.google.com",
      },
      area = document.getElementById("notifications");
    var set = function(newSettings){
      for (var property in newSettings){
        if (hasOwnProperty.call(newSettings, property)) {
          settings[property] = newSettings[property];
        }
      }
    };

    var create = function (author, msg) {
      var el = document.createElement('div'),
        template = "<a class='notification " + settings.animation + " " + settings.backgroundColor + " " + settings.color + "'";
      el.innerHTML = template;
      if(settings.canUrl){
        template = template + " href='" + settings.url + ">'";
      }else{
        template = template + ">";
      }
      if(settings.image){
        template = template + "<img class='img-notification' src='" + settings.srcImage + "'/><div class='inline-block'>";
      }else{
        template = template + "<div>";
      }

      template = template + "<div class='title-notification'>" + author + "</div><div>" + msg + "</div><aside class='close-notification'>X</aside></div></a>";
      area.innerHTML = template;
      area.className = settings.position;
      document.getElementsByClassName('close-notification')[0].addEventListener("click", function(){
        this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode)
      });
      if(settings.removable){
        removeNotification(el);
      }
    };

    var removeNotification = function (div) {
      setTimeout(function(){
           area.innerHTML = '';
      }, settings.time);
    };

    return{
      create: create,
      set: set
    };
  });
