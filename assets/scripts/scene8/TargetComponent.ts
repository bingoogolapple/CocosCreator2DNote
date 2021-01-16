const { ccclass, property } = cc._decorator

@ccclass
export default class TargetComponent extends cc.Component {
  // 运动方向
  isLeft: boolean = true

  update(dt: number) {
    let dx: number = 3
    if (this.isLeft) {
      dx = 0 - dx
    }
    this.node.x += dx
    if (this.isLeft && this.node.x < -200) {
      this.isLeft = false
    }
    if (!this.isLeft && this.node.x > 200) {
      this.isLeft = true
    }
  }
}
