const { ccclass, property } = cc._decorator

@ccclass
export default class Scene5 extends cc.Component {
  speed: number = 3
  direction: cc.Vec2 = null

  update(dt: number) {
    if (!this.direction) {
      return
    }

    let dx = this.speed * this.direction.x
    let dy = this.speed * this.direction.y

    let pos = this.node.getPosition()
    pos.x += dx
    pos.y += dy
    this.node.setPosition(pos)
  }
}
