import styles from '../styles/Home.module.css';
import * as m from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper';

const ProjectCard = styled(Paper)(({ theme }) => ({
    backgroundColor: '#edf4fc',
    ...theme.typography.body1,
    padding: theme.spacing(4),
    color: theme.palette.text.contrastText,
  }));


