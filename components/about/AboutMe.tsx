import React, { ReactElement, useEffect } from 'react';
import Image from "next/image";
import MeImg from "../../assets/image/person/about-me.jpg";

interface Props {
    
}

export default function AboutMe({}: Props): ReactElement {

    return (
        <section className="about">
            <h3 className="title text-center bordered">
                About Me
            </h3>
            <div className="profile-img">
                <Image src={MeImg} alt="Me" layout="fill"/>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nesciunt officiis similique distinctio, praesentium ipsum nulla sit natus!</p>
        </section>
    )
}
