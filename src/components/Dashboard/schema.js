import * as yup from 'yup';

const schemaArticle = yup.object({
    title: yup.string()
    .required('Nature title is required')
    .min(9, 'Make the title bigger')
    .max(25, 'Make the title smaller'),
    desc: yup.string()
    .required('Nature description is required')
    .min(50, 'Make the description bigger'),
    //  rating: yup.string()
    // .required('Nature ratings is required')
    // .notOneOf(['Please select a rating'], 'You need to select a rating'),
    img: yup.string()
    .required('Nature image is required')
    .url()
})

export default schemaArticle;