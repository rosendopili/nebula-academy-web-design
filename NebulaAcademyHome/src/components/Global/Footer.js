import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook, AiTwotoneMail, AiTwotonePhone} from 'react-icons/ai'
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './Footer.css';
import AWS_Flyer from '../../assets/AWS_Flyer.pdf'
import AWS_Brochure from '../../assets/AWS_Brochure.pdf'
import AWS_Student_Infographic from '../../assets/AWS_Student_Infographic.pdf'
import AWS_University_Infographic from '../../assets/AWS_University_Infographic.pdf'

export const Footer = () => (
    <React.Fragment>
        <Navbar bg="dark" className="footerNavbar mainNavbar navbar-dark navbar-collapse"  style={{fontSize: '.80em', lineHeight:'10px'}}toggleable="true" expand="lg">
            <Container style={{ alignItems: 'flex-start', alignContent: 'flex-start', paddingTop: '15px'}}>
                <Navbar.Brand href="/"><img src={ NebulaIcon } height="70px" alt=""></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB'}}>Contact</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="tel:631-468-7477"><AiTwotonePhone/> 631-468-7477</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="mailto:succeed@nebulaacademyny.com"><AiTwotoneMail/> succeed@nebulaacademyny.com</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.google.com/maps/dir//180+Michael+Dr,+Syosset,+NY+11791,+USA/@40.8042056,-73.5511779,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2817e5a652d8f:0x801ed763ddf8b24!2m2!1d-73.5161585!2d40.8042109!3e0" target="blank">180 Michael Drive Syosset, NY 11791</Nav.Link></Nav.Item>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB'}}>All Links</h5>
                    <li><Nav.Link style={{textAlign:'left'}} href="/">About</Nav.Link></li>
                    <li><Nav.Link style={{textAlign:'left'}} href="/Staff">Staff</Nav.Link></li>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="/steam-for-kids">STEAM for Kids</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="/educators">Educators</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="/workforce-development">Workforce Development</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="/universities">Universities</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="/philanthropy">Philanthropy</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://aws.nebulaacademy.com" target="blank">AWS Certifications</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://code.nebulaacademy.com" target="blank">Softare Engineering Programs</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://calendly.com/tomlemons/nebulaacademy" target="blank">Discovery Call</Nav.Link></Nav.Item>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB'}}>Philanthropy</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="/wctd" target="blank" variant="warning">We Connect The Dots</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.we-connect-the-dots.org/coding-programs-for-1st12th" target="blank" variant="warning">Coding Programs, Ages 7-18 </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.we-connect-the-dots.org/student-ambassador-program" target="blank" variant="warning">Community Ambassador</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href='https://www.we-connect-the-dots.org/2020-codeathon' target="blank" variant="warning">Codeathon</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href='https://code.nebulaacademy.com/Scholarships' target="blank" variant="warning">Software Engineering Scholarships</Nav.Link></Nav.Item>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB', whiteSpace: 'normal'}}>Brochures</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href={ AWS_Flyer } target="blank" download variant="warning">AWS One-Page Flyer</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href={ AWS_Brochure } target="blank" download variant="warning">AWS Full Brochure</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href={ AWS_Student_Infographic } target="blank" download variant="warning">Student Infograph</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href={ AWS_University_Infographic } target="blank" download variant="warning">University Infograph</Nav.Link></Nav.Item>
                </ul>
                    <Nav className="ml-auto customFooter">
                        <Row>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://www.facebook.com/NebulaAcademyNY/"><AiFillFacebook /></Nav.Link></Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://www.linkedin.com/company/40795558/admin/"><AiFillLinkedin /></Nav.Link></Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://www.instagram.com/nebulaacademia/"><AiFillInstagram /></Nav.Link></Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://twitter.com/nynebula?lang=en"><AiFillTwitterCircle /></Nav.Link></Nav.Item>
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
)
