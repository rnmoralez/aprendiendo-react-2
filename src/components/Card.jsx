

export default function Card({ info }){
    return (
        <article>
            <div>
                <img src={info?.image} alt="" />
            </div>
            <div>
                <h1>{info.name}</h1>
                <p>{info.species}</p>
                <small>{info.status}</small>
            </div>
        </article>
    )
}