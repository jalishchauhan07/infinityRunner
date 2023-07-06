class SoundManager{
    constructor(obj){
        this.sceneObj=obj;
        this.backgroundSound=this.sceneObj.sound.add("backgroundMusic");
        this.dieSound=this.sceneObj.sound.add("dieSound");
        this.jumpSound=this.sceneObj.sound.add("jumpSound");
    }

    play(key,repeat){
        key.play();
        key.loop=repeat;
        this.play=true
    }
    
    isplay(){
        return this.play;
    }

    stop(key){
        key.stop();
    }
}