const { ccclass } = cc._decorator

@ccclass
export default class GrandChild extends cc.Component {
  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
      cc.log("GrandChild TOUCH_START", this)
    })

    this.node.on("只能传递给自己的自定义事件", (e: { p1: string }) => {
      // 收不到
      cc.log("GrandChild 只能传递给自己的自定义事件", e)
    })
    this.node.on("其他组件也能收到的自定义事件", (e: cc.Event.EventCustom) => {
      // 收不到。dispatchEvent 不会向下传递
      cc.log("GrandChild 其他组件也能收到的自定义事件", e)
    })
  }
  testOtherScriptCall(msg: string) {
    cc.log("testOtherScriptCall", msg, this)
  }
}
