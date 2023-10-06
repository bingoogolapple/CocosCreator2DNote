import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Block')
export default class Block extends Component {
  onLoad() {

  }
  init() {
        // let blockWidth = 60 + Math.random() * 80

        // this.node.width = blockWidth

        // let physicsBoxCollider = this.node.getComponent(cc.PhysicsBoxCollider)
        // physicsBoxCollider.size.width = blockWidth
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Block extends cc.Component {
// 
//   onLoad() {
// 
//   }
// 
//   init() {
//     let blockWidth = 60 + Math.random() * 80
// 
//     this.node.width = blockWidth
// 
//     let physicsBoxCollider = this.node.getComponent(cc.PhysicsBoxCollider)
//     physicsBoxCollider.size.width = blockWidth
//   }
// }
