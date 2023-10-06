import {
  _decorator,
  Component,
  Prefab,
  Node,
  Sprite,
  SpriteFrame,
  Label,
  ProgressBar,
  AudioClip,
  Vec2,
  EventTouch,
  sp,
  log,
  error,
  AudioSource,
  instantiate,
  macro,
  EventKeyboard,
  systemEvent,
  SystemEvent,
  loader,
  resources,
  director,
  find,
  tween,
  v3,
  v2,
  Animation,
  AnimationState,
  Texture2D,
  sys,
  TextAsset,
  JsonAsset,
  ImageAsset,
  assetManager,
  UITransform,
  Size,
} from "cc";
const { ccclass, property } = _decorator;

import OpenScenePrefab from "../OpenScenePrefab";
import { AudioMgr } from "../utils/AudioMgr";

@ccclass("Scene1")
export default class Scene1 extends Component {
  @property(TextAsset)
  textAsset: TextAsset = null!;
  @property(JsonAsset)
  jsonAsset: JsonAsset = null!;
  @property(Prefab)
  openScenePrefab: Prefab | null = null;
  @property(Node)
  btnContainerNode: Node | null = null;
  @property(Sprite)
  bgSprite: Sprite | null = null;
  @property(SpriteFrame)
  bgFrame1: SpriteFrame | null = null;
  bgFrame2: SpriteFrame | null = null;
  bgFrame3: SpriteFrame | null = null;
  infoLabel: Label | null = null;
  @property(ProgressBar)
  progressBar: ProgressBar | null = null;
  @property(Prefab)
  prefabOne: Prefab | null = null;
  @property(AudioClip)
  effectAc: AudioClip | null = null;
  @property(AudioClip)
  musicAc: AudioClip | null = null;
  @property({ type: sp.Skeleton, tooltip: "自定义提示文案" })
  skeAnim: sp.Skeleton = null;
  @property(Sprite)
  birdSprite: Sprite | null = null;
  @property(Sprite)
  basketBallSprite: Sprite | null = null;
  birdDirection: Vec2 | null = null;
  birdSpeed: number = 3;
  @property
  str: string = "";
  @property
  bool: boolean = true;
  @property
  num: number = 0;

  _audioSource: AudioSource = null!;

  onLoad() {
    // 如果某个节点在场景编辑器中默认设置的 active 为 false，则不会自动调用 onLoad 方法
    log("onLoad");
    this.testTextAssetAndJsonAsset();

    this._audioSource = this.node.getComponent(AudioSource);

    this.addOpenSceneNodes();

    this.infoLabel = this.node
      .getChildByName("info-highlight")
      .getComponent(Label);
    this.progressBar.progress = 0;

    this.listenKeydown();

    this.scheduleOnce(() => {
      // this._audioSource.stop();
      log("关闭 AudioSource");
    }, 10);
  }
  addOpenSceneNodes() {
    for (let i = 2; i <= 19; i++) {
      let openSceneNode = instantiate(this.openScenePrefab);
      let openScenePrefabComponent =
        openSceneNode.getComponent(OpenScenePrefab);
      openScenePrefabComponent.scenePostfix = i;
      this.btnContainerNode.addChild(openSceneNode);
    }
  }
  /**
   * 测试文本和 JSON 资源
   */
  testTextAssetAndJsonAsset() {
    log("直接加载的 textAsset", this.textAsset.text); // 文本
    // 动态加载时不带文件后缀名
    resources.load("text/2", TextAsset, (err: Error, res: TextAsset) => {
      if (err) {
        error(err.message || err);
        return;
      }
      log("动态加载的 textAsset", res.text); // 文本
    });
    log("直接加载的 jsonAsset", this.jsonAsset.json); // 解析后的 js 对象
    // 动态加载时不带文件后缀名
    resources.load("json/2", JsonAsset, (err: Error, res: JsonAsset) => {
      if (err) {
        error(err.message || err);
        return;
      }
      log("动态加载的 jsonAsset", res.json); // 解析后的 js 对象
    });
  }
  start() {
    log("start");
  }
  /**
   * 1、1s 执行 60 次，dt 大约为 0.016 秒（16 毫秒），但是人类大脑无法区分，大脑认为动画是连续的
   * 2、帧率越高，操作系统负载越大，可以适当调低帧率 game.setFrameRate(30)
   * 3、注意：帧率是一个全局设置，所以最好在游戏的初始化脚本中设置。建一个 GameInitScript 挂在 Canvas 节点下
   */
  update(dt: number) {
    // let progress = this.progressBar.progress + dt / 5
    // if (progress >= 1) {
    //   progress = 0
    // }
    // this.progressBar.progress = progress
    if (this.birdDirection != null) {
      let birdPosition = this.birdSprite.node.getPosition();
      birdPosition.x += this.birdSpeed * this.birdDirection.x;
      birdPosition.y += this.birdSpeed * this.birdDirection.y;
      this.birdSprite.node.setPosition(birdPosition);
    }
  }
  onBtnClick(target: EventTouch, data: string) {
    if (data === "bg1") {
      log("使用背景1，直接拖拽");
      this.bgSprite.spriteFrame = this.bgFrame1;
    } else if (data == "bg2") {
      log("使用背景2，加载本地图片");
      if (this.bgFrame2) {
        this.bgSprite.spriteFrame = this.bgFrame2;
      } else {
        /**
         * 1、如果不在代码里加载资源，一般不要放到 assets/resources 文件夹下，否则即使后续没有用该资源也会被打包到发布包中
         * 2、代码里加载资源必须要求资源在 assets/resources 文件夹下，代码里加载时省去 assets/resources 前缀
         * 如果已经被释放，再次重新加载后展示不出来？
         */

        // 如果直接加载 img/bg2，得到的类型将会是 ImageAsset，需要自己手动将 ImageAsset 转换为 Texture2D 再转换为 SpriteFrame，或者通过 createWithImage 方法创建 SpriteFrame
        // resources.load("img/bg2", ImageAsset, (error, imageAsset) => {
        //   if (error) {
        //     log("加载本地图片失败", error);
        //     return;
        //   }
        //   // const texture = new Texture2D();
        //   // texture.image = imageAsset;
        //   // const spriteFrame = new SpriteFrame();
        //   // spriteFrame.texture = texture;
        //   const spriteFrame = SpriteFrame.createWithImage(imageAsset);
        //   this.bgFrame2 = spriteFrame;
        //   this.bgSprite.spriteFrame = this.bgFrame2;
        // });

        // 必须指定路径到具体的子资源，才能加载到图片生成的 SpriteFrame
        resources.load(
          "img/bg2/spriteFrame",
          SpriteFrame,
          (error, spriteFrame) => {
            if (error) {
              log("加载本地图片失败", error);
              return;
            }
            // 方式1：直接赋值
            this.bgFrame2 = spriteFrame;

            // 方式2：加载成功后可以通过 resources.get 方法直接获取。游戏在进入下一个场景之前提前加载资源，打开下一个场景后就能通过 resources.get 直接获取，也可以调用 resources.preload 来预加载
            // this.bgFrame2 = resources.get("img/bg2/spriteFrame", SpriteFrame);

            this.bgSprite.spriteFrame = this.bgFrame2;
          }
        );
      }
    } else if (data == "bg3") {
      log("使用背景3，加载远程图片");
      if (this.bgFrame3) {
        this.bgSprite.spriteFrame = this.bgFrame3;
      } else {
        assetManager.loadRemote<ImageAsset>(
          "https://s1.aigei.com/src/img/png/99/99da362d8b4249fc84463da4120df1da.png?imageView2/2/w/1290/%7Cwatermark/3/text/54ix57uZ572R57Sg5p2Q57yW5Y-3IzcxMTMzMDA=/font/5b6u6L2v6ZuF6buR/fontsize/962/fill/cmVk/dissolve/82/gravity/SouthEast/dx/12/dy/12/text/5ZWG5Lia5o-S5Zu-/font/5b6u6L2v6ZuF6buR/fontsize/962/fill/cmVk/dissolve/82/gravity/NorthWest/dx/12/dy/12/text/MjQ3OcOXMzUxNw==/font/5b6u6L2v6ZuF6buR/fontsize/962/fill/cmVk/dissolve/82/gravity/SouthWest/dx/12/dy/12/text/5ZWG5Lia5o-S5Zu-ICgzKQ==/font/5b6u6L2v6ZuF6buR/fontsize/962/fill/cmVk/dissolve/82/gravity/NorthEast/dx/12/dy/12//text/54ix57uZ572RIGFpZ2VpLmNvbQ==/font/5b6u6L2v6ZuF6buR/fontsize/915/fill/R3JlZW4=/dissolve/60/gravity/NorthWest/dx/237/dy/295/text/54ix57uZ572RIGFpZ2VpLmNvbQ==/font/5b6u6L2v6ZuF6buR/fontsize/915/fill/UHVycGxl/dissolve/60/gravity/NorthWest/dx/237/dy/1210&e=1696698000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:G5YwVMXwJqk2UkNWRGruaWVAXbs=",
          {
            ext: ".jpg",
          },
          (error, imageAsset) => {
            if (error) {
              log("加载远程图片失败", error);
              return;
            }

            // const texture = new Texture2D();
            // texture.image = imageAsset;

            // this.bgFrame3 = new SpriteFrame();
            // this.bgFrame3.texture = texture;
            this.bgFrame3 = SpriteFrame.createWithImage(imageAsset);

            this.bgSprite.spriteFrame = this.bgFrame3;
            // 设置为图片大小
            // this.bgSprite.node.getComponent(UITransform).contentSize = new Size(
            //   texture.width,
            //   texture.height
            // );
          }
        );
      }
    } else if (data === "remote-text") {
      assetManager.loadRemote<TextAsset>(
        "https://github.com/bingoogolapple/bingoogolapple.github.io/files/12833740/3.txt",
        (error, textAsset) => {
          if (error) {
            log("加载远程 text 失败", error);
            return;
          }
          log("远程文本内容", textAsset.text);
        }
      );
    } else if (data === "update-font") {
      log("修改字体大小");
      this.infoLabel.fontSize++;
    } else if (data === "open-url") {
      log("打开网址");
      sys.openURL("https://github.com/bingoogolapple/CocosCreatorNote");
    } else if (data === "add-plane") {
      let prefabOneNode = instantiate(this.prefabOne);
      prefabOneNode.parent = this.node;
      prefabOneNode.setPosition(
        -480 + 250 + Math.random() * (960 - 500),
        -320 + 50 + Math.random() * (640 - 100)
      );
      prefabOneNode.getChildByName("desc").getComponent(Label).string =
        "飞机" + Math.random();
    } else if (data === "play-effect") {
      log("播放音效");
      // playOneShot 是一次性播放操作，播放后的音效无法暂停或停止播放，也无法监听播放结束的事件回调
      // this._audioSource.playOneShot(this.effectAc);

      AudioMgr.instance.playOneShot(this.effectAc);
    } else if (data === "play-music") {
      log("播放背景音乐");
      /**
       * 监听音频播放事件
       * this._audioSource.node.on(AudioSource.EventType.STARTED, this.onAudioStarted, this);
       * this._audioSource.node.off(AudioSource.EventType.STARTED, this.onAudioStarted, this);
       */
      // this._audioSource.clip = this.musicAc;
      // this._audioSource.play();
      // this._audioSource.volume = 0.5;
      // this._audioSource.playing
      // this._audioSource.stop()

      AudioMgr.instance.play(this.musicAc);
    } else if (data === "skeleton-run") {
      this.skeAnim.clearTrack(0);
      this.skeAnim.setAnimation(0, "run", true);
    } else if (data === "skeleton-dead") {
      this.skeAnim.clearTrack(0);
      this.skeAnim.setAnimation(0, "dead", false);
      this.skeAnim.addAnimation(0, "normalAttack", true, 2);
    } else if (data === "update-bird-position") {
      let position = this.birdSprite.node.getPosition();
      position.add(v3(30, -30, 0));
      this.birdSprite.node.setPosition(position);
    } else if (data === "bird-tween") {
      let position = this.birdSprite.node.getPosition();
      // 并发动作：位移、旋转同时进行
      // tween(this.birdSprite.node)
      //   .to(1, {
      //     position: v3(position.x + 100, position.y - 100, 0),
      //     rotation: 360
      //   })
      //   .start()
      // 连续动作：先位移后旋转
      tween(this.birdSprite.node)
        .to(
          1,
          {
            position: v3(position.x + 100, position.y - 100, 0),
          },
          { easing: "quadOut" }
        )
        .to(1, {
          //   rotation: 360, // TODO
        })
        .start();
      // rotation 大于 0 是顺时针，angle 大于 0 是逆时针
      // tween(this.birdSprite.node)
      //   .by(1, {
      //     position: v3(100, -100, 0)
      //   })
      //   .by(1, {
      //     angle: -360
      //   })
      //   .start()
    } else if (data === "basketball-tween") {
      let h = 100;
      this.basketBallSprite.node.setPosition(v3(0, -90, 0));
      // https://docs.cocos.com/creator/manual/zh/scripting/tween.html
      // https://docs.cocos.com/creator/api/zh/classes/Easing.html
      // https://easings.net
      tween(this.basketBallSprite.node)
        .by(0.5, { position: v3(0, -h, 0) }, { easing: "quadIn" }) // 加速下降
        .by(0.2, { position: v3(0, h / 6, 0) }, { easing: "quadOut" }) // 减速上升
        .by(0.2, { position: v3(0, -h / 6, 0) }, { easing: "quadIn" }) // 加速下降
        .start();
    } else if (data === "rabbit-anim") {
      let anim: Animation = find("Canvas/兔子动画").getComponent(Animation);
      // @ts-ignore
      let state: AnimationState = anim.play();
    } else if (data === "preload-scene10") {
      director.preloadScene(
        "scene10",
        (current: number, count: number, item: any) => {
          log("加载进度：" + current + " " + count + " " + item);
          this.progressBar.progress = current / count;
        },
        (error: Error) => {
          if (error) {
            log("预加载场景 10 失败", error);
          } else {
            log("预加载场景 10 成功");
            director.loadScene("scene10");
          }
        }
      );
    }
  }
  onDestroy() {
    /**
     * 1、每个场景有个「自动释放资源」选项，默认不勾选。勾选上后切换场景时会自动释放资源
     * 2、即使勾选了自动释放资源，切换场景时代码里加载的资源也不会自动释放。除非 loader.setAutoRelease(url, true)
     */
    resources.release("img/bg2");
    // assetManager.releaseAsset(asset)
  }
  listenKeydown = () => {
    systemEvent.on(SystemEvent.EventType.KEY_DOWN, (e: EventKeyboard) => {
      log(e);
      switch (e.keyCode) {
        case macro.KEY.left:
          this.birdDirection = v2(-1, 0);
          break;
        case macro.KEY.up:
          this.birdDirection = v2(0, 1);
          break;
        case macro.KEY.right:
          this.birdDirection = v2(1, 0);
          break;
        case macro.KEY.down:
          this.birdDirection = v2(0, -1);
          break;
        case macro.KEY.space:
          this.birdDirection = null;
          break;
      }
    });
  };
}
