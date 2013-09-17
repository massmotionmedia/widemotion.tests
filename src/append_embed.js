


function buildHtml(){

	if(window.console)console.log("append_embed.js : buildHtml " )

	var mainDiv 			= document.createElement('div');
	mainDiv.id 				= "main_div";

	mainDiv.style.width 	= "300px";
	mainDiv.style.height 	= "170px";

	document.body.appendChild(mainDiv);

	return mainDiv;

}

function appendPlayer(target,resource){
	
	if(window.console)console.log("append_embed.js : appendPlayer( " +target+","+ resource+" )" );

	var ctrlScript	 	= document.createElement('script');
	ctrlScript.type 	= 'text/javascript';
	ctrlScript.src 		= "http://webvideo.massmotionmedia.com/mmm/embed/embed.js?resource="+resource+"&autostart=true&autorewind=false&flash_bgcolor=#efefef";//&flash_skin=http://webvideo.massmotionmedia.com/mmm/doc2/demo/skin.swf
	target.appendChild(ctrlScript);
}

function isControllerReady(){

	if(window.console)console.log("append_embed.js : isControllerReady ");

	if( typeof(mmmController) != "undefined" && typeof(mmm_mmm) != "undefined" ){
		

		if(window.console)console.log("append_embed.js : init jasmine ? ");

		jasmine.getEnv().addReporter( new jasmine.TapReporter() );
		jasmine.getEnv().execute();	

	}else{
		setTimeout(function(){ isControllerReady(); },250);
	}
}

function init(){

	if(window.console)console.log("append_embed.js : init");
	appendPlayer( buildHtml() , "timescapes" );

	isControllerReady();

}

window[ addEventListener ? 'addEventListener' : 'attachEvent' ]( addEventListener ? 'load' : 'onload', init )