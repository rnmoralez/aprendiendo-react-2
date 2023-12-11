import styles from "./Card.module.css"

export default function Card({info}) {
    return(
        <div className={styles.card}>
            <div className={styles.containerImage}>
                <img src={info.image} alt="img-personaje" />
            </div>
            <div className="card-body">
                <h2 className={styles.cardTitle}>{info.name}</h2>
                <h5>Species: {info.species}</h5>
                <h5>Gender: {info.gender}</h5>
                <h6>Status: {info.status}</h6>
            </div>            
        </div>
    );
}