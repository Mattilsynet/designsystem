import { SvelteComponentTyped } from "svelte";
import type { AutocompleteType, ErrorDetail, InputModeType } from '../../../ts/types';
declare const __propDef: {
    props: {
        value: any;
        name: string;
        label: string;
        labelClass?: string | undefined;
        countCharactersLeftLabel: string | undefined;
        countCharactersTooManyLabel: string | undefined;
        tooManyCharactersErrorText?: string | undefined;
        error: ErrorDetail | undefined;
        helpText: string | undefined;
        textOptional: string | undefined;
        helpTextClass?: string | undefined;
        showOptionalText?: boolean | undefined;
        hiddenErrorText: string | undefined;
        helpTextPlacement?: "above" | "below" | undefined;
        textAreaRef?: undefined;
        textAreaClass?: string | undefined;
        rows?: number | undefined;
        cols: number | undefined;
        maxlength: number | undefined;
        placeholder: string | undefined;
        isRequired?: boolean | undefined;
        inputmode: InputModeType | undefined;
        autocomplete: AutocompleteType | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextAreaProps = typeof __propDef.props;
export type TextAreaEvents = typeof __propDef.events;
export type TextAreaSlots = typeof __propDef.slots;
export default class TextArea extends SvelteComponentTyped<TextAreaProps, TextAreaEvents, TextAreaSlots> {
}
export {};
