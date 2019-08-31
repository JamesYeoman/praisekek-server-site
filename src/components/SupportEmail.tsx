import * as React from "react";

interface SupportEmailProps {
    address: string;
}

export const SupportEmail = (props: SupportEmailProps) => {
    const link = "mailto: " + props.address;
    const emailLink = <a href={link}>{props.address}</a>;
    return <p>Let me know via {emailLink} if the Discord Invite doesn't work.</p>;
};