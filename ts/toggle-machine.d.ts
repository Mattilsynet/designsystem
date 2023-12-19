interface ToggleContext {
    isOpen: boolean;
    isFirstRenderFinished: boolean;
}
type ToggleEvent = {
    type: 'MOUNTED';
} | {
    type: 'TOGGLE';
};
type ToggleState = {
    value: 'serverRendered';
    context: ToggleContext;
} | {
    value: 'open';
    context: ToggleContext;
} | {
    value: 'closed';
    context: ToggleContext;
};
export declare function createToggleMachine(id: string): import("xstate").StateMachine<ToggleContext, any, ToggleEvent, ToggleState, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, ToggleEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export {};
