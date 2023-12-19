import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string | undefined;
        title?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type XIconProps = typeof __propDef.props;
export type XIconEvents = typeof __propDef.events;
export type XIconSlots = typeof __propDef.slots;
export default class XIcon extends SvelteComponentTyped<XIconProps, XIconEvents, XIconSlots> {
}
export {};
