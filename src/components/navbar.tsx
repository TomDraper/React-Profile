import { Link } from 'react-router-dom';

type NavBarLinkProp = {
    current: boolean,
    text: string,
    url: string
}

const navBarLinks : NavBarLinkProp[] = [
    { current: false, text: "Home", url: "/" },
    { current: false, text: "Projects", url: "/projects.html" },
    { current: false, text: "About", url: "/about" },
    { current: false, text: "Contact", url: "/contact.html" }
]

export default function NavBar(selected:number){
    for(let i = 0; i < navBarLinks.length; i++){
        navBarLinks[i].current = selected === i;
    }
    return (
        <div className="navBar">
            <ul>
                <li><a className="greenText">Tom Draper</a></li>
                <NavBarLinks props={navBarLinks} />
            </ul>
        </div>
    );
}

export function NavBarLinks({ props } : { props:NavBarLinkProp[] }){
    return props.map((prop, index) => (
        <NavBarLink key={index} {...prop} />
    ));
}

function NavBarLink({ current, text, url }: NavBarLinkProp){
    return <li><Link className={current ? "greenText" : ""} to={url}>{text}</Link></li>;
}