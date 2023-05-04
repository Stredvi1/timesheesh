import {Typography} from '@mui/material';

export default function Footer() {
  return (
    <>
      <footer>
        <Typography variant="body1">TimeSheet | <strong>Powered by</strong> Vašek a Vito</Typography>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100%;
        }

        footer {
          width: 100%;
          height: 6rem;
          border-top: 2px solid #eaeaea;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: -1;
          bottom: 0;
          
        }
      `}</style>
    </>
  );
}
