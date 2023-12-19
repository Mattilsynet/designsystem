import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail } from '../../../ts/types';
declare const __propDef: {
    props: {
        errors?: ErrorDetail[] | undefined;
        heading: string;
        linkToFields?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FormErrorSummaryProps = typeof __propDef.props;
export type FormErrorSummaryEvents = typeof __propDef.events;
export type FormErrorSummarySlots = typeof __propDef.slots;
export default class FormErrorSummary extends SvelteComponentTyped<FormErrorSummaryProps, FormErrorSummaryEvents, FormErrorSummarySlots> {
}
export {};
