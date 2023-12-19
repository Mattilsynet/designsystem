import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        labels?: string[] | undefined;
        completed?: number | undefined;
        ariaValueText?: string | undefined;
        progressBarLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FormStepsProps = typeof __propDef.props;
export type FormStepsEvents = typeof __propDef.events;
export type FormStepsSlots = typeof __propDef.slots;
export default class FormSteps extends SvelteComponentTyped<FormStepsProps, FormStepsEvents, FormStepsSlots> {
}
export {};
