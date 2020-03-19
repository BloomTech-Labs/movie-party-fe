import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function AddPartyModal({errors, touched}) {
  return(
    <Modal trigger={<Button>Show Modal</Button>} closeIcon>
      <Header content='Create New Party' />

      <Modal.Content>
        
        <Form className="createPartyContainer">
          <label>
            Name Party
            <Field
              type="text"
              name="name"
            />
          </label>

          <label>
            Movie
            <Field
              type="text"
              name="movie"
            />
          </label>

          <label>
            Location
            <Field
              type="text"
              name="location"
            />
          </label>

          <label>
            Date/Time
            <Field
              type="text"
              name="date"
            />
            <Field
              type="text"
              name="time"
            />
          </label>
          <label>
            Description
            <Field
              type="text"
              name="description"
            />
          </label>
          
        </Form>
        {touched.name && errors.name && <p className="error">{errors.name}</p>} 
        {touched.movie && errors.movie && <p className="error">{errors.movie}</p>}
        {touched.location && errors.location && <p className="error">{errors.location}</p>}
        {touched.date && errors.date && <p className="error">{errors.date}</p>}
        {touched.time && errors.time && <p className="error">{errors.time}</p>}
        {touched.description && errors.description && <p className="error">{errors.description}</p>}
        <Button color='green'>
          <Icon name='checkmark' /> Create
        </Button>
      </Modal.Content>
    </Modal>
  )
}

const FormikForm = withFormik({
  mapPropsToValues({ name, movie, location, date, time, description }) {
    return {
        name: name || "",
        movie: movie || "",
        location: location || "",
        date: date || "",
        time: time || "",
        description: description || ""
    };
},

validationSchema: Yup.object().shape({
  email: Yup.string()
    .email("Not a valid email")
    .required("Please enter your email"),

  password: Yup.string()
    .min(8, "Password needs to be atleast 8 characters long")
    .required("Please enter a password"),

  fname: Yup.string()
      .required("Your first name is required"),
})
})(AddPartyModal)

export default FormikForm
