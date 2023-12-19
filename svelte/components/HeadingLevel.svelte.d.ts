import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        headingLevel?: (2 | 1 | 3 | 4 | 5 | 6) | undefined;
        class?: string | undefined;
        id?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HeadingLevelProps = typeof __propDef.props;
export type HeadingLevelEvents = typeof __propDef.events;
export type HeadingLevelSlots = typeof __propDef.slots;
export default class HeadingLevel extends SvelteComponentTyped<HeadingLevelProps, HeadingLevelEvents, HeadingLevelSlots> {
}
export {};
