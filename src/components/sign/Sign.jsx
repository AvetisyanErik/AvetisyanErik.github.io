import { NavLink } from 'react-router-dom';
import style from './Sign.module.scss'
import { useState } from 'react';
import Header1 from '../header1/Header1';
function Sign() {
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    return (
        <div style={{ height: '89vh', backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
            <Header1 />
            <div className={style.divSign}>
                <div className={style.sign}>
                    <div className={style.sign1}>
                        <div>
                            <h1>List.am Մուտք</h1>
                        </div>
                        <div className={style.inputs}>
                            <form action="">
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Հեռախոս կամ էլ․փոստ' type='email' />
                                </div>
                                <hr style={{ opacity: '0.2' }} />
                                <div className={style.inp}>
                                    <input value={value1} onChange={(e) => setValue1(e.target.value)} placeholder='Գաղտնաբառ' type="password" />
                                    <NavLink to={'/lostpwd'}>Մոռացել եք?</NavLink>
                                </div>
                            </form>
                        </div>
                        <div className={'enter'}>
                            {value !== '' && value1 !== '' ? <button disabled={false}>Մուտք</button> : <button disabled={true}>Մուտք</button>}
                        </div>
                        <div className={style.othenter}>
                            <p>Մուտքի այլ տարբերակներ</p>
                            <div className={style.imgs}>
                                <img src="./images/login_fb.webp" alt="" />
                                <img src="./images/login_google.webp" alt="" />
                                <img src="./images/login_mailru.webp" alt="" />
                                <img src="./images/login_vk.webp" alt="" />
                            </div>
                        </div>
                        <div className={style.reg}>
                            <p>Դեռ գրանցված չե՞ք</p>
                            <NavLink to={'/regPage'}>Գրանցում</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sign;