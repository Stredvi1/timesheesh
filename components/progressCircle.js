import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props, {textColor}) {
    return (
        <Box sx={{
            position: 'relative',
            display: 'inline-flex'}}>
            <CircularProgress variant="determinate" thickness={5} {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="body" component="div" color={textColor}>
                    <strong>{`${Math.round(props.value)}%`}</strong>
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};

export default function CircularStatic({value, size, color, textColor}) {
    const [progress, setProgress] = React.useState(0);



    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= value ? value : prevProgress + 1));
        }, 25);

        return () => {
            clearInterval(timer);
        };
    }, []);

    if(progress > 100) {
        color = "warning";
    }
    if(progress >= 120) {
        color = "error";
    }
    return <CircularProgressWithLabel value={progress} size={size} color={color} textColor={textColor}/>;
}