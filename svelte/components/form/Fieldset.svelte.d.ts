import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        legend?: string | undefined;
        error?: null | undefined;
        hiddenErrorText?: boolean | undefined;
        legendClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FieldsetProps = typeof __propDef.props;
export type FieldsetEvents = typeof __propDef.events;
export type FieldsetSlots = typeof __propDef.slots;
export default class Fieldset extends SvelteComponentTyped<FieldsetProps, FieldsetEvents, FieldsetSlots> {
}
export {};
