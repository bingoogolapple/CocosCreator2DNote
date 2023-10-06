import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator

import Scene12Game from "./Scene12Game"
import Scene12Score from "./Scene12Score"

@ccclass('Scene12ResultDialog')
export default class Game12ResultDialog extends Component {
  scoreLabel: Label | null = null
  onLoad() {
        // cc.find("再玩一局", this.node).on(
        // cc.Node.EventType.TOUCH_START,
        // this.onReplay,
        // this
        // )
  }
  show() {
        // this.node.active = true

        // if (!this.scoreLabel) {
//      // 注意：这个节点默认 active = false，所以游戏启动时不会调用 onLoad()，所以在 show 时获取分数文本组件
        // this.scoreLabel = cc.find("提示框/分数", this.node).getComponent(cc.Label)
        // }
        // this.scoreLabel.string = Scene12Score.instance.getScore() + ""
  }
  hide() {
        // this.node.active = false
  }
  onReplay() {
        // this.hide()
        // Scene12Game.instance.startGame()
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene12Game from "./Scene12Game"
// import Scene12Score from "./Scene12Score"
// 
// @ccclass
// export default class Game12ResultDialog extends cc.Component {
//   scoreLabel: cc.Label = null
// 
//   onLoad() {
//     cc.find("再玩一局", this.node).on(
//       cc.Node.EventType.TOUCH_START,
//       this.onReplay,
//       this
//     )
//   }
// 
//   show() {
//     this.node.active = true
// 
//     if (!this.scoreLabel) {
//       // 注意：这个节点默认 active = false，所以游戏启动时不会调用 onLoad()，所以在 show 时获取分数文本组件
//       this.scoreLabel = cc.find("提示框/分数", this.node).getComponent(cc.Label)
//     }
//     this.scoreLabel.string = Scene12Score.instance.getScore() + ""
//   }
// 
//   hide() {
//     this.node.active = false
//   }
// 
//   onReplay() {
//     this.hide()
//     Scene12Game.instance.startGame()
//   }
// }
