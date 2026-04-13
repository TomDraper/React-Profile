import '../css/experience.css'

export type ExperienceProp = {
    fromMonth: string,
    fromYear: string,
    toMonth: string,
    toYear: string,
    jobTitle: string,
    companyName: string,
    paragraphs: string[]
}

export function ExperienceSection({title, props}:{title:string, props:ExperienceProp[]}){
    return (
        <div className="experienceContainer">
            <h1 className="greenText">{title}</h1>
            <ExperinceBlockSection props={props} />
        </div>
    );
}

function ExperinceBlockSection({props}:{props:ExperienceProp[]}){
    return props.map((prop, index) =>
        <div>
            <ExperienceBlock key={index} prop={prop} />
            <div className="seperator"></div>
        </div>
    );
}

function ExperienceBlock({prop}:{prop:ExperienceProp}) {
    return (
        <div className="experienceBlock fadeWhenInView">
            <p className="greenText">{prop.fromMonth} {prop.fromYear} - {prop.toMonth} {prop.toYear}</p>
            <h4>{prop.jobTitle}</h4>
            <p>{prop.companyName}</p>
            <ExperienceLines paragraphs={prop.paragraphs} />
        </div>
    );
}

function ExperienceLines({ paragraphs } : { paragraphs: string[]}){
    return paragraphs.map((prop, index)=>
        <ExperienceLine key={index} text={prop} />
    );
}
function ExperienceLine({text}:{text:string}) {
    return <p className="description">{text}</p>
}
