import React, { useState } from 'react'
import MainPage from './MainPage'
import AlgorithmPage from './AlgorithmPage'

const App = () => {
    const [page, setPage] = useState('main')
    const [algorithm, setAlgorithm] = useState('')
    return (
        <div>
            {page === 'main' ? <MainPage setPage={setPage} setAlgorithm={setAlgorithm} /> : <AlgorithmPage setPage={setPage} setAlgorithm={setAlgorithm} algorithm={algorithm} />}
        </div>
    )
}

export default App