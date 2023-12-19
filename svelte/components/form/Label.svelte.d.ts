import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        for: string;
        class?: string | undefined;
        textOptional?: string | undefined;
        isRequired?: boolean | undefined;
        showOptionalText?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
export default class Label extends SvelteComponentTyped<LabelProps, LabelEvents, LabelSlots> {
}
export {};
