import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator

@ccclass('TargetComponent')
export default class TargetComponent extends Component {
//  // 运动方向
  isLeft: boolean = true
  update(dt: number) {
        // let dx: number = 3
        // if (this.isLeft) {
        // dx = 0 - dx
        // }
        // this.node.x += dx
        // if (this.isLeft && this.node.x < -200) {
        // this.isLeft = false
        // }
        // if (!this.isLeft && this.node.x > 200) {
        // this.isLeft = true
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class TargetComponent extends cc.Component {
//   // 运动方向
//   isLeft: boolean = true
// 
//   update(dt: number) {
//     let dx: number = 3
//     if (this.isLeft) {
//       dx = 0 - dx
//     }
//     this.node.x += dx
//     if (this.isLeft && this.node.x < -200) {
//       this.isLeft = false
//     }
//     if (!this.isLeft && this.node.x > 200) {
//       this.isLeft = true
//     }
//   }
// }
