import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        type?: "button" | "reset" | "submit" | undefined;
        formInProgressAriaLabel?: string | undefined;
        spinnerPlacement?: "end" | "start" | undefined;
        btnClassNames?: string | undefined;
        inProgress?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonSpinnerProps = typeof __propDef.props;
export type ButtonSpinnerEvents = typeof __propDef.events;
export type ButtonSpinnerSlots = typeof __propDef.slots;
export default class ButtonSpinner extends SvelteComponentTyped<ButtonSpinnerProps, ButtonSpinnerEvents, ButtonSpinnerSlots> {
}
export {};
