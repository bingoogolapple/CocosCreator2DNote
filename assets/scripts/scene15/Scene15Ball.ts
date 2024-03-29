const { ccclass, property } = cc._decorator
import Scene15Game from "./Scene15Game"

@ccclass
export default class Scene15Ball extends cc.Component {
  @property(cc.SpriteAtlas)
  ballAtlas: cc.SpriteAtlas = null
  sprite: cc.Sprite = null
  typeCount: number = 2
  game: Scene15Game = null

  onLoad() {
    this.sprite = this.getComponent(cc.Sprite)
    this.game = cc.find("Canvas").getComponent("Scene15Game")
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
  }

  onTouchStart() {
    this.nextBall()
  }

  randomBall(typeCount: number) {
    let frames = this.ballAtlas.getSpriteFrames()
    if (typeCount > frames.length) {
      typeCount = frames.length
    }
    this.typeCount = typeCount
    let randomIndex = Math.floor(Math.random() * typeCount)
    this.sprite.spriteFrame = frames[randomIndex]
  }

  nextBall() {
    if (this.game.isGameOver) {
      return
    }

    let frames = this.ballAtlas.getSpriteFrames()
    // let currentIndexStr = this.sprite.spriteFrame.name
    // let currentIndex = parseInt(currentIndexStr)
    // 字符串前面加上加号可以转成 number
    let currentIndex = +this.sprite.spriteFrame.name
    let nextIndex = currentIndex + 1
    if (nextIndex >= this.typeCount) {
      nextIndex = 0
    }
    this.sprite.spriteFrame = frames[nextIndex]
    this.game.checkOver()
  }
}
