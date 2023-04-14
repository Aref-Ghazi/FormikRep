import React from 'react';

// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';

import * as Yup from 'yup';
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            {meta.touched && meta.error ?
                (<div className='error'>{meta.error}</div>) :
                null}
        </>
    )
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};


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
                <Form>
                    <MyTextInput
                        name='firstName'
                        label='First Name'
                        type='text'
                        placeholder='Joe'
                    />
                    <MyTextInput
                        name='lastName'
                        label='Last Name'
                        type='text'
                        placeholder='Done'
                    />
                    <MyTextInput
                        name='email'
                        label='Email Address'
                        type='email'
                        placeholder='Joe@formik.com'
                    />
                    <MySelect label='Job Type' name='jobType'>
                        <option value='' >Select a job type </option>
                        <option value='designer' >Designer</option>
                        <option value='development' >Development</option>
                        <option value='product' >Product</option>
                        <option value='other'>Other </option>
                    </MySelect>
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}
export default SignForm
