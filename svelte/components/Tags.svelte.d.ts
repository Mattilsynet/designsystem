import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tags?: {
            text: string;
            ariaLabel: string;
            color: "error" | "success" | "info" | "warning" | "neutral";
        }[] | undefined;
        isClosable?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TagsProps = typeof __propDef.props;
export type TagsEvents = typeof __propDef.events;
export type TagsSlots = typeof __propDef.slots;
export default class Tags extends SvelteComponentTyped<TagsProps, TagsEvents, TagsSlots> {
}
export {};
