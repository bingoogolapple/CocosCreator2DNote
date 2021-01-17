const { ccclass, property } = cc._decorator
import Scene12Game from "./Scene12Game"
import Scene12Score from "./Scene12Score"

@ccclass
export default class Scene12Target extends cc.Component {
  @property(cc.AudioClip)
  audio: cc.AudioClip = null

  // 每秒下降 200 像素
  speed: number = 200

  private canvas: cc.Node = null
  private label: cc.Label = null
  scoreValue: number = 0
  private healthPoint: number = 0

  // 由于 Target 节点是重复使用的，所以重新使用之前重置一下
  onEnable() {
    this.canvas = cc.find("Canvas")
    this.label = this.node.children[0].getComponent(cc.Label)

    this.scoreValue = 1 + Math.floor(Math.random() * 10)
    this.healthPoint = this.scoreValue
    this.showHealth()
  }

  showHealth() {
    this.label.string = this.healthPoint + ""
  }

  update(dt: number) {
    let step = this.speed * dt
    this.node.y -= step

    if (this.node.y < -this.canvas.height / 2 - this.node.height / 2) {
      this.dismiss()
    }
  }

  dismiss() {
    Scene12Game.instance.destroyTarget(this.node)
  }

  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    if (other.node.name === "子弹") {
      this.healthPoint -= 1

      if (this.healthPoint <= 0) {
        Scene12Score.instance.addScore(this.scoreValue)
        this.dismiss()
        cc.audioEngine.play(this.audio, false, 1)
        return
      }

      this.showHealth()
    }
  }
}
