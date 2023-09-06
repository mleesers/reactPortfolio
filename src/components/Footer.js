import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import {FooterData} from "../data/FooterData";

const FooterContainer = styled.div``;
const FooterLinks = styled(Link)``;




const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinks>
                <h1>Footer</h1>
            </FooterLinks>
        </FooterContainer>
    )       
}




export default Footer;