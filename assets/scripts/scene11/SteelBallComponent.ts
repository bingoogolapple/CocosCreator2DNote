const { ccclass, property } = cc._decorator

/**
 * 1、要在属性检查器中勾选了 RigidBody 的「Enable Contack Listener」属性后才会触发回调方法
 * 2、onBeginContact 比 onEndContact 多一次回调
 * 3、onPreSolve 和 onPostSolve 一样多
 * 大致日志，不完整：
 * SteelBallComponent：onBeginContact
 * SteelBallComponent：onPreSolve
 * SteelBallComponent：onPostSolve
 * SteelBallComponent：onEndContact
 * SteelBallComponent：onBeginContact
 * SteelBallComponent：onPreSolve
 * SteelBallComponent：onPostSolve
 * SteelBallComponent：onEndContact
 * SteelBallComponent：onBeginContact
 * SteelBallComponent：onPreSolve
 * SteelBallComponent：onPostSolve
 * SteelBallComponent：onPreSolve
 * SteelBallComponent：onPostSolve
 * SteelBallComponent：onEndContact
 * SteelBallComponent：onBeginContact
 * SteelBallComponent：onPreSolve
 * SteelBallComponent：onPostSolve
 * SteelBallComponent：onPreSolve
 * SteelBallComponent：onPostSolve
 * SteelBallComponent：onPreSolve
 * SteelBallComponent：onPostSolve
 */
@ccclass
export default class SteelBallComponent extends cc.Component {
  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
      let position: cc.Vec2 = cc.v2(-15, 0)
      position = this.node.convertToWorldSpaceAR(position) // 作用点，需要转成世界坐标

      // 施加冲量到刚体上的一个点，将立即改变刚体的线性速度。 如果冲量施加到的点不是刚体的质心，那么将产生一个扭矩并影响刚体的角速度
      let rigid: cc.RigidBody = this.node.getComponent(cc.RigidBody)
      let impulse: cc.Vec2 = cc.v2(0, 1000) // 一个冲量
      rigid.applyLinearImpulse(impulse, position, true)
    })
  }

  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact(
    contact: cc.PhysicsContact,
    selfCollider: cc.PhysicsCollider,
    otherCollider: cc.PhysicsCollider
  ) {
    cc.log("SteelBallComponent：onBeginContact")
    //selfCollider.node.destroy();
  }

  // 只在两个碰撞体结束接触时被调用一次
  onEndContact(
    contact: cc.PhysicsContact,
    selfCollider: cc.PhysicsCollider,
    otherCollider: cc.PhysicsCollider
  ) {
    cc.log("SteelBallComponent：onEndContact")
  }

  // 每次将要处理碰撞体接触逻辑时被调用
  onPreSolve(
    contact: cc.PhysicsContact,
    selfCollider: cc.PhysicsCollider,
    otherCollider: cc.PhysicsCollider
  ) {
    cc.log("SteelBallComponent：onPreSolve")
  }

  // 每次处理完碰撞体接触逻辑时被调用
  onPostSolve(
    contact: cc.PhysicsContact,
    selfCollider: cc.PhysicsCollider,
    otherCollider: cc.PhysicsCollider
  ) {
    cc.log("SteelBallComponent：onPostSolve")
  }
}
