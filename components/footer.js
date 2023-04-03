import {Typography} from '@mui/material';

export default function Footer() {
  return (
    <>
      <footer>
        <Typography variant="body1"><strong>Powered by</strong> Vašek a Vito</Typography>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 4rem;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
