import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import Loader from '../../components/Loader/Loader';
import GlobalSummary from './GlobalSummary/GlobalSummary';
import Countries from './Countries/Countries';
import APIService from '../../services/api.service';
import "./Dashboard.scss";

function App() {

    const [statsSummary, setStatsSummary] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCovidStats();
    }, []);
    
    const fetchCovidStats = () => {
        setIsLoading(true);
        APIService.fetchCovidStatsSummary().then(response => {
            setStatsSummary(response.data);
        }).finally(() => setIsLoading(false))
    }

    return (
        <div className="dashboard">
            {
                isLoading ? 
                    <Loader /> :
                    <>
                        <div className="refresh">
                            <Button variant="contained" onClick={fetchCovidStats}>Refresh</Button>
                        </div>
                        <GlobalSummary summary={statsSummary.Global}/>
                        <Countries countries={statsSummary.Countries}/>
                    </>
            }
        </div>
    );
}

export default App;
