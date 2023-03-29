import {useFormik} from "formik";
import * as Yup from "yup";


export default function MyForm() {



    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
}