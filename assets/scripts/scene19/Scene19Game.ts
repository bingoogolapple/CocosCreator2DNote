import Ball from "./Ball"
import Block from './Block';

const { ccclass, property } = cc._decorator

/**
 * 小球：
 * 勾选 Enabled Contack Listener：启用接触监听器
 * 勾选 Fixed Rotation：禁止小球旋转
 * 修改 Friction 为 0：不设置摩擦系数
 * 修改 Restitution 为 1：设置弹性系数为 1 时碰撞后会反弹到和下落点相同的高度
 *
 * 方块：
 * 修改 Type 为 Static：禁止不动的，避免方块掉落
 */
@ccclass
export default class Scene19Game extends cc.Component {
  private static readonly BLOCK_COUNT: number = 10
  @property(cc.Label)
  private scoreLabel: cc.Label = null
  @property(cc.Node)
  private ballNode: cc.Node = null
  @property(cc.Prefab)
  private blockPrefab: cc.Prefab = null

  private blockNodeArr: cc.Node[] = []
  private score: number = 0

  private gameStarted: boolean = false

  onLoad() {
    this.initPhysics()
    this.node.on(cc.Node.EventType.TOUCH_START, this.boost, this)

    this.ballNode.x = -cc.winSize.width / 2 + 100
    this.ballNode.y = cc.winSize.height / 8
    this.initBlock()
  }

  onDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_END, this.boost, this)
  }

  /**
   * 加速
   */
  private boost() {
    if (!this.ballNode.getComponent(Ball).initVelocityY) {
      return
    }
    let rigidBody = this.ballNode.getComponent(cc.RigidBody)
    rigidBody.linearVelocity = cc.v2(0, -1600)
    this.gameStarted = true
  }

  /**
   * 初始化物理引擎
   */
  private initPhysics() {
    cc.director.getPhysicsManager().enabled = true
    // cc.director.getPhysicsManager().debugDrawFlags =
    // cc.PhysicsManager.DrawBits.e_aabbBit |
    // cc.PhysicsManager.DrawBits.e_jointBit |
    // cc.PhysicsManager.DrawBits.e_shapeBit
    cc.director.getPhysicsManager().gravity = cc.v2(0, -2400)
  }

  private initBlock() {
    // 最后一个方块的 x
    let lastBlockX = this.ballNode.x
    for (let i = 0; i < Scene19Game.BLOCK_COUNT; i++) {
      let blockNode = cc.instantiate(this.blockPrefab)
      blockNode.x = lastBlockX
      blockNode.y = -cc.winSize.height / 7 + Math.random() * 60
      blockNode.getComponent(Block).init()
      this.node.addChild(blockNode)
      this.blockNodeArr.push(blockNode)
      lastBlockX += this.getBlockXOffset()
    }
  }

  update(dt: number) {
    if (!this.gameStarted) {
      return
    }

    let speed = -450 * dt
    for (let blockNode of this.blockNodeArr) {
      blockNode.x += speed
      if (blockNode.x < -cc.winSize.width / 2 - blockNode.width / 2) {
        blockNode.x = this.getLastBlockX() + this.getBlockXOffset()
        this.incrementScore(1)
      }
    }

    if (this.ballNode.y < -cc.winSize.height / 3) {
      console.log("游戏结束")
      this.gameStarted = false
      cc.director.loadScene("scene19")
    }
  }

  /**
   * 获取每个方块的横向间距
   */
  private getBlockXOffset(): number {
    return 170 + Math.random() * 60
  }

  /**
   * 获取最后一个方块的 x
   */
  private getLastBlockX(): number {
    let maxX = 0
    for (let blockNode of this.blockNodeArr) {
      if (blockNode.x > maxX) {
        maxX = blockNode.x
      }
    }
    return maxX
  }

  incrementScore(increment: number) {
    this.score += increment
    this.scoreLabel.string = this.score.toString()
  }
}
