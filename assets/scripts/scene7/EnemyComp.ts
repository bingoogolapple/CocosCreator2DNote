const { ccclass, property } = cc._decorator

@ccclass
export default class EnemyComp extends cc.Component {
  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
  }

  onTouchMove(e: cc.Event.EventTouch) {
    let delta: cc.Vec2 = e.getDelta()
    this.node.x += delta.x
    this.node.y += delta.y
  }

  /**
   * 碰撞发生
   */
  onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    /**
     * 如果是先调用了任意一方的 destory 方法，则会先执行完两方的 onCollisionExit 方法，然后再继续执行后续代码
     * EnemyComp: 碰撞分开
     * PlayerComp: 碰撞分开
     * EnemyComp: 碰撞发生
     * PlayerComp: 碰撞发生
     */
    // self.node.destroy()

    cc.log("EnemyComp: 碰撞发生")
  }

  /**
   * 碰撞进行中
   */
  onCollisionStay(other: cc.Collider, self: cc.Collider) {
    cc.log("EnemyComp: 碰撞进行中")
  }

  /**
   * 碰撞分开
   */
  onCollisionExit(other: cc.Collider, self: cc.Collider) {
    cc.log("EnemyComp: 碰撞分开")
  }
}
