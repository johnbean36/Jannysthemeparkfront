import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//this is where you buy your tickets


const BuyTickets = (props) => {

    let navigate = useNavigate()

    const [newTicket, setNewTicket] = useState({
        name: '',
        date: '',
        age: '',
        pass: '',

    })

    const handleChange = async (e) => {
        setNewTicket({ ...newTicket, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('https://jannysthemepark-84d4689535be.herokuapp.com/tickets', newTicket)
        props.setId(response.data._id)
        navigate('/')
    }

    return (

        <div className='ticketInput' id="ticket-form">
            <h2>Ticket Info</h2>
            <form onSubmit={handleSubmit}>
                <h3>Name</h3><input type='text' placeholder='name' name={'name'} onChange={handleChange} />
                <h3>Date</h3><input type='date' placeholder='Date' name={'date'} onChange={handleChange} />
                <h3>Age</h3><input type='number' placeholder='Age' name={'age'} onChange={handleChange} />
                <h3>Pass Type</h3>
                <select name={'pass'} onChange={handleChange} defaultValue=''>
                    <option></option>
                    <option value='Yawn Pass'>Yawn Pass</option>
                    <option value='Jan Premium Pass'>Jan Premium Pass</option>
                    <option value='Jan Ultimate'>Jan Ultimate Pass</option>
                </select>
                <br />
                <br />

                <div>
                    <button>Purchase</button>
                </div>

            </form>
        </div>
    )
}

export default BuyTickets
