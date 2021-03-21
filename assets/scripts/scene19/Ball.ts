const { ccclass, property } = cc._decorator

@ccclass
export default class Ball extends cc.Component {
  public initVelocityY: number
  onLoad() {
    this.initVelocityY = 0
  }


  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact(
    contact: cc.PhysicsContact,
    selfCollider: cc.PhysicsCollider,
    otherCollider: cc.PhysicsCollider
  ) {
    let rigidBody = selfCollider.getComponent(cc.RigidBody)
    if (!this.initVelocityY) {
      this.initVelocityY = rigidBody.linearVelocity.y
      console.log(this.initVelocityY)
    } else {
      rigidBody.linearVelocity = cc.v2(0, this.initVelocityY)
    }
  }
}
