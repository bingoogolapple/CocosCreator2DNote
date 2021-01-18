const { ccclass, property } = cc._decorator

@ccclass
export default class Scene14Game extends cc.Component {
  onLoad() {
    cc.log(this.name)
  }
}
