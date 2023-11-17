import style from './Nav.module.scss';
import { useSelector } from "react-redux";
import Card from './Card'
import Card1 from './Card1'

function Nav() {
    const list = useSelector((state) => state.lists.lists)
    const list1 = useSelector((state) => state.lists.lists1)
    return (
        <div>
            <div className={style.list}>
                {list.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <div className={style.list1}>
            {list1.map((item) => (
                    <Card1 key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Nav;