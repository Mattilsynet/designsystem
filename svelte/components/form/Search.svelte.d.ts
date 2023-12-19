import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: string;
        name: string | undefined;
        label?: string | undefined;
        labelClass?: string | undefined;
        helpText?: string | undefined;
        searchButtonText?: string | undefined;
        placeholder?: string | undefined;
        ariaControls?: string | undefined;
        ariaRemoveTextLabel?: string | undefined;
        inputClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
export default class Search extends SvelteComponentTyped<SearchProps, SearchEvents, SearchSlots> {
}
export {};
