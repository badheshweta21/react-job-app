import React from 'react';
import { Card } from 'react-bootstrap';
import { RemoteBadge } from '../remoteBadge/remoteBadge';
import "./jobCard.css";

export const JobCard = (props) => {

    let cityName = props.cities.length ? props.cities : [];
    let countryName = props.cities.length ? props.cities[0].country.name  : "NA";

    return (
        <Card style={{width: "18rem", height: "15rem"}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.company.name}</Card.Subtitle>
                <Card.Text>Cities:  { cityName.map(item => { return item.name; }) }</Card.Text>
                <Card.Text>Countries: { countryName } </Card.Text>
                <RemoteBadge remote={props.remotes} />
            </Card.Body>
        </Card>
    );
}