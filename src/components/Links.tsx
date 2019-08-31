import * as React from "react";

interface Link {
    key: number;
    url: string;
    text: string;
}

interface LinksProps {
    links: Link[];
    className?: string;
    id?: string;
}

export const Links = (props: LinksProps) => {
    const listItems = props.links.map((urlobj) => (
        <li key={urlobj.key.toString()}>
            <a href={urlobj.url}>{urlobj.text}</a>
        </li>
    ));

    return <ul className={props.className} id={props.id}>{listItems}</ul>;
};