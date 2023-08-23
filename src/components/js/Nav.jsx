import logo from "../../logo-orayasa.png";

export default function Nav() {
    return (
        <nav className="flex bg-sky-800 h-24">
            <img
                alt="logo"
                src={logo}
                className=" m-auto my-1 md:pl-24 md:ml-20"
            ></img>
        </nav>
    );
}
