import style from './Main.module.scss'
function Cards({ item }) {
    return (
            <div className={style.cards} key={item.id}>
                <img src={item.img} alt="" />
                <h5>{item.price}</h5>
                <p>{item.title}</p>
                <span>{item.text}</span>
            </div>
    )
}

export default Cards;