import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';

import Country from "./Country/Country";
import { COUNTRY_SUMMARY_TABLE_COLUMNS, PAGE_SIZE, SORT_ORDER } from '../../../constants/constant';
import "./Countries.scss";

function Countries({ countries }) {

    const [sortBy, setSortBy] = useState(COUNTRY_SUMMARY_TABLE_COLUMNS[0].id);
    const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC);
    const [filterName, setFilterName] = useState(COUNTRY_SUMMARY_TABLE_COLUMNS[0].id);
    const [filterValue, setFilterValue] = useState("");
    const [pageNo, setPageNo] = useState(1);

    const handleFilternameChange = (e) => {
        setFilterName(e.target.value);
        setFilterValue("");
        setPageNo(1);
    }

    const handleFilterValueChange = (e) => {
        setFilterValue(e.target.value);
        setPageNo(1);
    }
    
    const handleSortChange = (id) => {
        if(sortBy === id) {
            setSortOrder(order => order === SORT_ORDER.ASC ? SORT_ORDER.DSC : SORT_ORDER.ASC)
        } else {
            setSortBy(id);
            setSortOrder(SORT_ORDER.ASC);
        }
    }

    const filteredCountries = countries
        .filter(country => country[filterName].toString().toLowerCase().includes(filterValue.toString().toLowerCase()))
        .sort((a,b) => {
            if(a[sortBy] < b[sortBy]) { return sortOrder === SORT_ORDER.ASC ? -1 : 1; }
            if(a[sortBy] > b[sortBy]) { return sortOrder === SORT_ORDER.ASC ? 1 : -1; }
            return 0;
        });

    const pageCount = Math.ceil(filteredCountries.length/PAGE_SIZE);

    return (
        <div className="countries-container">
            <div className="header">
                <div className="count">
                    Total Countries : {countries.length}
                </div>
                <div className="filter">
                    <TextField
                        id="outlined-select-currency"
                        select
                        placeholder="Search By" 
                        value={filterName}
                        onChange={handleFilternameChange}
                    >
                        { COUNTRY_SUMMARY_TABLE_COLUMNS.map(({id, displayName}) => (
                            <MenuItem key={id} value={id}>{displayName}</MenuItem>
                        )) }
                    </TextField>
                    <TextField 
                        id="standard-search" 
                        placeholder="Search" 
                        type="search" 
                        variant="filled"
                        value={filterValue}
                        onChange={handleFilterValueChange}
                    />
                </div>
            </div>
            {
                filteredCountries.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                { 
                                    COUNTRY_SUMMARY_TABLE_COLUMNS.map(({id, displayName}) => (
                                        <th key={id}>
                                            {displayName}
                                            <span className={`material-icons-outlined ${sortBy !== id ? "unselected" : ""}`} onClick={() => handleSortChange(id)}>
                                                {sortOrder === SORT_ORDER.ASC ? "expand_less":"expand_more"}
                                            </span>
                                        </th>
                                    )) 
                                }
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                filteredCountries
                                    .slice((pageNo-1)*PAGE_SIZE, pageNo*PAGE_SIZE)
                                    .map(country => <Country key={country.ID} {...country}/>) 
                            }
                        </tbody>
                    </table> :
                    <div className="no-results">No Result Found</div>
            }
            {
                pageCount > 1 &&
                <Pagination 
                    count={pageCount} 
                    color="primary" 
                    className="pagination" 
                    page={pageNo} 
                    onChange={(_, pageNo) => setPageNo(pageNo)}
                />
            }
        </div>
    );
}

export default Countries;
