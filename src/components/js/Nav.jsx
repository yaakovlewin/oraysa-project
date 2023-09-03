import logo from "../../logo-orayasa.png";

export default function Nav() {
    return (
        <nav className="flex bg-sky-800 h-24">
            <img
                alt="logo"
                src={logo}
                className="p-2 m-auto my-1 md:pl-24 md:ml-20"
                height={88}
                width={200}
            ></img>
        </nav>
    );
}
