const { ccclass, property } = cc._decorator
import Scene12Game from "./Scene12Game"

@ccclass
export default class Scene12Bullet extends cc.Component {
  canvas: cc.Node = null
  canvasHeight: number = 0

  onLoad() {
    this.canvas = cc.find("Canvas")
    this.canvasHeight = this.canvas.height
  }

  update(dt: number) {
    let step = 8 // 控制移动速度
    this.node.y += step

    let maxY = this.canvasHeight / 2
    if (this.node.y > maxY) {
      // 超出屏幕范围
      this.dismiss()
    }
  }

  dismiss() {
    Scene12Game.instance.destroyBullet(this.node)
  }

  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    this.dismiss()
  }
}
