import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        header?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TableColProps = typeof __propDef.props;
export type TableColEvents = typeof __propDef.events;
export type TableColSlots = typeof __propDef.slots;
export default class TableCol extends SvelteComponentTyped<TableColProps, TableColEvents, TableColSlots> {
}
export {};
