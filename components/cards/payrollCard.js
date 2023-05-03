import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Stack, Typography} from "@mui/material";
import React from "react";
import date from "@/utils/formatters/dateTimeFormatter";
import currency from "../../utils/formatters/currencyFormatter";
import {Conditional} from "@/utils/Conditional";
import Button from "@mui/material/Button";



export default function PayrollCard(payroll) {

    let copyText = `Jméno: ${payroll.name}, \n` +
    `Částka: ${payroll.amount}\n`;

    if(payroll.bankAccount !== null) {
        copyText += `Č. účtu: ${payroll.bankAccount}`;
    }



    const PayrollCard = styled(Paper)(({theme}) => ({
        backgroundColor: '#182333',
        ...theme.typography.body1,
        padding: theme.spacing(4),
        color: '#ffffff',
        width: '100%',
    }));

    return (

            <PayrollCard
            sx={{
                p: 4
            }}>
                <Typography variant={"h4"}>{payroll.name}</Typography>
                <Typography><strong>Částka: </strong>{currency(payroll.amount)}</Typography>
                <Conditional showWhen={payroll.bankAccount !== null}>
                    <Typography><strong>Číslo účtu: </strong>{payroll.bankAccount}</Typography>
                </Conditional>
                <Button
                    sx={{
                        color: "white",
                        borderColor: "white",
                        m: 2
                    }}
                    variant="outlined"
                    size="small"
                    onClick={() => {
                    navigator.clipboard.writeText(copyText)
                }
                }>
                    Zkopírovat
                </Button>
            </PayrollCard>
    )
}
