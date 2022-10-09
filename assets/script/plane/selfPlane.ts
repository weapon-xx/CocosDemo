import { _decorator, Component, Node, Collider, ITriggerEvent } from 'cc';
import { Constant } from '../frameWork/Constant';
const { ccclass, property } = _decorator;

@ccclass('selfPlane')
export class selfPlane extends Component {

    onEnable() {
        const collider = this.getComponent(Collider);
        collider.on('onTriggerEnter', this._onTriggerEnter , this)
    }

    onDisable() {
        const collider = this.getComponent(Collider);
        collider.off('onTriggerEnter', this._onTriggerEnter , this)
    }

    update(deltaTime: number) {
        
    }

    private _onTriggerEnter(event: ITriggerEvent) {
        const collisionGroup = event.otherCollider.getGroup();

        if (collisionGroup === Constant.ConllisionType.ENEMY_PLANE || collisionGroup === Constant.ConllisionType.ENEMY_BULLET) {
            console.log('reduce blood');
        }
    }
}

