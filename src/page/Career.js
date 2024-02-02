import React, {useEffect, useState, useRef, useCallback} from 'react';
import "../css/career.css";
import Picture from '../img/plana.jpg';
import JavaLogo from '../img/stack_java.png';
import ReactLogo from '../img/stack_react.png';
import RustLogo from '../img/stack_rust.png';
import MysqlLogo from '../img/stack_mysql.png';
import EsLogo from '../img/stack_es.png';
import Portfolio_01 from '../img/portfolio_01.jpg';
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
                <h1 className="skill_title">Career</h1>
                <div className="company_wrap">
                    <h2>Company Name<span>2020.09.14 ~ 현재</span></h2>
                    <p>백엔드 개발 및 유지보수</p>
                    <div className="project">
                        <h3>FRIIM - 클라우드 보안 솔루션</h3>
                        <ul>
                            <li><i className="xi-check-min"></i>java와 Spring Boot 프레임워크를 활용한 백엔드 서비스 개발</li>
                            <li><i className="xi-check-min"></i>RESTful API 설계 및 구현</li>
                            <li><i className="xi-check-min"></i>PostgreSQL 데이터베이스 모델링 및 최적화</li>
                            <li><i className="xi-check-min"></i>팀원들과의 협업을 통한 기능 구현 및 유지보수</li>
                        </ul>
                        <div className = "main_function">
                            <p>주요기능</p>
                            <ol>
                                <li><span>데이터 수집 및 전처리</span>
                                    <ul>
                                        <li>- 지하철과 버스 데이터를 외부 소스(API 등)에서 수집합니다.</li>
                                        <li>- 수집된 데이터는 역 및 정류장 정보, 운행 정보 등으로 구성됩니다.</li>
                                    </ul>
                                </li>
                                <li><span>위경도 변환</span>
                                    <ul>
                                        <li>도시 교통량 파악은 도로 및 교통 체계의 효율성을 높이고 시민들의 이동을 개선하는데 중요한 역할을 합니다. </li>
                                        <li>- 변환된 위경도 정보는 지도상에 표시하는 데 활용됩니다.</li>
                                    </ul>
                                </li>
                                <li><span>교통량 측정</span>
                                    <ul>
                                        <li>- 변환된 위경도 정보를 기반으로 특정 지역의 교통량을 측정합니다.</li>
                                        <li>- 교통 혼잡 예측 알고리즘을 통해 사용자에게 교통 상황에 대한 알림을 제공합니다.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="project">
                        <h3>FRIIM - 클라우드 보안 솔루션</h3>
                        <ul>
                            <li><i className="xi-check-min"></i>java와 Spring Boot 프레임워크를 활용한 백엔드 서비스 개발</li>
                            <li><i className="xi-check-min"></i>RESTful API 설계 및 구현</li>
                            <li><i className="xi-check-min"></i>PostgreSQL 데이터베이스 모델링 및 최적화</li>
                            <li><i className="xi-check-min"></i>팀원들과의 협업을 통한 기능 구현 및 유지보수</li>
                        </ul>
                        <div className = "main_function">
                            <p>주요기능</p>
                            <ol>
                                <li><span>데이터 수집 및 전처리</span>
                                    <ul>
                                        <li>- 지하철과 버스 데이터를 외부 소스(API 등)에서 수집합니다.</li>
                                        <li>- 수집된 데이터는 역 및 정류장 정보, 운행 정보 등으로 구성됩니다.</li>
                                    </ul>
                                </li>
                                <li><span>위경도 변환</span>
                                    <ul>
                                        <li>- 수집한 역과 정류장의 주소 정보를 이용하여 위경도로 변환합니다.</li>
                                        <li>- 변환된 위경도 정보는 지도상에 표시하는 데 활용됩니다.</li>
                                    </ul>
                                </li>
                                <li><span>교통량 측정</span>
                                    <ul>
                                        <li>- 이 프로젝트는 지하철과 버스 데이터를 활용하여 교통량을 체크하고, 이를 시각적으로 제공하는 애플리케이션을 개발하는 것을 목표로 합니다.</li>
                                        <li>- 교통량은 실시간 또는 특정 시간대의 데이터를 기반으로 계산됩니다.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio_wrap">
                <h1>Portfolio</h1>
                <div className="portfolio_item_wrap flex_wrap">
                    <div className="portfolio_item">
                        <div className="flex_wrap portfolio_top">
                            <p className="side_name">PlanLog<span>2023.08 ~ 2024.01.28</span></p><a href="https://github.com/d-joom/dlog-api" target="_blank"><i className="xi-github"></i>git</a>
                        </div>
                        <p className="side_description">포트폴리오 페이지를 포함한 나만의 커스텀 블로그 개발</p>
                        <div className="img_wrap"><img src={Portfolio_01}/></div>
                        <div className="side_inform">
                            <h3><i className="xi-check-min"></i>기술스택</h3>
                            <ul className="flex_wrap">
                                <li>Java</li>
                                <li>Spring boot</li>
                                <li>MySql</li>
                                <li>JPA</li>
                                <li>React</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="portfolio_item">
                        <div className="flex_wrap portfolio_top">
                            <p className="side_name">PlanLog<span>2023.08 ~ 2024.01.28</span></p><a href="https://github.com/d-joom/dlog-api" target="_blank"><i className="xi-github"></i>git</a>
                        </div>
                        <p className="side_description">포트폴리오 페이지를 포함한 나만의 커스텀 블로그 개발</p>
                        <div className="img_wrap"><img src={Portfolio_01}/></div>
                        <div className="side_inform">
                            <h3><i className="xi-check-min"></i>기술스택</h3>
                            <ul className="flex_wrap">
                                <li>Java</li>
                                <li>Spring boot</li>
                                <li>MySql</li>
                                <li>JPA</li>
                                <li>React</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="portfolio_item">
                        <div className="flex_wrap portfolio_top">
                            <p className="side_name">PlanLog<span>2023.08 ~ 2024.01.28</span></p><a href="https://github.com/d-joom/dlog-api" target="_blank"><i className="xi-github"></i>git</a>
                        </div>
                        <p className="side_description">포트폴리오 페이지를 포함한 나만의 커스텀 블로그 개발</p>
                        <div className="img_wrap"><img src={Portfolio_01}/></div>
                        <div className="side_inform">
                            <h3><i className="xi-check-min"></i>기술스택</h3>
                            <ul className="flex_wrap">
                                <li>Java</li>
                                <li>Spring boot</li>
                                <li>MySql</li>
                                <li>JPA</li>
                                <li>React</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Career;