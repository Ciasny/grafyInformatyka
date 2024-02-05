import React from 'react'
import Labirynth from './Labirynth'
import NavBar from './NavBar'
import Footer from './Footer'
import DJKGif from './images/Dijkstra_Animation.gif'

const AlgorithmPage = ({ algorithm, setPage, setAlgorithm }) => {

    const data = {
        'DFS': {
            content: 'Algorytm przeszukiwania grafu w głąb. Przeszukiwanie w głąb polega na badaniu wszystkich krawędzi wychodzących z podanego wierzchołka. Po zbadaniu wszystkich krawędzi wychodzących z danego wierzchołka algorytm powraca do wierzchołka, z którego dany wierzchołek został odwiedzony.',
            name: 'Depth First Search'
        },
        'BFS': {
            content: 'Polega na odwiedzeniu wszystkich osiągalnych z wierzchołków. Wynikiem działania algorytmu jest drzewo przeszukiwania wszerz o korzeniu w s, zawierające wszystkie wierzchołki osiągalne z s. Do każdego z tych wierzchołków prowadzi dokładnie jedna ścieżka z s, która jest jednocześnie najkrótszą ścieżką w grafie wejściowym. Algorytm działa prawidłowo zarówno dla grafów skierowanych jak i nieskierowanych..',
            name: 'Breadth First Search'
        },
        'Dijkstry': {
            content: 'Służy do znajdowania najkrótszej ścieżki w grafie ważonym. Algorytm działa iteracyjnie, przypisując każdemu wierzchołkowi aktualną najkrótszą znaną odległość od źródła. W każdej iteracji wybierany jest wierzchołek o najmniejszej aktualnej odległości, a następnie aktualizowane są odległości do jego sąsiadów.',
            name: 'Algorytm Edsgera Dijkstrę'
        }
    }

    function renderPage() {
        return (
            <div>
                <NavBar setAlgorithm={setAlgorithm} setPage={setPage} />

                <div className='mt-[7rem] flex flex-col justify-center items-center'>
                    <h2 className='text-4xl mb-5'><b>{algorithm}</b> - {data[algorithm].name}</h2>
                    <p className='max-w-[60ch] text-xl mb-10'>{data[algorithm].content}</p>

                    <p className='underline'>Przejdź labirynt następnie kliknij przycisk i zobacz jak algorytm rozwiązuje labirynt</p>
                    <Labirynth algorithm={algorithm} />
                </div>

                <Footer />
            </div>
        )
    }

    function renderDjk() {
        return (
            <div>
                <NavBar setAlgorithm={setAlgorithm} setPage={setPage} />

                <div className='mt-[7rem] flex flex-col justify-center items-center'>
                    <h2 className='text-4xl mb-5'><b>Dijkstry</b></h2>
                    <p className='max-w-[60ch] text-xl mb-10'>{data[algorithm].content}</p>

                    <p className='underline'>Przejdź labirynt następnie kliknij przycisk i zobacz jak algorytm rozwiązuje labirynt</p>
                    <img src={DJKGif} alt="Dijkstry Gif" className='w-[40%] mb-10' />
                </div>

                <Footer />
            </div>
        )
    }

    return algorithm === 'Dijkstry' ? renderDjk() : renderPage()
}

export default AlgorithmPage