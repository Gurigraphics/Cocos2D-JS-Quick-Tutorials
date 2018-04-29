// vars --------------------------------------------- //

Game = {};
Game.scenes = [];
Game.scenes[1] = {};
Game.layers = [];
Game.layers[1] = {}  
 
// res --------------------------------------------- //

Game.res = {
    HelloWorld_png : "HelloWorld.png"
};

Game.g_resources = []; 

for ( var i in Game.res ) {
    Game.g_resources.push( Game.res[i] );
}  
  
// layers --------------------------------------------- //

Game.layers[1].extend = cc.Layer.extend({
    init: function () {      
        this._super(); 
        var game = this;
        Game.layers[1].start( game );  
    } 
});    
 
Game.layers[1].start = function( game ){
 
  var size = cc.director.getWinSize(); 

  var label = cc.LabelTTF.create("Hello World", "Arial", 40);
  label.setPosition(size.width / 2, size.height / 2);
  game.addChild(label, 1);
  
}; 
  
// scenes --------------------------------------------- //

Game.scenes[1].extend = cc.Scene.extend({
     onEnter:function () {
         this._super();  
         var layer = new Game.layers[1].extend();
         layer.init();
         this.addChild( layer ); 
     }  
});

// start --------------------------------------------- //

cc.game.onStart = function(){
    cc.LoaderScene.preload( Game.g_resources, function () {
        cc.director.runScene(new Game.scenes[1].extend());
    }, this);  
};  
  
window.onload = function(){  
	cc.game.run("gameCanvas");   
}
  
