import React from 'react'
import BFSGif from './images/Breadth-First-Search-Algorithm.gif'
import DFSGif from './images/Depth-First-Search.gif'
import DijkstraGif from './images/Dijkstra_Animation.gif'
import NavBar from './NavBar'
import Footer from './Footer'

const MainPage = ({ setPage, setAlgorithm }) => {



    return (
        <>
            <NavBar setAlgorithm={setAlgorithm} setPage={setPage} />
            <main className='flex justify-center items-center flex-col max-w-[50rem] m-auto my-[7rem]'>

                <h1 className='text-4xl text-center'>Algorytmy przeszukiwania i znajdowania <br />najkrótszej ścieżki</h1>
                <p className=' text-justify text-xl mt-5 mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum non doloremque id deserunt nisi cupiditate
                    alias molestiae tempore hic eum quasi, at enim ipsa asperiores culpa unde? Dicta, blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium ullam, accusantium temporibus dolore dicta cumque velit suscipit, alias dolor facere voluptas quidem nemo consectetur ipsam eligendi voluptatum
                    veritatis. Architecto, vel.</p>
                {/* DFS */}
                <div className='flex justify-center items-center flex-col mb-[10rem]'>
                    <h2 className='text-3xl '>DFS</h2>
                    <p className='mb-14'>Depth First Search</p>
                    <p className='max-w-[50ch] text-justify text-xl'><b>Algorytm przeszukiwania grafu w głąb.</b> Przeszukiwanie w głąb polega na badaniu wszystkich krawędzi
                        wychodzących z podanego wierzchołka. Po zbadaniu wszystkich krawędzi wychodzących z danego wierzchołka
                        algorytm powraca do wierzchołka, z którego dany wierzchołek został odwiedzony.</p>
                    <img src={DFSGif} alt="DFS animation" className='mb-10' />
                    <button className='bg-neutral-500 text-white px-5 py-3 rounded-2xl' onClick={() => {
                        setPage('algorithm')
                        setAlgorithm('DFS')
                    }}>Przejdź do gry</button>
                </div>

                {/* BFS */}
                <div className='flex justify-center items-center flex-col mb-[10rem]'>
                    <h2 className='text-3xl '>BFS</h2>
                    <p className='mb-14'>Breadth First Search</p>
                    <p className='max-w-[50ch] text-justify text-xl'>Polega na odwiedzeniu wszystkich osiągalnych z wierzchołków. Wynikiem działania algorytmu jest drzewo przeszukiwania wszerz o korzeniu w s, zawierające wszystkie wierzchołki osiągalne z s. Do każdego z tych wierzchołków prowadzi dokładnie jedna ścieżka z s, która jest jednocześnie najkrótszą ścieżką w grafie wejściowym. Algorytm działa prawidłowo zarówno dla grafów skierowanych jak i nieskierowanych.</p>
                    <img src={BFSGif} alt="DFS animation" className='mb-10' />
                    <button className='bg-neutral-500 text-white px-5 py-3 rounded-2xl' onClick={() => {
                        setPage('algorithm')
                        setAlgorithm('BFS')
                    }}>Przejdź do gry</button>
                </div>

                {/* Dijkstry */}
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='text-3xl '>Dijkstry</h2>
                    <p className='mb-14'>Algorytm Edsgera Dijkstrę</p>
                    <p className='max-w-[50ch] text-justify text-xl'>Służy do znajdowania najkrótszej ścieżki w grafie ważonym.
                        Algorytm działa iteracyjnie, przypisując każdemu wierzchołkowi aktualną najkrótszą znaną odległość od źródła. W każdej iteracji wybierany jest wierzchołek o najmniejszej aktualnej odległości, a następnie aktualizowane są odległości do jego sąsiadów.</p>
                    <img src={DijkstraGif} alt="DFS animation" className='mb-10' />
                    <button className='bg-neutral-500 text-white px-5 py-3 rounded-2xl' onClick={() => {
                        setPage('algorithm')
                        setAlgorithm('Dijkstry')
                    }}>Przejdź do gry</button>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default MainPage