import React from 'react';
import { customers } from '../../configs/customersConfigs';
import '../../assets/css/components/table.css';

const Table = () => {
    return (
        <div className="db-table-container">
            <table className="db-table">
                <thead className="db-table__header">
                    <tr className="db-table__header-items">
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="db-table__body">
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.company}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.country}</td>
                            <td>
                                <span className={`status ${customer.status.toLowerCase()}`}>
                                    {customer.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
