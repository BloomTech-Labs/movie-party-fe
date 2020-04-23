import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function AddPartyModal({errors, touched}) {
  return(
    <Modal trigger={<Button  color='red'>New Party</Button>} closeIcon>
      <Header content='Create New Party' />

      <Modal.Content>
        
        <Form className="createPartyContainer">
          <label>
            Movie
            <Field
              type="text"
              name="movie"
              placeholder="What movie are you seeing?"
              className="formikField"
            />
          </label>

          <label>
            Location
            <Field
              type="text"
              name="location"
              placeholder="Would you like to include a location?"
              className="formikField"
            />
          </label>

          <label>
            Date/Time
            <Field
              type="date"
              name="date"
              className="formikFieldDate"
            />
            <Field
              type="time"
              name="time"
              className="formikFieldTime"
            />
          </label>
          <label>
            Description
            <Field
              type="text"
              name="description"
              className="formikField description"
              component="textarea"
            />
          </label>
          <label>
            Private
            <Field
              type="checkbox"
              name="privateParty"
              className="formikField"
              component="input"

            />
          </label>
          <label>
            Zoom Link
            <Field
              type="text"
              name="zoomLink"
              className="formikField zoomLink"
              placeholder="Schedule a zoom!"
            />
          </label>
          <Button color='red' style={{margin: "10px auto"}}>
          Create
          </Button>
        </Form>
        {touched.name && errors.name && <p className="error">{errors.name}</p>} 
        {touched.movie && errors.movie && <p className="error">{errors.movie}</p>}
        {touched.location && errors.location && <p className="error">{errors.location}</p>}
        {touched.date && errors.date && <p className="error">{errors.date}</p>}
        {touched.time && errors.time && <p className="error">{errors.time}</p>}
        {touched.description && errors.description && <p className="error">{errors.description}</p>}
        
      </Modal.Content>
    </Modal>
  )
}

const FormikForm = withFormik({
  mapPropsToValues({ name, movie, location, date, time, description, privateParty, zoomLink, }) {
    return {
        name: name || "",
        movie: movie || "",
        location: location || "",
        date: date || "",
        time: time || "",
        description: description || "",
        privateParty: privateParty || false,
        zoomLink: zoomLink || ""
    };
},

validationSchema: Yup.object().shape({
  name: Yup.string()
    .required("Please enter your party's name"),

  movie: Yup.string()
    .required("Please enter your movie"),

  location: Yup.string()
    .required("Please enter your party's location"),

  time: Yup.string()
    .required("Please enter your party's time"),

  date: Yup.date()
    .required("Please enter your party's date"),
})
})(AddPartyModal)

export default FormikForm
