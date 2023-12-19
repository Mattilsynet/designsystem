import { SvelteComponentTyped } from "svelte";
import type { Chapter } from '../../ts/types';
declare const __propDef: {
    props: {
        showChapterNumbers?: boolean | undefined;
        parentIndex?: number | undefined;
        subChapters?: Chapter[] | undefined;
        ariaLabel?: string | undefined;
        loadJs?: boolean | undefined;
        id?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChapterMenuSubChapterProps = typeof __propDef.props;
export type ChapterMenuSubChapterEvents = typeof __propDef.events;
export type ChapterMenuSubChapterSlots = typeof __propDef.slots;
export default class ChapterMenuSubChapter extends SvelteComponentTyped<ChapterMenuSubChapterProps, ChapterMenuSubChapterEvents, ChapterMenuSubChapterSlots> {
}
export {};
