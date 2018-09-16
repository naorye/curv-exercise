import moment from 'moment';
import approvers from './approvers';

export default [
    {
        id: '9832',
        createdAt: moment().subtract(4, 'hours'),
        finalizedAt: moment().subtract(1, 'hours'),
        status: 'finalized',
        note: 'Move funds to Super Bank',

        fiatAmount: 23003,
        fiatCurrency: 'usd',
        cryptoAmount: 3.432312,
        cryptoCurrency: 'btc',

        initiator: {
            id: 23424312,
            name: 'Jane Doe',
        },
        wallet: {
            id: 123123,
            name: 'Red Bitcoin Wallet',
        },
        source: {
            address: 'etqTFn5Au4m4GFg7xJaNVN2',
            name: '??',
        },
        destination: {
            address: '1BvBMSEYstWetqTFskjJn5A',
            name: 'Robert Willson',
        },

        approvers,
    },
    {
        id: '77541',
        createdAt: moment().subtract(2, 'days'),
        initiator: {
            id: 23424312,
            name: 'John Doe',
        },
        wallet: {
            id: 123123,
            name: 'Red Bitcoin Wallet',
        },
        source: {
            address: 'jshdSADASjddjasdADS',
            name: 'Bank of America',
        },
        destination: {
            address: 'jshdSADASjddjasdADS',
            name: 'Bank of America',
        },
        note:
            'ASAP: Transfer of required funds to Arrow wallet',
        fiatAmount: 52109,
        fiatCurrency: 'usd',
        cryptoAmount: 1.27852,
        cryptoCurrency: 'etc',

        status: 'rejected',
        approvers: [ approvers[1], approvers[2] ],
    },
    {
        id: '87333',
        createdAt: moment().subtract(1, 'months'),
        initiator: {
            id: 23424312,
            name: 'Kindysa Walley',
        },
        wallet: {
            id: 666433,
            name: 'Yellow Bitcoin Wallet',
        },
        source: {
            address: 'jshdSADASjddjasdADS',
            name: 'Me',
        },
        destination: {
            address: 'jshdSADASjddjasdADS',
            name: 'New Europe Bank',
        },
        note: 'Daily wallet funds migration',
        fiatAmount: 988,
        fiatCurrency: 'usd',
        cryptoAmount: 0.39932,
        cryptoCurrency: 'btc',

        status: 'pending',
        approvers: [ approvers[1] ],
    },
    {
        id: '39088',
        createdAt: moment().subtract(1, 'hours'),
        initiator: {
            id: 3454354,
            name: 'Lisa Kudrow',
        },
        wallet: {
            id: 2226788,
            name: 'Red Bitcoin Wallet',
        },
        source: {
            address: 'jshdSADASjddjasdADS',
            name: 'Bank of America',
        },
        destination: {
            address: 'jshdSADASjddjasdADS',
            name: 'Bank of America',
        },
        note: 'I am stealing money',
        fiatAmount: 813,
        fiatCurrency: 'usd',
        cryptoAmount: 0.32122,
        cryptoCurrency: 'btc',

        status: 'pending',
        approvers: [ approvers[0] ],
    },
];
