import { Observable } from '@babylonjs/core/Misc/observable';
import { Scene } from '@babylonjs/core/scene';
import { FilesInput } from '@babylonjs/core/Misc/filesInput';

export class GlobalState {
    public currentScene!: Scene;
    public onSceneLoaded = new Observable<{ scene: Scene, filename: string }>();
    public onError = new Observable<{ scene?: Scene, message?: string }>();
    onSkyBoxChanged = new Observable<string>();
    public onEnvironmentChanged = new Observable<string>();
    public onRequestClickInterceptor = new Observable<void>();
    public onClickInterceptorClicked = new Observable<void>();
    public glTFLoaderExtensions: { [key: string]: import("@babylonjs/loaders/glTF/index").IGLTFLoaderExtension } = {};

    public filesInput!: FilesInput;
    public isDebugLayerEnabled = false;

    public commerceMode = false;

    public reflector?: {
        hostname: string;
        port: number;
    };

    public showDebugLayer() {
        this.isDebugLayerEnabled = true;
        if (this.currentScene) {
            this.currentScene.debugLayer.show();
        }
    }

    public hideDebugLayer() {
        this.isDebugLayerEnabled = false;
        if (this.currentScene) {
            this.currentScene.debugLayer.hide();
        }
    }
}