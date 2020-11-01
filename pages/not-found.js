import React from 'react';
import SearchNot from '../components/empty-contents/search';
import UpperPage from '../components/upper-page'
import Layout from '../components/layout'
function NotFound(props) {
    return (
        <Layout>
            <UpperPage/>
            <SearchNot/>
        </Layout>
    );
}

export default NotFound;