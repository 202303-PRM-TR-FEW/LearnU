
export default function CategoryCard({ title, Icon }) {
    return (
        <div className="w-40 gap-2 py-4 border-blue-500 rounded-2xl hover:text-blue-500 hover:border hover:cursor-pointer flex-col-center dark:bg-slate-800 dark:text-white bg-slate-100 text-slate-700">
            <Icon size={25} />
            <h2>{title}</h2>
        </div>
    )
}
