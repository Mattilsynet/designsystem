import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail, MultiSelectOption } from '../../../ts/types';
declare const __propDef: {
    props: {
        name: string;
        label: string;
        values?: any[] | undefined;
        readonly?: boolean | undefined;
        placeholder?: string | undefined;
        options?: MultiSelectOption[] | undefined;
        preferredOptions?: any[] | undefined;
        isRequired?: boolean | undefined;
        error: ErrorDetail | undefined;
        helpText: string | undefined;
        textOptional: string | undefined;
        hiddenErrorText: string | undefined;
        tagsLabel?: string | undefined;
    };
    events: {
        mousedown: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MultiSelectProps = typeof __propDef.props;
export type MultiSelectEvents = typeof __propDef.events;
export type MultiSelectSlots = typeof __propDef.slots;
export default class MultiSelect extends SvelteComponentTyped<MultiSelectProps, MultiSelectEvents, MultiSelectSlots> {
}
export {};
