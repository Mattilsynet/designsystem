import type { ErrorDetail } from './types';
export declare function createInputAriaDescribedby(name: string | undefined, error: ErrorDetail | undefined, maxlength: number | undefined): string | undefined;
export declare function toKebabCase(text: string): string;
export declare function displayDataTime(lang: string, isoDate?: string): string;
interface CompareDates {
    lang: string;
    publishFrom?: string;
    publishedFromLabel: string;
    professionallyUpdated?: string;
    professionallyUpdatedLabel: string;
}
export declare function compareDates({ lang, publishFrom, publishedFromLabel, professionallyUpdated, professionallyUpdatedLabel }: CompareDates): {
    date: string;
    iso?: string;
    label?: string;
} | null;
export declare function getFileExtension(fileName?: string): string | null;
export declare function mapRelExternal(url?: string): 'external' | undefined;
export declare function interpolate(string: string, replacers: string[]): string;
export {};
