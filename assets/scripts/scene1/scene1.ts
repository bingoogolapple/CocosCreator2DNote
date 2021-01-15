const { ccclass, property } = cc._decorator

@ccclass
export default class Scene1 extends cc.Component {
  @property(cc.Sprite)
  bgSprite: cc.Sprite = null
  @property(cc.SpriteFrame)
  bgFrame1: cc.SpriteFrame = null
  bgFrame2: cc.SpriteFrame = null
  bgFrame3: cc.SpriteFrame = null

  infoLabel: cc.Label = null
  @property(cc.ProgressBar)
  progressBar: cc.ProgressBar = null
  @property(cc.Prefab)
  prefabOne: cc.Prefab = null
  @property(cc.AudioClip)
  effectAc: cc.AudioClip = null
  @property(cc.AudioClip)
  musicAc: cc.AudioClip = null

  @property({ type: sp.Skeleton, tooltip: "自定义提示文案" })
  skeAnim: sp.Skeleton = null

  @property(cc.Sprite)
  birdSprite: cc.Sprite = null
  @property(cc.Sprite)
  basketBallSprite: cc.Sprite = null
  birdDirection: cc.Vec2 = null
  birdSpeed: number = 3

  @property
  str: string = ""
  @property
  bool: boolean = true
  @property
  num: number = 0

  onLoad() {
    cc.log("onLoad")
    this.infoLabel = this.node
      .getChildByName("info-highlight")
      .getComponent(cc.Label)
    this.progressBar.progress = 0

    this.listenKeydown()
  }

  start() {
    cc.log("start")
  }

  /**
   * 1、1s 执行 60 次，dt 大约为 0.016 秒（16 毫秒），但是人类大脑无法区分，大脑认为动画是连续的
   * 2、帧率越高，操作系统负载越大，可以适当调低帧率 cc.game.setFrameRate(30)
   * 3、注意：帧率是一个全局设置，所以最好在游戏的初始化脚本中设置。建一个 GameInitScript 挂在 Canvas 节点下
   */
  update(dt: number) {
    let progress = this.progressBar.progress + dt / 5
    if (progress >= 1) {
      progress = 0
    }
    this.progressBar.progress = progress

    if (this.birdDirection != null) {
      let birdPosition = this.birdSprite.node.getPosition()
      birdPosition.x += this.birdSpeed * this.birdDirection.x
      birdPosition.y += this.birdSpeed * this.birdDirection.y
      this.birdSprite.node.setPosition(birdPosition)
    }
  }

  onBtnClick(target: cc.Event.EventTouch, data: string) {
    if (data === "bg1") {
      cc.log("使用背景1，直接拖拽")
      this.bgSprite.spriteFrame = this.bgFrame1
    } else if (data == "bg2") {
      cc.log("使用背景2，加载本地图片")
      if (this.bgFrame2) {
        this.bgSprite.spriteFrame = this.bgFrame2
      } else {
        /**
         * 1、如果不在代码里加载资源，一般不要放到 assets/resources 文件夹下，否则即使后续没有用该资源也会被打包到发布包中
         * 2、代码里加载资源必须要求资源在 assets/resources 文件夹下，代码里加载时省去 assets/resources 前缀
         * 如果已经被释放，再次重新加载后展示不出来？
         */
        // cc.loader.loadRes(
        cc.resources.load(
          "img/bg2",
          cc.SpriteFrame,
          (error: Error, resource: cc.SpriteFrame) => {
            if (error) {
              cc.log("加载本地图片失败", error)
              return
            }
            // 方式1：直接赋值
            // this.bgFrame2 = resource

            // 方式2：加载成功后可以通过 cc.loader.getRes 方法直接获取。游戏在进入下一个场景之前提前加载资源，打开下一个场景后就能通过 cc.loader.getRes 直接获取
            this.bgFrame2 = cc.loader.getRes("img/bg2", cc.SpriteFrame)
            this.bgSprite.spriteFrame = this.bgFrame2
          }
        )
      }
    } else if (data == "bg3") {
      cc.log("使用背景3，加载远程图片")
      if (this.bgFrame3) {
        this.bgSprite.spriteFrame = this.bgFrame3
      } else {
        cc.loader.load(
          "http://bgashare.bingoogolapple.cn/banner/imgs/17.png",
          (error: Error, resource: cc.Texture2D) => {
            if (error) {
              cc.log("加载远程图片失败", error)
              return
            }
            this.bgFrame3 = new cc.SpriteFrame(resource)
            this.bgSprite.spriteFrame = this.bgFrame3
            // 设置为图片大小
            // this.bgSprite.node.setContentSize(resource.width, resource.height)
          }
        )
      }
    } else if (data === "remote-json") {
      cc.loader.load(
        {
          url: "http://bgashare.bingoogolapple.cn/banner/api/4item.json",
          type: "json"
        },
        (error: Error, rect: { imgs: String[]; tips: String[] }) => {
          if (error) {
            cc.log("加载远程 json 失败", error)
            return
          }
          cc.log(rect)
        }
      )
    } else if (data === "update-font") {
      cc.log("修改字体大小")
      this.infoLabel.fontSize++
    } else if (data === "open-url") {
      cc.log("打开网址")
      cc.sys.openURL("https://github.com/bingoogolapple/CocosCreatorNote")
    } else if (data === "add-plane") {
      let prefabOneNode = cc.instantiate(this.prefabOne)
      prefabOneNode.parent = this.node
      prefabOneNode.setPosition(
        -480 + 250 + Math.random() * (960 - 500),
        -320 + 50 + Math.random() * (640 - 100)
      )
      prefabOneNode.getChildByName("desc").getComponent(cc.Label).string =
        "飞机" + Math.random()
    } else if (data === "play-effect") {
      cc.log("播放音效")
      let audioId = cc.audioEngine.playEffect(this.effectAc, false)
      cc.audioEngine.setEffectsVolume(0.5)
      cc.audioEngine.stopEffect(audioId)
      // cc.audioEngine.stopAll()
      // cc.audioEngine.stopAllEffects()
      // cc.audioEngine.play(this.effectAc, false, 1) // 播放音频
    } else if (data === "play-music") {
      cc.log("播放背景音乐")
      cc.audioEngine.playMusic(this.musicAc, false)
      cc.audioEngine.setMusicVolume(0.2)
      // cc.audioEngine.isMusicPlaying()
      // cc.audioEngine.stopMusic()
    } else if (data === "open-scene2") {
      cc.director.loadScene("scene2")
    } else if (data === "open-scene3") {
      cc.director.loadScene("scene3")
    } else if (data === "open-scene4") {
      cc.director.loadScene("scene4")
    } else if (data === "open-scene5") {
      cc.director.loadScene("scene5")
    } else if (data === "open-scene6") {
      cc.director.loadScene("scene6")
    } else if (data === "skeleton-run") {
      this.skeAnim.clearTrack(0)
      this.skeAnim.setAnimation(0, "run", true)
    } else if (data === "skeleton-dead") {
      this.skeAnim.clearTrack(0)
      this.skeAnim.setAnimation(0, "dead", false)
      this.skeAnim.addAnimation(0, "normalAttack", true, 2)
    } else if (data === "update-bird-position") {
      let position = this.birdSprite.node.getPosition()
      position.addSelf(cc.v2(30, -30))
      this.birdSprite.node.setPosition(position)
    } else if (data === "bird-tween") {
      let position = this.birdSprite.node.getPosition()
      // 并发动作：位移、旋转同时进行
      // cc.tween(this.birdSprite.node)
      //   .to(1, {
      //     position: cc.v3(position.x + 100, position.y - 100, 0),
      //     rotation: 360
      //   })
      //   .start()

      // 连续动作：先位移后旋转
      cc.tween(this.birdSprite.node)
        .to(
          1,
          {
            position: cc.v3(position.x + 100, position.y - 100, 0)
          },
          { easing: "quadOut" }
        )
        .to(1, {
          rotation: 360
        })
        .start()
      // rotation 大于 0 是顺时针，angle 大于 0 是逆时针

      // cc.tween(this.birdSprite.node)
      //   .by(1, {
      //     position: cc.v3(100, -100, 0)
      //   })
      //   .by(1, {
      //     angle: -360
      //   })
      //   .start()
    } else if (data === "basketball-tween") {
      let h = 100
      this.basketBallSprite.node.setPosition(cc.v2(0, -90))
      cc.tween(this.basketBallSprite.node)
        .by(0.5, { position: cc.v3(0, -h, 0) }, { easing: "quardIn" }) // 加速下降
        .by(0.2, { position: cc.v3(0, h / 6, 0) }, { easing: "quardOut" }) // 减速上升
        .by(0.2, { position: cc.v3(0, -h / 6, 0) }, { easing: "quardIn" }) // 加速下降
        .start()
    }
  }

  onDestroy() {
    /**
     * 1、每个场景有个「自动释放资源」选项，默认不勾选。勾选上后切换场景时会自动释放资源
     * 2、即使勾选了自动释放资源，切换场景时代码里加载的资源也不会自动释放。除非 cc.loader.setAutoRelease(url, true)
     */
    // cc.loader.releaseRes("img/bg2")
    cc.resources.release("img/bg2")
    cc.loader.release("http://bgashare.bingoogolapple.cn/banner/imgs/17.png")
  }
  listenKeydown = () => {
    cc.systemEvent.on(
      cc.SystemEvent.EventType.KEY_DOWN,
      (e: cc.Event.EventKeyboard) => {
        console.log(e)
        switch (e.keyCode) {
          case cc.macro.KEY.left:
            this.birdDirection = cc.v2(-1, 0)
            break
          case cc.macro.KEY.up:
            this.birdDirection = cc.v2(0, 1)
            break
          case cc.macro.KEY.right:
            this.birdDirection = cc.v2(1, 0)
            break
          case cc.macro.KEY.down:
            this.birdDirection = cc.v2(0, -1)
            break
          case cc.macro.KEY.space:
            this.birdDirection = null
            break
        }
      }
    )
  }
}
