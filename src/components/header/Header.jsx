import style from './Header.module.scss';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function Header() {
    const [hide, setHide] = useState()
    return (
        <div className={style.header}>
            <div className={style.header1} >
                <div className={style.search}>
                    <NavLink to={'/'}>
                        <img src="images/listicon.png" alt="" />
                    </NavLink>
                    <div className={style.bajin}>
                        <div className={style.bajin1}>
                            <AiOutlineUnorderedList className={style.icon} />
                            <p>Բաժիններ</p>
                        </div>
                    </div>
                    <input type="text" placeholder='Որոնում'/>
                </div>
                <div className={style.add}>
                    <NavLink className={style.myPage} to={'/myPage'}>Իմ էջը</NavLink>
                    <NavLink className={style.ads} to={'/myPage'}>Տեղադրել հայտարարություն</NavLink>
                </div>
                <img onClick={() => {
                    setHide(!hide)
                }} className={style.flag} src="images/armflag.jpg" alt="" />
                {hide && <div className={style.lang}>
                    <IoIosArrowUp className={style.arrow} />
                    <div className={style.lang1}>
                        <div className={style.flag1}>
                            <img src="images/rusflag.jpeg" alt="" />
                            <p>русский</p>
                        </div>
                        <div className={style.flag1}>
                            <img src="images/amflag.jpg" alt="" />
                            <p>english</p>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Header;