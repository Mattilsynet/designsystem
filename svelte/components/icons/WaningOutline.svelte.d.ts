import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        color?: string | undefined;
        title?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WaningOutlineProps = typeof __propDef.props;
export type WaningOutlineEvents = typeof __propDef.events;
export type WaningOutlineSlots = typeof __propDef.slots;
export default class WaningOutline extends SvelteComponentTyped<WaningOutlineProps, WaningOutlineEvents, WaningOutlineSlots> {
}
export {};
