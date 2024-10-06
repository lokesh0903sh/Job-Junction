import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["HTML", "CSS", "javaScript", "Reactjs", "Node.js", "Express", "C++", "Data Structures", "Algorithms", "MongoDB", "SQL", "OOPS", "Tailwind CSS", "Bootstrap"];
const isResume = true;
const isPortfolio = true;
const Profile = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Add your bio here lksavksdbv jkdfbnk;odf hifbndfjkvskjdh hofidvh
                klvhdkvb lwhvidnvklsd lkvhskdvbkjsdv
              </p>
            </div>
          </div>
          <Button onClick = {()=>setopen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
            <div className="flex items-center gap-3">
                <Mail/>
                <span>lokesh@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
                <Contact/>
                <span>+91 123456789</span>
            </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center flex-wrap gap-1">
                {
                    skills.length !== 0 ? skills.map((item, index)=> <Badge key={index}>{item}</Badge>) : <span> NA</span>
                }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="text-md font-bold">Resume</Label>
                {
                    isResume ? <a className="text-blue-500 w-full hover:underline cursor-pointer mb-3" target="blank" href="https://drive.google.com/file/d/1_T6L2wiwUMeda7Vs5_SXf38gPfia8Spf/view?usp=sharing">Lokesh Resume</a>:<span>NA</span>
                }
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="text-md font-bold">Portfolio</Label>
                {
                    isPortfolio ? <a className="text-blue-500 w-full hover:underline cursor-pointer" target="blank" href="https://portfolio-two-phi-75.vercel.app/">Lokesh Portfolio</a>:<span>NA</span>
                }
        </div>
      </div>    
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className="font-bold text-lg my-5">
                    Applied Jobs
                </h1>
                {/* APplication Table */}
                <AppliedJobTable/>  
        </div>
        <UpdateProfileDialog open={open} setopen={setopen}/>
    </div>
  );
};

export default Profile;
