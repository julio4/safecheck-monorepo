import { Icon } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw', sm: '70vw' })}
            zIndex={0}
            height="760px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#FF3300" />
            <circle cx="244" cy="106" r="139" fill="#F56515" />
            <circle cy="291" r="139" fill="#ED8936" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ECC94B" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ED8936" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#FF3300" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#F56565" />
        </Icon>
    );
};