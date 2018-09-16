import moment from 'moment';

export default [
    {
        id: '123123123',
        type: 'group',
        name: 'ACME Top-Authorized',
        members: [
            {
                id: 'jksahdkljashd',
                type: 'user',
                name: 'Mallory McDonald',
                decision: 'approved',
                decidedAt: moment().subtract(1, 'minutes'),
            },
            {
                id: 'kj4352kjk4',
                type: 'user',
                name: 'Oprah Degeneres',
                decision: 'rejected',
                decidedAt: moment().subtract(4, 'hours'),
            },
            {
                id: 'fdmhskewytlk',
                type: 'user',
                name: 'Ellen Johanson',
                decision: 'ignored',
                decidedAt: moment().subtract(5, 'hours'),
            },
        ],
    },
    {
        id: '1231223233123',
        type: 'group',
        name: 'CFO',
        members: [
            {
                id: 'jksahdkljsadsadashd',
                type: 'user',
                name: 'Taylor Swift',
                decision: 'approved',
                decidedAt: moment().subtract(55, 'minutes'),
            },
            {
                id: 'kj4asdasd352kjk4',
                type: 'user',
                name: 'Rod Nielson',
                decision: 'approved',
                decidedAt: moment().subtract(2, 'hours'),
            },
        ],
    },
    {
        id: 'jksahdkljsadsadashd',
        type: 'user',
        name: 'John Doe',
        decision: 'pending',
        decidedAt: moment().subtract(55, 'minutes'),
    },
];
