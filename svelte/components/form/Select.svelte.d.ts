import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail } from '../../../ts/types';
declare const __propDef: {
    props: {
        name: string;
        label: string;
        value: string | undefined;
        error: ErrorDetail | undefined;
        helpText: string | undefined;
        isRequired?: boolean | undefined;
        options?: {
            value: string;
            text: string;
        }[] | undefined;
        textOptional: string | undefined;
        hiddenErrorText: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
