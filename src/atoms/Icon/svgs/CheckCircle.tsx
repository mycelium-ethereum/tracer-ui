import * as React from "react";
import { SvgComponent } from "./types";

const CheckCircle: SvgComponent = ({ color, size }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.5 10L9.5 12L13.5 8M19.5 10C19.5 11.1819 19.2672 12.3522 18.8149 13.4442C18.3626 14.5361 17.6997 15.5282 16.864 16.364C16.0282 17.1997 15.0361 17.8626 13.9442 18.3149C12.8522 18.7672 11.6819 19 10.5 19C9.3181 19 8.14778 18.7672 7.05585 18.3149C5.96392 17.8626 4.97177 17.1997 4.13604 16.364C3.30031 15.5282 2.63738 14.5361 2.18508 13.4442C1.73279 12.3522 1.5 11.1819 1.5 10C1.5 7.61305 2.44821 5.32387 4.13604 3.63604C5.82387 1.94821 8.11305 1 10.5 1C12.8869 1 15.1761 1.94821 16.864 3.63604C18.5518 5.32387 19.5 7.61305 19.5 10Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export default CheckCircle;
