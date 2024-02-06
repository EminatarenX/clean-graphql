import {Signale} from 'signale'
export const print = new Signale({
    types: {
        start: {
            badge: '🚀',
            color: 'cyan',
            label: 'Server Deployed'
        }
    }
})

