import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail } from '../../../ts/types';
declare const __propDef: {
    props: {
        value: any;
        name: string;
        error: ErrorDetail | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HiddenProps = typeof __propDef.props;
export type HiddenEvents = typeof __propDef.events;
export type HiddenSlots = typeof __propDef.slots;
export default class Hidden extends SvelteComponentTyped<HiddenProps, HiddenEvents, HiddenSlots> {
}
export {};
