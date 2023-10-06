import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator

@ccclass('Scene12Score')
export default class Scene12Score extends Component {
  static instance: Scene12Score = null
  private value: number = 0
  private label: Label | null = null
  onLoad() {
        // Scene12Score.instance = this

        // this.label = this.node.getComponent(cc.Label)
        // this.clearScore()
  }
//  // 获取分数
  getScore() {
        // return this.value
  }
  clearScore() {
        // this.value = 0
        // this.label.string = this.value + ""
  }
//  // 增加分数
  addScore(n: number) {
        // this.value += n
        // this.label.string = this.value + ""

        // cc.tween(this.node).by(0.5, { scale: 0.3 }).by(0.2, { scale: -0.3 }).start()
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Scene12Score extends cc.Component {
//   static instance: Scene12Score = null
// 
//   private value: number = 0
//   private label: cc.Label = null
// 
//   onLoad() {
//     Scene12Score.instance = this
// 
//     this.label = this.node.getComponent(cc.Label)
//     this.clearScore()
//   }
// 
//   // 获取分数
//   getScore() {
//     return this.value
//   }
// 
//   clearScore() {
//     this.value = 0
//     this.label.string = this.value + ""
//   }
// 
//   // 增加分数
//   addScore(n: number) {
//     this.value += n
//     this.label.string = this.value + ""
// 
//     cc.tween(this.node).by(0.5, { scale: 0.3 }).by(0.2, { scale: -0.3 }).start()
//   }
// }
