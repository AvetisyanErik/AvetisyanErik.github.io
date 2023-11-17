import style from './Nav.module.scss';

function Card1({item}){
    return(
        <div style={{backgroundColor: item.color}} className={style.card1} key={item.id}>
            <p>{item.text}</p>
            <img src={item.photo} alt=""/>
        </div>
    )
}
export default Card1;