import { _decorator, Component, SpriteAtlas, Vec2, Event } from 'cc';
const { ccclass, property } = _decorator

import Scene16Game from "./Scene16Game"

@ccclass('Scene16Block')
export default class Scene16Block extends Component {
  @property(SpriteAtlas)
  colorAtlas: SpriteAtlas | null = null
  game: Scene16Game = null
  startPos: Vec2 | null = null
  baseIndex: number = 0
  blockIndex: number = 0
  canMove: boolean = false
  onLoad() {
        // this.game = cc.find("Canvas").getComponent("Scene16Game")

        // this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        // this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
  }
  onDestroy() {
        // this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
        // this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        // this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
  }
  onTouchStart(e: Event.EventTouch) {
        // this.canMove = this.game.canMove(this)
        // if (!this.canMove) {
        // return
        // }

        // this.startPos = this.node.getPosition()
  }
  onTouchMove(e: Event.EventTouch) {
        // if (!this.canMove) {
        // return
        // }
        // this.node.x += e.getDeltaX()
        // this.node.y += e.getDeltaY()
  }
  onTouchEnd(e: Event.EventTouch) {
        // if (!this.canMove) {
        // return
        // }

        // let canPlace = this.game.placeBlock(this)
        // if (!canPlace) {
        // this.node.setPosition(this.startPos)
        // }
  }
  init(blockIndex: number) {
        // this.blockIndex = blockIndex
        // this.getComponent(cc.Sprite).spriteFrame = this.colorAtlas.getSpriteFrame(
        // blockIndex.toString()
        // )
        // this.node.width = 80 + blockIndex * 40
  }
  updatePosition(x: number, bottomToTopIndex: number) {
        // this.node.x = x
        // this.node.y = -122 + (this.node.height - 2) * bottomToTopIndex
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// import Scene16Game from "./Scene16Game"
// 
// @ccclass
// export default class Scene16Block extends cc.Component {
//   @property(cc.SpriteAtlas)
//   colorAtlas: cc.SpriteAtlas = null
//   game: Scene16Game = null
//   startPos: cc.Vec2 = null
//   baseIndex: number = 0
//   blockIndex: number = 0
//   canMove: boolean = false
// 
//   onLoad() {
//     this.game = cc.find("Canvas").getComponent("Scene16Game")
// 
//     this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
//     this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
//     this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
//     this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
//   }
// 
//   onDestroy() {
//     this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
//     this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
//     this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
//     this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
//   }
// 
//   onTouchStart(e: cc.Event.EventTouch) {
//     this.canMove = this.game.canMove(this)
//     if (!this.canMove) {
//       return
//     }
// 
//     this.startPos = this.node.getPosition()
//   }
// 
//   onTouchMove(e: cc.Event.EventTouch) {
//     if (!this.canMove) {
//       return
//     }
//     this.node.x += e.getDeltaX()
//     this.node.y += e.getDeltaY()
//   }
// 
//   onTouchEnd(e: cc.Event.EventTouch) {
//     if (!this.canMove) {
//       return
//     }
// 
//     let canPlace = this.game.placeBlock(this)
//     if (!canPlace) {
//       this.node.setPosition(this.startPos)
//     }
//   }
// 
//   init(blockIndex: number) {
//     this.blockIndex = blockIndex
//     this.getComponent(cc.Sprite).spriteFrame = this.colorAtlas.getSpriteFrame(
//       blockIndex.toString()
//     )
//     this.node.width = 80 + blockIndex * 40
//   }
// 
//   updatePosition(x: number, bottomToTopIndex: number) {
//     this.node.x = x
//     this.node.y = -122 + (this.node.height - 2) * bottomToTopIndex
//   }
// }
