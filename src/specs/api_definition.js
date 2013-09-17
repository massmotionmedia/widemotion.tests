
function waitAndTestPlayerReady(){
	waits( 1000 );
	setTimeout(	function() { if( ! eventToTest.PLAYER_READY ) waitAndTestPlayerReady();	}, 
				750 );	
}

var eventToTest = { "START" : false , "PLAY" : false , "PAUSE" : false , "END" : false , "PLAYER_READY" : false, "NETWORK_UPDATED" : false , "STREAM_ERROR":false } 
//"CONTROLLER_READY" : false

		
describe("Controller is defined ?", function() {

	it("mmm_ACCOUNTNAME is defined ", function() {
		runs(function() {
			
			expect(mmm_mmm).toBeDefined();
			
			window.mmm_ctrl = mmm_mmm;

			for(var i in mmm_ctrlmanager.allControllers){
				if(i.indexOf("embed_ctrl")!=-1){//l'embed est généré avec un id random
					window.mmm_ctrl = window[i];
				}
			}

			//dispatché trop tot pour pouvoir le tester ?
			//window.mmm_ctrl.addEventListener("CONTROLLER_READY", function() { eventToTest.CONTROLLER_READY = true; });

			window.mmm_ctrl.addEventListener("NETWORK_UPDATED", function() { eventToTest.NETWORK_UPDATED = true; });
			
			window.mmm_ctrl.addEventListener("START",	function() { eventToTest.START = true; 	});
			window.mmm_ctrl.addEventListener("PLAY", 	function() { eventToTest.PLAY = true; 	});
			window.mmm_ctrl.addEventListener("PAUSE", 	function() { eventToTest.PAUSE = true; 	});
			window.mmm_ctrl.addEventListener("END", 	function() { eventToTest.END = true; 	});

			window.mmm_ctrl.addEventListener( (isMobile())? "HTML5_PLAYER_READY" :  "FLASH_PLAYER_READY", function() { eventToTest.PLAYER_READY = true; });
			
			
		});
	});
	
	(window.isEmbed)? it : xit ("embed_ctrl_RANDOM is defined (crée via new mmmController)", function() {
		runs(function() {
			expect(window.mmm_ctrl).toBeDefined();			
		});
	});
	
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// API DEFINE OR NOT DEFINE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("API methode ? ", function() {

	it("play est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.play).toBeDefined();
		});
	});
	
	it("pause est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.pause).toBeDefined();
		});
	});
	
	it("playPause est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.playPause).toBeDefined();
		});
	});
	
	it("replay est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.replay).toBeDefined();
		});
	});
	
	it("rewind est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.rewind).toBeDefined();
		});
	});
	
	it("seek est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.seek).toBeDefined();
		});
	});
	
	it("mute est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.mute).toBeDefined();
		});
	});
	
	it("soundMute est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.soundMute).toBeDefined();
		});
	});
	
	it("volume est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.volume).toBeDefined();
		});
	});
	
	it("getDuration est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.getDuration).toBeDefined();
		});
	});

	it("getCurrentTime est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.getCurrentTime).toBeDefined();
		});
	});
	
	it("isPlaying est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.isPlaying).toBeDefined();
		});
	});
	
	it("changeVideo est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.changeVideo).toBeDefined();
		});
	});
	
	it("close est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.close).toBeDefined();
		});
	});
	
	it("getMediaPlayer est définie", function() {
		runs(function() {
			expect(window.mmm_ctrl.getMediaPlayer).toBeDefined();
		});
	});
	
	it("isFullyLoaded est définie", function() {
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

		alert("eventToTest.PLAYER_READY " + eventToTest.PLAYER_READY )

		if(!eventToTest.PLAYER_READY ){
			waitAndTestPlayerReady();
		}

		

	});


	
});
		
