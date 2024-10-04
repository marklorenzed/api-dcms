import * as yup from "yup";

const clinicSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    address: yup.string(),
  }),
});

const dentistSchema = yup.object({
  body: yup
    .object({
      name: yup.string().required(),
      contact_number: yup.number(),
    })
    .noUnknown(true),
});

export { clinicSchema, dentistSchema };
