import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        infoType?: "none" | "important" | undefined;
        iconText: string | undefined;
        text: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NoticeProps = typeof __propDef.props;
export type NoticeEvents = typeof __propDef.events;
export type NoticeSlots = typeof __propDef.slots;
export default class Notice extends SvelteComponentTyped<NoticeProps, NoticeEvents, NoticeSlots> {
}
export {};
