import { _decorator, Component, Event } from 'cc';
const { ccclass } = _decorator

@ccclass('Father')
export default class Father extends Component {
  onLoad() {
        // this.testEventTouch()
        // this.testSystemEvent()
        // this.testCustomEvent()

        // let start = new cc.Vec2(50, 50)
        // let end = cc.v2(100, 100)
        // let sub = end.sub(start)
        // let mag = cc.v2(3, 4).mag()
        // cc.log(sub, mag)

        // let size1 = new cc.Size(100, 100)
        // let size2 = cc.size(100, 100)
        // let rect1 = new cc.Rect(100, 100, 50, 50)
        // let rect2 = cc.rect(100, 100, 50, 50)
        // let isContain = rect1.contains(end)
        // let isIntersect = rect2.intersects(rect1)
  }
  testEventTouch = () => {
        // this.node.on(
        // cc.Node.EventType.TOUCH_START,
        // function (e: cc.Event.EventTouch) {
//        // 此时 this 对应的是 Window
        // cc.log("Father TOUCH_START", this, e)

//        // e.stopPropagation()
        // }
        // )
        // this.node.on(
        // cc.Node.EventType.TOUCH_END,
        // function (e: cc.Event.EventTouch) {
//        // 此时 this 对应的是当前组件实例
        // cc.log("Father TOUCH_END", this)
        // },
        // this
        // )
        // this.node.on(cc.Node.EventType.TOUCH_CANCEL, (e: cc.Event.EventTouch) => {
//      // 此时 this 对应的是当前组件实例
        // cc.log("TFather OUCH_CANCEL", this)
        // })
//    // 此时 touchMove1 中的 this 为 Window
//    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1)
//    // 此时 touchMove1 中的 this 为当前组件实例
//    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1.bind(this))
//    // 此时 touchMove1 中的 this 为当前组件实例
//    // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1, this)
//    // 此时 touchMove2 中的 this 为当前组件实例
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove2)
  }
  touchMove1(e: Event.EventTouch) {
        // cc.log("Father touchMove1", this)
  }
  touchMove2 = (e: Event.EventTouch) => {
        // cc.log("Father touchMove2", this)
        // cc.log(e.getLocationX(), e.getLocationY())

        // this.node.x += e.getDelta().x
        // this.node.y += e.getDelta().y
  }
  testSystemEvent = () => {
//    // systemEvent 首字母小写
        // cc.systemEvent.on(
        // cc.SystemEvent.EventType.KEY_DOWN,
        // (e: cc.Event.EventKeyboard) => {
        // cc.log(e)
        // switch (e.keyCode) {
        // case cc.macro.KEY.up:
        // cc.log("上")
        // break
        // case cc.macro.KEY.down:
        // cc.log("下")
        // break
        // case cc.macro.KEY.left:
        // cc.log("左")
        // break
        // case cc.macro.KEY.right:
        // cc.log("右")
        // break
        // case cc.macro.KEY.Delete:
        // break
        // }
        // }
        // )
  }
  testCustomEvent = () => {
        // this.node.on("只能传递给自己的自定义事件", (e: { p1: string }) => {
        // cc.log("Father 只能传递给自己的自定义事件", e)
        // })
        // this.node.emit("只能传递给自己的自定义事件", { p1: "参数1" })

        // this.node.on("其他组件也能收到的自定义事件", (e: cc.Event.EventCustom) => {
        // cc.log("Father 其他组件也能收到的自定义事件", e)
        // })
//    // 第二个参数为 true 时才会向上传递（父节点才能收到）,始终不会向下传递
        // let e = new cc.Event.EventCustom("其他组件也能收到的自定义事件", true)
        // e.detail = { p1: "参数1" }
        // this.node.dispatchEvent(e)
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass } = cc._decorator
// 
// @ccclass
// export default class Father extends cc.Component {
//   onLoad() {
//     this.testEventTouch()
//     this.testSystemEvent()
//     this.testCustomEvent()
// 
//     let start = new cc.Vec2(50, 50)
//     let end = cc.v2(100, 100)
//     let sub = end.sub(start)
//     let mag = cc.v2(3, 4).mag()
//     cc.log(sub, mag)
// 
//     let size1 = new cc.Size(100, 100)
//     let size2 = cc.size(100, 100)
//     let rect1 = new cc.Rect(100, 100, 50, 50)
//     let rect2 = cc.rect(100, 100, 50, 50)
//     let isContain = rect1.contains(end)
//     let isIntersect = rect2.intersects(rect1)
//   }
//   testEventTouch = () => {
//     this.node.on(
//       cc.Node.EventType.TOUCH_START,
//       function (e: cc.Event.EventTouch) {
//         // 此时 this 对应的是 Window
//         cc.log("Father TOUCH_START", this, e)
// 
//         // e.stopPropagation()
//       }
//     )
//     this.node.on(
//       cc.Node.EventType.TOUCH_END,
//       function (e: cc.Event.EventTouch) {
//         // 此时 this 对应的是当前组件实例
//         cc.log("Father TOUCH_END", this)
//       },
//       this
//     )
//     this.node.on(cc.Node.EventType.TOUCH_CANCEL, (e: cc.Event.EventTouch) => {
//       // 此时 this 对应的是当前组件实例
//       cc.log("TFather OUCH_CANCEL", this)
//     })
//     // 此时 touchMove1 中的 this 为 Window
//     // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1)
//     // 此时 touchMove1 中的 this 为当前组件实例
//     // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1.bind(this))
//     // 此时 touchMove1 中的 this 为当前组件实例
//     // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove1, this)
//     // 此时 touchMove2 中的 this 为当前组件实例
//     this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove2)
//   }
//   touchMove1(e: cc.Event.EventTouch) {
//     cc.log("Father touchMove1", this)
//   }
//   touchMove2 = (e: cc.Event.EventTouch) => {
//     cc.log("Father touchMove2", this)
//     cc.log(e.getLocationX(), e.getLocationY())
// 
//     this.node.x += e.getDelta().x
//     this.node.y += e.getDelta().y
//   }
//   testSystemEvent = () => {
//     // systemEvent 首字母小写
//     cc.systemEvent.on(
//       cc.SystemEvent.EventType.KEY_DOWN,
//       (e: cc.Event.EventKeyboard) => {
//         cc.log(e)
//         switch (e.keyCode) {
//           case cc.macro.KEY.up:
//             cc.log("上")
//             break
//           case cc.macro.KEY.down:
//             cc.log("下")
//             break
//           case cc.macro.KEY.left:
//             cc.log("左")
//             break
//           case cc.macro.KEY.right:
//             cc.log("右")
//             break
//           case cc.macro.KEY.Delete:
//             break
//         }
//       }
//     )
//   }
//   testCustomEvent = () => {
//     this.node.on("只能传递给自己的自定义事件", (e: { p1: string }) => {
//       cc.log("Father 只能传递给自己的自定义事件", e)
//     })
//     this.node.emit("只能传递给自己的自定义事件", { p1: "参数1" })
// 
//     this.node.on("其他组件也能收到的自定义事件", (e: cc.Event.EventCustom) => {
//       cc.log("Father 其他组件也能收到的自定义事件", e)
//     })
//     // 第二个参数为 true 时才会向上传递（父节点才能收到）,始终不会向下传递
//     let e = new cc.Event.EventCustom("其他组件也能收到的自定义事件", true)
//     e.detail = { p1: "参数1" }
//     this.node.dispatchEvent(e)
//   }
// }
