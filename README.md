###Notifications in AngularJS

```
 bower install notifications-angular
```

* HTML HEAD
```
<link rel="stylesheet" href="[path_angular-notifications]">

```

* HTML BODY
```
<div id="notifications">
<script src="[path_angular]"></script>
<script src="[path_angular-notifications]"></script>

```
* JS
```
var app = angular.module("app", ["angularNotifications"]);

app.controller("IndexController", function($scope, $notification){
  $notification.set({image: true, removable: false});//ejemplo de setear algunas opciones
  $notification.create("hola", "Esto es una prueba");
});

```

###SETTINGS
```
settings = {
        position:"top-right" // values: "top-right", "top-left", "bottom-left", "bottom-right"
        backgroundColor : "bg-color", // values : bg-black, bg-white
        color: "color", //text color values: black, white
        animation: "slide-in-right", //animations availables: "slide-in-right", "slide-in-left", "scale"
        image: false, // boolean to add a image
        removable: true, // keep false if you dont want to remove the notification
        srcImage: "http://api.ning.com/files/Dqlf20RAm4vk*NYNkBsByZjS7xZp4x2ZwDwqH2N9NMx161P-qV*2nJxYE2RbF7HJK5BUtGOxGL2zEhtyKLO2N7Yd2wV2uum7/13z4l881.gif", // if image property is true, you need to set the image´s URL.
        time: 3000, // if removable property is true, this is the time to keep the notification in the screen
        canUrl: false, // set true if you want to create the notification as a link
        url: "http://www.google.com" // if the value of canUrl is true, you need to set a URL.
}
