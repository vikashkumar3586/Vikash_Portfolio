import React from 'react'
import { Link } from 'react-router-dom'
import githubImg from '/assets/Interact/github.jpg'
import dailyCode from '/assets/Interact/code.png' //gfg
import leetCode from '/assets/Interact/leetcode.png'
import codeChef from '/assets/Interact/codechef.png'
import mainPage from '/assets/Interact/mainPage.png'
import Count from '../utils/FetchCount';
import Stars from '../utils/FetchRating';
import { CgArrowTopRightO } from "react-icons/cg";
import LinkButoton from './LinkButton';

function InteractSection() {

    return (
        <div id="ConnectSection"
            className="w-full px-3 sm:p-0 mx-auto"
        >
            <div className='container h-[500px] sm:h-96 w-full grid sm:grid-cols-4 sm:grid-rows-4 grid-rows-8 grid-cols-3 items-center text-white gap-2'>
                <div id='github' className='relative text-center h-full w-full row-span-2 sm:col-span-2 col-span-3 rounded-lg sm:hover:scale-95 transition-transform duration-300 ease-in-out '>
                    <img src={githubImg} alt="img" className="h-full w-full object-cover rounded-lg brightness-50" />
                    <a href='https://github.com/vikashkumar3586' target='_blank' className='opacity-80 absolute inset-0 flex flex-col justify-end p-4'>
                        <h1 className='text-xl font-mono w-full text-start'>Github</h1>
                        <p className='font-mono text-start'>My PlayGround</p>
                    </a>
                </div>
                <div id='gfg' className="relative h-full w-full row-span-2 sm:col-span-2 col-span-3 rounded-lg overflow-hidden sm:hover:scale-95 hover:brightness-75 transition-all duration-300 ease-in-out text-white">
                    <img
                        src={dailyCode}
                        alt="Daily Coding"
                        className="h-full w-full object-cover rounded-lg brightness-50"
                    />
                    <a
                        href="https://www.geeksforgeeks.org/user/vikash_kumar_9852/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex flex-col justify-end p-5 font-mono opacity-80"
                    >
                        <h1 className="text-xl mb-1">Grind Mode: ON🔥</h1>
                        <h2 className="flex items-center gap-2">
                            🧠 <span>Code</span> ⚒️ <span>Debug</span> 🔁 <span>Repeat</span>
                        </h2>
                    </a>
                </div>
                <div id='portfolio' className='text-center relative h-full w-full row-span-2 col-span-1 rounded-lg sm:hover:scale-95 transition-all duration-300 ease-in-out'>
                    <img src={mainPage} alt="img" className="h-full w-full object-cover rounded-lg brightness-60 blur-[1px]" />
                    <Link to='/' className='absolute inset-0 flex flex-col justify-end p-4'>
                        <CgArrowTopRightO className='absolute  top-2 right-2 sm:top-5 sm:right-3 text-base sm:text-2xl' />
                        <p className='font-mono text-[10px] sm:text-sm text-start rotate-180 [writing-mode:vertical-rl] opacity-80'>You're Here</p>
                    </Link>
                </div>
                <div id='linkedin' className='realtive text-center h-full w-full row-span-1 col-span-1 rounded-lg flex items-center justify-center sm:hover:scale-95 transition-all bg-[#0078D4] brightness-50 duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                    </svg>
                    <a href="https://www.linkedin.com/in/vikash-pr/" target='_blank' className='absolute inset-0 flex flex-col justify-end py-4 px-2'>
                        <p className='font-mono text-center sm:translate-y-1 text-nowrap text-[10px] sm:text-[16px] translate-y-3.5'>(Serious Stuff)</p>
                    </a>
                </div>
                <div id='twitter' className='text-center relative h-full w-full row-span-1 col-span-1 bg-black flex items-center justify-center brightness-50 rounded-lg sm:hover:scale-95 transition-all duration-300 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                        <g
                            fill="currentColor"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            className="[mix-blend-mode:normal]"
                        >
                            <g transform="scale(5.12,5.12)">
                                <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"></path>
                            </g>
                        </g>
                    </svg>
                    <a href="https://x.com/VikashP001" target='_blank' className='absolute inset-0 flex items-end justify-center py-3 px-2'>
                        <p className='font-mono text-center text-[10px] sm:text-[16px] sm:translate-y-1 translate-y-3 text-nowrap'>(share memes:)</p>
                    </a>
                </div>
                <div id='leetcode' className='relative text-center h-full w-full row-span-1 sm:col-span-2 col-span-2 rounded-lg sm:hover:scale-95 transition-all duration-300 ease-in-out sm:order-2'>
                    <img src={leetCode} alt="img" className="h-full w-full object-cover rounded-lg brightness-30" />
                    <a href="http://leetcode.com/u/vikash_kumar_001/" target='_blank' className='absolute inset-0 flex flex-col items-start justify-end px-2 sm:py-4'>
                        <h1 className='w-full text-center text-lg  sm:text-xl font-bold'>{`</>`} <Count /> </h1>
                        <h1 className='text-sm sm:text-base w-full text-center opacity-80'>(Grind @ LeetCode)</h1>
                    </a>
                </div>
                <div id='codeChef' className='text-center relative h-full w-full row-span-2 sm:col-span-1 col-span-3 rounded-lg sm:hover:scale-95 transition-all duration-300 ease-in-out sm:order-1'>
                    <img src={codeChef} alt="img" className="h-full w-full object-cover rounded-lg brightness-50" />
                    <a href="https://www.codechef.com/users/vikashkumar985" target='_blank' className='absolute inset-0 flex flex-col items-start justify-between p-4'>
                        <Stars/>
                        <div className=' opacity-80'>
                            <h1>DSA & CP Arena </h1>
                            <p>-CodeChef 🧠⚔️</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className='mt-10 w-full flex items-center justify-center'>
                <LinkButoton path={"/connect"} txt={"Let's Connect "}/>
            </div>
        </div>

    )
}

export default InteractSection;


/*
<div id="github" className="relative border row-span-2 col-span-2 rounded-lg">
              <img src={githubImg} alt="img" className="h-full w-full object-cover rounded" />
          </div>

          <div id="gfg" className="relative border row-span-2 col-span-2">
              <img src={dailyCode} alt="img" className="h-full w-full object-cover rounded" />
          </div>

          <div id="itsMe" className="relative border row-span-2 col-span-1">
              <img src={admin} alt="img" className="h-full w-full object-cover rounded" />
          </div>

          <div id="linkedin" className="relative border row-span-1 col-span-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-full w-full fill-current text-black">
                  <path d="M3,3v18h18V3H3z M9,17H6.5v-7H9V17z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2c0-0.7,0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2	C9.1,8.2,8.6,8.7,7.7,8.7z M18,17h-2.4v-3.8c0-1.1-0.7-1.3-0.9-1.3c-0.2,0-1.1,0.2-1.1,1.3c0,0.2,0,3.8,0,3.8h-2.5v-7h2.5v1	c0.3-0.6,1-1,2.2-1s2.2,1,2.2,3.2V17z"></path>
              </svg>
          </div>

          <div id="twitter" className="relative border row-span-1 col-span-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
                  className="h-full w-full fill-current text-black">
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>
          </div>

          <div id="codeChef" className="relative border row-span-2 col-span-1">
              <img src={codeChef} alt="img" className="h-full w-full object-cover rounded" />
          </div>

          <div id="leetCode" className="relative border row-span-1 col-span-2">
              <img src={leetCode} alt="img" className="h-full w-full object-cover rounded" />
          </div>
*/