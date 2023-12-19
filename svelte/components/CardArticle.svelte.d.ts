import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        headingId: string;
        title: string;
        intro: string | undefined;
        text: string | undefined;
        linkUrl: string | undefined;
        linkText: string | undefined;
        type?: "" | "task" | "form-intro-module" | "legal-text" | "highlighted-link" | undefined;
        headerTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
        iconClass?: "" | "info-icon" | "warning-icon" | "task-icon" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CardArticleProps = typeof __propDef.props;
export type CardArticleEvents = typeof __propDef.events;
export type CardArticleSlots = typeof __propDef.slots;
export default class CardArticle extends SvelteComponentTyped<CardArticleProps, CardArticleEvents, CardArticleSlots> {
}
export {};
