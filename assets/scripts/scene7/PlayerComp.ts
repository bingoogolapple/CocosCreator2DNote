const { ccclass, property } = cc._decorator

@ccclass
export default class PlayerComp extends cc.Component {
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
     * 1、结束游戏：玩家被击中，直接结束本轮游戏
     * 2、销毁一方节点：小红帽采集了蘑菇，蘑菇节点被销毁
     * 3、销毁双方节点：子弹击中了敌机，子弹和敌机都被销毁
     * 4、避让：汽车开到了路边护栏，汽车需要避让
     */
    cc.log("PlayerComp: 碰撞发生")

    if (other.tag == 100) {
      cc.log("与友军相撞")
    } else if (other.tag == 200) {
      other.destroy()
      cc.log("与敌人相撞")
    }
  }

  /**
   * 碰撞进行中
   */
  onCollisionStay(other: cc.Collider, self: cc.Collider) {
    let otherNode = other.node
    cc.log("PlayerComp: 碰撞进行中")
  }

  /**
   * 碰撞分开
   */
  onCollisionExit(other: cc.Collider, self: cc.Collider) {
    let otherNode = other.node
    cc.log("PlayerComp: 碰撞分开")
  }
}
