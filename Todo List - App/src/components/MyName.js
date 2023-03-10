import React from 'react'

const MyName = (props) => {
    return (
        <div style={{ textAlign: 'left' }}>
            <table>
                <tr>
                    <td>Full Name</td>
                    <td style={{ paddingLeft: '30px', paddingRight: '10px' }}>:</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>Student ID</td>
                    <td style={{ paddingLeft: '30px', paddingRight: '10px' }}>:</td>
                    <td>{props.studentid}</td>
                </tr>
            </table>
        </div>
    )
}

export default MyName