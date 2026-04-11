export default function SplashPage(){
    return (
        <div className="splashPage center fadeWhenInView">
            <div className="splashPageVignette center">
                <h2>Tom Draper</h2>
                <h1 className="greenText">Games Programmer</h1>
                <h3>Creating immersive gaming experiences, improving tooling to enable faster development and polishing with pixel perfect UI designed for a seamless user experience.</h3>
                <div className="horizontalContainer center">
                    <a href="projects.html"><button className="btn greenButton">View Projects</button></a><a href="contact.html"><button className="btn transparentButton">Get in Touch</button></a>
                </div>
            </div>
        </div>
    );
}