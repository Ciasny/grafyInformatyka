import React from 'react'

const NavBar = ({ setAlgorithm, setPage }) => {
    return (
        <header className='bg-neutral-400 flex justify-center gap-10 py-5 text-xl fixed top-0 w-full z-40'>
            <button onClick={() => setPage('main')}>Strona Główna</button>
            <button onClick={() => {
                setPage('algorithm')
                setAlgorithm('DFS')
            }}>DFS</button>
            <button onClick={() => {
                setPage('algorithm')
                setAlgorithm('BFS')
            }}>BFS</button>
            <button onClick={() => {
                setPage('algorithm')
                setAlgorithm('Dijkstry')
            }}>Dijkstry</button>
        </header>
    )
}

export default NavBar