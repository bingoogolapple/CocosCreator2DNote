import { _decorator, Component, Node, Collider2D } from 'cc';
const { ccclass, property } = _decorator

import Scene12Game from "./Scene12Game"

@ccclass('Scene12Bullet')
export default class Scene12Bullet extends Component {
  canvas: Node | null = null
  canvasHeight: number = 0
  onLoad() {
        // this.canvas = cc.find("Canvas")
        // this.canvasHeight = this.canvas.height
  }
  update(dt: number) {
        // let step = 8 // 控制移动速度
        // this.node.y += step

        // let maxY = this.canvasHeight / 2
        // if (this.node.y > maxY) {
//      // 超出屏幕范围
        // this.dismiss()
        // }
  }
  dismiss() {
        // Scene12Game.instance.destroyBullet(this.node)
  }
  onCollisionEnter(other: Collider2D, self: Collider2D) {
        // this.dismiss()
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene12Game from "./Scene12Game"
// 
// @ccclass
// export default class Scene12Bullet extends cc.Component {
//   canvas: cc.Node = null
//   canvasHeight: number = 0
// 
//   onLoad() {
//     this.canvas = cc.find("Canvas")
//     this.canvasHeight = this.canvas.height
//   }
// 
//   update(dt: number) {
//     let step = 8 // 控制移动速度
//     this.node.y += step
// 
//     let maxY = this.canvasHeight / 2
//     if (this.node.y > maxY) {
//       // 超出屏幕范围
//       this.dismiss()
//     }
//   }
// 
//   dismiss() {
//     Scene12Game.instance.destroyBullet(this.node)
//   }
// 
//   onCollisionEnter(other: cc.Collider, self: cc.Collider) {
//     this.dismiss()
//   }
// }
