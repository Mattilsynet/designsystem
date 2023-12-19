import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SuccessOutlineProps = typeof __propDef.props;
export type SuccessOutlineEvents = typeof __propDef.events;
export type SuccessOutlineSlots = typeof __propDef.slots;
export default class SuccessOutline extends SvelteComponentTyped<SuccessOutlineProps, SuccessOutlineEvents, SuccessOutlineSlots> {
}
export {};
