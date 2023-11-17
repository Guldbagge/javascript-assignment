import React from 'react'
import MeetOurTeamBox from './parts/MeetOurTeamBox'
import KristinePalmer from '../assets/image/Kristine Palmer.png'
import MarkAubri from '../assets/image/Mark Aubri.png'
import KimberlyHansen from '../assets/image/Kimberly Hansen.png'
import JustinWilloman from '../assets/image/Justin Willoman.png'
import TestimonialBox from './parts/TestimonialBox'
import CassandraWarren from '../assets/image/Cassandra Warren.png'
import AmandaTulling from '../assets/image/Amanda Tulling.png'
import JackMcDogglas from '../assets/image/Jack McDogglas.png'

const MeetOurTeam = () => {
    const services = [
        { img: KristinePalmer, title: "Kristine Palmer", description: "Chef Operation Officer" },
        { img: MarkAubri , title: "Mark Aubri", description: "Senior Consultant" },
        { img: KimberlyHansen, title: "Kimberly Hansen.", description: "Senior Consultant" },
        { img: JustinWilloman, title: "Justin Willoman", description: "riskmanagement" },
    ]

    const teams = [
        { icon:"fa-sharp fa-solid fa-star fa-sm", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", img: CassandraWarren, title: "Cassandra Warren", descriptionRed: "Business Manager, Dorfus" },
        { icon:"fa-sharp fa-solid fa-star fa-sm", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", img: AmandaTulling, title: "Amanda Tulling", descriptionRed: "Senior Developer, Square" },
        { icon:"fa-sharp fa-solid fa-star fa-sm", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", img: JackMcDogglas, title: "Jack McDogglas", descriptionRed: "Key Account Manager, Gobona" },
    ]

  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="heading-and-btn">
                <div className="test1">
                    <p className="testimonial-red-text">Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>

                <div className="test2">
                    <button className="btn-transparent">Browse Team<i className="fa-solid fa-arrow-up-right"></i></button>
                </div>
            </div>

            <div className="image-of-team">
                {   services.map ((service, index) => (
                    <MeetOurTeamBox key={index} img={service.img} title={service.title} description={service.description}/>
                ))}
            </div>

            <div className="dots">
                <i className="fa-duotone fa-period fa-2xl"></i><i className="fa-solid fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i><i className="fa-duotone fa-period fa-2xl"></i>
            </div>
        </div>

        <section className="testimonial">
           <div className="testimonial-box">
                <div className="container">
                    <div className="what-our">
                        <p className="testimonial-red-text">Testimonial</p>
                        <h2>What Our Client Says</h2>
                    </div>

                    <div className="testimonial-information-box">
                    {   teams.map ((team, index) => (
                    <TestimonialBox key={index} icon={team.icon} description={team.description} img={team.img} title={team.title} descriptionRed={team.descriptionRed}/>
                    ))}
                    </div>
                </div>
            </div>
            
            <div>
                <button className="btn-black">All Reviews<i className="fa-solid fa-arrow-up-right"></i></button>                    
            </div> 
        </section>
    </section>
  ) 
}

export default MeetOurTeam