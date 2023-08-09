
export default function CategoryCard({ title, Icon, filter }) {
    return (
        <div onClick={()=>filter(title)} className="w-40 gap-2 py-4 border border-slate-100 rounded-2xl hover:text-blue-500 hover:border-blue-500 hover:cursor-pointer flex-col-center dark:bg-slate-800 dark:text-white bg-slate-100 text-slate-700">
            <Icon size={25} />
            <h2>{title}</h2>
        </div>
    )
}
