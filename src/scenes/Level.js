
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(5647, 533, 11300, 1080, "background");

		// gameContainer
		const gameContainer = this.add.container(0, 0);

		// platform
		const platform = this.add.image(3, 748, "platform");
		platform.scaleX = 4;
		platform.setOrigin(0, 0.5);
		gameContainer.add(platform);

		// plane1
		const plane1 = this.add.image(800, 670, "plane1");
		plane1.scaleX = 0.5;
		plane1.scaleY = 0.5;
		plane1.setOrigin(0.5, 0);
		gameContainer.add(plane1);

		// plane2
		const plane2 = this.add.image(1600, 729, "plane2");
		plane2.scaleX = 0.5;
		plane2.scaleY = 0.5;
		plane2.setOrigin(0.5, 0);
		gameContainer.add(plane2);

		// plane3
		const plane3 = this.add.image(1200, 697, "plane3");
		plane3.scaleX = 0.5;
		plane3.scaleY = 0.5;
		plane3.setOrigin(0.5, 0);
		gameContainer.add(plane3);

		// plane
		const plane = this.add.image(2000, 728, "plane1");
		plane.scaleX = 0.5;
		plane.scaleY = 0.5;
		plane.setOrigin(0.5, 0);
		gameContainer.add(plane);

		// plane_1
		const plane_1 = this.add.image(2400, 771, "plane2");
		plane_1.scaleX = 0.5;
		plane_1.scaleY = 0.5;
		plane_1.setOrigin(0.5, 0);
		gameContainer.add(plane_1);

		// plane_2
		const plane_2 = this.add.image(2800, 749, "plane3");
		plane_2.scaleX = 0.5;
		plane_2.scaleY = 0.5;
		plane_2.setOrigin(0.5, 0);
		gameContainer.add(plane_2);

		// back
		const back = this.add.image(845, 113, "back");
		gameContainer.add(back);

		// progressBarContainer
		const progressBarContainer = this.add.container(0, 0);
		gameContainer.add(progressBarContainer);

		// fill
		const fill = this.add.image(125, 112, "fill");
		fill.setOrigin(0, 0.5);
		fill.visible = false;
		progressBarContainer.add(fill);

		// timer_
		const timer_ = this.add.text(1281, 96, "", {});
		timer_.scaleX = 2;
		timer_.scaleY = 2;
		timer_.text = "45";

		// h1
		const h1 = this.add.image(1372, 116, "1");
		h1.scaleX = 0.5;
		h1.scaleY = 0.5;

		// h2
		const h2 = this.add.image(1444, 116, "1");
		h2.scaleX = 0.5;
		h2.scaleY = 0.5;

		// h3
		const h3 = this.add.image(1502, 116, "1");
		h3.scaleX = 0.5;
		h3.scaleY = 0.5;

		// on
		this.add.image(1832, 111, "on");

		// off
		const off = this.add.image(1832, 111, "off");
		off.visible = false;

		// lostLife
		const lostLife = this.add.image(472, 389, "lostLife");
		lostLife.visible = false;

		this.background = background;
		this.gameContainer = gameContainer;
		this.progressBarContainer = progressBarContainer;
		this.fill = fill;
		this.timer_ = timer_;
		this.h1 = h1;
		this.h2 = h2;
		this.h3 = h3;
		this.lostLife = lostLife;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.Container} */
	gameContainer;
	/** @type {Phaser.GameObjects.Container} */
	progressBarContainer;
	/** @type {Phaser.GameObjects.Image} */
	fill;
	/** @type {Phaser.GameObjects.Text} */
	timer_;
	/** @type {Phaser.GameObjects.Image} */
	h1;
	/** @type {Phaser.GameObjects.Image} */
	h2;
	/** @type {Phaser.GameObjects.Image} */
	h3;
	/** @type {Phaser.GameObjects.Image} */
	lostLife;

	/* START-USER-CODE */

	// Write more your code here

	setTimer() {

		//console.log(this.t)
		if (this.t > 0) {
			this.timer_.setText(this.t.toString());

			this.fill.x += 10.5555555556;
			// console.log(this.fill.x)

			const shape = this.make.graphics().fillRect(635, 92, 497, 550);
			this.fill.setVisible(true)
			const mask = shape.createGeometryMask();
			this.progressBarContainer.setMask(mask);
			this.t--;
		}
		else if (this.life.length == 0) {

		}

	}

	playerLife=["h1","h2","h3"];
	init(){
		this.playerLife=this.playerLife;
		console.log("init",JSON.stringify(this.playerLife))
	}


	create() {
		this.t = 45;
		this.editorCreate();
		this.fill.width = 0;
		this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
		this.interval = setInterval(() => { this.setTimer() }, 1000)
		this.player = this.physics.add.sprite(90, 650, "Character");
		this.player.scaleX = 0.2;
		this.player.scaleY = 0.2;
		this.player.body.setSize(350, 60);
		this.player.body.setOffset(250, 670);
		this.player.setGravityY(500);
		this.platformGroup = this.add.group();


		for(let i=0;i<this.playerLife.length;i++){
			const lifeheart="h"+(i+1);
			console.log(this.playerLife[i],this[this.playerLife[i]])
			this[lifeheart].setTexture(this[this.playerLife[i]].texture.key)
		}


		this.gameContainer.getAll().forEach((gameObj) => {
			// console.log(gameObj.type)
			if (gameObj.type == "Image") {
				//console.log(gameObj.texture.key)
				if (gameObj.texture.key == "plane1") {
					gameObj = this.physics.add.existing(gameObj, true);
					gameObj.body.setSize(275, 50);
					gameObj.body.setOffset(0, 42)
				}
				else if (gameObj.texture.key == "plane2") {
					gameObj = this.physics.add.existing(gameObj, true);
					gameObj.body.setSize(160, 40);
					gameObj.body.setOffset(0, 20);
				}
				else if (gameObj.texture.key == "plane3") {
					gameObj = this.physics.add.existing(gameObj, true);
					gameObj.body.setSize(255, 42);
					gameObj.body.setOffset(10, 40)
				}
				else if (gameObj.texture.key == "platform") {
					gameObj = this.physics.add.existing(gameObj, true);
					gameObj.body.setSize(485, 30);
					gameObj.body.setOffset(0, 1)
				}
				// console.log(gameObj.body.x)

			}
			else {
				gameObj = this.physics.add.existing(gameObj, true);
				// console.log("else :"+gameObj.texture.key)
			}
			this.platformGroup.add(gameObj)
		});


		this.physics.add.collider(this.platformGroup, this.player, () => {
			this.player.anims.play("runs", true)
		})
		this.input.on("pointerdown", this.jump, this);
	}

	jump() {
		if (this.player.body.touching.down) {
			// this.sound.play(this.sound.jumpSound)
			this.player.anims.play("jump", true);
			this.player.setVelocityY(-350);
		}
	}


	update() {
		// console.log("update")
		this.background.tilePositionX += 3;
		this.gameContainer.getAll().forEach((gameObj) => {
			// console.log(gameObj.type)
			if (gameObj.type != 'Container' && gameObj.texture.key != "fill" && gameObj.texture.key != "back") {
				gameObj.x -= 3
				gameObj.body.x -= 3;
			}

		});

		if (Phaser.Input.Keyboard.JustDown(this.up))
        {
            this.jump()
        }
		if (Phaser.Input.Keyboard.JustDown(this.down))
        {
            this.player.setGravityY(500);
        }

		if (this.player.y > this.game.scale.height && this.time != 0) {
			clearInterval(this.interval);
			var count=0;
			for(let i=0;i<this.playerLife.length;i++){
				if(this.playerLife[i]!="lostLife"){
					count++;
				}
			}
			console.log(count-1)
			if((count-1)!=0&&(!((count-1)<0))){
				count=3-count;
				this.playerLife[count]="lostLife";
				this.scene.restart("Level")
			}
			else{
				this.playerLife=["h1","h2","h3"];
				this.scene.stop("Level");
				this.scene.start("StartGame")
			}
			
		}



		this.gameContainer.getAll().forEach((gameObj) => {
			if (gameObj.type != 'Container' && gameObj.x < -200 && gameObj.texture.key != "platform" && gameObj.texture.key != "fill" && gameObj.texture.key != "back") {
				gameObj.x += 2440;
				gameObj.body.x += 2440;
			}
			if (gameObj.type != 'Container' && gameObj.texture.key != "fill" && gameObj.texture.key != "back") {
				gameObj.x -= 3;
				gameObj.body.x -= 3;
			}
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
