import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined;
        class?: string | undefined;
        image?: {
            src: string;
            alt: string | undefined;
        } | undefined;
        lang?: string | undefined;
        title: string | undefined;
        shortTitle: string | undefined;
        displayType: ("white" | "blue" | "campaign") | undefined;
        headingClass?: string | undefined;
        headerTag?: "h2" | "h3" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HighlightedContentLinkProps = typeof __propDef.props;
export type HighlightedContentLinkEvents = typeof __propDef.events;
export type HighlightedContentLinkSlots = typeof __propDef.slots;
export default class HighlightedContentLink extends SvelteComponentTyped<HighlightedContentLinkProps, HighlightedContentLinkEvents, HighlightedContentLinkSlots> {
}
export {};
