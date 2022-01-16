
import React from 'react';
import { Badge } from 'react-bootstrap';

export const RemoteBadge = (props) => {
    const checkRemote = props.remote.length ? props.remote[0].name : null;
    return (
        <>
        { checkRemote ? <Badge bg="dark">Remote</Badge> : <Badge bg="info">Onsite</Badge> }
        </>
    )
}