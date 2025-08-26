import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useTheme } from '../services/ThemeProvider';
interface Params{
  path: string;
  className?: string;
  txt: string;
  icon?: boolean;
  bTheme?: string; //true for dark mode, false for light mode
  children?: React.ReactNode; // for custom icons or additional content

}

function LinkButton(
  { path = '/', txt = 'forget to add txt', icon = true, children }: Params) {
  const { theme } = useTheme();
  return (
    <Link to={path}
      className={`py-2 px-4 rounded-lg bg-[var(--button-bg-${theme})] group`}>
        {txt}
      {icon ? <HiOutlineArrowRight className='inline text-xl group-hover:translate-x-2 transition-all duration-500' /> : children}
      {children}
    </Link>
  )
}

export default LinkButton;