import React from 'react'

const Footer = () => {
    return (
        <div className='bg-neutral-400 py-5 '>
            <h4 className='text-center text-3xl text-white'>Dokumentacja Techniczna i Źródła</h4>
            <div className='flex justify-between mx-5'>
                <div className='max-w-[50ch]'>

                    <p className='text-xl text-white'>Źródła:</p>

                    <ul className='list-disc pl-10 text-white'>
                        <li className=' list-disc'>https://pl.wikipedia.org/wiki/Przeszukiwanie_w_głąb</li>
                        <li className=' list-disc'>https://pl.wikipedia.org/wiki/Przeszukiwanie_w_głąb#/media/Plik:Graph.traversal.example.png</li>
                        <li className=' list-disc'>https://commons.wikimedia.org/wiki/File:Breadth-First-Search-Algorithm.gif</li>
                        <li className=' list-disc'>https://pl.wikipedia.org/wiki/Algorytm_Dijkstry</li>
                        <li className=' list-disc'>https://pl.wikipedia.org/wiki/Przeszukiwanie_wszerz</li>
                        <li className=' list-disc'>https://chat.openai.com/</li>
                        <li className=' list-disc'>https://pl.wikipedia.org/wiki/Problem_najkrótszej_ścieżki</li>
                    </ul>

                </div>
                <div className='text-right max-w-[50ch] text-white'>
                    <p className='text-xl text-white'>Dokumentacja: </p>
                    <p>Strona została zrobiona przy użyciu biblioteki JavaScripta React i biblioteki CSSa TailwindCSS. <br />
                        Strona zawiera: Strone główną, Strony Algorytmów, i Labirynty do rozwiązania przez użytkownika, po czym użytkownik może rozwiązać labirynt przy użyciu algorytmu i porównać wyniki </p>
                </div>
            </div>
            <p className='text-center text-2xl text-white font-thin'>Strona Zrobiona Przez Oliwiera Maciejowskiego i Marka Kulczyka</p>

        </div>
    )
}

export default Footer