
//ce fichier doit être est chargé avant les specs js,
// sans quoi, les méthodeé et variables globales ne serai pas accessible dans les specs js

//variables globales pour prendre des décisions sur l'exécution de telle ou telle specs :
window.isEmbed = true;

function isMobile(){
	return screen.width < 500 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i);
}