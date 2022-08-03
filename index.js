
let content1 = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";

let content2 = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.";



function SocialCard(props) {
    return (<div className="">
        <img src={props.icon} />
    </div>);
}

function Description(props) {
    return (<div>
        <h3 className="title">{props.title}</h3>
        <p className="content">{props.content}</p>
    </div>);
}

function CustomBtn(props) {

    return (<button className="btn" style={{backgroundColor: props.bgColor, color: props.color}}><img src={props.icon} /><span className="m9">{props.label} </span></button>);
}

function NameAndRole() {
    return (<div>
        <h1 className="name-style">Laura Smith</h1>
        <h3 className="role">Frontend Developer</h3>
        <h5 className="email">laurasmith.website</h5>
    </div>);
}

function MainContent() {
    return (<div className="block">
        <img src="./img/profilePic.svg" className="profilePic"/>
        <div className="info-part m24">
            <NameAndRole />
            <div className="flex">
                <CustomBtn label="Email" icon="./img/mailIcon.svg" bgColor="#D1D5DB" color="#374151"></CustomBtn>
                <div className="ml17"></div>
                <CustomBtn label="Linkedln" icon="./img/L2.svg" bgColor="#5093E2" color="#FFFFFF"></CustomBtn>
            </div>
            <div className="mx">
            <Description title="About" content={content1}></Description>
            <div className="m27"></div>
            <Description title="Interests" content={content2}></Description>
            </div>
        </div>

        <div className="footer">
            <SocialCard icon="./img/twitter.svg"> </SocialCard>
            <SocialCard icon="./img/facebook.svg"> </SocialCard>
            <SocialCard icon="./img/instagram.svg"></SocialCard>
            <SocialCard icon="./img/github.svg"></SocialCard>
        </div>
    </div>)
}

// ReactDOM.render(
//    <div>
//      <Navbar />

//    </div>,
//     document.getElementByd("root")
// )

ReactDOM.createRoot(document.getElementById("root")).render(<MainContent />)