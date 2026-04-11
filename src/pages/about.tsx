
import NavBar from '../components/navbar.tsx';
import PageIntro from '../components/pageIntro.tsx';
import { SmallCardBulletProp, SmallCardBulletedBoxSection } from '../components/cards.tsx';

import '../css/pageIntro.css';


const bulletCards : SmallCardBulletProp[] = [
    { 
        icon: "blank", 
        title: "Game Development", 
        bulletPoints: [
            "Unity Editor (C#)",
            "Unreal Engine (C++)",
            "Godot (Python)"
        ]
    },
    { 
        icon: "blank", 
        title: "Game Development", 
        bulletPoints: [
            "Unity Editor (C#)",
            "Unreal Engine (C++)",
            "Godot (Python)"
        ]
    },
    { 
        icon: "blank", 
        title: "Game Development", 
        bulletPoints: [
            "Unity Editor (C#)",
            "Unreal Engine (C++)",
            "Godot (Python)"
        ]
    },
]

const navBar = NavBar(1);
const intro = PageIntro();

export default function AboutPage(){
    return (
        <div>
            { navBar }
            { intro }
            <SmallCardBulletedBoxSection title="Skills and Experience" cardProps={bulletCards} />
        </div>
    );
}