import { Typography, Link } from '@mui/material';

export default function Copyright(props) {
    return(
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.elavon.com/index.html">
            Elavon Inc.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}