import NavBar from '../components/navbar';
import TerminalWindow from '../components/terminalWindow';

export default function TerminalGame(){
    return (
        <div>
            <NavBar selected={4}/>
            <TerminalWindow />
        </div>
    );
}