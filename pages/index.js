import Head from 'next/head'
import { useState } from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import khal from "../public/khal-wave.png";
import pythonLogo from "../public/python.png";
import reactLogo from "../public/react.png";
import cLogo from "../public/c.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Khalid Williams Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:pd-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons dark:text-white md:text-xl">DevelopedbyCodeSlayer</h1>
            <ul className="flex items-center">
              <li>
                day/night mode --&gt;
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl"/>
              </li>
              <li className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                <a href="https://drive.google.com/file/d/1YUhwYyLLlOZCsHwdSzSmDsGtp3WQ8BN-/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Khalid Williams</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Quality Assurance, Full-stack Developer, Cyber Security</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">A proud graduate of Jamaica College and The University of the West Indies. I am an intelligent young man with a thirst for knowledge. If you can provide me with the opportunity to learn or display and develop my skills then I will be nothing but an asset to you in return.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={khal} object-fit="cover" height={300} width={300} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl py-1 dark:text-white">My love language</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I love coding. I have been writing programs from 2014 and havent stopped since. I love developing <span className="text-teal-500">new skills</span>, learning <span className="text-teal-500">new langauges</span> and <span className="text-teal-500">cool technologies</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Some of my favorite programming languages that I have learned so far are:
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={pythonLogo} width={130} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Python
              </h3>
              <p className="py-2">
                I started taking python seriously in 2019 for a university course called &quot;Introduction to Computing&quot;. This course gave me great confidence to go and conquer any problem I face in the computing world.
              </p>
              <h4 className="py-4 text-teal-600">Why I Love Python</h4>
              <p className="text-gray-800 py-1">It&apos;s a very nice, simple and straightforward language with a great supportive community. I also love the flexibility the language provides. I look forward to the amazing applications I will be build using this language</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={reactLogo} width={130} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                React.js
              </h3>
              <p className="py-2">
                I discovered javascript in 2020 through a university IT course called web development. Web development was an amazing course that taught me the usefullness of javascript and made me understand why javascript is one of the most sought after skills in web development.
              </p>
              <h4 className="py-4 text-teal-600">Why I Love React</h4>
              <p className="text-gray-800 py-1">React is an amazing, efficient and fun javascript library. I also love vue.js. However, I would choose react over vue. Thinking about being a master a react gets me excited.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={cLogo} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">C</h3>
              <p className="py-2">
                I have known about C programming from 2018. I initially learned about it at Jamaica College and then I had to do a course at The University of the West Indies in 2021 called Operating Systems.
              </p>
              <h4 className="py-4 text-teal-600">Why I love C</h4>
              <p className="text-gray-800 py-1">I love C programming because of the applications I had to use it for. Back at JC I was a senior programmer for the robotics club and had to use C. Robotics club was such a fun and amazing time, especially since we won and did well in several First tech challenge competitions. I also had fun using C in the operating systems course, and would love to learn and use it more.</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> Are you interested in a competent person? Are you interested in someone who will find a way when the work gets hard instead of complaining? If you are looking for a <span className="text-teal-500"> smart </span>, <span className="text-teal-500"> efficient </span> individual with <span className="text-teal-500"> great communication skills </span> then congratulations! You can find some of my projects at <a className="text-red-300 dark:text-purple-300" href="https://github.com/khalelcodeslayer">github.com/khalelcodeslayer</a>. Here is a list of some accomplishments and accolades from high school and university years.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-yellow-200">
              Successful completion of advanced proficiency Courses - Jamaica College, 2018 <br/>
              School Leaving Diploma - Jamaica College, 2016 <br/>
              •	Represented UWI in basketball 2019, 2022 (placed second both times) <br/>
              •	Represented Jamaica College in basketball 2012-2018 (won several awards, medals and trophies) <br/>
              •	Robotics Club member and Programmer (2016-2018) <br/>
              •	Successfully attained four CAPE unit 2 passes (Biology, Chemistry, Computer Science, and Digital Media) 2018 <br/>
              •	Successfully attained five CAPE unit 1 passes (Biology, Chemistry, Communication Studies, Computer Science, and Digital Media) 2017 <br/>
              •	Successfully attained seven CSEC passes (Biology, Chemistry, English, Information Technology, Math, Physics and Principles of Accounts) 2016 <br/>
              •	Successfully attained three City and Guilds merits (Auto mechanic, Math and English) 2016 <br/>
              •	Good academic performance (received certificates) 2011-2018 <br/>
              •	Award for best prefect on third form block (2018) <br/>
              •	Computer club (2011, 2017-2018) <br/>
              •	Member of Sixth Form Association (2016-2018) <br/>
              •	Interact club (2016-2018) <br/>
              •	United Nations (2016-2018) <br/>
              •	Prefect (2016-2018) <br/>
              •	Senior Student Council Representative (2017-2018) <br/>
              •	Vice Form Captain (2017-2018) <br/>
              •	Key Club member (2017-2018) <br/>
              •	Represented Jamaica College in volleyball (2016-2017) <br/>
              •	Student Council Representative (2016-2017) <br/>
              •	Represented Jamaica College in table tennis (2011-2013) <br/>
            </p>
          </div>
          {/* In the future, edit this to include screenshots of different projects */}
          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={}
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  )
}
