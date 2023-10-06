import { _decorator, Component, Vec2 } from 'cc';
const { ccclass, property } = _decorator

@ccclass('CarComponent')
export default class Scene5 extends Component {
  speed: number = 3
  direction: Vec2 | null = null
  update(dt: number) {
        // if (!this.direction) {
        // return
        // }

        // let dx = this.speed * this.direction.x
        // let dy = this.speed * this.direction.y

        // let pos = this.node.getPosition()
        // pos.x += dx
        // pos.y += dy
        // this.node.setPosition(pos)
  }
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property } = cc._decorator
// 
// @ccclass
// export default class Scene5 extends cc.Component {
//   speed: number = 3
//   direction: cc.Vec2 = null
// 
//   update(dt: number) {
//     if (!this.direction) {
//       return
//     }
// 
//     let dx = this.speed * this.direction.x
//     let dy = this.speed * this.direction.y
// 
//     let pos = this.node.getPosition()
//     pos.x += dx
//     pos.y += dy
//     this.node.setPosition(pos)
//   }
// }
