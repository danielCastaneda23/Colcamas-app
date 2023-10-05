
export default async function Server() {

    const character = (await (
        await fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET',
        })
    ).json()).results

    console.log('server: ', character.length)
    return (
        <div>
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
