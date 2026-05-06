import NavBar from '../components/navbar';
import TerminalWindow from '../components/terminalWindow';

export default function TerminalGame(){
    console.log("opened terminal page");
    return (
        <div>
            <NavBar selected={4}/>
            <TerminalWindow />
        </div>
    );
}