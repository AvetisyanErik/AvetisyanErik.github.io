import style from './Footer.module.scss'
function Footer(){
    return(
        <div>
            <div style={{backgroundColor : 'rgba(128, 128, 128, 0.1)', height: '30px'}}></div>
            <div className={style.footer}>
                <div className={style.footer1}>
                    <p>© 2005-2023 List.am</p>
                </div>
                <div className={style.footer2}>
                    <p>Տեղեկանք</p>
                    <p>Հետադարձ կապ</p>
                    <p>Օգտագործման համաձայնագիր</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;