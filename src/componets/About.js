import AboutImg from '../assets/profimage.png';
import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="flex flex-col md:flex-row bg-primary p-10 text-white">
            <FadeIn>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 px-12 py-5">
                        <img src={AboutImg} alt="About Me" className="rounded-lg profile-img"/>
                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <div className='flex flex-col text-center md:text-left'>
                             <h2 className="text-3xl font-bold text-center mb-12 relative">
                        About me
                        <span className="block w-16 h-1 bg-[#18b3ab] mx-auto mt-2 rounded"></span>
                    </h2>
                            <p className='text-lg font-classical'>
                                I’m a student currently learning frontend development and pursuing full stack development at NXT Wave Academy. I enjoy building responsive, user-friendly websites and constantly improving my skills in modern web technologies. My goal is to grow into a professional full stack developer and create impactful digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}