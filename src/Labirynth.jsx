import React, { useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid'
import BFS from './Algorithms/BFS'
import DFS from './Algorithms/DFS'

let playerX = 0;
let playerY = 1;
let steps = 0;
let algorithmSteps = 0

const Labirynth = ({ algorithm }) => {

    const playerRef = useRef()
    const [win, setWin] = useState(false)
    const [labyrinth, setLabyrinth] = useState([
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        ['P', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', 'x', 'x', 'x', ' ', 'x', ' ', 'x', 'x', ' ', 'x', 'x', ' ', 'x', 'x', 'x', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', 'x', 'x', 'x', 'x'],
        ['x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', 'x'],
        ['x', ' ', 'x', ' ', 'x', 'x', ' ', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', 'x', 'x', ' ', 'x', 'x', 'x', ' ', 'x', 'x'],
        ['x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', ' ', 'x', 'x'],
        ['x', ' ', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', 'x'],
        ['x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', ' ', ' ', 'x', 'x', 'x', 'x', ' ', ' ', ' ', 'x', 'x', 'x', 'x'],
        ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', 'x'],
        ['x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', ' ', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', ' ', 'x', 'x'],
        ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', 'x', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', 'x', 'x', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x'],
        ['x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', 'x', ' ', 'x', 'x', 'x', 'x'],
        ['x', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', ' ', ' ', 'x', 'x', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        ['x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', 'x', 'x', 'x', 'x', ' ', ' ', 'x', ' ', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', ' ', ' ', 'x', 'x', 'x', ' ', ' ', 'x', ' ', 'x'],
        ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
        ['x', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x'],
        ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', ' ', 'x', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x'],
        ['x', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x'],
        ['x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', 'x'],
        ['x', 'x', 'x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ' ', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x'],
        ['x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', 'x'],
        ['x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'x', 'x', ' ', 'x', ' ', 'x', 'x', 'x', 'x', ' ', 'EX'],
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
    ])

    function runAlgorithm() {
        const { path, visited } = algorithm === 'BFS' ? BFS(labyrinth, setLabyrinth) : DFS(labyrinth, setLabyrinth);
        let vIter = 0

        visited.forEach(item => {
            setTimeout(() => {
                setLabyrinth(() => {
                    const labyrinthCopy = labyrinth
                    const [x, y] = item.split(',')
                    labyrinthCopy[x][y] = 'c'
                    return [...labyrinthCopy]
                })
            }, vIter * 25)
            vIter++
        })

        setTimeout(() => {
            for (let i = 0; i < path.length; i++) {
                console.log(path[i])
                setLabyrinth(() => {
                    const labyrinthCopy = labyrinth
                    algorithmSteps++
                    labyrinthCopy[path[i][0]][path[i][1]] = '*'
                    return [...labyrinthCopy]
                })
            }
        }, 25 * visited.size)
    }

    function movePlayer(xDif, yDif) {

        // check if player can move / there is no wall
        if (labyrinth[playerY + yDif][playerX + xDif] !== 'x') {


            setLabyrinth(() => {
                const labyrinthCopy = labyrinth

                labyrinthCopy[playerY][playerX] = 'm'
                playerX += xDif
                playerY += yDif
                labyrinthCopy[playerY][playerX] = 'P'
                steps++

                if (playerX === 29 & playerY === 28) {
                    exitMaze()
                }
                return [...labyrinthCopy]
            })


        }

    }

    function exitMaze() {
        setWin(true)
        setLabyrinth(() => {
            const labyrinthCopy = labyrinth
            labyrinthCopy[28][29] = 'EX'
            return [...labyrinthCopy]
        })

    }

    useEffect(() => {
        document.addEventListener('keypress', e => {
            switch (e.key) {
                case 'w':
                    // Need to input reverse Y because list order is from 0 to 30 so if I want to go up I have to go from 28 to 27
                    movePlayer(0, -1)
                    break
                case 's':
                    // Need to input reverse Y because list order is from 0 to 30 so if I want to go up I have to go from 28 to 27
                    movePlayer(0, 1)
                    break
                case 'a':
                    movePlayer(-1, 0)
                    break
                case 'd':
                    movePlayer(1, 0)
                    break
                default:
                    break
            }
        })
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {

    }, [algorithm])

    return (
        <div className='flex flex-col justify-center my-[5rem]'>
            <div className='flex justify-center text-2xl gap-10 my-5'>
                <p>Ścieżka Gracza: {steps}</p>
                <p>Ścieżka Algorytmu: {algorithmSteps}</p>

            </div>
            <div className='flex gap-10'>
                <div>
                    <p className='text-xl'>Legenda:</p>
                    <ul>
                        <li className='flex items-center gap-2'><div className='w-4 h-4 bg-red-500'></div> Wyjście</li>
                        <li className='flex items-center gap-2'><div className='w-4 h-4 bg-green-300'></div> Pola sprawdzone przez algorytm</li>
                        <li className='flex items-center gap-2'><div className='w-4 h-4 bg-green-500'></div> Najkrótsza ścieżka</li>
                        <li className='flex items-center gap-2'><div className='w-4 h-4 bg-slate-600' ></div> Pola sprawdzone przez Gracza</li>
                        <li className='flex items-center gap-2'><div className='w-4 h-4 bg-blue-600 '></div> Gracz</li>
                        <li className='flex items-center gap-2'><div className='w-4 h-4 bg-black'></div> Ściana</li>
                    </ul>
                </div>
                <div className='maze | grid w-[30rem]  h-[30rem] relative' style={{ gridTemplateColumns: "repeat(30, 1fr)" }}>
                    {

                        labyrinth.map(row => {

                            return row.map(item => {
                                switch (item) {
                                    case 'x':
                                        return (
                                            <div className='w-4 h-4 bg-black' key={uuid()}></div>
                                        )

                                    case ' ':
                                        return (
                                            <div className='w-4 h-4 bg-slate-400' key={uuid()}></div>
                                        )

                                    case 'P':
                                        if (win === false) {
                                            return (
                                                <div className='w-4 h-4 bg-blue-600 ' ref={playerRef} key={uuid()}></div>
                                            )
                                        } else {
                                            return null
                                        }

                                    case 'm':
                                        return (
                                            <div className='w-4 h-4 bg-slate-600' key={uuid()} ></div>
                                        )

                                    case '*':
                                        return (
                                            <div className='w-4 h-4 bg-green-500' key={uuid()}></div>
                                        )
                                    case 'c':
                                        return (
                                            <div className='w-4 h-4 bg-green-300' key={uuid()}></div>
                                        )

                                    case 'EX':
                                        return (
                                            <div className='w-4 h-4 bg-red-500' key={uuid()}></div>
                                        )

                                }

                            })
                        })
                    }
                </div>
            </div>
            <button onClick={runAlgorithm} className='bg-neutral-400 text-white text-xl rounded-xl py-2 px-4 text-center my-5 disabled:bg-neutral-500 disabled:text-neutral-400' disabled={!win}>{algorithm}</button>

        </div >
    )
}

export default Labirynth