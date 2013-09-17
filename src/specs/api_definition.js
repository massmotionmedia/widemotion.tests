
var eventToTest = { "START" : false , "PLAY" : false , "PAUSE" : false , "END" : false , "PLAYER_READY" : false, "NETWORK_UPDATED" : false , "STREAM_ERROR":false } 
//"CONTROLLER_READY" : false

describe("Le controller est t'il accessible ?", function() {

	it("Le controller à été chargé et une instance globale existe (eg. mmm_ACCOUNTNAME) ", function() {
		runs(function() {
			expect(mmm_mmm).toBeDefined();
			window.mmm_ctrl = mmm_mmm;
			for(var i in mmm_ctrlmanager.allControllers){
				if(i.indexOf("embed_ctrl")!=-1){//l'embed est généré avec un id random
					window.mmm_ctrl = window[i];
				}
			}
			
		});
	});

});
