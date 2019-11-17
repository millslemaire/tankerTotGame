/*global Phaser*/
export default class Section3End extends Phaser.Scene {
  constructor () {
    super('Section3End');
  }

  init (data) {
    // Initialization code goes here
    this.currentLevel = this.registry.get('level')
    this.shotCount = data.shotCount;
    this.threeStar = data.threeStar;
    this.twoStar = data.twoStar;
    this.oneStar = data.oneStar;
    this.backgroundX = data.backgroundX;
    this.buildingsfX = data.buildingsfX,
    this.buildingsbX = data.buildingsbX,
    this.tankerX = data.tankerX;
  }

  preload () {
    // Preload assets

    /*this.load.image('background','./assets/Environment/background.png');
    this.load.image('buildingsb','./assets/Environment/backgroundbuildings.png');
    this.load.image('buildingsf','./assets/Environment/foregroundbuildings.png');
    this.load.image('hwall', './assets/Environment/horizontalWall.png');
    this.load.image('vwall', './assets/Environment/verticalWall.png');
    this.load.image('woodPlatform', './assets/smallWoodPlat.png');
    this.load.image('tankertot', './assets/TankerTot/tankerTot.png');
    this.load.image('winDog','./assets/UI/totGuitar.png');
    this.load.image('loseDog', './assets/UI/totSad.png');
    this.load.image('cannon', './assets/TankerTot/cannon.png');
    this.load.image('emptystar','./assets/UI/emptystar.png');
    this.load.image('fullstar','./assets/UI/fullstar.png');
    this.load.spritesheet('restart','./assets/UI/restartlevelbutton.png', {
      frameHeight: 100,
      frameWidth: 200
    });
    this.load.spritesheet('next','./assets/UI/nextlevelbutton.png', {
      frameHeight: 100,
      frameWidth: 200
    });
    this.load.spritesheet('levelselect','./assets/UI/levelselectbutton.png', {
      frameHeight: 100,
      frameWidth: 200
    });*/

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
    this.advance = false;
  }

  create (data) {
    //Create the scene

    //Add background
    this.background = this.add.tileSprite(this.centerX,this.centerY,0,0, 'background');
    this.buildingsb = this.add.tileSprite(this.centerX,this.centerY,0,0, 'buildingsb');
    this.buildingsf = this.add.tileSprite(this.centerX,this.centerY,0,0, 'buildingsf');
    this.buildingsb.tilePositionX = this.buildingsbX;
    this.buildingsf.tilePositionX = this.buildingsfX;
    this.player = this.add.sprite(this.tankerX, 536, 'tankertot');
    this.cannon = this.add.sprite(this.tankerX, 536, 'cannon');
    this.add.image(16,16, 'vwall', null);
    this.add.image(784,16, 'vwall', null);
    this.add.image(16,16, 'hwall', null);
    this.add.image(16,584, 'ground', null);
    //this.platforms = this.physics.add.staticGroup();
    //this.platforms.create(400, 500, "woodPlatform").setScale(1.5).refreshBody();
    //this.platforms.create(400, 200, "woodPlatform").setScale(1.5).refreshBody();
    //this.platforms.create(400, 350, "woodPlatform").setScale(1.5).refreshBody
    if(this.registry.get('Level'+this.currentLevel+'Score') == 3){
      this.add.image(this.centerX - 9, this.centerY - 83, 'winDog').setScale(1.7)
      var star1 = this.add.image(this.centerX - 125, this.centerY, 'fullstar');
      star1.setScale(0.6);
      var star2 = this.add.image(this.centerX, this.centerY, 'fullstar');
      star2.setScale(0.6);
      var star3 = this.add.image(this.centerX + 125, this.centerY, 'fullstar');
      star3.setScale(0.6);
      this.advance = true;
      this.registry.set('Level'+this.currentLevel+'Score', 3)


    } else if(this.registry.get('Level'+this.currentLevel+'Score') == 2){
      this.add.image(this.centerX - 9, this.centerY - 83, 'winDog').setScale(1.7)
      var star1 = this.add.image(this.centerX - 125, this.centerY, 'fullstar');
      star1.setScale(0.6);
      var star2 = this.add.image(this.centerX, this.centerY, 'fullstar');
      star2.setScale(0.6);
      var star3 = this.add.image(this.centerX + 125, this.centerY, 'emptystar');
      star3.setScale(0.6);
      this.advance = true;
      if(this.registry.get('Level'+this.currentLevel+'Score') < 2){
        this.registry.set('Level'+this.currentLevel+'Score', 2)
      }


    } else if(this.registry.get('Level'+this.currentLevel+'Score') == 1){
      this.add.image(this.centerX - 9, this.centerY - 83, 'winDog').setScale(1.7)
      var star1 = this.add.image(this.centerX - 125, this.centerY, 'fullstar');
      star1.setScale(0.6);
      var star2 = this.add.image(this.centerX, this.centerY, 'emptystar');
      star2.setScale(0.6);
      var star3 = this.add.image(this.centerX + 125, this.centerY, 'emptystar');
      star3.setScale(0.6);
      this.advance = true;
      if(this.registry.get('Level'+this.currentLevel+'Score') < 2){
        this.registry.set('Level'+this.currentLevel+'Score', 2)
      }


    } else if(this.registry.get('Level'+this.currentLevel+'Score') == 0 &&
    this.registry.get('Level'+this.currentLevel+'HighScore') > 0) {
      this.add.image(this.centerX - 9, this.centerY - 140, 'loseDog').setScale(1.7)
      var star1 = this.add.image(this.centerX - 125, this.centerY, 'emptystar');
      star1.setScale(0.6);
      var star2 = this.add.image(this.centerX, this.centerY, 'emptystar');
      star2.setScale(0.6);
      var star3 = this.add.image(this.centerX + 125, this.centerY, 'emptystar');
      star3.setScale(0.6);
      this.advance = true;
      if(this.registry.get('Level'+this.currentLevel+'Score') < 0){
        this.registry.set('Level'+this.currentLevel+'Score', 0)
      }
    } else if(this.registry.get('Level'+this.currentLevel+'Score') == 0){
      this.add.image(this.centerX - 9, this.centerY - 140, 'loseDog').setScale(1.7)
      var star1 = this.add.image(this.centerX - 125, this.centerY, 'emptystar');
      star1.setScale(0.6);
      var star2 = this.add.image(this.centerX, this.centerY, 'emptystar');
      star2.setScale(0.6);
      var star3 = this.add.image(this.centerX + 125, this.centerY, 'emptystar');
      star3.setScale(0.6);
      this.advance = false;
      if(this.registry.get('Level'+this.currentLevel+'Score') < 0){
        this.registry.set('Level'+this.currentLevel+'Score', 0)
      }

    }

    //################################################################
    //var nextButton = this.add.sprite(this.centerX + 150, this.centerY + 150, 'next', 0);
    //nextButton.setScale(0.75);
    if(this.advance){
      var nextButton = this.add.sprite(this.centerX + 150, this.centerY + 150, 'next', 0);
      nextButton.setScale(0.75);
      nextButton.setInteractive();
      nextButton.on("pointerover", function(){
        this.setFrame(1);
      });
      nextButton.on("pointerout", function(){
        this.setFrame(0);
      });
      nextButton.on("pointerup", function(){
        if (this.currentLevel < 9){
          this.scene.start("Level"+(this.currentLevel+1));
        }else{
          this.scene.start('Title');
        }
      }, this);
    }
    var menuButton = this.add.sprite(this.centerX , this.centerY + 220, 'levelselect', 0);
    menuButton.setScale(0.75);
    //if(this.advance){
      menuButton.setInteractive();
      menuButton.on("pointerover", function(){
        this.setFrame(1);
      });
      menuButton.on("pointerout", function(){
        this.setFrame(0);
      });
      menuButton.on("pointerup", function(){
        this.scene.start("LevelSelect");
      }, this);
    //}

    var restartButton = this.add.sprite(this.centerX - 150, this.centerY + 150, 'restart',0);
    restartButton.setInteractive();
    restartButton.setScale(0.75);
    restartButton.on("pointerover", function(){
      this.setFrame(1);
    });
    restartButton.on("pointerout", function(){
      this.setFrame(0);
    });
    restartButton.on("pointerup", function(){
        this.scene.start("Level"+this.currentLevel)
    }, this);
    //################################################################
  }

  update (time, delta) {
    // Update the scene


  }
}