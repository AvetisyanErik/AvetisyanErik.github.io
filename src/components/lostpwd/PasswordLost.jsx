import style from './PasswordLost.module.scss'
import Header1 from '../header1/Header1'
import { useState } from 'react';
function PasswordLost() {
    const [value, setValue] = useState('')
    return (
        <div>
            <div style={{ height: '89vh', backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
                <Header1 />
                <div className={style.pass}>
                    <div className={style.pass1}>
                        <h1>Մոռացել եք գաղտնաբառը?</h1>
                        <p>Մուտքագրեք ձեր հեռախոսահամարը կամ էլ.փոստի հասցեն և մենք ձեզ կուղարկենք կոդ գաղտնաբառը վերականգնելու համար:</p>
                        <form style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', gap: '20px'}} action="">
                            <input type="text" placeholder='Հեռախոս կամ էլ․փոստ' value={value} onChange={(e) => setValue(e.target.value)} />
                            {value !== '' ? <button disabled={false}>Ուղարկել</button> : <button disabled={true}>Ուղարկել</button>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PasswordLost;