import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        linkText: any;
        href: any;
        class?: string | undefined;
        style?: string | undefined;
        fileName?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LinkProps = typeof __propDef.props;
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
export default class Link extends SvelteComponentTyped<LinkProps, LinkEvents, LinkSlots> {
}
export {};
