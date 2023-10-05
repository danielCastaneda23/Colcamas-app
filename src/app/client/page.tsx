'use client'

import { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [character, setCharacter] = useState([])


    useEffect(() => {
        const character = async () => {
            return (await (
                await fetch('https://rickandmortyapi.com/api/character', {
                    method: 'GET'
                })
            ).json()).results
        }

        character().then((res) => {
            setCharacter(res)
        }
        )

    }, [])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {
                character.map((data: any) => {
                    return (
                        <div key={data.id}>
                            {data.name}
                        </div>
                    )
                })
            }
        </div>

    )
}
