import style from './Nav.module.scss';

function Card({item}){
    return(
        <div className={style.card} key={item.id}>
            <p className={style.icon}>{item.icon}</p>
            <span className={style.text}>{item.text}</span>
        </div>
    )
}
export default Card;