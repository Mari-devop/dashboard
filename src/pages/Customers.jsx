import React from 'react';
import Table from '../components/Table/Table';
import Search from '../components/Search/Search';
import Pagination from '../components/Pagination/Pagination';
import '../assets/css/pages/customers-page.css';

const Customers = () => {
    return (
        <div className="db-customers-page">
            <h2>Hello Evano <span role="img" aria-label="wave">👋</span>,</h2>
            <div className="db-customers-page__container">
                <div className="db-customers-page__container-header">
                    <div className="db-customers-page__nav">
                        <h3 className="db-customers-page__nav-title">All Customers</h3>
                        <p className="db-customers-page__nav-title--small">Active Members</p>
                    </div>
                    <div className="db-customers-page__search">
                        <Search />
                    </div>
                </div>
                <div className="db-customers-page__container-body">
                    <Table />
                </div>
                <div className="db-customers-page__container-footer">
                    <Pagination />  
                </div>
            </div>
        </div>
    );
};

export default Customers;
