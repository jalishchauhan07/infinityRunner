
// You can write more code here

/* START OF COMPILED CODE */

class StartGame extends Phaser.Scene {

	constructor() {
		super("StartGame");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {
		console.log("Editor in StartGAME")
		// def_bg
		this.add.image(960, 540, "def_bg");

		// start_game
		const start_game = this.add.image(960, 790, "start-game");

		// off
		const off = this.add.image(1757, 293, "off");

		// on
		const on = this.add.image(1757, 292, "on");

		this.start_game = start_game;
		this.off = off;
		this.on = on;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	start_game;
	/** @type {Phaser.GameObjects.Image} */
	off;
	/** @type {Phaser.GameObjects.Image} */
	on;

	/* START-USER-CODE */

	// Write your code here
	
	create() {
		console.log("Start Create")
		this.playerLife=["h1","h2","h3"];
		// console.log(this.life)
		this.editorCreate();
		
		this.start_game.setInteractive().on("pointerdown",()=>{
			console.log("Click")
			this.scene.stop("StartGame");
			this.scene.start("Level",this.playerLife);
		});

		this.on.setInteractive().on("pointerdown",()=>{
			if(this.off.visible!=true){
				this.on.setVisible(false);
				this.off.setVisible(true);
			}
		});

		this.off.setInteractive().on("pointerdown",()=>{
			if(this.on.visible!=true){
				this.on.setVisible(true);
				this.off.setVisible(false);
			}
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
