const { ccclass, property } = cc._decorator

enum GameMode {
  WATERMELON,
  SESAME
}

enum GameState {
  PLAYING,
  GAME_OVER
}

@ccclass
export default class Scene18Game extends cc.Component {
  private static readonly WATERMELON_ARR: number[] = [
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    4,
    5
  ]
  private static readonly SESAME_ARR: number[] = [
    10,
    10,
    10,
    10,
    9,
    9,
    9,
    8,
    8,
    7,
    6
  ]
  static instance: Scene18Game = null

  @property(cc.Label)
  private switchGameModeLabel: cc.Label = null
  @property(cc.Label)
  private titleLabel: cc.Label = null
  @property(cc.Label)
  private scoreLabel: cc.Label = null

  @property(cc.Node)
  private heroNode: cc.Node = null
  @property(cc.Prefab)
  private fruitsPrefab: cc.Prefab = null

  @property([cc.SpriteFrame])
  private fruitsFrameArr: cc.SpriteFrame[] = []
  @property(cc.SpriteFrame)
  private bombFrame: cc.SpriteFrame = null

  private gameMode: GameMode = GameMode.WATERMELON
  private gameState: GameState = GameState.PLAYING
  private step: number = 0
  private fruitsIndex: number = 1

  onLoad() {
    // 开启物理系统
    cc.director.getPhysicsManager().enabled = true

    Scene18Game.instance = this
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)

    this.init()
  }

  onDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
  }

  private onTouchStart(e: cc.Event.EventTouch) {
    if (!this.heroNode.active || this.gameState != GameState.PLAYING) {
      return
    }
    this.setHeroX(e)
  }

  private onTouchMove(e: cc.Event.EventTouch) {
    if (!this.heroNode.active || this.gameState != GameState.PLAYING) {
      return
    }
    this.setHeroX(e)
  }

  private onTouchEnd(e: cc.Event.EventTouch) {
    if (!this.heroNode.active || this.gameState != GameState.PLAYING) {
      return
    }
    this.setHeroX(e)
    this.heroNode.active = false

    this.addFruits(this.fruitsIndex, this.heroNode.getPosition())
    this.scheduleOnce(this.showHero.bind(this), 1)
  }

  private setHeroX(e: cc.Event.EventTouch) {
    let heroX = this.node.convertToNodeSpaceAR(e.getLocation()).x
    heroX = Math.min(heroX, cc.winSize.width / 2 - this.heroNode.width / 2)
    heroX = Math.max(heroX, -cc.winSize.width / 2 + this.heroNode.width / 2)
    this.heroNode.x = heroX
  }

  private init() {
    this.step = 0
    this.gameState = GameState.PLAYING
    this.showHero()
  }

  private showHero() {
    this.step++

    if (this.gameMode == GameMode.WATERMELON) {
      let index = Math.floor(Math.random() * Scene18Game.WATERMELON_ARR.length)
      if (this.step <= 2) {
        index = 0
      }
      this.fruitsIndex = Scene18Game.WATERMELON_ARR[index]
    } else {
      let index = Math.floor(Math.random() * Scene18Game.SESAME_ARR.length)
      if (this.step <= 2) {
        index = 0
      }
      this.fruitsIndex = Scene18Game.SESAME_ARR[index]
    }
    this.heroNode.getComponent(cc.Sprite).spriteFrame = this.fruitsFrameArr[
      this.fruitsIndex
    ]

    let fruitsSize = this.calculateFruitsSize(this.fruitsIndex)
    this.heroNode.width = fruitsSize
    this.heroNode.height = fruitsSize
    this.heroNode.scale = 0.8
    this.heroNode.active = true
    this.heroNode.y = cc.winSize.height / 2 - 15 - fruitsSize / 2

    this.heroNode.runAction(cc.scaleTo(0.2, 1))
  }

  private calculateFruitsSize(fruitsIndex: number) {
    return 40 + fruitsIndex * 20
  }

  private addFruits(fruitsIndex: number, position: cc.Vec2) {
    let fruitsNode: cc.Node = cc.instantiate(this.fruitsPrefab)
    let fruitsSize = this.calculateFruitsSize(fruitsIndex)
    fruitsNode.width = fruitsSize
    fruitsNode.height = fruitsSize
    fruitsNode.setPosition(position)
    fruitsNode.getComponent(cc.Sprite).spriteFrame = this.fruitsFrameArr[
      fruitsIndex
    ]
    fruitsNode.getComponent(cc.RigidBody).gravityScale = 4 + fruitsIndex * 1
    fruitsNode.getComponent(cc.PhysicsCircleCollider).radius = fruitsSize / 2
    fruitsNode.parent = this.node
  }

  switchGameMode(target: cc.Event.EventTouch, data: string) {
    if (this.gameMode == GameMode.WATERMELON) {
      this.gameMode = GameMode.SESAME
      this.switchGameModeLabel.string = "大西瓜"
      this.titleLabel.string = "合成小芝麻"
    } else {
      this.gameMode = GameMode.WATERMELON
      this.switchGameModeLabel.string = "小芝麻"
      this.titleLabel.string = "合成大西瓜"
    }
  }
}
