import { SvelteComponentTyped } from "svelte";
import type { AutocompleteType, ErrorDetail, InputModeType } from '../../../ts/types';
declare const __propDef: {
    props: {
        value: any;
        name: string;
        label: string;
        labelClass: string;
        error: ErrorDetail | undefined;
        helpText: string | undefined;
        textOptional: string | undefined;
        showOptionalText: boolean;
        hiddenErrorText: string | undefined;
        maxlength: number | undefined;
        placeholder: string | undefined;
        isRequired?: boolean | undefined;
        inputmode: InputModeType | undefined;
        autocomplete: AutocompleteType | undefined;
        hasTransition?: boolean | undefined;
        inputClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextInputHorizontalProps = typeof __propDef.props;
export type TextInputHorizontalEvents = typeof __propDef.events;
export type TextInputHorizontalSlots = typeof __propDef.slots;
export default class TextInputHorizontal extends SvelteComponentTyped<TextInputHorizontalProps, TextInputHorizontalEvents, TextInputHorizontalSlots> {
}
export {};
