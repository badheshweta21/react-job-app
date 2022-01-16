import { useQuery } from '@apollo/client';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { JOB_LIST } from '../../../graphQl/get-job-list';
import { JobCard } from '../job-card/jobCard';
import "./jobListPage.css";

export const JobPage = () => {
    const { loading, data, error } = useQuery(JOB_LIST);
    if (loading) return <Spinner animation="grow"></Spinner>;
    if (error) return <pre>{error.message}</pre>;
    
    if (data) return (
         
        data.jobs.map(({ id, title, company, cities, countries, remotes }) => (
       
            <div className="job-card" key={id}>
                <JobCard title={title}
                company={company}
                cities={cities}
                countries={countries}
                remotes={remotes}/>
            </div>
        ))
    );
}