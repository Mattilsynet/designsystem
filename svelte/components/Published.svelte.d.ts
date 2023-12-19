import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        publishFrom: string | undefined;
        professionallyUpdated: string | undefined;
        lang?: string | undefined;
        publishedText?: string | undefined;
        lastPublishedText?: string | undefined;
        dtClass?: string | undefined;
        ddClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PublishedProps = typeof __propDef.props;
export type PublishedEvents = typeof __propDef.events;
export type PublishedSlots = typeof __propDef.slots;
export default class Published extends SvelteComponentTyped<PublishedProps, PublishedEvents, PublishedSlots> {
}
export {};
