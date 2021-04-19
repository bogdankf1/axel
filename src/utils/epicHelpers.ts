import {
  Observable
} from 'rxjs'

export const noop = () => Observable.empty()

export const asyncConcat = (actions: any[]) => {
  const seq = actions.map((a) => Observable.of(a))
  return Observable.concat(...seq)
}

export const delay = (time: number) => new Promise((ok) => setTimeout(ok, time))