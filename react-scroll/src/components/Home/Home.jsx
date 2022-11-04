import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader';

const Home = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`https://randomuser.me/api/?results=500&page=${page}&limit=${limit}`)
                setUsers(prev => [...prev, ...res.data.results])
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [page])


    const handleScroll = () => {

        setInterval(() => {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight) {

                setLoading(true)
                setPage((prev) => prev + 1)
            }
        }, 1000);

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className='homeContainer'>


            {
                users?.map((user, i) => (
                    <div className="userCard" key={i}>
                        <img src={user.picture.medium} alt="userpic" />
                        <h3>{user.name.first}</h3>
                    </div>
                ))
            }

            {
                loading && <Loader />
            }
        </div>
    )
}

export default Home