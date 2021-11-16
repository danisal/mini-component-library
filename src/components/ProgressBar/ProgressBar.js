import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
    large: {
        height: 16,
        padding: 4,
        radius: 8,
    },
    medium: {
        height: 12,
        padding: 0,
        radius: 4,
    },
    small: {
        height: 8,
        padding: 0,
        radius: 4,
    },
};

const ProgressBar = ({ value, size }) => {
    const styles = STYLES[size];

    if (!styles) {
        throw new Error(`Unknown size: ${size}`);
    }

    return (
        <BarTrack
            className="wrapper"
            style={{
                "--radius": `${styles.radius}px`,
                "--padding": `${styles.padding}px`,
            }}
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <Bar
                style={{
                    width: `${value}%`,
                    "--height": `${styles.height}px`,
                    borderRadius: value < 100 ? "4px 0 0 4px" : "4px",
                }}
            />
        </BarTrack>
    );
};

export default ProgressBar;

const BarTrack = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--radius);
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray15};
    padding: var(--padding);
`;

const Bar = styled.div`
    background-color: ${COLORS.primary};
    border-radius: 4px 0px 0px 4px;
    height: var(--height);
`;
