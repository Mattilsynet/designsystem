import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail } from '../../../ts/types';
declare const __propDef: {
    props: {
        value?: {
            value: string;
            text: string;
        }[] | undefined;
        name: string;
        label: string;
        error: ErrorDetail | undefined;
        helpText: string | undefined;
        options?: {
            value: string;
            text: string;
        }[] | undefined;
        isRequired?: boolean | undefined;
        textOptional?: string | undefined;
        hiddenErrorText: string | undefined;
        onChange?: (() => void) | undefined;
        theme?: "button" | "checkbox" | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
