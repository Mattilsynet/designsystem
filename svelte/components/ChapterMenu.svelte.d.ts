import { SvelteComponentTyped } from "svelte";
import type { Chapter, ChapterChangeDetails } from '../../ts/types';
declare const __propDef: {
    props: {
        chapters: Array<Chapter>;
        currentChapterNumber?: number | undefined;
        startIndex?: 0 | 1 | undefined;
        menuTitle: string;
        showChapterNumbers?: boolean | undefined;
        subChapterToggleAriaLabel?: string | undefined;
        loadJs?: boolean | undefined;
    };
    events: {
        chapterChange: CustomEvent<ChapterChangeDetails>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChapterMenuProps = typeof __propDef.props;
export type ChapterMenuEvents = typeof __propDef.events;
export type ChapterMenuSlots = typeof __propDef.slots;
export default class ChapterMenu extends SvelteComponentTyped<ChapterMenuProps, ChapterMenuEvents, ChapterMenuSlots> {
}
export {};
