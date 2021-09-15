import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
const defaultValues = {
    name: "",
    age: 0,
    gender: "",
    os: "",
    favoriteNumber: 0,
};
const ClientDetails = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="row">
                <Grid item>
                    <TextField
                        id="clientName"
                        name="client_name"
                        label="Client Name"
                        type="text"
                        variant="outlined"
                    //value={formValues.name}
                    //onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="headOfficeName"
                        name="head_office_name"
                        label="Head Office Name"
                        type="text"
                        variant="outlined"
                    //value={formValues.name}
                    //onChange={handleInputChange}
                    />
                </Grid>                
            </Grid>
            <Grid container direction="row">                
                <Grid item>
                    <TextField
                        id="address"
                        name="address"
                        label="Address"
                        type="text"
                        variant="outlined"
                    //value={formValues.name}
                    //onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                <TextField
                                    id="country"
                                    name="country"
                                    label="Country"
                                    type="text"
                                    variant="outlined"
                                //value={formValues.name}
                                //onChange={handleInputChange}
                                />
                </Grid>
                <Grid item>
                <TextField
                                    id="state"
                                    name="state"
                                    label="State"
                                    type="text"
                                    variant="outlined"
                                //value={formValues.name}
                                //onChange={handleInputChange}
                                />
                </Grid>
            </Grid>
            <Grid container direction="row" spacing="3">                
                <Grid item>
                <TextField
                                    id="city"
                                    name="city"
                                    label="City"
                                    type="text"
                                    variant="outlined"
                                //value={formValues.name}
                                //onChange={handleInputChange}
                                />
                               
                </Grid>
                <Grid item>
                <TextField
                                    id="area"
                                    name="area"
                                    label="Area"
                                    type="text"
                                    variant="outlined"
                                //value={formValues.name}
                                //onChange={handleInputChange}
                                />
                                
                </Grid>
                <Grid item>
                <TextField
                                    id="pin"
                                    name="pin"
                                    label="Pin"
                                    type="text"
                                    variant="outlined"
                                //value={formValues.pin}
                                //onChange={handleInputChange}
                                />
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </form>
    );
};
export default ClientDetails;