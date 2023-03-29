import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as m from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Project = styled(Paper)(({ theme }) => ({
    backgroundColor: '#edf4fc',
    ...theme.typography.body1,
    padding: theme.spacing(4),
    color: theme.palette.text.contrastText,
  }));

  

export default function Overview() {
    return (

        <div className={styles.wrapper}>
                    
        <m.Box className={styles.upperBox}>
        <m.Typography variant="h3">Vítejte, %Jan Novák%</m.Typography>
        </m.Box>


      <m.Box sx={{ flexGrow: 1 }} className={styles.main}>

                    <Grid container spacing={6}>
                        <Grid  justifyContent="center" alignItems="center" xs={10} md={4}>
                        <Project>
                          <m.Box>
                          <m.Typography variant="h4" color="primary">%Projekt projektuje projektanty%</m.Typography>
                          </m.Box>
                          
                          <m.Typography><strong>Budget: </strong> %60%%</m.Typography>
                          <m.Typography><strong>Deadline: </strong> %12.12.1212%</m.Typography>
                        <m.Button variant="contained">Detail</m.Button>
                        </Project>
                        </Grid>
                        <Grid display="flex" justifyContent="center" alignItems="center" xs={10} md={4}>
                        <Item>
                           
                        <Project>
                          <m.Box>
                          <m.Typography variant="h4" color="primary">%Projekt projektuje projektanty%</m.Typography>
                          </m.Box>
                          
                          <m.Typography><strong>Budget: </strong> %60%%</m.Typography>
                          <m.Typography><strong>Deadline: </strong> %12.12.1212%</m.Typography>
                        <m.Button variant="contained">Detail</m.Button>
                        </Project>

                        <Project>
                          <m.Box>
                          <m.Typography variant="h4" color="primary">%Projekt projektuje projektanty%</m.Typography>
                          </m.Box>
                          
                          <m.Typography><strong>Budget: </strong> %60%%</m.Typography>
                          <m.Typography><strong>Deadline: </strong> %12.12.1212%</m.Typography>
                        <m.Button variant="contained">Detail</m.Button>
                        </Project>
                            
                        </Item>
                        </Grid>
                        <Grid xs={10} md={4}>
                        <Item>xs=6 md=4</Item>
                        </Grid>
                    </Grid>
                </m.Box>

    
      <style jsx>{`
     
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )

}