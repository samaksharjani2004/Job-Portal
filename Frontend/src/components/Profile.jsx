import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'


const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;


const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                            />
                        </Avatar>
                        <div>
                            <h2 className="font-medium text-xl">Full Name</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <Button className="text-right" variant="outline">
                        <Pen />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className="flex items-center gap-3 my-2">
                        <Mail />
                        <span>patel@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3 my-2">
                        <Contact />
                        <span>8967452365</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h2>Skills</h2>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length !== 0 ? skills.map((item, index) => (
                                <Badge key={index}>{item}</Badge>
                            )) : <span>No Skills</span>
                        }
                    </div>
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ?
                            <a target='blank' href='https://youtube.com/@patelmernstack' className='text-blue-500 w-full hover:underline cursor-pointer'>Patel MernStack </a> : <span>NA</span>

                    }
                </div>



            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h2>Applied Jobs</h2>
                {/* Application Table */}
                <AppliedJobTable />
            </div>
        </div>
    )
}

export default Profile


