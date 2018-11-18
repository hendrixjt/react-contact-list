import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styling = {
    listWrap: {
        border: '1px solid black',
        backgroundColor: 'lightGray',
        borderRadius: '10px',
        padding: 10,
        overflow: 'hidden',
        fontFamily: 'courier'
    },
    bold: {
        fontWeight: 'bold',
        fontFamily: 'courier'
    }
}

const toDoItem = props => {
    
    const list = props.myList.map(item => {
        return (
            <Link to={`${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
                <div style={styling.listWrap}>
                    <p><span style={styling.bold}>Name: </span>{item.name}</p>
                    <p><span style={styling.bold}>Email: </span>{item.email}</p>
                    <p><span style={styling.bold}>Phone Number: </span>{item.phone}</p>
                </div>
            </Link>
        );
    });
    return <div>{list}</div>;
}

const mapStateToProps = state => {
    return {
        myList: state.list
    }
}

export default connect(mapStateToProps, null)(toDoItem);