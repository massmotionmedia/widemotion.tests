
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
	
	it("Une instance spécifique du controller existe (eg. crée via new mmmController )", function() {
		runs(function() {
			
			//dispatché trop tot pour pouvoir le tester ?
			//window.mmm_ctrl.addEventListener("CONTROLLER_READY", function() { eventToTest.CONTROLLER_READY = true; });
			
			window.mmm_ctrl.addEventListener("NETWORK_UPDATED", function() { eventToTest.NETWORK_UPDATED = true; });
			
			window.mmm_ctrl.addEventListener("START",	function() { eventToTest.START = true; 	});
			window.mmm_ctrl.addEventListener("PLAY", 	function() { eventToTest.PLAY = true; 	});
			window.mmm_ctrl.addEventListener("PAUSE", 	function() { eventToTest.PAUSE = true; 	});
			window.mmm_ctrl.addEventListener("END", 	function() { eventToTest.END = true; 	});
			


			if(mmm_ctrlmanager.device=="computer"){
				window.mmm_ctrl.addEventListener("FLASH_PLAYER_READY", function() { eventToTest.PLAYER_READY = true; });
			}else{
				window.mmm_ctrl.addEventListener("HTML5_PLAYER_READY", function() { eventToTest.PLAYER_READY = true; });
			}
			
			expect(window.mmm_ctrl).toBeDefined();			
		});
	});
	
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// API DEFINE OR NOT DEFINE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("Les méthodes de l'API (décrites dans la doc) sont elles définie ? ", function() {

	it("mmm_ACCOUNTNAME.play est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.play).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.pause est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.pause).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.playPause est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.playPause).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.replay est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.replay).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.rewind est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.rewind).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.seek est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.seek).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.mute est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.mute).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.soundMute est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.soundMute).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.volume est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.volume).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.getDuration est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.getDuration).toBeDefined();
		});
	});

	it("mmm_ACCOUNTNAME.getCurrentTime est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.getCurrentTime).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.isPlaying est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.isPlaying).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.changeVideo est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.changeVideo).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.close est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.close).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.getMediaPlayer est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.getMediaPlayer).toBeDefined();
		});
	});
	
	it("mmm_ACCOUNTNAME.isFullyLoaded est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.isFullyLoaded).toBeDefined();
		});
	});
	
	it("mmm_ctrlmanager.testNetwork est définie", function() {
		runs(function() {
			expect(mmm_ctrlmanager.testNetwork).toBeDefined();
		});
	});
	
				
	it("mmm_ctrlmanager.haveHTML5fullscreen est définie", function() {
		runs(function() {
			expect(mmm_ctrlmanager.haveHTML5fullscreen).toBeDefined();
		});
	});
	
	it("mmm_ctrlmanager.device est définie", function() {
		runs(function() {
			expect(mmm_ctrlmanager.device).toBeDefined();
		});
	});
	
	it("mmm_ctrlmanager.currentDevice est définie", function() {
		runs(function() {
			expect(mmm_ctrlmanager.currentDevice).toBeDefined();
		});
	});


	
});
		
