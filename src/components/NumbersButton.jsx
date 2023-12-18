import React from 'react'


export default function NumbersButton({ number, onClick }) {
    return (
        <div>
            <button onClick={onClick} className="btn-numbers">{number}</button>
        </div>
    )
}