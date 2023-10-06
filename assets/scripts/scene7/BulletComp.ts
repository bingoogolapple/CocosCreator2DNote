import { _decorator, Component, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator

@ccclass('BulletComp')
export default class BulletComp extends Component {
  explodeEffect: SpriteFrame | null = null
  onLoad() {
        // this.schedule(this.onTimer, 0.016)
  }
  onTimer() {
        // if (this.node.y > 300) {
        // this.unschedule(this.onTimer)
//      //   this.node.destroy()
        // this.beginExplode()
        // return
        // }

        // this.node.y += 10
  }
  beginExplode() {
        // let sp: cc.Sprite = this.node.getComponent(cc.Sprite)
        // sp.spriteFrame = this.explodeEffect // 显示爆炸图片

        // this.node.scale = 0.1
        // cc.tween(this.node)
        // .to(0.5, { scale: 0.5, opacity: 0 })
        // .call(() => {
//        // 销毁子弹节点
        // this.node.destroy()

//        // // this.node.removeFromParent() 这一句不需要调用，cc.NodePool.put 内部会自动调用
//        // Scene7.bulletPool.put(this.node) // 将节点放回到池子，就可以被重新利用了
        // })
        // .start()
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class BulletComp extends cc.Component {
//   explodeEffect: cc.SpriteFrame = null
// 
//   onLoad() {
//     this.schedule(this.onTimer, 0.016)
//   }
//   onTimer() {
//     if (this.node.y > 300) {
//       this.unschedule(this.onTimer)
//       //   this.node.destroy()
//       this.beginExplode()
//       return
//     }
// 
//     this.node.y += 10
//   }
// 
//   beginExplode() {
//     let sp: cc.Sprite = this.node.getComponent(cc.Sprite)
//     sp.spriteFrame = this.explodeEffect // 显示爆炸图片
// 
//     this.node.scale = 0.1
//     cc.tween(this.node)
//       .to(0.5, { scale: 0.5, opacity: 0 })
//       .call(() => {
//         // 销毁子弹节点
//         this.node.destroy()
// 
//         // // this.node.removeFromParent() 这一句不需要调用，cc.NodePool.put 内部会自动调用
//         // Scene7.bulletPool.put(this.node) // 将节点放回到池子，就可以被重新利用了
//       })
//       .start()
//   }
// }
