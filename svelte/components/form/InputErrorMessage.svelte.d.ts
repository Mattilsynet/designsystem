import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: string;
        message: string;
        hiddenErrorText?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputErrorMessageProps = typeof __propDef.props;
export type InputErrorMessageEvents = typeof __propDef.events;
export type InputErrorMessageSlots = typeof __propDef.slots;
export default class InputErrorMessage extends SvelteComponentTyped<InputErrorMessageProps, InputErrorMessageEvents, InputErrorMessageSlots> {
}
export {};
