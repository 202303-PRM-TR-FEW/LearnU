"use client"
import Image from 'next/image'
import { setRecommendedData } from '@/store/userSlice';
import { BsFillBookmarkFill } from 'react-icons/bs'
import { useDispatch} from 'react-redux'
import Link from 'next/link';

export default function LearningCard({ id, title, trainer, img, completed }) {
    const dispatch = useDispatch(); 
    const handleSendData = (recommendedData) => {
        dispatch(setRecommendedData(recommendedData));
      };
      
    return (
        <Link href="./overview">
        <div onClick={() => handleSendData({
            courseId: id
          })} className='relative flex items-start justify-start p-2 rounded-3xl dark:bg-slate-800 dark:text-white bg-slate-100 text-slate-700'>
            <Image src={img} alt={title} width={200} height={100} className="object-cover rounded-3xl" />
            <div className='flex flex-col justify-between w-full h-full py-2 pl-6 pr-3'>
                <div className='flex flex-col items-start'>
                    <h2 className='text-lg font-bold'>{title}</h2>
                    <span className='absolute p-2 rounded-lg text-slate-400 group top-4 right-4 bg-slate-300 hover:cursor-pointer hover:bg-blue-200/70'>
                        <BsFillBookmarkFill size={15} className='group-hover:text-blue-600 ' />
                    </span>
                    <p>{trainer}</p>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <div className='relative w-full h-2 rounded-full bg-slate-200'>
                        <span style={{ width: `${completed}%` }} className={`absolute inset-0 h-full bg-blue-600 rounded-full 
                        `}></span>
                    </div>
                    <p className='mt-2 text-sm font-semibold text-slate-700'>{completed}% Completed</p>
                </div>
            </div>
        </div>
        </Link>
    )
}
