import React from 'react'

export default function MainButton({ onClick }) {
    return (
        <div>
            <button className="btn-submit" onClick={onClick}>SUBMIT</button>
        </div>
    )
}

