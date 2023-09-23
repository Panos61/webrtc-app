import { FormikProps, useFormik } from 'formik';
import * as Yup from 'yup';

export interface IFormikProps {
  formik: FormikProps<any>;
}

const initialValues = {
  username: '',
};

const CreateRoomSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username too short')
    .max(14, 'Username too long')
    .required(),
});

const onSubmit = (values: any) => {
  console.log(values);
};

export const useFormikProps = () => {
  return useFormik({
    initialValues,
    validationSchema: CreateRoomSchema,
    onSubmit,
  });
};
