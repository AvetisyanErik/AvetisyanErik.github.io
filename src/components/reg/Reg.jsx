import { useState } from "react";
import Header1 from "../header1/Header1";
import style from './Reg.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
function Reg() {
    const [checked, setChecked] = useState(true)
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(true)
    const [value, setValue] = useState('+374')
    const x = ['+374', '+7', '+995', '+1', '+33', '+447', '+49', '+32']
    return (
        <div>
            <div style={{ height: '89vh', backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
                <Header1 />
                <div className={style.reg}>
                    <div className={style.reg1}>
                        <h1>Գրանցում</h1>
                        <div className={style.inp}>
                            <label onClick={() => {
                                setChecked(true)
                                setChecked1(false)
                            }} htmlFor=""><input type="radio" checked={checked} cname="x" id="" />Հեռախոս</label>
                            <label onClick={() => {
                                setChecked(false)
                                setChecked1(true)
                            }} htmlFor=""><input type="radio" checked={checked1} name="x" id="" />էլ․փոստ</label>
                            <div>
                                <form action="">
                                    {checked
                                        ? <div className={style.input}>
                                            <span onClick={() => setChecked2(!checked2)}><IoIosArrowDown className={style.arrow} />{value}</span><input className={style.inpnum} type="number" placeholder='Ձեր համարը' />
                                        </div>
                                        : <div className={style.input}>
                                            <input type="email" placeholder="Ձեր էլ․փոստի հասցեն" />
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                        <button>Շարունակել</button>
                        <div hidden={checked2} className={style.checkNum}>
                            {x.map((item) => {
                                return <p onClick={() => {
                                    setValue(item)
                                    setChecked2(true)
                                }}>{item}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reg;