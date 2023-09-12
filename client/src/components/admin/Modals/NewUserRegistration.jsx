import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../control/Controls";
import { useForm, Form } from "../../Forms/useForm";
import "./UsersList.scss";
import { RadioGroup } from "@material-ui/core";
import axios from "axios";
import { API_URL } from "../../../api/api";

const roleItems = [
  { id: "lab", title: "Lab" },
  { id: "doctor", title: "Doctor" },
];

const initialFValues = {
  id: 0,
  name: "",
  email: "",
  contactNo: "",
  role: "lab",
  address: "",
  tests: [],
};

const NewUserRegistration = (props) => {
  const { addOrEdit, recordForEdit, records, setRecords } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.patientName = fieldValues.name ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("contactNo" in fieldValues)
      temp.mobile =
        fieldValues.contactNo.length > 9 ? "" : "Minimum 10 numbers required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values, "#");
    addOrEdit(values, resetForm);
    const payload = {
      name: values.name,
      email: values.email,
      contactNo: values.contactNo,
      address: values.address,
      role: values.role,
    };

    // Perform further actions with the payload (e.g., send it to an API endpoint)
    console.log("payload", payload);
    // addOrEdit(payload, resetForm);

    try {
      await axios
        .post(`${API_URL}/users`, payload)
        .then((res) => setRecords([...records, res.data]));
      console.log("Form data sent successfully!");
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Contact No"
            name="contactNo"
            value={values.contactNo}
            onChange={handleInputChange}
          />
          <Controls.TextArea
            label="Address"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioGroup value={values.role}>
            <Controls.RadioButton
              name="role"
              label="Role"
              value={values.role}
              onChange={handleInputChange}
              items={roleItems}
            />
          </RadioGroup>
          {values.role === "doctor" && (
            <div className="">
              <p>Select Tests:</p>
              <Controls.CheckBox
                name="X-ray"
                label="X-ray"
                value={values.tests.includes('X-ray')}
                onChange={handleInputChange}
                // checked={values.tests.includes("X-ray")}
              />
              <Controls.CheckBox
                name="ECG"
                label="ECG"
                value={values.tests.includes('ECG')}
                onChange={handleInputChange}
                // checked={values.tests.includes("ECG")}
              />
              <Controls.CheckBox
                name="EEG"
                label="EEG"
                value={values.tests.includes('EEG')}
                onChange={handleInputChange}
                // checked={values.tests.includes("EEG")}
              />
              <Controls.CheckBox
                name="MRI"
                label="MRI"
                value={values.tests.includes('MRI')}
                onChange={handleInputChange}
                // checked={values.tests.includes("MRI")}
              />
              <Controls.CheckBox
                name="CT-Scan"
                label="CT-Scan"
                value={values.tests.includes('CT-Scan')}
                onChange={handleInputChange}
                // checked={values.tests.includes("CT-Scan")}
              />
            </div>
          )}
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default NewUserRegistration;
