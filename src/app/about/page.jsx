"use client"
import { useRef as UseRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from 'framer-motion';
import Transition from '../components/Transition';
function page() {
    const Container = UseRef();
    useGSAP(() => {
        const timeline = gsap.timeline({});
        timeline.from("#Heading", {
            opacity: 0,
            y: '100px',
            delay: 1.4,
            duration: 1
        })
        timeline.from("#subheading", {
            opacity: 0,
            y: '-100px',
            delay: -1.2,
            duration: 1
        })
    }, { scope: Container })
    return (
        <div ref={Container} className=' py-4 flex flex-col overflow-hidden'>
            <Transition />
            <div className="px-10 py-8 overflow-hidden">
                <div className="w-full h-fit overflow-hidden">
                    <h1 id='Heading' className='text-6xl  font-black'><span className='text-violet-400'>A</span>CET</h1>
                </div>
                <div className="w-full h-fit overflow-hidden">
                    <h1 id='subheading' className='text-4xl py-4 font-semibold'>Tech Savvy Musuem</h1>
                </div>
                <motion.p className='text-gray-800'>We the students of <strong>ACHARIYA COLLEGE OF ENGINEERING TECHNOLOGY</strong> Proudly welcome you all to our Technical Museum.Here,you can get a Vast knowledge about the computer Hardware and Software.</motion.p>
                <motion.p>Through our website you can easily navigate in and around the Museum in a Virtualized Manner.From our website you could get in-depth information about the components which have been displayed in our Museum and through our website you can view the components in 3D manner from which you can view the objects through all the sides </motion.p>

            </div>
            <motion.div className="bg-violet-50 py-6 mt-10">
                <h2 className='text-4xl py-4 font-semibold text-center' >THANK <span className='text-purple-500'>YOU</span> NOTE</h2>
                <div className="w-full h-fit flex flex-col items-center justify-center my-8 overflow-hidden">
                    <motion.img viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%', }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} src="https://acet.edu.in/wp-content/uploads/2021/05/pZ0ludnLO7BniYHb1qZoeX8gNb1B860IB4oSW-mb993WdsDGgT.jpg" alt="principal" className="w-64 h-64 rounded-full object-cover" />
                    <motion.h2 viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} className='text-3xl font-semibold text-center mt-4'>Dr.S.GURULINGAM</motion.h2>
                    <motion.p viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} className='text-center mb-4'>B.E., M.E., Ph.D., MISTE</motion.p>
                    <motion.p viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} className="max-w-2xl px-4 text-justify text-gray-800">
                        We would like to thank our respected principal <strong>Dr.S.GURULINGAM</strong> sir from the bottom of our heart for his unveiling support for the students to explore and excel in areas of technology,innovation and creativity. His valuable thoughts and guidance throughout our work was fascinating and made our passion to burn like a sun .We would like to express our appreciation for his commitment to showcasing our college students contribution to the Technical Museum .We would like to extend our deepest appreciation for his support in updating the Technical Museum's information on our website.His dedication to showcasing our achievements and progress is truly invaluable.Thank you for your continued support and commitment to our museum success.As a team we continue to evolve and innovate at the Technical Museum,it is imperative to acknowledge the profound impact of his support on our college students.His steadfast dedication to our growth and success has been instrumental in shaping our Tech Savvy Museum . Through his visionary leadership and unwavering commitment,he have facilitated countless opportunites for our students to thrive and excel in their academic pursuits. His support enables us to foster a dynamic learning environment that encourages creativity,critical thinking, and exploration.We are immensely grateful for his ongoing support partnership and advocacy, which empowers our students to become the innovators and leaders of tomorrow. Thank you for your invaluable contributions to the success of our Tech Saavy Museum.
                    </motion.p>
                </div>
            </motion.div>
            <div className="my-16 overflow-hidden">
                <motion.h2 viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} className='text-4xl py-4 font-semibold text-center'>Our Head of Department (CSE Department)</motion.h2>
                <div className="w-full h-fit flex flex-col items-center justify-center my-8 overflow-hidden ">
                    <motion.img viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} src="https://acet.edu.in/wp-content/uploads/2021/06/cse-dept-hod-400x400.jpg" alt="HOD" className="w-48 h-48 rounded-full object-cover" />
                    <motion.h2 viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} className='text-3xl font-semibold text-center mt-4'>Dr.A.Kannaki@Vasantha Azhagu </motion.h2>
                    <motion.p viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} className='text-center mb-4'>B.E.,M.E.,Ph.D.,</motion.p>
                    <motion.p viewport={{ once: true }} whileInView={{ opacity: 1, y: '0%' }} transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0, y: '100px' }} className="max-w-2xl px-4 text-justify text-gray-800">
                        Our Tech Savvy Museum has been build through the tremendous support and guidance from our beloved Head of the Department Dr.A.kannaki@Vasantha Azhagu Ma'am,up from the beginning her presence made the dream come to reality.We as a team expess our heartful thanks to our HOD Ma'am.The assistance she made everyday for improvement of the work is truely unbelievable.The belief she kept in our team has been our motivation.Tech Savvy Museum team wanted to express our gratitude for her invaluable support in bringing the museum to life on our website. Her guidance and encouragement have been instrumental in making our Tech Savvy as a reality.We would like to extend our heartfelt appreciation for your unwavering support in launching the Tech Savvy Museum through our website.Her leadership and dedication have been crucial in making this endeavor a success. Her expertise and leadership have truly made a significant difference and her commitment have been indispensable in ensuring our online presence accurately reflects our innovations and accomplishments.Her leadership has been invaluable,and we truly appreciate all that you do to support our team's succcess.Expressing gratitude and support to our Head Of The Department can go a long way in fostering a positive working environment.Her dedication towards academic as well as finding the students talents based on their intrest was truly emerging and inspiring .Without you and your support we could not make our dream come true. Through your leadership,guidance and advocacy you have created an environment where we feel empowered to excel and pursue our dreams. Your commitment to our success serves as abeacon of inspiration for our Tech Savvy Team.Thank You for your tireless effort in shaping our museum.Your Leadership and dedication have been crucial in making this endeavor a success.Thank you for your championing ,innovation,and your ongoing commitment to preserving and sharing our cultural heritage.
                    </motion.p>
                </div>
            </div>
            <div className='bg-purple-100 p-6 md:p-8 text-center overflow-hidden'>
                <h2 className='text-4xl font-semibold py-4'>Faculty Support</h2>
                <div className='max-w-4xl mx-auto'>
                    <motion.p className='text-gray-800 leading-relaxed'>
                        We would like to extend our gratitude to all of our faculty members who has shown their support in our project.Their guidance,encouragement and support have been truly invaluable.Throughout this journey we have leaned much from your expertise and your love for technology.Your support has been indispensable in making our dreams a reality.Your dedication to our project has truly made a significant difference.Your belief in us has been a beacon of hope and inspiration.Thank you for your tireless effort in shaping our future.Your leadership,expertise and love for technology has truly made a difference in our Tech Savvy Team.Thank you for your support and dedication in making our dreams a reality.
                    </motion.p>
                    <div className=' p-6 md:p-8 text-center mt-6'>
                        <h2 className='text-4xl font-semibold py-4'>List of Faculty</h2>
                        <div className='max-w-4xl mx-auto'>
                            <p className='text-gray-800 leading-relaxed'>- Rajalakshmi AP/CSE</p>
                            <p className='text-gray-800 leading-relaxed'>- Jeyalakshmy AP/CSE</p>
                            <p className='text-gray-800 leading-relaxed'>- Madura Dhivya AP/CSE</p>
                            <p className='text-gray-800 leading-relaxed'>- Kalaichelvi AP/CSE</p>
                            <p className='text-gray-800 leading-relaxed'>- Vijayalakshmi AP/CSE</p>
                            <p className='text-gray-800 leading-relaxed'>- Ganesan AP/CSE</p>
                            <p className='text-gray-800 leading-relaxed'>- Dhivya AP/CSE</p>

                            <h2 className='text-4xl font-semibold py-4 mt-4'>Non-Faculty Members</h2>
                            <p className='text-gray-800 leading-relaxed'>- Anbarasu Lab Incharge</p>
                            <p className='text-gray-800 leading-relaxed'>- Abbubbacker Sithick Lab Incharge</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='max-w-6xl mx-auto px-6 md:px-8 py-12 bg-gray-50 text-gray-800 overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6'>
                <h2 className='text-4xl font-semibold py-4 text-center w-full'>About Our Team</h2>
                <div className='md:col-span-2'>
                    <h3 className='text-2xl font-semibold py-4'>Tech Savvy Museum</h3>
                    <p className='text-gray-800 leading-relaxed'>
                        The Tech Savvy Museum was brought to life through sheer determination and
                        hard work. From its humble beginnings as a collection of scrap materials and
                        waste, it has evolved into a magnificent tribute to the wonders of technology.
                        The team of like-minded individuals worked tirelessly, toiling day and night,
                        to gather, transform and display a vast array of components and artifacts
                        that showcase the beauty and ingenuity of technology. Their unwavering commitment
                        to their mission has paid off, resulting in a museum that showcases the
                        marvels of technology in a unique and captivating manner.
                    </p>
                    <div className='mt-4'>
                        <h3 className='text-2xl font-semibold py-4 text-center '>Our Team Mates</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-sm mx-auto'>
                            {[
                                { name: 'Antony Dass.F' },
                                { name: 'Ashwathi.M' },
                                { name: 'Jude Britto.A' },
                                { name: 'Sanjai Kumar.A' },
                                { name: 'Raveena.V' },
                                { name: 'Gopalakrishnan.V' },
                                { name: 'Akshaya.V.M' },
                                { name: 'Harish.S' },
                                { name: 'Reshma.M' },
                                { name: 'Resika.P' },
                                { name: 'Abdul Bahshith.B' },
                                { name: 'Yuvasri.S' },
                            ].map(({ name }) => (
                                <div key={name} className='border border-gray-200 rounded-lg p-4 bg-white shadow-sm'>
                                    <p className='text-gray-800 leading-relaxed'>{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto px-6 md:px-8 py-12 bg-gray-50 text-gray-800 overflow-hidden'>
                <h2 className='text-4xl font-semibold py-4 text-center'>About Tech Savvy Museum</h2>
                <div className='max-w-4xl mx-auto'>
                    <p className='text-gray-800 leading-relaxed'>
                        Our Tech Savvy Museum has been build upon the support and contribution of students and faculties of Computer Science and Engineering Department.The components which have been displayed in our Tech Savvy Museum has been created from our department scrap items and E-waste.The sole purpose of the museum is to enhance and enrich the in-depth concepts and idealogy of various computer technology ,Throughout the preparation of the museum is fully based on non-usable and repaired components. The construction of Tech Savvy Museum uplifted the intrest of working as a team and acquiring knowledge .The components which have been displayed are categorized as Hardware, Software, Networks ,Virtualized assitatant and Navigation Robot and creative items by using E-Waste.</p>
                    <p className='text-gray-800 leading-relaxed py-4'>
                        Tech Savvy Team is a well knowledgeable and eager for success through various aspects of time management, resource management ,financial management and team coordination.Through ,this work we attained various inputs and produced an proactive output.Tech Savvy Museum is not only consist of group of few ,it is an proud property of every souls of CSE department members.We as a team expect the upcoming generations to enhance the museum to the next level.</p>
                    <p className='text-gray-800 leading-relaxed text-center py-4'>
                        <span className='block font-semibold text-2xl '>Determination comes upon intimation to determine your destination.</span>
                        <span className='block font-medium text-sm text-gray-600'>- Mahatma Gandhi</span>
                    </p>
                    <p className='text-gray-800 leading-relaxed'>
                        Through various creative ideas given by our students the components have been displayed in the manner through which a Non-Technical background person can also acquire the knowledge.
                    </p>
                </div>
            </div>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-12 bg-black'>
                <h2 className='text-4xl font-semibold py-4 text-center text-white'>Connect With Us</h2>
                <div className='max-w-4xl mx-auto text-white'>
                    <p className='text-white leading-relaxed text-center'>
                        Tech Savvy Team would love to hear your feedback about your experience and queries. We are always open to hear your concerns and suggestions which will help us to enhance and grow the Tech Savvy Museum. Please feel free to contact us at antonydass39@gmail.com.
                    </p>
                    <div className='mt-4 flex justify-center'>
                        <a href='mailto:antonydass39@gmail.com' className='inline-flex items-center bg-white hover:bg-gray-800 text-gray-800 hover:text-white border border-gray-800 hover:border-gray-800 text-xs font-semibold py-2 px-4 rounded'>
                            <span className='mr-2'>Email us</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page