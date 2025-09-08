

import { LocalOfferOutlined, PersonOutline, MusicNote, FavoriteBorder } from '@mui/icons-material';

export const invoices = [
    {
        icon: <LocalOfferOutlined />,
        iconClass: 'appleIcon',
        title: 'Apple Store',
        time: '5h ago',
        amount: 450,
    },
    {
        icon: <PersonOutline />,
        iconClass: 'michaelIcon',
        title: 'Michael',
        time: '2 days ago',
        amount: 160,
    },
    {
        icon: <MusicNote />,
        iconClass: 'playstationIcon',
        title: 'Playstation',
        time: '5 days ago',
        amount: 1085,
    },
    {
        icon: <FavoriteBorder />,
        iconClass: 'williamIcon',
        title: 'William',
        time: '10 days ago',
        amount: 90,
    },
];

export const transactions = [
    {
        icon: 'AudiotrackOutlined',
        iconClass: 'shoppingIcon',
        title: 'Spotify Subscription',
        date: '25 Jan 2021',
        type: 'Shopping',
        cardNumber: '1234 ****',
        status: 'Pending',
        amount: -150,
        amountType: 'Debit'
    },
    {
        icon: 'DesignServicesOutlined',
        iconClass: 'serviceIcon',
        title: 'Mobile Service',
        date: '23 Jan 2021',
        type: 'Entertainment',
        cardNumber: '4321 ****',
        status: 'Completed',
        amount: -200,
        amountType: 'Debit'
    },
    {
        icon: 'Person3Outlined',
        iconClass: 'incomeIcon',
        title: 'Freelance Payment',
        date: '21 Jan 2021',
        type: 'Income',
        cardNumber: '8765 ****',
        status: 'Completed',
        amount: 1200,
        amountType: 'Credit'
    }
];
