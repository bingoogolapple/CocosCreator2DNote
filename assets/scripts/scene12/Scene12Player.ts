import { _decorator, Component, Node, Event, Collider2D } from 'cc';
const { ccclass, property } = _decorator

import Scene12Game from "./Scene12Game"

@ccclass('Scene12Player')
export default class Scene12Player extends Component {
  static MOVE_STEP: number = 10
  private canvas: Node | null = null
  onLoad() {
        // this.canvas = cc.find("Canvas")

        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.listenKeydown()
  }
  start() {
        // this.schedule(this.onTimer, 0.3, cc.macro.REPEAT_FOREVER, 0.01)
  }
  onTouchMove(e: Event.EventTouch) {
        // if (!Scene12Game.instance.playing) {
        // return
        // }

        // let deltaX: number = e.getDeltaX()
        // if (deltaX < 0) {
        // this.handleMoveLeft(deltaX)
        // } else {
        // this.handleMoveRight(deltaX)
        // }
  }
  listenKeydown() {
        // cc.systemEvent.on(
        // cc.SystemEvent.EventType.KEY_DOWN,
        // (e: cc.Event.EventKeyboard) => {
        // if (!Scene12Game.instance.playing) {
        // return
        // }

        // switch (e.keyCode) {
        // case cc.macro.KEY.left:
        // this.handleMoveLeft(-Scene12Player.MOVE_STEP)
        // break
        // case cc.macro.KEY.right:
        // this.handleMoveRight(Scene12Player.MOVE_STEP)
        // break
        // }
        // }
        // )
  }
  private handleMoveLeft(deltaX: number) {
        // let newX = this.node.x + deltaX
        // let minX = -this.canvas.width / 2 + this.node.width / 2
        // this.node.x = Math.max(newX, minX)
  }
  private handleMoveRight(deltaX: number) {
        // let newX = this.node.x + deltaX
        // let maxX = this.canvas.width / 2 - this.node.width / 2
        // this.node.x = Math.min(newX, maxX)
  }
  onCollisionEnter(other: Collider2D, self: Collider2D) {
        // Scene12Game.instance.endGame()
  }
  onTimer() {
        // if (!Scene12Game.instance.playing) {
        // return
        // }

//    // 动态创建子弹
        // let bulletNode = Scene12Game.instance.createBullet()
        // bulletNode.setPosition(this.node.x, this.node.y + this.node.height / 1.2)
//    // 挂在 Canvas 节点下面
        // this.node.parent.addChild(bulletNode)
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene12Game from "./Scene12Game"
// 
// @ccclass
// export default class Scene12Player extends cc.Component {
//   static MOVE_STEP: number = 10
//   private canvas: cc.Node = null
// 
//   onLoad() {
//     this.canvas = cc.find("Canvas")
// 
//     this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
//     this.listenKeydown()
//   }
// 
//   start() {
//     this.schedule(this.onTimer, 0.3, cc.macro.REPEAT_FOREVER, 0.01)
//   }
// 
//   onTouchMove(e: cc.Event.EventTouch) {
//     if (!Scene12Game.instance.playing) {
//       return
//     }
// 
//     let deltaX: number = e.getDeltaX()
//     if (deltaX < 0) {
//       this.handleMoveLeft(deltaX)
//     } else {
//       this.handleMoveRight(deltaX)
//     }
//   }
// 
//   listenKeydown() {
//     cc.systemEvent.on(
//       cc.SystemEvent.EventType.KEY_DOWN,
//       (e: cc.Event.EventKeyboard) => {
//         if (!Scene12Game.instance.playing) {
//           return
//         }
// 
//         switch (e.keyCode) {
//           case cc.macro.KEY.left:
//             this.handleMoveLeft(-Scene12Player.MOVE_STEP)
//             break
//           case cc.macro.KEY.right:
//             this.handleMoveRight(Scene12Player.MOVE_STEP)
//             break
//         }
//       }
//     )
//   }
// 
//   private handleMoveLeft(deltaX: number) {
//     let newX = this.node.x + deltaX
//     let minX = -this.canvas.width / 2 + this.node.width / 2
//     this.node.x = Math.max(newX, minX)
//   }
// 
//   private handleMoveRight(deltaX: number) {
//     let newX = this.node.x + deltaX
//     let maxX = this.canvas.width / 2 - this.node.width / 2
//     this.node.x = Math.min(newX, maxX)
//   }
// 
//   onCollisionEnter(other: cc.Collider, self: cc.Collider) {
//     Scene12Game.instance.endGame()
//   }
// 
//   onTimer() {
//     if (!Scene12Game.instance.playing) {
//       return
//     }
// 
//     // 动态创建子弹
//     let bulletNode = Scene12Game.instance.createBullet()
//     bulletNode.setPosition(this.node.x, this.node.y + this.node.height / 1.2)
//     // 挂在 Canvas 节点下面
//     this.node.parent.addChild(bulletNode)
//   }
// }
