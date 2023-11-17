import { createSlice } from '@reduxjs/toolkit'
import { AiOutlineLaptop } from 'react-icons/ai';
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineHdd } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlineCar } from 'react-icons/ai';
import { PiPottedPlant } from 'react-icons/pi';
import { FaPaw } from 'react-icons/fa6';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { IoShirtOutline } from 'react-icons/io5';
import { ImSpoonKnife } from 'react-icons/im';
import { PiBagSimpleFill } from 'react-icons/pi';
import { MdChildFriendly } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
const listSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [
            {
                id: 1,
                icon: <AiOutlineHome />,
                text: 'Անշարժ գույք',
            },
            {
                id: 2,
                icon: <AiOutlineCar />,
                text: 'Տրանսպորտ',
            },
            {
                id: 3,
                icon: <AiOutlineLaptop />,
                text: 'Էլեկտրոնիկա',
            },
            {
                id: 4,
                icon: <AiOutlineHdd />,
                text: 'Կենցաղային տեխնիկա',
            },
                {
                id: 5,
                icon: <PiPottedPlant />,
                text: 'Տուն և այգի',
            },
            {
                id: 6,
                icon: <IoShirtOutline />,
                text: 'Նորաձևություն և Ոճ',
            },
            {
                id: 7,
                icon: <MdChildFriendly />,
                text: 'Մանկական աշխարհ',
            },

            {
                id: 8,
                icon: <AiOutlineDribbble />,
                text: 'Հոբի և սպորտ',
            },
            {
                id: 9,
                icon: <AiOutlineAppstore />,
                text: 'Սարքավորումներ և նյութեր',
            },
            {
                id: 10,
                icon: <FaPaw />,
                text: 'Կենդանիներ',
            },
            {
                id: 11,
                icon: <ImSpoonKnife />,
                text: 'Մթերք և ըմպելիքներ',
            },
            {
                id: 12,
                icon: <BiDotsHorizontalRounded />,
                text: 'Այլ',
            },
            {
                id: 13,
                icon: <FaHandHoldingDollar />,
                text: 'Ծառայություններ',
            },
            {
                id: 14,
                icon: <PiBagSimpleFill />,
                text: 'Աշխատանք',
            },
            {
                id: 15,
                icon: <AiOutlineAppstoreAdd />,
                text: 'Բիզնես էջեր',
            }
        ],
        lists1: [
            {
                id: 1,
                photo: 'images/214.webp',
                text: 'Օրավարձով բնակարաններ',
                color: '#009dcf'
            },
            {
                id: 2,
                photo: 'images/234.webp',
                text: 'Արցախահայերի համար',
                color: '#faaaaa'
            },
            {
                id: 3,
                photo: 'images/221.webp',
                text: 'Ձեր անվտանգությունը List.am-ում',
                color: '#e57d15'
            },
            {
                id: 4,
                photo: 'images/210.webp',
                text: 'Խաղեր և խաղային համակարգեր',
                color: '#ae3f1d'
            },
            {
                id: 5,
                photo: 'images/218.webp',
                text: 'Օտար լեզուներ',
                color: '#803fff'
            },
            {
                id: 6,
                photo: 'images/220.webp',
                text: 'Արտադրված է Հայաստանում',
                color: '#93BBEE'
            },
            {
                id: 7,
                photo: 'images/215.webp',
                text: 'Էլեկտրական մեքենաներ',
                color: '#006aff'
            },
            {
                id: 8,
                photo: 'images/224.webp',
                text: 'Գանձապահի հաստիքներ',
                color: '#7f7f7f'
            }
        ],
        lists2: [
            {
                id: 1,
                img: 'images/73826915.webp',
                price: '$225,000',
                title: '3 սենյականոց բնակարան',
                text: '3 սեն., 73 ք.մ., 4/14 հարկ',
            }, {
                id: 2,
                img: 'images/74957180.webp',
                price: '$100,000',
                title: '3 սենյականոց բնակարան',
                text: '3 սեն., 62 ք.մ., 1/3 հարկ',
            }, {
                id: 3,
                img: 'images/75298142.webp',
                price: '$139,000',
                title: '1 սենյականոց բնակարան Մեսրոպ',
                text: '1 սեն., 33 ք.մ., 4/5 հարկ',
            }, {
                id: 4,
                img: 'images/73918753.webp',
                price: '$116,000',
                title: '3 սենյականոց բնակարան',
                text: '3 սեն., 76 ք.մ., 4/5 հարկ',
            }, {
                id: 5,
                img: 'images/75211433.webp',
                price: '$345,000',
                title: '5 սենյականոց բնակարան',
                text: '5 սեն., 138 ք.մ., 13/14 հարկ',
            }, {
                id: 6,
                img: 'images/64448337.webp',
                price: '$300,000',
                title: '3 սենյականոց բնակարան',
                text: '3 սեն., 93 ք.մ., 5/16 հարկ',
            },
        ],
        lists3: [
            {
                id: 1,
                img: 'images/75164153.webp',
                price: '4,500,000 ֏ ամսական',
                title: 'Գրասենյակային տարածք Արգիշտիի',
                text: '371 ք.մ.',
            }, {
                id: 2,
                img: 'images/74771320.webp',
                price: '269,000 ֏ ամսական',
                title: 'Գրասենյակային տարածք Հակոբ',
                text: '25 ք.մ.',
            }, {
                id: 3,
                img: 'images/67258338.webp',
                price: '325,000 ֏ ամսական',
                title: 'Գրասենյակային տարածք',
                text: '54 ք.մ.',
            }, {
                id: 4,
                img: 'images/75398569.webp',
                price: '240,000 ֏ ամսական',
                title: 'Գրասենյակային տարածք Տերյան',
                text: '30 ք.մ.',
            }, {
                id: 5,
                img: 'images/74782144.webp',
                price: '200,000 ֏ ամսական',
                title: 'Առևտրային տարածք Խաղաղ Դոնի',
                text: '45 ք.մ.',
            }, {
                id: 6,
                img: 'images/74602992.webp',
                price: '150,000 ֏ ամսական',
                title: 'Գրասենյակային տարածք Քաջազնո',
                text: '36 ք.մ.',
            }, {
                id: 7,
                img: 'images/73398026.webp',
                price: '6,000,000 ֏ ամսական',
                title: 'Բազմաֆունկցիոնալ գույք Դավիթ Բեկի',
                text: '1380 ք.մ.',
            }, {
                id: 8,
                img: 'images/72586459.webp',
                price: '650,000 ֏ ամսական',
                title: 'Գրասենյակային տարածք,',
                text: '75 ք.մ.',
            }, {
                id: 9,
                img: 'images/75512741.webp',
                price: '250,000 ֏ ամսական',
                title: 'Առևտրային տարածք Էրեբունիում, 31 ք.մ.',
                text: '31 ք.մ.',
            }, {
                id: 10,
                img: 'images/68787079.webp',
                price: '300,000 ֏ ամսական',
                title: 'Բազմաֆունկցիոնալ գույք, Նորաշեն',
                text: '125 ք.մ.',
            }, {
                id: 11,
                img: 'images/72079496.webp',
                price: '2,000,000 ֏ ամսական',
                title: 'Շենք Սպանդարյան փողոցում Գյումրիում,',
                text: '627 ք.մ.',
            }, {
                id: 12,
                img: 'images/75457856.webp',
                price: '1,000,000 ֏ ամսական',
                title: 'Հյուրանոց Բագրատունյաց',
                text: '400 ք.մ.',
            },
        ],
        lists4: [
            {
                id: 1,
                img: 'images/69777120.webp',
                price: '200.000 ֏',
                title: 'Հաշվառումից հանում.С Российских',
                text: '1 -2 տոննա',
            }, {
                id: 2,
                img: 'images/68695546.webp',
                price: '30.000 ֏',
                title: 'Կռան-մանիպուլյատորի',
                text: '5 -10 տոննա',
            }, {
                id: 3,
                img: 'images/69443650.webp',
                price: '10,000 ֏',
                title: 'Բեռնափոխադրում բանվորական ուժ',
                text: ''
            }, {
                id: 4,
                img: 'images/74986273.webp',
                price: '6,000 ֏',
                title: 'Էվակուատոր 1-10 տոննա Ավտոքարշակ',
                text: '2 -3 տոննա',
            }, {
                id: 5,
                img: 'images/69104901.webp',
                price: '1,500 ֏ կմ-ի համար',
                title: 'Трал Tral грузовой эвакуатор 30 тон',
                text: '20 տոննայից ավելի',
            }, {
                id: 6,
                img: 'images/75438785.webp',
                price: '$350',
                title: 'Էվակուատոր, Ավտոքարշակ',
                text: '3-5 տոննա',
            }
        ],
        list5: [
            {
                id: 1,
                title: ''
            }
        ]
    }
})

export default listSlice.reducer;