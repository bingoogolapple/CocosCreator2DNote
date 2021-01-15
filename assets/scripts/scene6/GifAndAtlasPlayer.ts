const { ccclass, property } = cc._decorator

@ccclass
export default class GifAndAltasPlayer extends cc.Component {
  @property(cc.SpriteAtlas)
  atlas: cc.SpriteAtlas = null

  //   @property([cc.SpriteFrame])
  //   frames: cc.SpriteFrame[] = []
  @property([cc.SpriteFrame])
  frames: cc.SpriteFrame[] = new Array()

  sprite: cc.Sprite = null // Sprite组件
  index: number = 0 // 当前显示第N张图片
  interval: number = 0.1 // 定时器的间隔

  onLoad() {
    this.sprite = this.getComponent(cc.Sprite)

    if (this.atlas) {
      this.frames = this.atlas.getSpriteFrames()
    }
  }

  start() {
    this.schedule(this.onTimer, this.interval)
  }

  onTimer() {
    if (this.frames.length == 0) {
      return
    }

    this.sprite.spriteFrame = this.frames[this.index]

    // 下一帧
    this.index++
    if (this.index >= this.frames.length) {
      this.index = 0
    }
  }

  onDestroy() {
    this.unschedule(this.onTimer)
  }
}
