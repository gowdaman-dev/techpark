import React from 'react'
import Transition from '../components/Transition'

function page() {
    return (
        <div>
            <Transition />
            <div className="min-h-[80vh]">
                <div className='px-4 py-10 flex flex-col justify-center items-center space-y-10'>
                    <div className='max-w-2xl text-center'>
                        <img src='/imgs/ulnlabs.svg' className='w-full mx-auto my-2' alt='ulnlabs-logo' />
                        <p className='mt-2 text-base text-gray-800 lg:text-lg'>Developed by Senior Developer <strong>P.Gowdaman</strong> B.tech from <a href='https://ulnlabs.in/' target='_blank' rel='noreferrer' className='text-blue-500 hover:underline'>Ulnlabs Private Limited</a>, a freelance startup company based in India.</p>
                    </div>
                    <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
                        {[
                            { name: 'I. Jahangeer', role: 'Frontend & Backend Developer' },
                            { name: "P.Gowdaman", role: 'Frontend & Backend Developer' },
                            { name: 'K.Hariharan', role: 'Frontend & Backend Developer' },
                            { name: 'S.Deepath', role: 'Frontend & Backend Developer' },
                            { name: 'M.Lokesh Kumar', role: 'Frontend Developer' },
                            { name: 'D.Jean Piere', role: 'UI/UX Designer' },
                        ].map((person, index) => (
                            <div key={index} className='bg-white border rounded-lg shadow-sm p-4'>
                                <h3 className='text-lg font-semibold'>{person.name}</h3>
                                <p className='mt-2 text-sm font-medium'>{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='mt-2 text-sm text-center text-gray-700'>
                    Designed by <span className='font-semibold text-gray-800'>Antony Dass.F</span> from ACHARIYA COLLEGE OF ENGINEERING TECHNOLOGY
                </p>
            </div>
            <div className='mt-8 text-center py-10 bg-yellow-500 text-white'>
                <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
                <p className='text-gray-100'>For any queries or suggestions, please email us at <a href='mailto:ulnlabs@gmail.com' className='underline'>ulnlabs@gmail.com</a></p>
            </div>

        </div>
    )
}

export default page