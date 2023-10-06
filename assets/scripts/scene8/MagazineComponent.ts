import { _decorator, Component, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator

// /**
//  * 弹夹
//  */

@ccclass('MagazineComponent')
export default class MagazineComponent extends Component {
//  // 子弹图片
  @property(SpriteFrame)
  bulletIcon: SpriteFrame | null = null
  capacity: number = 10 // 最大弹药
  count: number = 10 // 现有弹药数量
  onLoad() {
//    // 子弹的水平间距
        // let space: number = this.node.width / this.capacity

//    // 创建 10 个子弹
        // for (let i = 0; i < this.capacity; i++) {
        // let bulletNode: cc.Node = new cc.Node()
        // let bulletSprite: cc.Sprite = bulletNode.addComponent(cc.Sprite)
        // bulletSprite.spriteFrame = this.bulletIcon
        // this.node.addChild(bulletNode)

        // bulletNode.x = space * i + space / 2 // 向右偏移一些
        // bulletNode.y = 0
        // }
  }
//  // 重置
  reset() {
        // this.count = this.capacity
        // this.display()
  }
//  // 消耗 n 个子弹
  consume(n: number) {
        // this.count -= n
        // if (this.count < 0) {
        // this.count = 0
        // }

        // this.display()
  }
//  // 显示剩余的子弹，active 的表示剩下的子弹
  display() {
        // let nodes: cc.Node[] = this.node.children

        // for (let i = 0; i < nodes.length; i++) {
        // if (this.count > i) {
        // nodes[i].active = true
        // } else {
        // nodes[i].active = false
        // }
        // }
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// /**
//  * 弹夹
//  */
// @ccclass
// export default class MagazineComponent extends cc.Component {
//   // 子弹图片
//   @property(cc.SpriteFrame)
//   bulletIcon: cc.SpriteFrame = null
// 
//   capacity: number = 10 // 最大弹药
//   count: number = 10 // 现有弹药数量
// 
//   onLoad() {
//     // 子弹的水平间距
//     let space: number = this.node.width / this.capacity
// 
//     // 创建 10 个子弹
//     for (let i = 0; i < this.capacity; i++) {
//       let bulletNode: cc.Node = new cc.Node()
//       let bulletSprite: cc.Sprite = bulletNode.addComponent(cc.Sprite)
//       bulletSprite.spriteFrame = this.bulletIcon
//       this.node.addChild(bulletNode)
// 
//       bulletNode.x = space * i + space / 2 // 向右偏移一些
//       bulletNode.y = 0
//     }
//   }
// 
//   // 重置
//   reset() {
//     this.count = this.capacity
//     this.display()
//   }
// 
//   // 消耗 n 个子弹
//   consume(n: number) {
//     this.count -= n
//     if (this.count < 0) {
//       this.count = 0
//     }
// 
//     this.display()
//   }
// 
//   // 显示剩余的子弹，active 的表示剩下的子弹
//   display() {
//     let nodes: cc.Node[] = this.node.children
// 
//     for (let i = 0; i < nodes.length; i++) {
//       if (this.count > i) {
//         nodes[i].active = true
//       } else {
//         nodes[i].active = false
//       }
//     }
//   }
// }
