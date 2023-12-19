import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        text: string;
        updatedDate: string;
        publishedText?: string | undefined;
        actionsTakenByMattilsynet: string;
        statusType: 'important' | 'none';
        linkUrl: string;
        linkText: string;
        class: string;
        lang?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        heading: {};
    };
};
export type StatusProps = typeof __propDef.props;
export type StatusEvents = typeof __propDef.events;
export type StatusSlots = typeof __propDef.slots;
export default class Status extends SvelteComponentTyped<StatusProps, StatusEvents, StatusSlots> {
}
export {};
