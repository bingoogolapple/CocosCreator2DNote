const { ccclass, property } = cc._decorator

@ccclass
export default class Scene15Game extends cc.Component {
  onLoad() {
    cc.log(this.name)
  }
}
