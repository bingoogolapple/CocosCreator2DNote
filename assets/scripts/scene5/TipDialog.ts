import { _decorator, Component, Event } from 'cc';
const { ccclass, property } = _decorator

@ccclass('TipDialog')
export default class Dialog extends Component {
  onLoad() {
//    // 注意：这里要把事件消费一下，否则会透传到游戏主画面；或者为【Canvas/提示框】节点添加 BlockInputEvents 组件（防止输入穿透到下层节点，一般用于上层 UI 的背景）
//    // this.node.on(cc.Node.EventType.TOUCH_START, this.stopEvents, this)
//    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stopEvents, this)
//    // this.node.on(cc.Node.EventType.TOUCH_END, this.stopEvents, this)
//    // this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.stopEvents, this)
  }
  stopEvents(e: Event.EventTouch) {
        // e.stopPropagation()
  }
  onBtnClick(target: Event.EventTouch, data: string) {
        // if (data === "next-round") {
        // cc.log("下一关")
        // this.node.active = false
        // } else if (data === "replay") {
        // cc.log("再玩一遍")
        // this.node.active = false
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Dialog extends cc.Component {
//   onLoad() {
//     // 注意：这里要把事件消费一下，否则会透传到游戏主画面；或者为【Canvas/提示框】节点添加 BlockInputEvents 组件（防止输入穿透到下层节点，一般用于上层 UI 的背景）
//     // this.node.on(cc.Node.EventType.TOUCH_START, this.stopEvents, this)
//     // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stopEvents, this)
//     // this.node.on(cc.Node.EventType.TOUCH_END, this.stopEvents, this)
//     // this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.stopEvents, this)
//   }
// 
//   stopEvents(e: cc.Event.EventTouch) {
//     e.stopPropagation()
//   }
// 
//   onBtnClick(target: cc.Event.EventTouch, data: string) {
//     if (data === "next-round") {
//       cc.log("下一关")
//       this.node.active = false
//     } else if (data === "replay") {
//       cc.log("再玩一遍")
//       this.node.active = false
//     }
//   }
// }
