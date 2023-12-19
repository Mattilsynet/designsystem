import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
        loadJs?: boolean | undefined;
        title: string;
        headerTag?: "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
        theme?: "bordered" | "no-border" | undefined;
        icon?: string | undefined;
        headerClass?: string | undefined;
        panelClass?: string | undefined;
        startOpen?: boolean | undefined;
        chapter?: string | undefined;
        class?: string | undefined;
    };
    events: {
        open: CustomEvent<any>;
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DisclosureProps = typeof __propDef.props;
export type DisclosureEvents = typeof __propDef.events;
export type DisclosureSlots = typeof __propDef.slots;
export default class Disclosure extends SvelteComponentTyped<DisclosureProps, DisclosureEvents, DisclosureSlots> {
}
export {};
