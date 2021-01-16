const { ccclass, property } = cc._decorator
import Common from "./Common"

@ccclass
export default class BulletComponent extends cc.Component {
  // 飞行的方位 (标准化向量)
  direction: cc.Vec2 = null
  // 靶标
  target: cc.Node = null
  // 爆炸特效
  explodeEffectFrame: cc.SpriteFrame = null
  // 音效
  explodeAudio: cc.AudioClip = null

  start() {
    if (!this.target) {
      cc.log("未设置靶标 target 属性!")
      return
    }
    if (!this.explodeEffectFrame) {
      cc.log("未设置爆炸特效 explodeEffectFrame 属性!")
      return
    }

    this.schedule(this.onTimer, 0.016)
  }

  onTimer() {
    if (this.node.y > 340) {
      // 靶标与射击基准之间的距离
      this.unschedule(this.onTimer)

      if (this.isHit()) {
        this.success()
      } else {
        this.failed()
      }

      return
    }

    // 步长
    let speed: number = 15
    let dx = speed * this.direction.x
    let dy = speed * this.direction.y

    this.node.x += dx
    this.node.y += dy
  }

  dismiss() {
    this.node.destroy()

    if (Common.magazine.count <= 0) {
      Common.resultDialog.show()
    }
  }

  // 检查是否命中目标
  isHit(): boolean {
    let targetPos: cc.Vec2 = this.getWorldLocation(this.target)
    let selfPos: cc.Vec2 = this.getWorldLocation(this.node)
    let distance: number = Math.abs(targetPos.x - selfPos.x) // x方向距离
    // let distance : number = cc.Vec2.distance(targetPos, selfPos);
    cc.log("靶标 x=" + targetPos.x + ", 子弹 x=" + selfPos.x)

    if (distance < 50) {
      return true
    }
    return false
  }

  // 获取一个节点的世界坐标
  getWorldLocation(node: cc.Node): cc.Vec2 {
    let pos = node.getPosition()
    return node.parent.convertToWorldSpaceAR(pos)
  }

  success() {
    cc.log("命中目标")
    this.explode()
    this.cheer()

    // 得分
    Common.score += 10

    // 音效
    if (this.explodeAudio) {
      cc.audioEngine.play(this.explodeAudio, false, 1)
    }
  }

  // 失败，直接销毁
  failed() {
    this.dismiss()
  }

  // 爆炸特效
  explode() {
    let sp: cc.Sprite = this.node.getComponent(cc.Sprite)
    sp.spriteFrame = this.explodeEffectFrame

    this.node.scale = 0.1
    cc.tween(this.node)
      .to(0.4, { scale: 1 })
      .to(0.2, { opacity: 0 })
      .call(() => {
        this.dismiss()
      })
      .start()
  }

  // 加分效果
  cheer() {
    let labelNode: cc.Node = new cc.Node()
    let label: cc.Label = labelNode.addComponent(cc.Label)
    label.string = "+10分"
    labelNode.color = new cc.Color(255, 0, 0)
    labelNode.parent = this.node.parent
    labelNode.setPosition(cc.v3(0, 250, 0))
    labelNode.opacity = 200

    cc.tween(labelNode)
      .to(0.5, { scale: 1.5 })
      .to(0.2, { opacity: 0 })
      .call(() => {
        labelNode.destroy()
      })
      .start()
  }
}
