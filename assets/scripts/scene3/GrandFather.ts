import GrandChild from "./GrandChild"
const { ccclass } = cc._decorator

@ccclass
export default class GrandFather extends cc.Component {
  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
      cc.log("GrandFather TOUCH_START", this)
    })

    this.node.on("只能传递给自己的自定义事件", (e: { p1: string }) => {
      // 收不到
      cc.log("GrandFather 只能传递给自己的自定义事件", e)
    })
    this.node.on("其他组件也能收到的自定义事件", (e: cc.Event.EventCustom) => {
      cc.log("GrandFather 其他组件也能收到的自定义事件", e)
    })

    // 全局查找，从根开始查找
    let fatherNode: cc.Node = cc.find("Canvas/GrandFather/Father")
    cc.log("fatherNode", fatherNode)
    // 查找子节点，相对于 Father 开始
    let grandChildNode: cc.Node = cc.find("GrandChild", fatherNode)
    cc.log("grandChildNode", grandChildNode)
    // this.node.parent
    // this.node.children

    let grandChildComponent: GrandChild = grandChildNode.getComponent(
      "GrandChild"
    )
    grandChildComponent.testOtherScriptCall("从 GrandFather 中调用")
  }
}
