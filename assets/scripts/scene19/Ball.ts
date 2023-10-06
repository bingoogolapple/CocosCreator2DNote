import { _decorator, Component, PhysicsContact, PhysicsCollider, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Ball')
export default class Ball extends Component {
  public initVelocityY: number
  onLoad() {
        // this.initVelocityY = 0
  }
//  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact(
    contact: PhysicsContact,
    selfCollider: PhysicsCollider,
    otherCollider: PhysicsCollider
  ) {
    let rigidBody = selfCollider.getComponent(RigidBody2D)
    if (!this.initVelocityY) {
        // this.initVelocityY = rigidBody.linearVelocity.y
        // console.log(this.initVelocityY)
        // } else {
        // rigidBody.linearVelocity = cc.v2(0, this.initVelocityY)
    }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Ball extends cc.Component {
//   public initVelocityY: number
//   onLoad() {
//     this.initVelocityY = 0
//   }
// 
// 
//   // 只在两个碰撞体开始接触时被调用一次
//   onBeginContact(
//     contact: cc.PhysicsContact,
//     selfCollider: cc.PhysicsCollider,
//     otherCollider: cc.PhysicsCollider
//   ) {
//     let rigidBody = selfCollider.getComponent(cc.RigidBody)
//     if (!this.initVelocityY) {
//       this.initVelocityY = rigidBody.linearVelocity.y
//       console.log(this.initVelocityY)
//     } else {
//       rigidBody.linearVelocity = cc.v2(0, this.initVelocityY)
//     }
//   }
// }
