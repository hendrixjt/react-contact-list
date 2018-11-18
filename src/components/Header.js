import React from 'react';

const styling = {
    headerWrap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 30,
        backgroundColor: "lightGray",
        border: "1px solid black",
        fontFamily: 'courier',
        borderRadius: '10px'
    }
}
const header = () => <div style={styling.headerWrap}>Contacts</div>;

export default header;
                                    
