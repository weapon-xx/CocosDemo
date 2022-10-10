import { _decorator, Component, Node, Collider, ITriggerEvent, Game, game } from 'cc';
import { Constant } from '../frameWork/Constant';
import { GameManager } from '../frameWork/GameManager';
const { ccclass, property } = _decorator;

@ccclass('BulletProp')
export class BulletProp extends Component {
    private _propSpeed = 0.3;
    private _propXSpeed = 0.3;
    private _gameManager: GameManager = null;

    onEnable() {
        const collider = this.getComponent(Collider);
        collider.on('onTriggerEnter', this._onTriggerEnter , this)
    }

    onDisable() {
        const collider = this.getComponent(Collider);
        collider.off('onTriggerEnter', this._onTriggerEnter , this)
    }

    update(deltaTime: number) {
        let pos = this.node.getPosition();
        if (pos.x >= 24) {
            this._propXSpeed = this._propSpeed;
        } else if (pos.x <= -24) {
            this._propXSpeed = -this._propSpeed;
        }

        this.node.setPosition(pos.x + this._propXSpeed, pos.y, pos.z - this._propSpeed);

        pos = this.node.getPosition();
        if (pos.z > 50) {
            this.node.destroy();
        }

    }

    show(gameManager: GameManager, speed: number) {
        this._gameManager = gameManager;
        this._propSpeed = speed;
    }

    private _onTriggerEnter(event: ITriggerEvent) {
        const name = event.selfCollider.name;
        if (name === 'bulletH') {
            this._gameManager.changeBulletType(Constant.BulletPropType.BULLET_H);
        } else if (name === 'bulletS') {
            this._gameManager.changeBulletType(Constant.BulletPropType.BULLET_S);
        } else {
            this._gameManager.changeBulletType(Constant.BulletPropType.BULLET_M);
        }

        this.node.destroy();
    }
}

