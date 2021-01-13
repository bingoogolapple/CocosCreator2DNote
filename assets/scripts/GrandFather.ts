const { ccclass } = cc._decorator

@ccclass
export default class GrandFather extends cc.Component {
  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
      console.log("GrandFather TOUCH_START", this)
    })

    this.node.on("只能传递给自己的自定义事件", (e: { p1: string }) => {
      // 收不到
      console.log("GrandFather 只能传递给自己的自定义事件", e)
    })
    this.node.on("其他组件也能收到的自定义事件", (e: cc.Event.EventCustom) => {
      console.log("GrandFather 其他组件也能收到的自定义事件", e)
    })
  }
}
