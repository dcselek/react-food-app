import React from 'react'
import HistoryOrders from '../components/empty-contents/history-orders';
import Internet from '../components/empty-contents/internet'
import SearchNot from '../components/empty-contents/search';

export default {
    title: "Empty Pages Contents",
};

export const emptyOrder = () => <HistoryOrders></HistoryOrders>
export const emptyHistory = () => <HistoryOrders history></HistoryOrders>
export const emptyInternet = () => <Internet></Internet>
export const searchNotFound = () => <SearchNot></SearchNot>