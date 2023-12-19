import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ariaLabelledBy: string;
        headerTag?: "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
        menuPoints?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MenuPointsIconsProps = typeof __propDef.props;
export type MenuPointsIconsEvents = typeof __propDef.events;
export type MenuPointsIconsSlots = typeof __propDef.slots;
export default class MenuPointsIcons extends SvelteComponentTyped<MenuPointsIconsProps, MenuPointsIconsEvents, MenuPointsIconsSlots> {
}
export {};
