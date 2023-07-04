import * as yup from 'yup';

export const rentalAgreementValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  tool_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
