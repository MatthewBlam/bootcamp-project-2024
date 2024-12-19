import { twMerge } from "tailwind-merge";

const Textarea = ({
    className,
    label,
    placeholder,
    value,
    setValue,
}: {
    className?: string;
    label?: string;
    placeholder: string;
    value: string;
    setValue: Function;
}) => {
    return (
        <div className={twMerge("w-full flex flex-col gap-3", className)}>
            <span className="font-medium text-sm text-slate-500">{label}</span>
            <textarea
                className="resize-none h-40 bg-slate-50 font-medium text-base text-slate-900 placeholder-slate-300 outline outline-[2.5px] outline-slate-300 focus:outline-blue-500 rounded-sm py-[10px] px-[13px] block w-full"
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}></textarea>
        </div>
    );
};

export default Textarea;
