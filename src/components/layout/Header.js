import React from 'react'

export default function Header() {
    return (
        <header>
            <h1 style={headerStyle}>Customers Phone Index</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
      color: '#fff',
      border: 'none',
      textAlign: 'center',
      padding: '5px 10px'
}


