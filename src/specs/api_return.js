////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// API RETURN ?
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
waits( 1000 );

describe("Ces méthodes retournent t'elles la donnée escomptée ? ", function() {
	
	// pr laisser un peu de temps... quid du autostart 0 ?
	
	it("mmm_ACCOUNTNAME.getMediaPlayer() retourne un object", function() {
		runs(function() {
			expect( typeof(window.mmm_ctrl.getMediaPlayer() ) ).toBe("object");

			window.mmm_ctrl.play();

		});
	});


	it("mmm_ACCOUNTNAME.getDuration() retourne un number > 0  ( /!\\ autostart ) ", function() {

		runs(function() {
			expect( typeof(window.mmm_ctrl.getDuration() ) ).toBe("number");
			expect( window.mmm_ctrl.getDuration() ).toBeGreaterThan(0);
		});

	});
	
	(( window.isMobile() )? xit : it) ("mmm_ACCOUNTNAME.getCurrentTime() retourne un number > 0 ( /!\\ autostart )", function() {
		
		runs(function() {
			expect( typeof(window.mmm_ctrl.getCurrentTime() ) ).toBe("number");
			expect( window.mmm_ctrl.getCurrentTime() ).toBeGreaterThan(0);
		});
	});

	it("mmm_ctrlmanager.device retourne un device listé dans la doc (12 device à ce jours) ", function() {
		runs(function() {

			var deviceNameOk;

			switch(mmm_ctrlmanager.device){
				          
				case 'computer'			:
				case 'mobile'			:
				case 'android'			:
				case 'tablet'			:
				case 'iThings'			:
				case 'iPhone'			:
				case 'iPad'				:
				case 'blackberry'		:
				case 'blackberry_html5'	:
				case 'iPhone4'			:
				case 'iPhone3'			:
				case 'winPhone'			:
											deviceNameOk = true;
												break;

				default 				:  deviceNameOk = false;
			}

			expect(deviceNameOk).toBe(true);
		});
	});

	it("mmm_ACCOUNTNAME.isFullyLoaded() retourne vrai (car on à potentiellment assez attendu ? ) ", function() {
		
		runs(function() {
			expect( window.mmm_ctrl.isFullyLoaded() ).toBe(true);
		});
	});
	

});