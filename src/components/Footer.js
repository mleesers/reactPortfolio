import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import {FooterData} from "../data/FooterData";
import logoImage from "../images/logo1.png"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import contactVCF from "../resources/contacts.vcf";
import Resume from "../resources/Resume.pdf";
import {HiDocumentDownload} from "react-icons/hi";

const FooterContainer = styled.div`
    background-color: #0d0909;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 100%;
    padding: 1rem 2rem;
    
`;
const FooterLinks = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 1rem;
    &:hover {
        transform: translateY(-2px);
        color: #E1B24D;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Copyright = styled.h1`
    color: white;
    font-size: 1rem;
    font-weight: 400;
    position: absolute;
    right: 0;
    margin-right: .5rem;
`
const Logo = styled.img`
    height: 4rem;
    width: 4rem;
    position: absolute;
    left: 0;
    margin-left: .5rem;
    @media screen and (max-width: 768px) {
        height: 3rem;
        width: 3rem;
    }
    
`
const Logos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: none;
    color: white;
    @media screen and (max-width: 768px) {
        display: block;
    }
`
const Github = styled(IoLogoGithub)`
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    color: white;
    &:hover {
        transform: translateY(-2px);
    }
`
const LinkedIn = styled(IoLogoLinkedin)`
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    color: white;
    &:hover {
        transform: translateY(-2px);
    }
`
const Email = styled(FaEnvelope)`
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    &:hover {
        transform: translateY(-2px);
    }
`
const Phone = styled(FaPhone)`
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    &:hover {
        transform: translateY(-2px);
}
`

const ResumeIcon = styled(HiDocumentDownload)`
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    color: white;
    cursor: pointer;
    &:hover {
        transform: translateY(-2px);
    }
`
const sendEmail = () => {
    const emailSubject = "Subject of the email"; // Customize the subject
    const emailBody = "Message content goes here."; // Customize the email body
  
    const mailtoLink = `mailto:mleesersmith@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
  
    window.open(mailtoLink, "_blank");
  };

const Footer = () => {
    // Function to handle the download of the .vcf file
    const downloadContactCard = () => {
      const a = document.createElement("a");
      a.href = contactVCF; // Set the href to the .vcf file
      a.download = "contact.vcf"; // Set the download attribute
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    const downloadResume = () => {
        const a = document.createElement("a");
        a.href = Resume; 
        a.download = "Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
  
    return (
      <FooterContainer id='contact'>
        <Logos>
            <a href="https://www.linkedin.com/in/michael-leeser-smith/" target="_blank" rel="noreferrer">
            <LinkedIn />
            </a>
            <a href="https://github.com/mleesers" target="_blank" rel="noreferrer">
            <Github />
            </a>
            <Email onClick={sendEmail} /> 
            <Phone onClick={downloadContactCard}/>
            <ResumeIcon onClick={downloadResume}/>
        </Logos>
        
        {FooterData.map((item, index) => (
            <FooterLinks
                to={item.link}
                target={item.target}
                key={index}
                onClick={() =>
                (item.title === "Phone Number" && downloadContactCard()) || (item.title === "mleesersmith@gmail.com" && sendEmail()) || (item.title === "Resume" && downloadResume())
                }
                >
                {item.title}
            </FooterLinks>
        ))}
            <Logo src={logoImage}/>
            <Copyright>&copy;2023</Copyright>        
        </FooterContainer>
    )       
}




export default Footer;