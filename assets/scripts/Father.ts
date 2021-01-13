const { ccclass } = cc._decorator

@ccclass
export default class Father extends cc.Component {
  onLoad() {
    this.testEventTouch()
    this.testSystemEvent()
    this.testCustomEvent()

    let start = new cc.Vec2(50, 50)
    let end = cc.v2(100, 100)
    let sub = end.sub(start)
    let mag = cc.v2(3, 4).mag()
    console.log(sub, mag)

    let size1 = new cc.Size(100, 100)
    let size2 = cc.size(100, 100)
    let rect1 = new cc.Rect(100, 100, 50, 50)
    let rect2 = cc.rect(100, 100, 50, 50)
    let isContain = rect1.contains(end)
    let isIntersect = rect2.intersects(rect1)
  }
  testEventTouch = () => {
    this.node.on(
      cc.Node.EventType.TOUCH_START,
      function (e: cc.Event.EventTouch) {
        // 此时 this 对应的是 Window
        console.log("Father TOUCH_START", this, e)

        // e.stopPropagation()
      }
    )
    this.node.on(
      cc.Node.EventType.TOUCH_END,
      function (e: cc.Event.EventTouch) {
        // 此时 this 对应的是当前组件实例
        console.log("Father TOUCH_END", this)
      },
      this
    )
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, (e: cc.Event.EventTouch) => {
      // 此时 this 对应的是当前组件实例
      console.log("TFather OUCH_CANCEL", this)
    })
    // 此时 touchMove1 中的 this 为 Window
    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1)
    // 此时 touchMove1 中的 this 为当前组件实例
    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1.bind(this))
    // 此时 touchMove1 中的 this 为当前组件实例
    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1, this)
    // 此时 touchMove2 中的 this 为当前组件实例
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove2)
  }
  touchMove1(e: cc.Event.EventTouch) {
    console.log("Father touchMove1", this)
  }
  touchMove2 = (e: cc.Event.EventTouch) => {
    console.log("Father touchMove2", this)
    console.log(e.getLocationX(), e.getLocationY())

    this.node.x += e.getDelta().x
    this.node.y += e.getDelta().y
  }
  testSystemEvent = () => {
    // systemEvent 首字母小写
    cc.systemEvent.on(
      cc.SystemEvent.EventType.KEY_DOWN,
      (e: cc.Event.EventKeyboard) => {
        console.log(e)
        switch (e.keyCode) {
          case cc.macro.KEY.up:
            console.log("上")
            break
          case cc.macro.KEY.down:
            console.log("下")
            break
          case cc.macro.KEY.left:
            console.log("左")
            break
          case cc.macro.KEY.right:
            console.log("右")
            break
          case cc.macro.KEY.Delete:
            break
        }
      }
    )
  }
  testCustomEvent = () => {
    this.node.on("只能传递给自己的自定义事件", (e: { p1: string }) => {
      console.log("Father 只能传递给自己的自定义事件", e)
    })
    this.node.emit("只能传递给自己的自定义事件", { p1: "参数1" })

    this.node.on("其他组件也能收到的自定义事件", (e: cc.Event.EventCustom) => {
      console.log("Father 其他组件也能收到的自定义事件", e)
    })
    // 第二个参数为 true 时才会向上传递（父节点才能收到）,始终不会向下传递
    let e = new cc.Event.EventCustom("其他组件也能收到的自定义事件", true)
    e.detail = { p1: "参数1" }
    this.node.dispatchEvent(e)
  }
}
