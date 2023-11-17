import { useSelector } from 'react-redux';
import style from './Main.module.scss';
import { IoIosArrowForward } from 'react-icons/io';
import Cards from './Cards';
function Main() {
    const lists = useSelector((state) => state.lists.lists2)
    const lists1 = useSelector((state) => state.lists.lists3)
    const lists2 = useSelector((state) => state.lists.lists4)
    return (
        <>
            <div className={style.business}>
                <div className={style.businpage}>
                    <p>Բիզնես Էջեր <IoIosArrowForward className={style.icon} /></p>
                </div>
                <div className={style.card}>
                    <Card img={'images/5574.webp'} />
                    <Card img={'images/10220.webp'} />
                    <Card img={'images/10496.webp'} />
                    <Card img={'images/10508.webp'} />
                    <Card img={'images/11169.webp'} />
                    <Card img={'images/12524.webp'} />
                    <Card img={'images/12903.webp'} />
                    <Card img={'images/12912.webp'} />
                </div>
            </div>
            <div className={style.businpage1}>
                <p>Բնակարանների վաճառք <IoIosArrowForward className={style.icon} /> </p>
            </div>
            <div className={style.business1}>
                {lists.map((item) => (
                    <Cards key={item.id} item={item} />
                ))}
            </div>
            <div className={style.businpage1}>
                <p>Կոմերցիոն անշարժ գույքի և գրասենյակների վարձակալություն <IoIosArrowForward className={style.icon} /></p>
            </div>
            <div className={style.business1}>
                {lists1.map((item) => (
                    <Cards key={item.id} item={item} />
                ))}
            </div>
            <div className={style.businpage1}>
                <p>Փոխադրումներ և տաքսի <IoIosArrowForward className={style.icon} /></p>
            </div>
            <div className={style.business1}>
                {lists2.map((item) => (
                    <Cards key={item.id} item={item} />
                ))}
            </div>
            <div className={style.business2}>
                <Card1 img={'images/75027941.webp'} text={'Ակվարիումներ հենց անմիջապես արտադրողից։Ակվարիումների պատրաստո'} price={'300 ֏'} title={'Ակվարիում, ակվարիումների վաճառք, ակվարիումների պատրաստում'}/>
                <Card1 img={'images/73600615.webp'} price={'6,000 ֏'} text={'A․ Բարձրացնում է օրգանիզմի դիմադրողականությունը (լայնորեն կիր'} title={'До свидания, усталость Здравствуй, бодрость, с помощью Ко'}/>
                <Card1 img={'images/74886865.webp'} price={'200 ֏'} text={'Սերմացու կարտոֆիլ կոլումբա-ագատա-բամբա-ագրիա'} title={'Կոլումբա, Ագատա, Բամբա, Ագրիա սերմացու Կարտոֆիլ'}/>
            </div>
        </>
    )
}
export default Main;

function Card1({img,text,price,title}){
    return(
        <div className={style.cards1}>
                <img src={img} alt="" />
                <h5>{price}</h5>
                <p>{title}</p>
                <span>{text}</span>
            </div>
        )
}

function Card({ img }) {
    return (
        <div className={style.card1}>
            <img className={style.img} src={img} alt="" />
            <img className={style.img1} src="images/3.webp" alt="" />
        </div>
    )
}