import { Formik, Form, Field } from 'formik';

import { formikObjectSchema } from 'src/shared';

export type TroopFormType = {
  generateTroops: ({ numberOfTroops }: { numberOfTroops: number }) => void;
};

function TroopForm({ generateTroops }: TroopFormType) {
  return (
    <Formik
      initialValues={{ numberOfTroops: 3 }}
      onSubmit={(values) => {
        generateTroops(values);
      }}
      validationSchema={formikObjectSchema()}
    >
      {({ errors }) => (
        <Form>
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <Field
                name="numberOfTroops"
                error={errors && errors?.numberOfTroops}
                type="number"
                className="block flex-1 pl-1 sm:text-sm sm:leading-6 w-24 text-right my-4"
              />
              <span style={{ color: 'red' }}>{errors?.numberOfTroops} </span>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset my-4"
              >
                Create troops
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default TroopForm;
