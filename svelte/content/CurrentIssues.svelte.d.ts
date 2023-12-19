import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        headingClass?: string | undefined;
        headerTag?: "h2" | "h3" | "h4" | undefined;
        issues?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CurrentIssuesProps = typeof __propDef.props;
export type CurrentIssuesEvents = typeof __propDef.events;
export type CurrentIssuesSlots = typeof __propDef.slots;
export default class CurrentIssues extends SvelteComponentTyped<CurrentIssuesProps, CurrentIssuesEvents, CurrentIssuesSlots> {
}
export {};
