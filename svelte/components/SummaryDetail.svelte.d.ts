import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
        detailsClass?: string | undefined;
        testId?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SummaryDetailProps = typeof __propDef.props;
export type SummaryDetailEvents = typeof __propDef.events;
export type SummaryDetailSlots = typeof __propDef.slots;
export default class SummaryDetail extends SvelteComponentTyped<SummaryDetailProps, SummaryDetailEvents, SummaryDetailSlots> {
}
export {};
