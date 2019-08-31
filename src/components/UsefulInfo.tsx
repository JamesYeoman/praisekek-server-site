import * as React from "react";

import { SupportEmail } from "./SupportEmail";

interface UsefulInfoProps {
    classNames: string;
}

export const UsefulInfo = (props: UsefulInfoProps) => {
    const classNames = "card-panel " + props.classNames;
    return (
        <div className={classNames}>
            <h3>Useful Info</h3>
            <div>
                <p>Use the "Important Links" dropdown (or, if you're accessing via Mobile, use the Slide Out Panel) for links to crucial sites.</p>
                <p>If you have any issues, leave a message in #bugs-and-issues in the Discord Server</p>
                <SupportEmail address="praisekek.minecraftserver@gmail.com"/>
            </div>
        </div>
    );
};