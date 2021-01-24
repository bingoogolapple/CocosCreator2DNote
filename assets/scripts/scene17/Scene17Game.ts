import Scene17RectItem from "./Scene17RectItem"

const { ccclass, property } = cc._decorator

@ccclass
export default class Scene17Game extends cc.Component {
  private static readonly RECT_ITEM_COUNT: number = 8
  // 圆形抽象节点
  @property(cc.Node)
  circleNode: cc.Node = null
  // 圆形转盘节点，用于实现选择动画
  @property(cc.Node)
  turntableNode: cc.Node = null
  // 矩形抽奖节点
  @property(cc.Node)
  rectNode: cc.Node = null

  // 圆形转盘中奖概率
  circleProbabilityArr: number[] = [
    30,
    40,
    50,
    60,
    65,
    75,
    76,
    81,
    91,
    96,
    98,
    100
  ]
  // 圆形转盘奖品
  circlePrizeArr: string[] = [
    "谢谢参与",
    "10元话费",
    "雨伞",
    "富光水杯",
    "小爱同学",
    "旅游背包",
    "oppo手机",
    "体重秤",
    "现金红包",
    "房卡",
    "手机支架",
    "充电宝"
  ]
  // 是否正在进行圆形转盘抽奖
  isCirclePlaying: boolean = false

  // 矩形奖品条目组件
  rectItemArr: Scene17RectItem[] = []
  // 矩形转盘中奖概率
  rectProbabilityArr: number[] = [20, 21, 31, 41, 61, 81, 91, 100]
  // 矩形转盘奖品
  rectPrizeArr: string[] = [
    "谢谢参与",
    "iPhone 11",
    "20G流量",
    "50元红包",
    "谢谢参与",
    "5元红包",
    "30元话费",
    "50元红包"
  ]
  // 是否正在进行矩形转盘抽奖
  isRectPlaying: boolean = false
  // 记录矩形抽奖 update 次数，和 rectSpeed 结合使用来控制速度
  rectTime: number = 0
  // 和 rectTime 结合使用来控制速度
  rectSpeed: number = 8
  // 矩形转盘中奖索引
  rectProbabilityIndex: number = 0
  // 矩形转盘当前选中索引
  currentRectIndex: number = 0

  onLoad() {
    let containerNode = cc.find("container-inner", this.rectNode)
    for (let i = 0; i < Scene17Game.RECT_ITEM_COUNT; i++) {
      this.rectItemArr.push(
        cc.find(i.toString(), containerNode).getComponent(Scene17RectItem)
      )
    }
  }

  changeToCircle() {
    this.circleNode.active = true
    this.rectNode.active = false
  }

  changeToRect() {
    this.rectNode.active = true
    this.circleNode.active = false
  }

  circleStart() {
    if (this.isCirclePlaying) {
      return
    }

    this.isCirclePlaying = true
    let probabilityIndex = this.getProbabilityIndex(this.circleProbabilityArr)
    console.log(
      `抽中的是：${probabilityIndex} 奖品是：${this.circlePrizeArr[probabilityIndex]}`
    )

    // 1、将上一轮最终 angle 重置到 [-360, 0] 区域，上一轮旋转「probabilityIndex * 30」度后 angle 变为了「-probabilityIndex * 30」
    this.resetRangeAngle()
    // 2、这一轮再次旋转「-probabilityIndex * 30 + 360」度后相当于刚好转了一整圈，又指向了起点，此时 angle 变为了 -360
    let rotation = this.turntableNode.angle + 360
    // 3、在新起点的基础上再次旋转「probabilityIndex * 30」度进行抽奖
    rotation += probabilityIndex * 30
    if (rotation < 360) {
      // 避免真正抽时奖旋转未满一圈，加上 360
      rotation += 360
    }

    // 避免旋转时间太短，提前旋转两圈
    let act_1 = cc.rotateBy(2, 360 * 4).easing(cc.easeCubicActionIn()) // 由慢到快
    // 真正的抽奖旋转
    let act_2 = cc
      .rotateBy(rotation / 200.0, rotation)
      .easing(cc.easeCubicActionOut()) // 由快到慢
    let seq = cc.sequence(
      act_1,
      act_2,
      cc.callFunc(() => {
        this.isCirclePlaying = false
      })
    )
    this.turntableNode.runAction(seq)
  }

  // 将上一轮最终 angle 重置到 [-360, 0] 区域，上一轮旋转「probabilityIndex * 30」度后 angle 变为了「-probabilityIndex * 30」
  private resetRangeAngle() {
    let angle = this.turntableNode.angle
    while (true) {
      if (angle < -360) {
        angle = angle + 360
      } else if (angle >= 0) {
        angle = angle - 360
      } else {
        break
      }
    }
    this.turntableNode.angle = angle
  }

  // 根据概率返回抽奖的角标
  getProbabilityIndex(probabilityArr: number[]) {
    let probability = Math.random() * 100

    let length = probabilityArr.length
    for (let i = 0; i < length; i++) {
      if (probability < probabilityArr[i]) {
        return i
      }
    }
    return 0
  }

  rectStart() {
    if (this.isRectPlaying) {
      return
    }

    this.isRectPlaying = true

    this.rectTime = 0
    this.rectSpeed = 8

    this.rectItemArr[this.currentRectIndex].flag.active = true

    this.rectProbabilityIndex = this.getProbabilityIndex(
      this.rectProbabilityArr
    )
    console.log(
      `抽中的是：${this.rectProbabilityIndex} 奖品是：${
        this.rectPrizeArr[this.rectProbabilityIndex]
      }`
    )
  }

  update(dt: number) {
    if (this.isRectPlaying) {
      this.rectTime++

      // update 方法每执行 rectSpeed 次就更新一下选中位置
      if (this.rectTime > this.rectSpeed) {
        // 重置 update 执行次数
        this.rectTime = 0
        // 当前选中索引加 1
        this.currentRectIndex++

        // 每转一圈（索引达到最大值）时 rectSpeed 加 1，相当于减速
        if (this.currentRectIndex > Scene17Game.RECT_ITEM_COUNT - 1) {
          this.currentRectIndex = 0
          this.rectSpeed++
        }
        // rectSpeed 达到 11（3 圈后）时再次减速
        if (this.rectSpeed == 11) {
          this.rectSpeed = 20
        }

        // rectSpeed 达到 21（4 圈后）时开始最后一圈，即第 5 圈为最后一圈
        if (this.rectSpeed == 21) {
          // 最后一圈的当前索引为中奖索引时抽奖结束
          if (this.currentRectIndex == this.rectProbabilityIndex) {
            this.isRectPlaying = false
          }
        }

        // 隐藏前一个选中位置
        if (this.currentRectIndex == 0) {
          this.rectItemArr[Scene17Game.RECT_ITEM_COUNT - 1].flag.active = false
        } else {
          this.rectItemArr[this.currentRectIndex - 1].flag.active = false
        }
        // 选中新的位置
        this.rectItemArr[this.currentRectIndex].flag.active = true
      }
    }
  }
}
