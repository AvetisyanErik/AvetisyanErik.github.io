import { NavLink } from 'react-router-dom';
import style from './Header1.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
function Header1() {
    const [hide,setHide] = useState()
    return (
        <div>
            <div className={style.header}>
                <div className={style.header1}>
                    <NavLink to={'/'}>
                        <img src="images/listicon.png" alt="" />
                    </NavLink>
                    <img onClick={() => {
                        setHide(!hide)
                    }} className={style.flag} src="images/armflag.jpg" alt="" />
                    {hide && <div className={style.lang}>
                        <IoIosArrowUp className={style.arrow}/>
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
        </div>
    )
}
export default Header1;
