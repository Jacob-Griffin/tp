/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil-community/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface TpCanvas {
        "exportDrawing": () => Promise<unknown>;
        "height": number;
        "width": number;
    }
    interface TpCanvasControls {
    }
    interface TpGameColumn {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLTpCanvasElement extends Components.TpCanvas, HTMLStencilElement {
    }
    var HTMLTpCanvasElement: {
        prototype: HTMLTpCanvasElement;
        new (): HTMLTpCanvasElement;
    };
    interface HTMLTpCanvasControlsElement extends Components.TpCanvasControls, HTMLStencilElement {
    }
    var HTMLTpCanvasControlsElement: {
        prototype: HTMLTpCanvasControlsElement;
        new (): HTMLTpCanvasControlsElement;
    };
    interface HTMLTpGameColumnElement extends Components.TpGameColumn, HTMLStencilElement {
    }
    var HTMLTpGameColumnElement: {
        prototype: HTMLTpGameColumnElement;
        new (): HTMLTpGameColumnElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "tp-canvas": HTMLTpCanvasElement;
        "tp-canvas-controls": HTMLTpCanvasControlsElement;
        "tp-game-column": HTMLTpGameColumnElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface TpCanvas {
        "height"?: number;
        "width"?: number;
    }
    interface TpCanvasControls {
    }
    interface TpGameColumn {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "tp-canvas": TpCanvas;
        "tp-canvas-controls": TpCanvasControls;
        "tp-game-column": TpGameColumn;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "tp-canvas": LocalJSX.TpCanvas & JSXBase.HTMLAttributes<HTMLTpCanvasElement>;
            "tp-canvas-controls": LocalJSX.TpCanvasControls & JSXBase.HTMLAttributes<HTMLTpCanvasControlsElement>;
            "tp-game-column": LocalJSX.TpGameColumn & JSXBase.HTMLAttributes<HTMLTpGameColumnElement>;
        }
    }
}