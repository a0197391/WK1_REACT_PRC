import style from './pictures.module.css'

export default function Pictures({img}) {
    return (
            <div className={styles.image}>
                <a href="" className={style.imageLink}>
                    <img src={img.image} alt="" className={style.imageStyle} />
                </a>
                <p className={style.imageTitle}>{img.name}</p>
            </div>
    );
}