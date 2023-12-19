import { assign, createMachine } from 'xstate';
export function createToggleMachine(id) {
    return createMachine({
        predictableActionArguments: true,
        id: id,
        initial: 'serverRendered',
        context: {
            isOpen: true,
            isFirstRenderFinished: false
        },
        states: {
            serverRendered: {
                on: { MOUNTED: 'closed' }
            },
            closed: {
                entry: assign({ isOpen: false }),
                exit: assign({ isFirstRenderFinished: true }),
                on: { TOGGLE: 'open' }
            },
            open: {
                entry: assign({ isOpen: true }),
                on: { TOGGLE: 'closed' }
            }
        }
    });
}
