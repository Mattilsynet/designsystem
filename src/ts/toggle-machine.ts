import {assign, createMachine} from 'xstate'

interface ToggleContext {
  isFirstRenderFinished: boolean
}

type ToggleEvent = {type: 'MOUNT'} | {type: 'TOGGLE'}

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
      isFirstRenderFinished: false
    },
    states: {
      serverRendered: {
        on: {MOUNT: 'closed'}
      },
      closed: {
        exit: assign({isFirstRenderFinished: true}),
        on: {TOGGLE: 'open'}
      },
      open: {
        on: {TOGGLE: 'closed'}
      }
    }
  })
}
