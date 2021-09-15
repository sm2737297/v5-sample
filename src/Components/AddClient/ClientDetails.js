import {
    Grid, TextField, Button, FormControlLabel, Switch, InputLabel, InputAdornment, Select,
    MenuItem, FormControl, ButtonGroup, Box, Container, Typography, FormGroup
} from '@material-ui/core';
import PropTypes from "prop-types";
import ClientFooter from './ClientFooter';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { red } from '@material-ui/core/colors';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
function ClientDetails(props) {
    const {
        formValues,
        StatesCitiesMaster,
        cities,
        handleInputChange,
        handleSubmit,
        statusState,
        handleStatusChange,
        classes,
        backArrowDisabled,
        nextArrowDisabled,
        cancelBtnDisabled,
        saveAndContinueBtnDisabled,
        handleNextArrow,
        handleBackArrow,
        handleSaveAndContinue,
        handleCanceBtn,
        styleObj,
        errorState
    } = props;    
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <InputLabel className={classes.formLabel}>Basic details</InputLabel>
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <TextField                            
                            id="clientName"
                            name="clientName"
                            label="Client Name"
                            type="text"
                            variant="outlined"
                            value={formValues.clientName}
                            onChange={handleInputChange}
                            style={styleObj}
                            required
                            InputLabelProps={{
                                classes: {
                                    asterisk: classes.asterisk
                                }
                            }}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="headOfficeName"
                            name="headOfficeName"
                            label="Head Office Name"
                            type="text"
                            variant="outlined"
                            value={formValues.headOfficeName}
                            onChange={handleInputChange}
                            style={styleObj}
                            required
                            InputLabelProps={{
                                classes: {
                                    asterisk: classes.asterisk
                                }
                            }}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <TextField
                            id="address"
                            name="address"
                            label="Address"
                            type="text"
                            variant="outlined"
                            value={formValues.address}
                            onChange={handleInputChange}
                            style={styleObj}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="country"
                            name="country"
                            label="Country"
                            type="text"
                            variant="outlined"
                            value={formValues.country}
                            onChange={handleInputChange}
                            style={styleObj}                            
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="state"
                            select
                            name="state"
                            label="State"
                            type="text"
                            variant="outlined"
                            value={formValues.state}
                            onChange={handleInputChange}
                            style={styleObj}                            
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                StatesCitiesMaster && StatesCitiesMaster.map((state) =>
                                    <MenuItem key={state.id} value={state.state} selected={state.selectedValue}>
                                        {state.state}
                                    </MenuItem>
                                )
                            }
                        </TextField>
                        {/* <FormControl variant="outlined">
                            <InputLabel id="state-outlined-label">State</InputLabel>
                            <Select
                                labelId="state-select-outlined-label"
                                id="state-select-outlined"
                                value={""}
                                onChange={handleInputChange}
                                label="State"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <TextField
                            id="city"
                            select
                            name="city"
                            label="City"
                            type="text"
                            variant="outlined"
                            value={formValues.city}
                            onChange={handleInputChange}
                            style={styleObj}                            
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                cities && cities.map((city) =>
                                    <MenuItem key={city.id} value={city.name} selected={city.selectedValue}>
                                        {city.name}
                                    </MenuItem>
                                )
                            }
                        </TextField>

                    </Grid>
                    <Grid item>
                        <TextField
                            id="area"
                            name="area"
                            label="Area"
                            type="text"
                            variant="outlined"
                            value={formValues.area}
                            onChange={handleInputChange}
                            style={styleObj}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />

                    </Grid>
                    <Grid item>
                        <TextField
                            id="pincode"
                            name="pincode"
                            label="Pin"
                            type="text"
                            variant="outlined"
                            value={formValues.pincode}
                            onChange={handleInputChange}
                            style={styleObj}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <FormControlLabel
                            value="status"
                            name="status"
                            control={<Switch color="primary"
                                checked={formValues.status && formValues.status.toUpperCase() == "ACTIVE" ? true : false}
                                onChange={handleStatusChange} />}
                            label="Status:"
                            labelPlacement="status"
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <InputLabel className={classes.formLabel}>Client Admin Details</InputLabel>
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            type="text"
                            variant="outlined"
                            value={formValues && formValues.admin && formValues.admin.firstName}
                            onChange={handleInputChange}
                            style={styleObj}
                            required
                            InputLabelProps={{
                                classes: {
                                    asterisk: classes.asterisk
                                }
                            }}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="middleName"
                            name="middleName"
                            label="Middle Name"
                            type="text"
                            variant="outlined"
                            value={formValues && formValues.admin && formValues.admin.middleName}
                            onChange={handleInputChange}
                            style={styleObj}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            type="text"
                            variant="outlined"
                            value={formValues && formValues.admin && formValues.admin.lastName}
                            onChange={handleInputChange}
                            style={styleObj}
                            required
                            InputLabelProps={{
                                classes: {
                                    asterisk: classes.asterisk
                                }
                            }}
                            error={errorState && errorState.clientName && errorState.clientName.error}
                            helperText={errorState && errorState.clientName && errorState.clientName.errorMsg}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <TextField
                            id="mobileNumber"
                            name="mobile"
                            label="Mobile Number"
                            type="text"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><PhoneIcon fontSize="small" /></InputAdornment>,
                            }}
                            variant="outlined"
                            value={formValues && formValues.admin && formValues.admin.mobile}
                            onChange={handleInputChange}
                            style={styleObj}
                            required
                            InputLabelProps={{
                                classes: {
                                    asterisk: classes.asterisk
                                }
                            }}

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            type="text"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><EmailIcon fontSize="small" /></InputAdornment>,
                            }}
                            variant="outlined"
                            value={formValues && formValues.admin && formValues.admin.email}
                            onChange={handleInputChange}
                            style={styleObj}
                            required
                            InputLabelProps={{
                                classes: {
                                    asterisk: classes.asterisk
                                }
                            }}

                        />
                    </Grid>
                </Grid>

                {/* <ButtonGroup size="small" spacing="2" aria-label="small outlined button group">
                    <Button>One</Button>
                    <Button>Two</Button>

                </ButtonGroup>
                <Grid container direction="row" spacing="2" size="small" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical outlined primary button group"
                        >
                            <Button>One</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical contained primary button group"
                            variant="contained"
                        >
                            <Button>One</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item justifyContent="space-between">
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical contained primary button group"
                            variant="contained"

                        >
                            <Button>One</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid> */}

                <ClientFooter backArrowDisabled={backArrowDisabled}
                    nextArrowDisabled={nextArrowDisabled}
                    cancelBtnDisabled={cancelBtnDisabled}
                    saveAndContinueBtnDisabled={saveAndContinueBtnDisabled}
                    handleNextArrow={handleNextArrow}
                    handleBackArrow={handleBackArrow}
                    handleSaveAndContinue={handleSaveAndContinue}
                    handleCanceBtn={handleCanceBtn}
                />
            </form>
        </div>
    );
}

ClientDetails.propTypes = {
    formValues: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func
}

ClientDetails.defaultProps = {

};

export default ClientDetails;