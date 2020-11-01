import React from 'react';
import SearchFood from '../components/foods/search-food';
import Layout from '../components/layout';
import UpperPage from '../components/upper-page';

function Search(props) {
    return (
        <div>
            <Layout search>
                <UpperPage>Meat</UpperPage>
                <SearchFood></SearchFood>
            </Layout>
        </div>
    );
}

export default Search;