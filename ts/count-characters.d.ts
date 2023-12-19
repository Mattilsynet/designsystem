import type { Action, CountCharsParams, ErrorDetail } from './types';
export declare function errorOnTooManyCharacters(e: InputEvent, countCharsParams: CountCharsParams, name: string, errorText: string): ErrorDetail | undefined;
export declare const countCharacters: Action<HTMLInputElement | HTMLTextAreaElement>;
