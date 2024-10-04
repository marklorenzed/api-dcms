import * as yup from "yup";

const dentistSchema = yup.object({
  body: yup
    .object({
      name: yup.string().required(),
      contact_number: yup.number(),
    })
    .noUnknown(true),
});

export { dentistSchema };
