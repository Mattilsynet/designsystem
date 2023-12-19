import { SvelteComponentTyped } from "svelte";
import type { InputProps, ErrorDetail } from '../../../ts/types';
declare const __propDef: {
    props: {
        values?: {} | undefined;
        isRequired?: boolean | undefined;
        inputClass?: string | undefined;
        inputList?: InputProps[] | undefined;
        numberOfInputOutside?: number | undefined;
        fieldSetId: any;
        fieldSetLabel: any;
        fieldSetErrorHeading?: string | undefined;
        fieldSetError?: Array<ErrorDetail> | undefined;
        fieldSetHelpText?: string | undefined;
        expandableAriaLabel?: string | undefined;
        expandableText?: string | undefined;
        collapsableText?: string | undefined;
        showOptionalText?: boolean | undefined;
        loadJs?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ExpandableInputListProps = typeof __propDef.props;
export type ExpandableInputListEvents = typeof __propDef.events;
export type ExpandableInputListSlots = typeof __propDef.slots;
export default class ExpandableInputList extends SvelteComponentTyped<ExpandableInputListProps, ExpandableInputListEvents, ExpandableInputListSlots> {
}
export {};
