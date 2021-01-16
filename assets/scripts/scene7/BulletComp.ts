const { ccclass, property } = cc._decorator

@ccclass
export default class BulletComp extends cc.Component {
  explodeEffect: cc.SpriteFrame = null

  onLoad() {
    this.schedule(this.onTimer, 0.016)
  }
  onTimer() {
    if (this.node.y > 300) {
      this.unschedule(this.onTimer)
      //   this.node.destroy()
      this.beginExplode()
      return
    }

    this.node.y += 10
  }

  beginExplode() {
    let sp: cc.Sprite = this.node.getComponent(cc.Sprite)
    sp.spriteFrame = this.explodeEffect // 显示爆炸图片

    this.node.scale = 0.1
    cc.tween(this.node)
      .to(0.5, { scale: 0.5, opacity: 0 })
      .call(() => {
        this.node.destroy()
      })
      .start()
  }
}
