import React, { useState } from 'react';
import 'antd/dist/antd.css';

const divCenter = {
    margin: "auto",
    width: "50%",
    textAlign: "center",
    padding: "10px"
}

const marginLinks = {
    marginLeft : "10px"
}

export default function Login() {
    return (

        <div style={divCenter}>
            <h1>Welcome</h1>
            <a href="/login">Login</a>
            <a style={marginLinks} href="/signup">Signup</a>
        </div>
    )
}