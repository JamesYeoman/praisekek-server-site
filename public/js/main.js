import React from "react";
const SupportEmail = props => {
    const link = "mailto: " + props.emailAddr;
    const aTag = <a href={link}>{props.emailAddr}</a>;
    return <p>Let me know via {aTag} if the Discord Invite doesn't work.</p>;
};

const Links = props => {
    const listItems = props.links.map((urlobj) => (
        <li key={urlobj.key.toString()}>
            <a href={urlobj.url}>{urlobj.text}</a>
        </li>
    ));

    return <ul className={props.className} id={props.id}>{listItems}</ul>;
};

const UsefulInfo = props => {
    const classNames = "card-panel " + props.classNames;
    return (
        <div className={classNames}>
            <h3>Useful Info</h3>
            <div>
                <p>Use the "Important Links" dropdown (or, if you're accessing via Mobile, use the Slide Out Panel) for links to crucial sites.</p>
                <p>If you have any issues, leave a message in #bugs-and-issues in the Discord Server</p>
                <SupportEmail emailAddr="praisekek.minecraftserver@gmail.com"/>
            </div>
        </div>
    );
};

class BodyRenderer extends React.Component{
    componentDidMount() {
        let dropdowns = document.querySelectorAll('.dropdown-trigger');
        let sidenavs = document.querySelectorAll('.sidenav');
        let collapsibles = document.querySelectorAll('.collapsible');
        let options = {
            inDuration: 300,
            outDuration: 300,
            coverTrigger: false // Displays dropdown below the button
        };

        M.Dropdown.init(dropdowns, options);
        M.Sidenav.init(sidenavs, null);
        M.Collapsible.init(collapsibles, null);
    }

    render() {
        const links = [
            {
                key: 0,
                url: "https://discord.gg/gQJUxK4",
                text: "Discord Server"
            },
            {
                key: 1,
                url: "https://www.technicpack.net/modpack/praise-kek.1327225",
                text: "Technic Platform Modpack"
            }
        ];

        return ([
            <Links links={links} className="dropdown-content" id="links-dropdown" />,
            <ul id="slide-out" className="sidenav">
                <li className="no-padding">
                    <ul className="collapsible collapsible-accordion">
                        <li>
                            <a className="collapsible-header">Important Links</a><i className='material-icons'>arrow_drop_down</i>
                            <div className="collapsible-body">
                                <Links links={links} />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>,
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Praise Kek</a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="#" className="dropdown-trigger" data-target="links-dropdown">
                                Important Links<i className='material-icons right'>arrow_drop_down</i>
                            </a>
                        </li>
                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>,
            <div className="container center-align">
                <div className="card-panel yellow lighten-2">
                    <h1>Welcome to the PraiseKek Minecraft Server site!</h1>
                </div>
                <UsefulInfo classNames="yellow lighten-2"/>
            </div>
        ]);
    }
}

ReactDOM.render(<BodyRenderer />, document.getElementById('react_root'));