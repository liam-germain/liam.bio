/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liam M. Germain</title>
        <meta name="description" content="The personal website of Liam Germain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<main className="bg-black">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className="py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto" >
          <h1 className="'text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1'">
			          Hello,
		        </h1>
            <div className="h-5"/>
            <h1 className="'text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1'">
			          I'm Liam Germain
		        </h1>
						<div className="h-4 sm:h-0"></div>
						<div >
						
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
            
            {/**  
              *     Social Link Section
              */}
						<div className="font-mono uppercase text-white text-sm sm:text-base">
							<a  href="mailto:liam@germains.io" target="_blank" rel="noreferrer">
								Email
							</a>{' '}
							x{' '}
							<a
								href="https://github.com/liam-germain"
								target="_blank" rel="noreferrer"
							>
								Github
							</a>{' '}
							x{' '}
							<a
								href="https://www.linkedin.com/in/liamgermain/"
								target="_blank" rel="noreferrer"
							>
								Linkedin
							</a>
						</div>
					</div>
				</div>
			</main>
    </div>
  )
}
