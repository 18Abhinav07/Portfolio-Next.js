"use client";

import { Timeline } from "../utils/timeline";
import { TimelineData } from "../utils/constants";

const Me = () => {
    return (
        <>
            <Timeline data={TimelineData} />
        </>
    )
}

export default Me;