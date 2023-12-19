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
export type DangerOutlineProps = typeof __propDef.props;
export type DangerOutlineEvents = typeof __propDef.events;
export type DangerOutlineSlots = typeof __propDef.slots;
export default class DangerOutline extends SvelteComponentTyped<DangerOutlineProps, DangerOutlineEvents, DangerOutlineSlots> {
}
export {};
