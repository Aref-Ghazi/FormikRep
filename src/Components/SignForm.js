import React from 'react';

// import { useFormik } from 'formik';
import { Formik } from 'formik';

import * as Yup from 'yup';

const SignForm = () => {

    return (
        <Formik initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),

                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),

                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        id='firstName'
                        type='text'
                        // name='firstName'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        id='lastName'
                        type='text'
                        name='lastName'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.lastName}
                        {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    <label htmlFor='email'>Email Address</label>
                    <input
                        id='email'
                        type='email'
                        // name='email'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.email}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <button type='submit'>Submit</button>
                </form>
            )}
        </Formik>
    )
}
export default SignForm
