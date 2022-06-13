import React, { useState, useEffect } from 'react'

const Auth = () => {
    const [data, setData] = useState({
        email: 'test@example.com',
        password: 'password',
    })

    const [login, setLogin] = useState()
    const [id, setId] = useState(null)
    const [createData, setCreateData] = useState({
        title: '',
        content: '',
    })
    const [events, setEvents] = useState([])

    useEffect(() => {
        localStorage.getItem('events') && setEvents(JSON.parse(localStorage.getItem('events')))

        localStorage.getItem('id') && setId(JSON.parse(localStorage.getItem('id')))
    }, [])

    const submit = (e) => {
        e.preventDefault()

        // Attempted to set up POST to login endpoint - due to IaaS implementation was unable to get working during time frame
        // fetch('/api/v1/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).then(res => {
        //     console.log('Request', res)
        // })

        setLogin(true)
    }

    const onHandleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        console.log(data)
    }

    const create = (e) => {
        e.preventDefault()

        // post to /api/v1/events to store
        // fetch('/api/v1/events', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(createData)
        // }).then(res => {
        //     console.log('Request', res)
        // })

        const newEvent = {
            id: id || 1,
            title: createData.title,
            content: createData.content,
        }

        setEvents([
            ...events,
            newEvent
        ])

        setId(id + 1)

        localStorage.setItem('events', JSON.stringify(events))
    }

    const onHandleCreateDataChange = (event) => {
        setCreateData({
            ...createData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {!login && (
                    <>
                        <p>Login</p>
                        <form onSubmit={submit}>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input id='email' name="email" type="text" value={data.email} onChange={onHandleChange} />
                            </div>

                            <div>
                                <label htmlFor='password'>Password</label>
                                <input id='password' name="password" type="password" value={data.password} onChange={onHandleChange} />
                            </div>

                            <button>Submit</button>
                        </form>
                    </>
                )}

                {login && (
                    <>
                        <p>Event Create</p>
                        <form onSubmit={create}>
                            <div>
                                <label htmlFor='title'>Title</label>
                                <input id='title' name="title" type="text" value={createData.title} onChange={onHandleCreateDataChange} />
                            </div>

                            <div>
                                <label htmlFor='content'>Content</label>
                                <textarea id='content' name="content" type="content" value={createData.content} onChange={onHandleCreateDataChange} ></textarea>
                            </div>

                            <button>Submit</button>
                        </form>

                        <p>Events</p>
                        <ul>
                            {events.map(event => (
                                <li key={event.id}>
                                    <h3>{event.title}</h3>
                                    <p>{event.content}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    )
}

export default Auth
