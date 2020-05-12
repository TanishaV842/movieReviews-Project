import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(3),
    body: yup.string()
        .required()
        .min(7),
    rating: yup.string()
        .required()
        .test('num 1-5', 'Sorry, rating must be a number on the scale of 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({ submitReview }) {

    return (

        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    submitReview(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Movie title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            style={globalStyles.input}
                            multiline
                            placeholder='Your review'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>


                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1 - 5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <Button color='royalblue' title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>

    );
}