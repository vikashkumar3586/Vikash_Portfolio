import React, { type ReactElement } from 'react';
import { GoPlusCircle } from 'react-icons/go';

interface Props {
    label: ReactElement;
    items: (string | number)[];
    name: string;
    selected: (string | number)[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setShowOther: React.Dispatch<React.SetStateAction<boolean>>;
    refEl: React.RefObject<HTMLDivElement | null>;
    position: 'top' | 'bottom';
    theme: string;
    leftAlign?: boolean;
    rightAlign?: boolean;
}

const DropdownCheckbox: React.FC<Props> = ({
    label,
    items,
    name,
    selected,
    onChange,
    show,
    setShow,
    setShowOther,
    refEl,
    position,
    theme,
    leftAlign,
    rightAlign
}) => {
    return (
        <div
            ref={refEl}
            onClick={() => {
                setShow(!show);
                setShowOther(false);
            }}
            className={`relative cursor-pointer w-full col-span-2 border rounded-lg border-dashed flex gap-2 items-center justify-center py-2 px-2 ${rightAlign ? 'sm:col-span-1' : ''}`}
        >
            <GoPlusCircle className='inline' />
            <h1>{label}</h1>

            <div
                onClick={(e) => e.stopPropagation()}
                className={`
          origin-top absolute z-10 
          ${theme === 'dark' ? 'bg-[var(--bg-dark)]' : 'bg-[var(--bg-light)]'}
          flex flex-col gap-y-1 border border-neutral-700 rounded-lg
          ${position === 'top' ? 'top-full mt-2' : 'bottom-full mb-2'}
          ${leftAlign ? 'left-0' : ''} ${rightAlign ? 'right-0' : ''}
          min-w-full p-2 transition-opacity duration-300 ease-in-out overflow-hidden
          ${show ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} transform pointer-events-auto 
        `}
            >
                {items.map((item, idx) => {
                    const value = item.toString();
                    const isChecked = selected.includes(item);
                    return (
                        <label key={idx} htmlFor={`${name}-${value}`} className='flex gap-2 cursor-pointer hover:bg-gray-600 px-2 py-0.5 rounded-sm transition-all duration-300'>
                            <input
                                type='checkbox'
                                id={`${name}-${value}`}
                                name={name}
                                value={value}
                                checked={isChecked}
                                onChange={onChange}
                                className='cursor-pointer'
                            />
                            {value}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default DropdownCheckbox;
