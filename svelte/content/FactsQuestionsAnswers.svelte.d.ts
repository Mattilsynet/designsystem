import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string | undefined;
        facts: string | undefined;
        disclosureHeadClass?: string | undefined;
        loadJs?: boolean | undefined;
        questionsAnswers?: {
            question: string;
            answer: string;
            imageUrl?: string | undefined;
            imageAltText?: string | undefined;
            caption?: string | undefined;
        }[] | undefined;
        headerTag?: "h1" | "h2" | "h3" | "h4" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FactsQuestionsAnswersProps = typeof __propDef.props;
export type FactsQuestionsAnswersEvents = typeof __propDef.events;
export type FactsQuestionsAnswersSlots = typeof __propDef.slots;
export default class FactsQuestionsAnswers extends SvelteComponentTyped<FactsQuestionsAnswersProps, FactsQuestionsAnswersEvents, FactsQuestionsAnswersSlots> {
}
export {};
