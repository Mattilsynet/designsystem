import { SvelteComponentTyped } from "svelte";
import type { Chapter, ChapterChangeDetails } from '../../ts/types';
declare const __propDef: {
    props: {
        showChapterNumber?: boolean | undefined;
        nextText?: string | undefined;
        previousText?: string | undefined;
        chapters?: Chapter[] | undefined;
        currentChapterIndex?: 0 | 1 | undefined;
        startIndex?: number | undefined;
        class?: string | undefined;
    };
    events: {
        chapterChange: CustomEvent<ChapterChangeDetails>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChapterNavigationProps = typeof __propDef.props;
export type ChapterNavigationEvents = typeof __propDef.events;
export type ChapterNavigationSlots = typeof __propDef.slots;
export default class ChapterNavigation extends SvelteComponentTyped<ChapterNavigationProps, ChapterNavigationEvents, ChapterNavigationSlots> {
}
export {};
