import {assign, createMachine} from 'xstate'

interface ToggleContext {
  isOpen: boolean
  isFirstRenderFinished: boolean
}

type ToggleEvent = {type: 'MOUNTED'} | {type: 'TOGGLE'}

type ToggleState =
  | {value: 'serverRendered'; context: ToggleContext}
  | {value: 'open'; context: ToggleContext}
  | {value: 'closed'; context: ToggleContext}

export function createToggleMachine(id: string) {
  return createMachine<ToggleContext, ToggleEvent, ToggleState>({
    predictableActionArguments: true,
    id: id,
    initial: 'serverRendered',
    context: {
      isOpen: true,
      isFirstRenderFinished: false
    },
    states: {
      serverRendered: {
        on: {MOUNTED: 'closed'}
      },
      closed: {
        entry: assign({isOpen: false}),
        exit: assign({isFirstRenderFinished: true}),
        on: {TOGGLE: 'open'}
      },
      open: {
        entry: assign({isOpen: true}),
        on: {TOGGLE: 'closed'}
      }
    }
  })
}
