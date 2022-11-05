import React from "react";

const SuccessMessage = ({message}) => {
    const successMessageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }

    return (
        <div style={successMessageStyle}>
            <h3>{message}</h3>
        </div>
    )
}

const ErrorMessage = ({message}) => {
    const errorMessageStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }

    return (
        <div style={errorMessageStyle}>
            <h3>{message}</h3>
        </div>
    )
}

export  {SuccessMessage, ErrorMessage}