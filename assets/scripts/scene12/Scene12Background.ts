import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator

import Scene12Game from "./Scene12Game"

@ccclass('Scene12Background')
export default class Scene12Background extends Component {
  bg1: Node | null = null
  bg2: Node | null = null
  thresholdY: number = 0
  onLoad() {
        // this.bg1 = cc.find("bg1", this.node)
        // this.bg2 = cc.find("bg2", this.node)
//    // 为了适配平板，对两个背景进行了缩放，所以计算阈值 y 时需要乘以缩放系数
        // this.thresholdY = this.bg2.scale * Scene12Game.gameHeight
//    // 默认情况下将 bg2 移到 bg1 的上方
        // this.bg2.y = this.thresholdY

//    // 可以添加 2 个背景，也可以采用节点克隆
//    // this.bg2 = cc.instantiate(this.bg1)
//    // this.bg2.parent = this.node
//    // this.bg2.y = -h
  }
  update(dt: number) {
        // if (!Scene12Game.instance.playing) {
        // return
        // }

        // let step = 4
        // this.bg1.y -= step
        // this.bg2.y -= step
        // if (this.bg1.y <= -this.thresholdY) {
        // this.bg1.y = this.thresholdY
        // }
        // if (this.bg2.y <= -this.thresholdY) {
        // this.bg2.y = this.thresholdY
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene12Game from "./Scene12Game"
// 
// @ccclass
// export default class Scene12Background extends cc.Component {
//   bg1: cc.Node = null
//   bg2: cc.Node = null
//   thresholdY: number = 0
// 
//   onLoad() {
//     this.bg1 = cc.find("bg1", this.node)
//     this.bg2 = cc.find("bg2", this.node)
//     // 为了适配平板，对两个背景进行了缩放，所以计算阈值 y 时需要乘以缩放系数
//     this.thresholdY = this.bg2.scale * Scene12Game.gameHeight
//     // 默认情况下将 bg2 移到 bg1 的上方
//     this.bg2.y = this.thresholdY
// 
//     // 可以添加 2 个背景，也可以采用节点克隆
//     // this.bg2 = cc.instantiate(this.bg1)
//     // this.bg2.parent = this.node
//     // this.bg2.y = -h
//   }
// 
//   update(dt: number) {
//     if (!Scene12Game.instance.playing) {
//       return
//     }
// 
//     let step = 4
//     this.bg1.y -= step
//     this.bg2.y -= step
//     if (this.bg1.y <= -this.thresholdY) {
//       this.bg1.y = this.thresholdY
//     }
//     if (this.bg2.y <= -this.thresholdY) {
//       this.bg2.y = this.thresholdY
//     }
//   }
// }
