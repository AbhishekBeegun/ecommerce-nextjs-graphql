import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsDribbble} from "react-icons/bs"
import { Footer } from "flowbite-react"
const LayoutFooter = () => {
  return (
    <>
    <Footer bgDark={true}>
  <div className="w-full border-t">
    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
      <>
        <Footer.Title title="Company" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            About
          </Footer.Link>
          <Footer.Link href="#">
            Careers
          </Footer.Link>
          <Footer.Link href="#">
            Brand Center
          </Footer.Link>
          <Footer.Link href="#">
            Blog
          </Footer.Link>
        </Footer.LinkGroup>
      </>
      <>
        <Footer.Title title="help center" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            Discord Server
          </Footer.Link>
          <Footer.Link href="#">
            Twitter
          </Footer.Link>
          <Footer.Link href="#">
            Facebook
          </Footer.Link>
          <Footer.Link href="#">
            Contact Us
          </Footer.Link>
        </Footer.LinkGroup>
      </>
      <>
        <Footer.Title title="legal" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Terms & Conditions
          </Footer.Link>
        </Footer.LinkGroup>
      </>
      <>
        <Footer.Title title="available" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            iOS
          </Footer.Link>
          <Footer.Link href="#">
            Android
          </Footer.Link>
          <Footer.Link href="#">
            Windows
          </Footer.Link>
          <Footer.Link href="#">
            MacOS
          </Footer.Link>
        </Footer.LinkGroup>
      </>
    </div>
    <div className="w-full text-secondary bg-primary py-6 px-4 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
     
        href="#"
        by="Abhishek Beegun™"
        year={new Date().getFullYear()}
      />
      <div className="mt-4 text-secondary flex space-x-6 sm:mt-0 sm:justify-center">
        
       <BsFacebook/>
  
       <BsInstagram/>
        
       <BsTwitter/>
       
        <BsGithub/>
        
        <BsDribbble/>
        
      </div>
    </div>
  </div>
</Footer>
</>
  )
}

export default LayoutFooter