

export default function Title({ title, className }) {
    return (
        <h1 className={`mb-8 text-3xl font-semibold text-slate-700 dark:text-white ${className}`}>{title}</h1>
    )
}
