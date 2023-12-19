import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail } from '../../../ts/types';
declare const __propDef: {
    props: {
        value: any;
        name: string;
        label: string;
        helpText: string | undefined;
        error: ErrorDetail | undefined;
        options?: {
            value: string;
            text: string;
        }[] | undefined;
        isRequired?: boolean | undefined;
        textOptional?: string | undefined;
        hiddenErrorText: string | undefined;
        loadJs?: boolean | undefined;
        theme?: "button" | "radio" | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RadioGroupProps = typeof __propDef.props;
export type RadioGroupEvents = typeof __propDef.events;
export type RadioGroupSlots = typeof __propDef.slots;
export default class RadioGroup extends SvelteComponentTyped<RadioGroupProps, RadioGroupEvents, RadioGroupSlots> {
}
export {};
