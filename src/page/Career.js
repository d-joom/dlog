import React, {useEffect, useState, useRef, useCallback} from 'react';
import "../css/career.css";
import Picture from '../img/plana.jpg';
import JavaLogo from '../img/stack_java.png';
import ReactLogo from '../img/stack_react.png';
import RustLogo from '../img/stack_rust.png';
import MysqlLogo from '../img/stack_mysql.png';
import EsLogo from '../img/stack_es.png';
import { useLocation } from "react-router-dom";

const Career = () => {

    const {state} = useLocation();


    useEffect(() => {
        },[])

    return (
        <div className="career_wrap">
            <div className="self_introduction_wrap">
                <h1>Hello, I am a backend developer with three years of experience.</h1>
                <div className="flex_wrap">
                    <div className="picture">
                        <img src={Picture}/>
                    </div>
                    <div className="text">
                            <p>Hi there! 👋 I'm Jumin, a passionate backend developer with a love for crafting robust and scalable solutions. With [X] years of hands-on experience in backend development, I've had the privilege of working on diverse projects that demanded a deep understanding of server-side technologies.<br/>
                            My technical toolkit includes expertise in languages such as Java, Python, and Node.js, along with a solid grasp of backend frameworks like Spring Boot and Django. I thrive on building efficient RESTful APIs, optimizing database performance, and ensuring the seamless integration of various systems.<br/>
                            In my previous role at [Previous Company], I led a team in developing a [brief description of a significant project or achievement], which not only enhanced the overall system performance but also contributed to a [X]% increase in [some measurable metric].<br/>
                            What truly excites me about backend development is the challenge of architecting systems that not only meet the current requirements but also scale gracefully as the application grows. I'm a strong advocate for clean, maintainable code, and I believe in staying up-to-date with the latest technologies and best practices.<br/>
                            When I'm not immersed in code, you can find me exploring new backend technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming innovative solutions to complex problems.<br/>
                            I'm eager to bring my technical skills, passion for backend development, and collaborative spirit to a new team where I can contribute to creating exceptional software solutions. Let's connect and explore how we can work together to build something great! 🚀</p>
                    </div>
                </div>
            </div>
            <div className="skill_wrap">
                <h1 className="skill_title">Skill</h1>
                <ul className="flex_wrap">
                    <li>
                        <div>img</div><span>Java</span>
                    </li>
                    <li>
                        <div>img</div><span>React</span>
                    </li>
                    <li>
                        <div>img</div><span>Rust</span>
                    </li>
                    <li>
                        <div>img</div><span>MySQL</span>
                    </li>
                    <li>
                        <div>img</div><span>Elastic Search</span>
                    </li>
                </ul>
            </div>
            <div className="career_description_wrap">
                <div className="company_wrap">
                    <h2>회사이름<span>2020.09.14 ~ 현재</span></h2>
                    <p>백엔드 개발</p>
                    <div className="project">
                        <h3>프로젝트명</h3>
                        <p>주요업무</p>
                        <ul>
                            <li>java와 Spring Boot 프레임워크를 활용한 백엔드 서비스 개발</li>
                            <li>RESTful API 설계 및 구현</li>
                            <li>PostgreSQL 데이터베이스 모델링 및 최적화</li>
                            <li>팀원들과의 협업을 통한 기능 구현 및 유지보수</li>
                        </ul>
                    </div>
                    <div className="project">
                        <h3>프로젝트명</h3>
                        <p>주요업무</p>
                        <ul>
                            <li>java와 Spring Boot 프레임워크를 활용한 백엔드 서비스 개발</li>
                            <li>RESTful API 설계 및 구현</li>
                            <li>PostgreSQL 데이터베이스 모델링 및 최적화</li>
                            <li>팀원들과의 협업을 통한 기능 구현 및 유지보수</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="portfolio_wrap">
                <div className="portfolio_item">
                    <img src=""/>
                    <div className="inform">
                        <p>PlanLog<span>2023.08 ~ 2024.01.28</span></p>
                        <p>포트폴리오 페이지를 포함한 나만의 커스텀 블로그 개발</p>
                        <p>기술스택</p>
                        <ul>
                            <li>Java</li>
                            <li>Spring boot</li>
                            <li>MySql</li>
                            <li>JPA</li>
                            <li>React</li>
                        </ul>
                        <a href="#">git</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;