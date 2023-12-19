import { SvelteComponentTyped } from "svelte";
import type { CloseDialogEvent } from '../../ts';
declare const __propDef: {
    props: {
        isOpen?: boolean | undefined;
        title?: string | undefined;
        ariaTitle?: string | undefined;
        closeBtnAriaLabel?: string | undefined;
        dialogRef?: undefined;
    };
    events: {
        detail: CustomEvent<CloseDialogEvent>;
        initCustomEvent: CustomEvent<(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined, detail?: CloseDialogEvent | undefined) => void>;
        bubbles: CustomEvent<boolean>;
        cancelBubble: CustomEvent<boolean>;
        cancelable: CustomEvent<boolean>;
        composed: CustomEvent<boolean>;
        currentTarget: CustomEvent<EventTarget | null>;
        defaultPrevented: CustomEvent<boolean>;
        eventPhase: CustomEvent<number>;
        isTrusted: CustomEvent<boolean>;
        returnValue: CustomEvent<boolean>;
        srcElement: CustomEvent<EventTarget | null>;
        target: CustomEvent<EventTarget | null>;
        timeStamp: CustomEvent<number>;
        type: CustomEvent<string>;
        composedPath: CustomEvent<() => EventTarget[]>;
        initEvent: CustomEvent<(type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined) => void>;
        preventDefault: CustomEvent<() => void>;
        stopImmediatePropagation: CustomEvent<() => void>;
        stopPropagation: CustomEvent<() => void>;
        NONE: CustomEvent<0>;
        CAPTURING_PHASE: CustomEvent<1>;
        AT_TARGET: CustomEvent<2>;
        BUBBLING_PHASE: CustomEvent<3>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DialogBoxProps = typeof __propDef.props;
export type DialogBoxEvents = typeof __propDef.events;
export type DialogBoxSlots = typeof __propDef.slots;
export default class DialogBox extends SvelteComponentTyped<DialogBoxProps, DialogBoxEvents, DialogBoxSlots> {
}
export {};
