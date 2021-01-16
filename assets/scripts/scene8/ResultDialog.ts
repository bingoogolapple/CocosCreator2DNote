const { ccclass, property } = cc._decorator
import Common from "./Common"

@ccclass
export default class ResultDialog extends cc.Component {
  onLoad() {
    let replayNode: cc.Node = cc.find("replay", this.node)
    replayNode.on(cc.Node.EventType.TOUCH_START, this.onReplay, this)

    // 注意：这里要把事件消费一下，否则会透传到游戏主画面；或者为【Canvas/提示框】节点添加 BlockInputEvents 组件（防止输入穿透到下层节点，一般用于上层 UI 的背景）
    this.node.on(cc.Node.EventType.TOUCH_START, this.stopEvents, this)
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stopEvents, this)
    this.node.on(cc.Node.EventType.TOUCH_END, this.stopEvents, this)
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.stopEvents, this)
  }

  stopEvents(e: cc.Event.EventTouch) {
    e.stopPropagation()
  }

  // 显示提示框
  show() {
    this.node.active = true
    // 显示最终得分
    let scoreNode: cc.Node = cc.find("分数", this.node)
    let scoreLabel: cc.Label = scoreNode.getComponent(cc.Label)
    scoreLabel.string = Common.score + "分"
  }

  // 隐藏提示框
  dismiss() {
    this.node.active = false
  }

  onReplay() {
    this.dismiss()
    // 重置游戏
    Common.resetGame()
  }
}
