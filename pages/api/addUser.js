import {query} from "./db";
import {hash} from "bcrypt";
import * as Yup from "yup";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    const RegistrationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Jméno je povinný údaj')
            .max(30, 'Jméno je moc dlouhé (30 znaků)'),

        surname: Yup.string()
            .required('Příjmení je povinný údaj')
            .max(30, 'Příjmení je moc dlouhé (30 znaků)'),

        birthNumber: Yup.string()
            .required('Rodné číslo je povinný údaj')
            .length(11, 'Špatný formát rodného čísla')
            .matches(/^\d{6}\/\d{4}$/, 'Špatný formát rodného čísla'),

        bankAccount: Yup.string()
            .notRequired()
            .min(10, 'Číslo účtu je krátké')
            .max(17, 'Číslo účtu je moc dlouhé'),

        bankCode: Yup.string()
            .when('bankAccount', (bankAccountValue) => {
                if (bankAccountValue.toString() !== "") {
                    return Yup.string()
                        .required('Vyplňte i kód banky')
                        .length(4, 'Neplatná délka')
                } else {
                    return Yup.string().notRequired()
                }
            }),

        email: Yup.string()
            .required('Email je povinný údaj')
            .email('Špatný formát emailu'),

        password: Yup.string()
            .required('Heslo je povinný údaj')
            .min(6, 'Heslo musí být alespoň 6 znaků dlouhé')
            .max(40, 'Heslo je příliš dlouhé'),

        userTypeID: Yup.string()
            .required('Vyberte oprávnění')
    });

    let validData;

    try {
        validData = await RegistrationSchema.validate(req.body);
    } catch (error) {
        return res.status(500).json({error});
    }

    try {
        /*const querySQL = "CALL `addUser` (?, ?, ?, ?, ?, ?, ?, ?)";

        const valueParams = [
            validData.name,
            validData.surname,
            validData.birthNumber,
            validData.email,
            await hash(validData.password, 10),
            validData.userTypeID,
            validData.bankAccount,
            validData.bankCode
        ];*/

        await prisma.$queryRaw`CALL addUser (${validData.name}, ${validData.surname}, ${validData.birthNumber}, ${validData.email}, ${await hash(validData.password, 10)}, ${validData.userTypeID}, ${validData.bankAccount}, ${validData.bankCode})`;
        //await query({query: querySQL, values: valueParams});

        res.status(201).json({success: true});

    } catch (error) {
        console.log(43, error)
        res.status(500).json({error: error.meta.message});
    }
}

