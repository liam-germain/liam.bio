'use client';

import React from 'react';
import Box from './components/Box';
import Cal from '@calcom/embed-react';


// export default function Page() {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-offwhite">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4  max-w-screen-lg">
//           <div className="lg:col-span-7 lg:space-y-4">
//             <Box>
//               <h1 className="text-3xl font-bold">Hi, I'm Liam Germain</h1>
//               <p>
//                 I am currently a senior at the University of Pennsylvania and I am studying Economics. I love to build.
//               </p>
//             </Box>
//             <Box>
//               <Cal calLink="liamg/30min" />
//             </Box>
//           </div>
//           <div className="lg:col-span-5 space-y-4 lg:space-y-4">
//             <Box link="/projects" hoverEffect className="lg:w-full">
//               <h1 className="text-4xl font-bold">My Projects</h1>
//             </Box>

//             <div />
//             <Box link="https://4xp.org" hoverEffect className="lg:w-full">
//               <h1 className="text-4xl font-bold">4XP Holdings</h1>
//             </Box>

//             <div />
//             <Box className="lg:w-full">
//               <div className="flex space-x-4 mt-2">
//                 <a href="https://twitter.com/lmg_xyz" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white font-bold rounded">Twitter</a>
//                 <a href="https://linkedin.com/in/liamgermain" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-400 text-white font-bold rounded">LinkedIn</a>
//                 <a href="https://github.com/liam-germain" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white font-bold rounded">GitHub</a>
//               </div>
//             </Box>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-offwhite">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-screen-lg">
          <div className="lg:col-span-7 lg:space-y-4">
            <Box>
              <h1 className="text-3xl font-bold">Hi, Im Liam Germain</h1>
              <p>

                I am currently working at SimpliKeys. I love to build. The future is incredibly exciting and weird. V2 of this site is coming soon. This one is a bit of a mess and is not good.

              </p>
            </Box>
            <Box>
              <Cal calLink="liamg/30min" />
            </Box>
          </div>
          <div className="lg:col-span-5 space-y-4 lg:space-y-4">
            <Box link="/projects" hoverEffect className="flex items-center justify-center lg:w-full">
              <h1 className="text-4xl font-bold">My Projects</h1>
            </Box>

            <div />
            <Box link="https://4xp.org" hoverEffect className="flex items-center justify-center lg:w-full">
              <h1 className="text-4xl font-bold">4XP Holdings</h1>
            </Box>

            <div />
            <Box className="flex items-center justify-center lg:w-full">
              <div className="flex items-center justify-center space-x-4 mt-2">
                <a href="https://x.com/liamail" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white font-bold rounded">Twitter</a>
                <a href="https://linkedin.com/in/liamgermain" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-400 text-white font-bold rounded">LinkedIn</a>
                <a href="https://github.com/liam-germain" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white font-bold rounded">GitHub</a>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}





