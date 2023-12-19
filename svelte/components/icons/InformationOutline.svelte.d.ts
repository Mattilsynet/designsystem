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
export type InformationOutlineProps = typeof __propDef.props;
export type InformationOutlineEvents = typeof __propDef.events;
export type InformationOutlineSlots = typeof __propDef.slots;
export default class InformationOutline extends SvelteComponentTyped<InformationOutlineProps, InformationOutlineEvents, InformationOutlineSlots> {
}
export {};
