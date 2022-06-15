import React from 'react';
import {BsTwitter,BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';


export default function SocialMedia (){

    return(
        <div className='app__social'>
            <div><a href='https://twitter.com/MayueDahake' target="_blank"><BsTwitter /></a></div>
            <div><a href='https://www.instagram.com/mayue.dahake' target="_blank"><BsInstagram/></a></div>
            <div><a href='https://github.com/mayue13' target="_blank"><BsGithub/></a></div>
            <div><a href='https://www.linkedin.com/in/mayurdahake/' target="_blank"><BsLinkedin/></a></div>            
        </div>

    )

}