import React from 'react'
import Connecting from '../components/ReactOut/Connecting';
import { ToastContainer } from "react-toastify";
import { useTheme } from "../services/ThemeProvider";


import ReachMe from '../components/ReactOut/ReachOutForm';

function Connect() {
  const { theme } = useTheme();

  return (
    <div className="mt-28 px-3 sm:px-0 flex flex-col items-center justify-center gap-y-6 w-full mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      <Connecting />
      <ReachMe />
    </div>
  )
}

export default Connect