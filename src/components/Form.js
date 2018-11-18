import React, { Component } from 'react';
import { connect } from 'react-redux';

const styling = {
    formWrap: {
        width: '70%',
        height: '100vh',
        backgroundColor: 'gray',
        fontFamily: 'courier',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px'
    },
    innerForm: {
        padding: 100,
        border: '1px solid black',
        backgroundColor: "lightGray",
        borderRadius: '10px'
    }
}

class Form extends Component {
   
    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId)
    }
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.listId !== newProps.match.params.listId) {
            this.props.onListChange(newProps.match.params.listId);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.redirectTo !== prevProps.redirectTo) {
            this.props.history.push(this.props.redirectTo);
        }
    }
    submit(e) {
        e.preventDefault();
    }

    focus(e) {
        e.target.value = '';
    }

    render() {
        const {listId} = this.props.match.params,
            {name, email, phone, onInputChange, onUpdate, onDelete, onAdd} = this.props;
        return (
            <form style={styling.formWrap} onSubmit={this.submit}>
                <div style={styling.innerForm}>
                    <div>
                        <label>Name: <input 
                            type='text' 
                            name='name'
                            value={name} 
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <label>Email:<input 
                            type='text'
                            name='email'
                            value={email}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <label>Phone:<input 
                            type='text'
                            name='phone'
                            value={phone}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>

                    </div>
                    <div>
                        <input type='button' value="Update" onClick={() => onUpdate(listId)} />
                        <input type='button' value="Delete" onClick={() => onDelete(listId)}/>
                        <input type='button' value="Add New Contact" onClick={() => onAdd(listId)}/>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.list,
        name: state.name,
        email: state.email,
        phone: state.phone,
        redirectTo: state.redirectTo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({type: 'CHANGE_LIST', id}),
        onInputChange: (name, value) => dispatch({type: 'CAPTURE_INPUT', payload: {name, value} }),
        onUpdate: (id) => dispatch({type: 'UPDATE', id}),
        onDelete: (id) => dispatch({type: 'DELETE', id}),
        onAdd: () => dispatch({type: 'ADD'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);