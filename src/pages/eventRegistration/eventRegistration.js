import { React} from "react";
import "./eventRegistration.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";

import useForm from "../../components/useForm";
import { Controls } from "../../components/controls/controls";

const conferencesPasses = [
  { id: "1-day Pass", title: "1-day Pass" },
  { id: "2-day Pass", title: "2-day Pass" },
  { id: "3-day Pass", title: "3-day Pass" },
  { id: "4-day Pass", title: "4-day Pass" },
];

const states = [
  { id: "TamilNadu", title: "TamilNadu" },
  { id: "Kerala", title: "Kerala" },
  { id: "AndhraPradesh", title: "AndhraPradesh" },
  { id: "Delhi", title: "Delhi" },
  { id: "Mumbai", title: "Mumbai" },
];

const mealPreference =[
    {id:"Non-Veg", title: "Non-Veg"},
    {id:"Veg", title: "Veg"},
]

const speakingAtConference = [
    {id:"Yes", title:"Yes"},
    {id:"No", title:"No"},
]



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialValues = {
  id: 0,
  firstName: "",
  lastName: "",
  mailingAddress: "",
  city: "",
  state: "",
  zipCode:"",
  speakingAtConference: "",
  conferencePass: "",
  mealPreference:""
};

function EventRegistration() {
  const classes = useStyles();



  const validate = (fieldValues = values) => {
    let temp = {...errors};
    if("firstName" in fieldValues)
    temp.firstName = fieldValues.firstName?"":"This Field is Required"
    if("mailingAddress" in fieldValues)
    temp.mailingAddress = (/$^|.+@.+..+/).test(fieldValues.mailingAddress)?"":"Email is not valid"
    if("city" in fieldValues)
    temp.city = fieldValues.city?"":"This Field is Required"
    if("zipCode" in fieldValues)
    temp.zipCode = fieldValues.zipCode?"":"This Field is Required"
    if("state" in fieldValues)
    temp.state = fieldValues.state.length !== 0 ? "":"This Field is Required"
    if("mealPreference" in fieldValues)
    temp.mealPreference = fieldValues.mealPreference.length !== 0 ? "":"This Field is Required"
    setErrors({
      ...temp
    })

    if (fieldValues === values)
    return Object.values(temp).every(x=> x === "")
  }

  const { values, setValues, handleChange, errors, setErrors, resetForm } = useForm(initialValues, true, validate);


  const handleSubmit = e => {
    e.preventDefault();
    if(validate()){
      window.alert("thank you for Registration...")
      console.log("User Registered",values)
      setValues(initialValues);
      setErrors({});
    }
  }

  const showSelectedValue = e => {
    console.log(e.target.value);
  }

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item md={6} sm={12}>
          <Controls.Input
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Controls.Input
            label="LastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          <Controls.Input
            label="Mailing Address"
            name="mailingAddress"
            value={values.mailingAddress}
            onChange={handleChange}
            error={errors.mailingAddress}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleChange}
            error={errors.city}
          />
          <Controls.Select
            name="state"
            label="State"
            value={values.state}
            onChange={handleChange}
            option={states}
            error={errors.state}
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <Controls.Input
            label="Zip Code"
            name="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            error={errors.zipCode}
          />

          <Controls.RadioGroup
            name="speakingAtConference"
            values={values.speakingAtConference}
            onChange={handleChange}
            label="Are you speaking at the conference"
            items={speakingAtConference}
          />
          <Controls.RadioGroup
            name="conferencePass"
            values={values.conferencePass}
            onChange={handleChange}
            label="Conferences Passes"
            items={conferencesPasses}
          />
          <Controls.Select
            name="mealPreference"
            label="State"
            value={values.mealPreference}
            onChange={handleChange}
            option={mealPreference}
            error={errors.mealPreference}
          />



          <div>
            <Controls.Button
              type = "submit"
                text="Submit"
            />
             <Controls.Button
              color = "default"
              text="Reset"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

export default EventRegistration;
