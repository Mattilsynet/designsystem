import { SvelteComponentTyped } from "svelte";
import type { CheckboxWithSubSectionsOptions } from '../../../ts/types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        level1Legend: string;
        variation?: "primary" | "secondary" | undefined;
        options: CheckboxWithSubSectionsOptions;
        optionsName?: string | undefined;
        hasCheckAll?: boolean | undefined;
        forceCheckAll?: boolean | undefined;
        checkAllLabel?: string | undefined;
        level2Legend?: string | undefined;
        level3Legend?: string | undefined;
        helpText: string | undefined;
        border?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CheckboxWithSubSetsProps = typeof __propDef.props;
export type CheckboxWithSubSetsEvents = typeof __propDef.events;
export type CheckboxWithSubSetsSlots = typeof __propDef.slots;
export default class CheckboxWithSubSets extends SvelteComponentTyped<CheckboxWithSubSetsProps, CheckboxWithSubSetsEvents, CheckboxWithSubSetsSlots> {
}
export {};
