import { SvelteComponentTyped } from "svelte";
import type { ErrorDetail } from '../../ts/types';
declare const __propDef: {
    props: {
        loadJs?: boolean | undefined;
        id: string;
        name: string;
        error: ErrorDetail | undefined;
        multiple?: boolean | undefined;
        accept: string | undefined;
        buttonText?: string | undefined;
        fileName: string | Array<string> | undefined;
        isRequired: boolean;
    };
    events: {
        removeFile: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileUploadButtonProps = typeof __propDef.props;
export type FileUploadButtonEvents = typeof __propDef.events;
export type FileUploadButtonSlots = typeof __propDef.slots;
export default class FileUploadButton extends SvelteComponentTyped<FileUploadButtonProps, FileUploadButtonEvents, FileUploadButtonSlots> {
}
export {};
