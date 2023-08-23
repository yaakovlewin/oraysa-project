import logo from "../../logo-orayasa.png";

export default function Nav() {
    return (
        <nav className="flex bg-sky-800 h-24">
            <img
                alt="logo"
                src={logo}
                className=" m-auto py-3 sm:pl-24 sm:ml-20"
            ></img>
        </nav>
    );
}
