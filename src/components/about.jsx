import React, {Component} from 'react';
import aboutHeader from "../images/me.png";

class About extends Component {
    updateRef = () =>{
        let position = this.sectionRef.offsetTop;
        this.props.getRef(position);
    };
    componentDidMount() {
        this.updateRef();
    }
    render() {
        return (
            <section id="about" ref={element => this.sectionRef = element}>

                <div className="scroll">
                    <h2>Ik ben een creative media
                        & game technologies
                        student uit Nederland
                    </h2>
                    <br/>
                    <h5>
                        <b>Hallo ik zal me even voorstellen,</b>
                    </h5>
                    <p>
                        Mijn naam is Nienke Overmeer. Ik ben een 22-jarige student uit Bergschenhoek. In mijn vrije tijd doe ik aan volleybal, muurklimmen, 
                        tekenen, ontspannen met vrienden en instant fotografie. Ook ben ik vaak bezig met ontwerp of development projecten. 
                    </p>
                    <br/>
                    <h5><b>Opleidingen</b></h5>
                    <p>
                        Toen het tijd was om een opleiding te kiezen voor voortgezet onderwijs wist ik nog niet precies
                        wat ik wilde doen. Ik heb het altijd al leuk gevonden om te tekenen of op een andere manier
                        mijzelf creatief te kunnen uitten. Zo ben ik uiteindelijk terecht gekomen bij de opleiding
                        Interactive Media Design English, op het Grafisch Lyceum. De opleiding heeft me geholpen om mijn
                        vaardigheden op het gebied van grafish & webdesign te vergroten.
                    </p>
                    <p>
                        Op het moment studeer ik Creative Media and Game Technologie, of kortgezegd CMGT, aan
                        Hogenschool Rotterdam. Mijn vorige studie, Interactive Media Design, was de reden dat ik
                        besloten heb om mij te gaan focussen op development. Tijdens die 4 jaar ben ik voornamelijk aan
                        de slag gegaan met web & grafisch design en een klein beetje HTML/CSS & Javascript. Tijdens de
                        stageperiode kreeg ik de kans om meer te leren op het gebied van webdevelopment. Deze
                        stageperiode vond ik zo leuk en interresant dat ik besloot om mij hier verder in te ontwikkelen.
                    </p>
                    <p>
                        Op de opleiding CMGT word ik uitgedaagd om creatief en probleemoplossend te denken. Ik werk met
                        een team aan projecten waarbij we het volledige ontwikkelproces doorlopen en een afgeronde
                        oplossing opleveren.
                    </p>


                </div>
                <div className="sticky">
                    <img className="stickyImage center" alt="Zelf illustratie" src={aboutHeader}/>
                </div>
            </section>
        );
    }
}

export default About;
