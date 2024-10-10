import * as yup from "yup";

const requestSchemaWrapper = (schema: yup.AnySchema) =>
  yup.object({
    body: schema,
  });

const clinicSchema = requestSchemaWrapper(
  yup.object({
    name: yup.string().required(),
    address: yup.string(),
  }),
);

const dentistSchema = requestSchemaWrapper(
  yup
    .object({
      name: yup.string().required(),
      contact_number: yup.number(),
    })
    .noUnknown(true),
);

const patientSchema = requestSchemaWrapper(
  yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    middle_name: yup.string(),
    ext: yup.string(),
    address: yup.string(),
    contact_number: yup.number().required(),
    email: yup.string().email(),
    sex: yup.string(),
  }),
);

export { clinicSchema, dentistSchema, patientSchema };
