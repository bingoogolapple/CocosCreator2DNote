const { ccclass, property } = cc._decorator
import BulletComponent from "./BulletComponent"
import Common from "./Common"

@ccclass
export default class CannonComponent extends cc.Component {
  // 炮塔
  cannonSprite: cc.Sprite = null
  @property(cc.SpriteFrame)
  cannonFrameNormal: cc.SpriteFrame = null
  @property(cc.SpriteFrame)
  cannonFramePressed: cc.SpriteFrame = null

  // 子弹图片
  @property(cc.SpriteFrame)
  bulletFrame: cc.SpriteFrame = null
  // 爆炸图片
  @property(cc.SpriteFrame)
  explodeEffectFrame: cc.SpriteFrame = null

  // 音效
  @property(cc.AudioClip)
  fireAudio: cc.AudioClip = null
  @property(cc.AudioClip)
  explodeAudio: cc.AudioClip = null

  startPos: cc.Vec2 = null
  startAngle: number = null

  onLoad() {
    this.cannonSprite = this.getComponent(cc.Sprite)
    /**
     * cc.Node.angle 属性：逆时针为正，顺时针为负
     * cc.Node.rotation 属性（官方不推荐使用）：顺时针为正，逆时针为负
     */
    // 初始角度设为 90 度
    this.node.angle = 90

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
  }

  onTouchStart(e: cc.Event.EventTouch) {
    // startPos : 触点开始的位置
    this.startPos = this.node.parent.convertToNodeSpaceAR(e.getLocation())
    // startAngle : 炮口的初始角度 (x轴方向为0度)
    this.startAngle = this.node.angle

    // 按下时图片
    this.cannonSprite.spriteFrame = this.cannonFramePressed
  }

  onTouchMove(e: cc.Event.EventTouch) {
    // 触点的当前位置
    let pos = this.node.parent.convertToNodeSpaceAR(e.getLocation())

    /**
     * 求两个向量的夹角
     * 1、不区分正负
     * let radian = aPos.angle(bPos)
     * 2、区分正负
     * let radian = aPos.signAngle(bPos)
     * aPos 位于 bPos 的顺时针方向：角度为正
     * aPos 位于 bPos 的逆时针方向：角度为负
     */
    let sweep_radian = pos.signAngle(this.startPos)
    // 弧度 radian -> 角度 angle
    let sweep_angle = (sweep_radian / Math.PI) * 180

    // 炮口的新指向。比如，原来炮口 90 度，向右摆动 15 度，则炮口应指向 75 度
    let angle = this.startAngle - sweep_angle
    // 炮口角度限制在 45~135 度之间
    if (angle < 45) {
      angle = 45
    }
    if (angle > 135) {
      angle = 135
    }

    /**
     * cc.Node.angle 属性：逆时针为正，顺时针为负
     * cc.Node.rotation 属性（官方不推荐使用）：顺时针为正，逆时针为负
     */
    this.node.angle = angle
  }

  onTouchEnd(e: cc.Event.EventTouch) {
    this.fire()
    // 普通状态图片
    this.node.getComponent(cc.Sprite).spriteFrame = this.cannonFrameNormal
  }

  // 开火
  fire() {
    if (!this.bulletFrame) {
      cc.log("请设置 bulletFrame 图片")
      return
    }

    // 炮口的指向，应是子弹的运行方向
    let angle: number = this.node.angle
    // 角度 angle -> 弧度 radian
    let radian = (angle / 180) * Math.PI
    // 标准化向量
    let direction = cc.v2(Math.cos(radian), Math.sin(radian))

    // 动态创建一个 Node，添加 Sprite 组件
    let bulletNode: cc.Node = new cc.Node()
    let bulletSprite: cc.Sprite = bulletNode.addComponent(cc.Sprite)
    // 设置子弹的图片
    bulletSprite.spriteFrame = this.bulletFrame
    // 指定父节点来挂载子弹，都添加到「Canvas/射击系统」里
    bulletNode.parent = this.node.parent

    // 设置子弹的角度
    bulletNode.angle = this.node.angle
    // 设置子弹的初始位置
    let r = 120 // 子弹与射击基准（炮塔圆点）的距离
    let bullet_x = r * direction.x
    let bullet_y = r * direction.y
    bulletNode.setPosition(cc.v3(bullet_x, bullet_y, 0))

    // 给子弹附加脚本组件
    let bullet: BulletComponent = bulletNode.addComponent(BulletComponent)
    // 子弹的飞行方向
    bullet.direction = direction
    bullet.target = cc.find("Canvas/靶子")
    bullet.explodeEffectFrame = this.explodeEffectFrame
    bullet.explodeAudio = this.explodeAudio

    Common.magazine.consume(1)

    // 音效
    if (this.fireAudio) {
      cc.audioEngine.play(this.fireAudio, false, 1)
    }
  }
}
