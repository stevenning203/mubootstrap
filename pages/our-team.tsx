import MUPage from "../components/page";
import TeamMemberCard from "../components/team_member_card";
import PageTitle from "../components/util";
import alex_cai from '../assets/team_portraits/alex_cai.png';
import mark_maclure from '../assets/team_portraits/mark_maclure.png';
import gabriel_liu from '../assets/team_portraits/gabriel_liu.png';
import benul_jayasekara from '../assets/team_portraits/binoo.png';
import savannah_seibel from '../assets/team_portraits/savannah_seibel.png';
import christie_leung from '../assets/team_portraits/christie_leung.png';
import jessica_chen from '../assets/team_portraits/jessica_chen.png';
import eden_rutto from '../assets/team_portraits/eden_rutto.png';
import andrew_zhang from '../assets/team_portraits/andrew_zhang.png';
import ryan_li from '../assets/team_portraits/ryan_li.png';
import hannah_kim from '../assets/team_portraits/hannah_kim.png';
import hannah_liu from '../assets/team_portraits/hannah_liu.png';
import darwin_trieu from '../assets/team_portraits/darwin_trieu.png';
import chong_wang from '../assets/team_portraits/chong_wang.png';
import kayla_thai from '../assets/team_portraits/kayla_thai.png';
import lisa_wong from '../assets/team_portraits/lisa_wong.png';
import landy_huang from '../assets/team_portraits/landy_huang.png';
import jason_tao from '../assets/team_portraits/jason_tao.png';
import marcus_wong from '../assets/team_portraits/marcus_wong.png';
import jason_wong from '../assets/team_portraits/jason_wong.png';

/**
 * 
 * @returns team page
 */
export default function OurTeam() {
    return (
        <MUPage>
            <div className='bg-blue-800'>
                <PageTitle>Meet the Team</PageTitle>
                <div className='gap-5 justify-center ml-[10%] mr-[10%] flex flex-wrap'>
                    <TeamMemberCard img_src={gabriel_liu.src} name='Gabriel Liu' title="Cello Teacher">Hi there, I'm Gabe! I've been playing the cello for 12 years now, and have completed the STE/Suzuki program. I love to share my passion for music, whether that's through Edmonton Youth Orchestra, a cultural concert, or a volunteer performance at a charity gala. I can't wait to meet some of you and go on a musical journey together!</TeamMemberCard>
                    <TeamMemberCard img_src={alex_cai.src} name="Alex Cai" title="Trombone Teacher">Hi there, I'm Alex! I've been playing bass trombone in the Senior Edmonton Youth Orchestra for the past three years and I also have a Grade 10 RCM certificate in piano. I'm passionate about music from a variety of genres and excited to help on your musical journey!</TeamMemberCard>
                    <TeamMemberCard img_src={mark_maclure.src} name="Mark Maclure" title="Guitar Teacher">Hello! My name is Mark and I’m a guitar teacher in Edmonton. I have recently graduated from Macewan University with a double diploma in Performance and Recording. I’m excited to help you reach your musical goals, whatever they may be!</TeamMemberCard>
                    <TeamMemberCard img_src={benul_jayasekara.src} name="Benul Jayasekara" title="Cello Teacher">My name is Benul. I'm a grade 12 student at Lillian Osborne High School and I love to play the cello and bass clarinet and I am also a percusionnist. I've played in Singing Strings and Edmonton Youth Orchestra. Additionally, I've also attended foreign programs, and played professionally. I look forward to meeting you all!</TeamMemberCard>
                    <TeamMemberCard img_src={savannah_seibel.src} name="Savannah Seibel" title="Viola Teacher">Hi, I'm Savannah! I have been playing violin and viola for a total of 10 years. Playing my title is one of the best parts of my life, and I think that giving other young students a chance to experience that same love for music is extremely important. Therefore, I am excited to share my insight with kids who have a passion for music and creativity!</TeamMemberCard>
                    <TeamMemberCard img_src={christie_leung.src} name="Christie Leung" title="Violin/Piano Teacher">Hey, I'm Christie! I'm currently studying at UBC. I have been playing violin and piano since I was 4 and have completed DipABRSM in both titles. I organized the Intergenerational Classic Music Event, partnered with the Edmonton Senior Center during the pandemic to promote music within the community. I look forward to meeting some of you soon!</TeamMemberCard>
                    <TeamMemberCard img_src={jessica_chen.src} name="Jessica Chen" title="Violin Teacher">I was introduced to the violin when I was six years old, and have never put it down since. It has been part of more than half of my life with no intention of stopping. I hope I can share this passion through teaching as everyone has a story they could tell through music.</TeamMemberCard>
                    <TeamMemberCard img_src={eden_rutto.src} name="Eden Rutto" title="Violin Teacher">Hello! My name is Eden. I have been playing the violin for the past 12 years. I have completed the Suzuki program, and I’m currently working towards my grade 10 RCM exam. I am in the Senior EYO, and I also play in the Conservatory Orchestra as concertmaster. I believe everyone should get the chance to learn an title, which is why I’m excited to start teaching!</TeamMemberCard>
                    <TeamMemberCard img_src={andrew_zhang.src} name="Andrew Zhang" title="Piano Teacher">Hello! My name is Andrew and I am currently attending Lillian Osborne High School. I've been playing the piano since I was 6 years old and I have completed RCM 10. I hope I can share my passion and love for piano with others!</TeamMemberCard>
                    <TeamMemberCard img_src={ryan_li.src} name="Ryan Li" title="Piano Teacher">Hello, my name is Ryan. I am a senior student at Lillian Osborne high school. I started learning piano since elementary school and have completed grade 9 at the Royal Conservatory of Music. I look forward to meeting you all to share this musical journey together!</TeamMemberCard>
                    <TeamMemberCard img_src={hannah_kim.src} name="Hannah Kim" title="Piano Teacher">Hey hey! I'm Hannah, and I'm a Grade 11 student at Old Scona high school. I’ve been playing piano on and off for the past 10+ years--from classics composed by Chopin and Bach, to titleal soundtracks from Studio Ghibli films, I’ve found a special love for music that I’d love to share with as many people as possible. :)</TeamMemberCard>
                    <TeamMemberCard img_src={jason_wong.src} name="Jason Wong" title="Piano Teacher">Hello, I am Jason! I have played piano for over 14 years now and I am currently preparing for my RCM Grade 10 Piano Exam. Other titles that I play are the guitar and the trumpet, both of which I have played for over 10 years as well. I am classically trained but I prefer playing contemporary, ragtime, and jazz. I have also made arrangements as well as composed music throughout my years of practice, and I hope to share this passion with many others.</TeamMemberCard>
                    <TeamMemberCard img_src={hannah_liu.src} name="Hannah Liu" title="Piano Teacher">Hi! My name is Hannah. I’ve been playing piano for over 12 years, initially learning using the Suzuki method, and now working towards a Level 10 Royal Conservatory of Music degree. I enjoy sharing my passion for music with my students, and performing at virtual concerts. I would love to help your child gain a new love of music and accomplish their goals!</TeamMemberCard>
                    <TeamMemberCard img_src={darwin_trieu.src} name="Darwin Trieu" title="Piano Teacher">Hello, my name is Darwin. I am a grade 12 student currently attending Harry Ainlay High School. I have been learning piano for 11 years and just recently completed my ARCT diploma. I hope to guide others in finding their passions for music as both a teacher and a supporter.</TeamMemberCard>
                    <TeamMemberCard img_src={chong_wang.src} name="Chong Wang" title="Piano Teacher">Greetings! I have been playing the piano since 2012 and am currently a student at Lillian Osborne High School. During this pandemic, piano was one of my best tools to enjoy my time and I have learned to play many pieces of all styles -- from baroque to modern. I hope I am able to share my passion of piano to you.</TeamMemberCard>
                    <TeamMemberCard img_src={kayla_thai.src} name="Kayla Thai" title="Piano Teacher">Hi there, my name is Kayla and I’m a 1st year student at the University of Alberta. I’ve played piano for 6 years with the Royal Conservatory of Music program. I’m looking forward to getting to know you, and seeing what wonderful things you’ll bring to our lessons! I’ll work my hardest to help you on your musical journey.</TeamMemberCard>
                    <TeamMemberCard img_src={lisa_wong.src} name="Lisa Wong" title="Piano Teacher">Hello! My name is Lisa! I have been playing the piano for about 13 years and completed up to grade 10 RCM. Even though I’ve stopped taking lessons, I now enjoy composing my own music in hopes that one day it will make it into movies, tv shows, and video games. I hope that I can share my passion for music with all of you and I will do my best in guiding you on your musical journey!</TeamMemberCard>
                    <TeamMemberCard img_src={landy_huang.src} name="Landy Huang" title="Piano Teacher">Hi! My name is Landy, and I’ve been playing piano for over 8 years. I love playing favorites like Debussy, Hisaishi, and Chopin to entertain visitors, patients, and staff at the community hospital, and I’m currently preparing for my grade 10 Royal Conservatory of Music exam. I am excited to share and cultivate a passion for music in children!</TeamMemberCard>
                    <TeamMemberCard img_src={jason_tao.src} name="Jason Tao" title="Piano Teacher">Hey, I'm Jason! I currently in my fifth year of civil engineering at the UofA, and I've been playing piano for 17 years. I've received my ARCT in piano performance with the Royal Conservatory of Music in 2019. I hope to share my passion and love of music through teaching.</TeamMemberCard>
                    <TeamMemberCard img_src={marcus_wong.src} name="Marcus Wong" title="Piano Teacher">Hi! I'm Marcus Wong, and I'm a grade 12 student at Old Scona high school. I'm an avid pianist currently working on my ARCT. I'm also a trombonist and play in Edmonton's Little Birds Big Band. I'm looking forward to giving back to the community and helping others to enjoy music as much as I do!</TeamMemberCard>
                </div>
            </div>
        </MUPage>
    )
}