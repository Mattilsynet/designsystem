import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail } from '../../../ts/types';
declare const __propDef: {
    props: {
        value: any;
        name: string;
        label: string;
        buttonText: string;
        fileInputName: string;
        fileNameInputName: string;
        helpText: string | undefined;
        fileName: string | Array<string> | undefined;
        error: ErrorDetail | undefined;
        isRequired?: boolean | undefined;
        accept: string | undefined;
        multiple: boolean | undefined;
        textOptional: string | undefined;
        hiddenErrorText: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileUploadProps = typeof __propDef.props;
export type FileUploadEvents = typeof __propDef.events;
export type FileUploadSlots = typeof __propDef.slots;
export default class FileUpload extends SvelteComponentTyped<FileUploadProps, FileUploadEvents, FileUploadSlots> {
}
export {};
