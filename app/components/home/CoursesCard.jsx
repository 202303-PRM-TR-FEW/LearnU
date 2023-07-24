"use client"
import Image from 'next/image'

import { GoClockFill, GoBookmarkSlashFill } from 'react-icons/go'
import { FaStar } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { setSavedCourses, removeSavedCourse, setMyLearning } from '@/store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CoursesCard({ id, title, img, hours, mins, rating, price, trainer }) {
    const [buttonText, setButtonText] = useState(`$ ${price}`)
    const dispatch = useDispatch();
    const savedCourses = useSelector(state => state.user.savedCourses)
    const found = savedCourses.find(course => course.id === id)


    const handleSave = () => {
        dispatch(setSavedCourses({ id }))
    }


    const handleRemove = () => {
        dispatch(removeSavedCourse({ id }))
    }

    const handleBuy = async (e) => {
        e.preventDefault();
        const stripe = await stripePromise;
        const response = await axios.post('http://localhost:3000/api/checkout_sessions', {
            price,
            title,
            img,
        });
        if (response.status === 200) {
            dispatch(setMyLearning({ id }))
        }
        console.log(response)
        const { sessionId } = response.data;
        const { error } = await stripe.redirectToCheckout({
            sessionId,
        });
    }



    return (
        <div className='relative flex flex-col items-start justify-between p-2 bg-slate-100 rounded-3xl dark:bg-slate-800 dark:text-slate-700'>
            <div className='relative w-full'>
                <Image src={img} alt={title} width={200} height={100} className="object-cover w-full h-32 mb-8 rounded-3xl" />
                {!found && (<span onClick={handleSave} className='absolute p-3 text-white border-blue-600 rounded-lg group top-2 right-2 backdrop-blur-sm bg-white/5 hover:cursor-pointer hover:border'>
                    <BsFillBookmarkFill size={17} className='group-hover:text-blue-600 ' />
                </span>)}
                {found && (<span onClick={handleRemove} className='absolute p-3 text-white border-blue-600 rounded-lg group top-2 right-2 backdrop-blur-sm bg-white/5 hover:cursor-pointer hover:border'>
                    <GoBookmarkSlashFill size={17} className='group-hover:text-blue-600 ' />
                </span>)}
            </div>
            <div className='flex gap-2 p-1 left-4 justify-start items-center rounded-full absolute top-[50%] translate-y-[-50%] dark:bg-slate-950 dark:text-white bg-slate-50 text-slate-700'>
                <Image src={img} alt={title} width={50} height={50} className="object-cover rounded-full w-9 h-9" />
                <p className='pr-2'>{trainer}</p>
            </div>
            <div className='flex flex-col w-full p-2 text-slate-700 dark:text-white'>
                <p className='text-lg font-bold'>{title}</p>
                <div className='flex flex-wrap items-baseline justify-between'>
                    <p className='flex items-center gap-2'><GoClockFill className='text-gray-400' /> {hours}h {mins}m</p>
                    <p className='flex items-center gap-2'><FaStar className='text-yellow-400' /> {rating}/5</p>

                    <form onSubmit={handleBuy} className='flex group'>
                        <button className='hidden px-6 py-2 mt-2 text-center text-white bg-blue-600 rounded-full group-hover:inline-block'>
                            Buy</button>
                        <span className="px-6 py-2 mt-2 text-center text-white bg-blue-600 rounded-full cursor-pointer group-hover:hidden">${price}</span>
                    </form>

                </div>
            </div>
        </div>
    )
}
