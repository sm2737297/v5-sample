import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl, InputLabel, Stepper, Step, StepLabel,
    Input, FormHelperText, TextField, Card, CardHeader, CardContent
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import logo from './../../logo.svg';
import backNavigationIcon from './../../assets/img/back-navigation.svg';
import '../../assets/css/client-dashboard.css';
import ClientDetails1 from './ClientDetails';
import ClientDetails from '../AddClient/ClientDetails';
import ClientStepper from '../AddClient/ClientStepper';
import Button from "@material-ui/core/Button";
import axios from "axios";
import AccessPrivilege from '../AddClient/AccessPrivilege';
import Modules from '../AddClient/Modules';
import StatesCitiesMaster from '../AddClient/states-cities.json';
import SampleCheckboxLabels from '../AddClient/sampleCheckbox';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function getSteps() {
    return ['Client Details', 'Modules', 'Access privilege'];
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    backNavigationLabel: {
        font: 'var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-roboto)',
        letterSpacing: 'var(--unnamed-character-spacing-0-18)',
        color: 'var(--light-🌕-on-surface-high-emphasis-000000-87-)',
        textAlign: 'left',
        font: 'normal normal normal 24px/24px Roboto',
        letterSpacing: '0.18px',
        color: '#000000DE',
        textTransform: 'capitalize',
        opacity: 1,

    },
    formLabel: {
        top: '182px',
        left: '120px',
        font: 'var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-roboto)',
        letterSpacing: 'var(--unnamed-character-spacing-0-14)',
        color: 'var(--light-🌕-on-surface-high-emphasis-000000-87-)',
        textAlign: 'left',
        font: 'normal normal medium 16px/24px Roboto',
        letterSpacing: '0.14px',
        color: '#000000DE',
        opacity: 1
    },
    asterisk: {
        color: "red"
    },
    moduleBoxStyleUncheck: {
        top: '227px',
        left: '112px',
        width: '321px',
        height: '42px',
        background: 'var(--light-🌕-on-primary-high-emphasis-ffffff) 0% 0% no-repeat padding-box',
        border: '1px solid var(--light-🌕-outline-on-surface-000000-12-)',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #0000001F',
        borderRadius: '56px',
        opacity: 1
    },
    moduleBoxStyleCheck: {
        top: '227px',
        left: '112px',
        width: '321px',
        height: '42px',
        background: "var(--light-🌕-on - primary - high - emphasis - ffffff) 0 % 0 % no - repeat padding - box",
        border: "1px solid var(--primary - 500 -🌕)",
        background: "#FFFFFF 0 % 0 % no - repeat padding - box",
        border: "1px solid #2A4FBC",
        borderRadius: "56px",
        opacity: 1
    },
    moduleLabelCheckStyle: {
        //top: '238px',
        //left: '517px',
        //width: '117px',
        //height: '19px',
        font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-20) var(--unnamed-font-family-roboto)",
        letterSpacing: "var(--unnamed-character-spacing-0-25)",
        color: 'var(--primary-500-🌕)',
        textAlign: 'left',
        font: 'normal normal normal 14px/20px Roboto',
        letterSpacing: '0.25px',
        color: '#2A4FBC',
        textTransform: 'capitalize',
        opacity: 1
    },
    moduleLabelUncheckStyle: {
        // top: '238px',
        // left: '148px',
        // width: '118px',
        // height: '19px',
        font: 'var(--unnamed- font - style - normal) normal var(--unnamed - font - weight - normal) var(--unnamed - font - size - 14) /var(--unnamed - line - spacing - 20) var(--unnamed - font - family - roboto)',
        letterSpacing: 'var(--unnamed - character - spacing - 0 - 25)',
        color: 'var(--light -🌕-on - surface - high - emphasis - 000000 - 87 -)',
        textAlign: 'left',
        font: 'normal normal normal 14px / 20px Roboto',
        letterSpacing: '0.25px',
        color: '#000000DE',
        textTransform: 'capitalize',
        opacity: 1
    },
    styleCheckLableStyle: {
        top: '238px',
        left: '148px',
        //width: '118px',
        //height: '20px',
        //background: "var(--light-🌕-on-primary-high-emphasis-ffffff) 0% 0% no-repeat padding-box",
        //background: '#FFFFFF 0% 0% no-repeat padding-box',
        //opacity: 1
    },
    styleCheckIconStyle: {
        top: '238px',
        left: '120px',
        width: '20px',
        height: '20px',
        marginLeft: '8px',
        //background: "transparent url('img/Check.png') 0% 0% no-repeat padding-box",
        opacity: 1
    },
    styleCheckedIconStyle: {
        top: '238px',
        left: '120px',
        width: '20px',
        height: '20px',
        marginLeft: '8px',
        background: "var(--light-🌕-on-primary-high-emphasis-ffffff) 0% 0% no-repeat padding-box",
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        opacity: 1
    },
    accessPrivilegeLabel: {
        top: '229px',
        left: '156px',
        width: '166px',
        height: '26px',
        font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-roboto)",
        letterSpacing: "var(--unnamed-character-spacing-0-15)",
        color: "var(--light-🌕-on-surface-high-emphasis-000000-87-)",
        textAlign: 'left',
        font: 'normal normal medium 20px/24px Roboto',
        letterSpacing: '0.15px',
        color: '#000000DE',
        textTransform: 'capitalize',
        opacity: 1
    },
    accessPrivilegeCheckedIconStyle: {
        top: '238px',
        left: '120px',
        width: '20px',
        height: '20px',
        marginLeft: '8px',
        background: "var(--light-🌕-on - primary - high - emphasis - ffffff) 0 % 0 % no - repeat padding - box",
        background: "#FFFFFF 0 % 0 % no - repeat padding - box",
        opacity: 1
    },
    accessPrivilegeUnCheckIconStyle: {
        top: '238px',
        left: '120px',
        width: '20px',
        height: '20px',
        marginLeft: '8px',
        border: "1px solid var(--dark-🌑-on-primary-disabled-000000-38-)",
        //border: "1px solid #00000061",
        opacity: 1
    },
    accessPrivilegeBoxStyleUncheck: {
        top: '221px',
        left: '438px',
        width: '143px',
        height: '42px',
        background: "var(--light-🌕-on-primary-high-emphasis-ffffff) 0% 0% no-repeat padding-box",
        border: "1px solid var(--light-🌕-outline-on-surface-000000-12-)",
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #0000001F',
        borderRadius: '56px',
        opacity: 1
    },
    accessPrivilegeBoxStyleCheck: {
        top: '221px',
        left: '629px',
        width: '244px',
        height: '42px',
        background: "var(--light-🌕-on-primary-high-emphasis-ffffff) 0% 0% no-repeat padding-box",
        border: "1px solid var(--primary-500-🌕)",
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #2A4FBC',
        borderRadius: '56px',
        opacity: 1
    }
}));

const defaultValues = {
    // // client_name: "Big Bazaar",
    // // head_office_name: "BBZ",
    // // address: "Pune",
    // // country: "India",
    // // state: "MH",
    // // city: "Pune",
    // // area: "S.Ngr",
    // // pin: 44441,
    // // first_name: "Json",
    // // middle_name: "M",
    // // last_name: "T",
    // // mobile: 99999,
    // // email: "test@t.com"

    // client_name: "",
    // head_office_name: "",
    // address: "",
    // country: "",
    // state: "",
    // city: "",
    // area: "",
    // pin: '',
    // first_name: "",
    // middle_name: "",
    // last_name: "",
    // mobile: '',
    // email: ""

    // clientName: "Eureka Forbes",
    // headOfficeName: "Eureka Forbes Ltd",
    // address: "plot no 7 near jublie enclave",
    // state: "Telangana",
    // city: "Hyderabad",
    // area: "",
    // country: "India",
    // pincode: 500693,
    // status: 'ACTIVE',
    // admin: {
    //     firstName: "Sukesh",
    //     middleName: "",
    //     lastName: "Dush",
    //     mobile: "+91 9009009009",
    //     email: "contact@eurekaforbes.in"
    // }

    clientName: "",
    headOfficeName: "",
    address: "",
    state: "",
    city: "",
    area: "",
    country: "India",
    pincode: '',
    status: 'ACTIVE',
    admin: {
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        email: ""
    }
}
const dummyModules = [
    {
        id: 1,
        name: 'User Management',
        status: 'ACTIVE',
        checked: false
    },
    {
        id: 2,
        name: 'Role Management',
        status: 'ACTIVE',
        checked: false
    },
    {
        id: 3,
        name: 'Task Management',
        status: 'ACTIVE',
        checked: false
    },
    {
        id: 4,
        name: 'Store Management',
        status: 'ACTIVE',
        checked: false
    },
    {
        id: 5,
        name: 'Attendance Management',
        status: 'ACTIVE',
        checked: false
    },
    {
        id: 6,
        name: 'Tranining & Quiz',
        status: 'ACTIVE',
        checked: false
    }
]

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [activeStep, setActiveStep] = React.useState(0);
    const [backArrowDisabled, setBackArrowDisabled] = React.useState(true);
    const [nextArrowDisabled, setNextArrowDisabled] = React.useState(false);
    const [cancelBtnDisabled, setCancelBtnDisabled] = React.useState(true);
    const [saveAndContinueBtnDisabled, setSaveAndContinueBtnDisable] = React.useState(true);
    const [cities, setCities] = React.useState([]);

    const steps = getSteps();

    const handleNextArrow = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // alert(activeStep);
        // if (activeStep == 0) {
        //     setBackArrowDisabled(true);
        //     setNextArrowDisabled(false);
        // } else {
        //     setBackArrowDisabled(false);
        //     //setNextArrowDisabled(true);
        // }
    };

    // This is for counter state variable
    React.useEffect(() => {
        if (activeStep == 0) {
            setBackArrowDisabled(true);
            setNextArrowDisabled(false);
        } else if (activeStep == 3) {
            setNextArrowDisabled(true);
        }
        else {
            setBackArrowDisabled(false);
            //setNextArrowDisabled(true);
        }
    }, [activeStep]);

    const handleBackArrow = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        // if (activeStep == 0) {
        //     setBackArrowDisabled(true);
        //     setNextArrowDisabled(false);
        // } else {
        //     //setBackArrowDisabled(false);
        //     //setNextArrowDisabled(true);
        // }
    };

    const handleSaveAndContinue = () => {
        //setActiveStep((prevActiveStep) => prevActiveStep + 1);
        //..axios
        //alert(JSON.stringify(formValues));
        alert(JSON.stringify(selectedModules));
    };

    const handleCanceBtn = (state) => {
        if (state == 1) {
            alert(1);
        } else {
            alert(2);
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    function validateFieldValues(fieldName, fieldValue) {
        let isValid = false;
        const regexOnlyAlphabetsWithSpaces = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
        const onlyNumbersRegex = /^[0-9\b]+$/;
        const alphanumericWithSC = /^[A-Za-z0-9\s-,#]+$/;
        switch (fieldName) {
            case 'clientName':
            case 'headOfficeName':
                //..Allow Alphabets only along with spaces
                if (fieldValue && fieldValue.trim().match(regexOnlyAlphabetsWithSpaces)) {
                    isValid = true;
                }
                break;
            case 'address':
                //..Alphanumeric with special characters such as hyphen, comma, space, #
                if (fieldValue && fieldValue.trim().match(alphanumericWithSC)) {
                    isValid = true;
                }
                break;
            case 'area':
                //..Allow Alphabets only
                if (fieldValue && fieldValue.trim().match(regexOnlyAlphabetsWithSpaces)) {
                    isValid = true;
                }
                break;
            case 'pincode':
                //..Allow Numeric only
                if (fieldValue && fieldValue.trim().match(onlyNumbersRegex)) {
                    isValid = true;
                }
                break;
            default:
                isValid = true;
                break;
        }
        return isValid;
    }

    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (!validateFieldValues(name, value)) return;
        //alert(validateFieldValues(name, value));
        if (name == "firstName" ||
            name == "middleName" ||
            name == "lastName" ||
            name == "mobile" ||
            name == "email") {
            let clientAdminDetails = formValues.admin;
            clientAdminDetails[name] = value;
            setFormValues(prevState => ({
                ...prevState,
                admin: clientAdminDetails
            }));
        } else {
            // setFormValues({
            //     ...formValues,
            //     [name]: value,
            // });
            setFormValues(prevState => ({
                ...prevState,
                [name]: value,
            }));

            if (name == "state") {
                let statesData = StatesCitiesMaster;
                let citiesData = [];
                citiesData = statesData.filter(x => x.state == value);
                setCities(citiesData);
            }
        }
    };

    React.useEffect(() => {
        //console.log(formValues);
        if (formValues.clientName
            && formValues.headOfficeName
            && formValues.admin.firstName
            && formValues.admin.lastName
            && formValues.admin.mobile
            && formValues.admin.email) {
            setSaveAndContinueBtnDisable(false);
            setCancelBtnDisabled(false);
        } else {
            setSaveAndContinueBtnDisable(true);
            setCancelBtnDisabled(true);
        }
    }, [formValues.clientName,
    formValues.headOfficeName,
    formValues.admin.firstName,
    formValues.admin.lastName,
    formValues.admin.mobile,
    formValues.admin.email]);


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    };

    const [statusState, setStatus] = React.useState(true);
    const handleStatusChange = (e) => {
        const { name, checked } = e.target;
        const status = checked ? 'ACTIVE' : 'INACTIVE';
        setFormValues({
            ...formValues,
            [name]: status,
        });
        //setStatus(event.target.checked);
    };

    const [selectedModules, setSelectedModules] = useState([]);
    const handleSelectedModules = (e) => {
        const { name, value, checked } = e.target;
        let sm = selectedModules;
        let smIndex = sm.findIndex(x => x.id == name);
        if (smIndex != -1) {
            if (!checked) {
                sm.splice(smIndex, 1);
            }
        } else {
            if (checked) {
                sm.push({
                    id: name
                });
            }
        }
        setSelectedModules(sm);
    };

    const [modules, setModules] = useState(dummyModules);
    const handleModules = (e) => {
        const newModules = [...modules];
        let smIndex = newModules.findIndex(x => x.id == e.target.name);
        newModules[smIndex].checked = e.target.checked;
        setModules(newModules);
    };

    // const [state, setState] = React.useState({
    //     checkedA: true,
    //     checkedB: true,
    //     checkedF: true,
    //     checkedG: true,
    // });

    const [state, setState] = React.useState([
        {
            id: 1,
            name: 'User Management',
            status: 'ACTIVE',
            checked: false
        }
    ]);

    const handleChange = (event) => {
        //setState({ ...state, [event.target.name]: event.target.checked });
        // let sm = state;
        // let smIndex = sm.findIndex(x => x.id == event.target.name);
        // if (smIndex != -1) {
        //     if (event.target.checked) {
        //         sm[smIndex].checked = true;
        //     }
        // }
        // setState(sm);

        const newState = [...state];
        let smIndex = newState.findIndex(x => x.id == event.target.name);
        newState[smIndex].checked = event.target.checked;
        setState(newState);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {/* <Card>
                        <CardHeader><p>Client Details</p></CardHeader>
                        <CardContent>
                            <TextField
                                id="clientName"
                                name="client_name"
                                label="Client Name"
                                type="text"
                                variant="outlined"
                            //value={formValues.name}
                            //onChange={handleInputChange}
                            />
                        </CardContent>
                        <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
                    </Card> */}

                    <Grid container spacing={3}>
                        <Box component="div" display="inline"> <img src={backNavigationIcon} className="back-navigation" alt="backNavigationIcon" /></Box>
                        <Box component="div" display="inline"><InputLabel className={classes.backNavigationLabel}>Add Client</InputLabel></Box>
                        <Grid item xs={12}>
                            {/* <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper> */}

                            <ClientStepper steps={steps}
                                activeStep={activeStep} alternativeLabel={true} />
                        </Grid>
                        <Grid item xs={12}>
                            {/* <InputLabel className={classes.formLabel}>Basic details</InputLabel> */}
                            {/* <ClientDetails1/> */}
                            {/* <SampleCheckboxLabels
                                classes={classes}
                                boxClass={state[0] && state[0].checked ? classes.moduleBoxStyleCheck : classes.moduleBoxStyleUncheck}
                                checkedIconClass={classes.styleCheckedIconStyle}
                                unCheckedIconClass={classes.styleCheckIconStyle}
                                formControlLabelClass={state[0] && state[0].checked ? classes.moduleLabelCheckStyle : classes.moduleLabelUncheckStyle}
                                key={1}
                                name={1}
                                label={"User Management"}
                                state={state[0]}
                                handleChange={handleChange} /> */}
                            {
                                activeStep == 0 &&
                                <ClientDetails
                                    formValues={formValues}
                                    StatesCitiesMaster={StatesCitiesMaster}
                                    cities={cities}
                                    handleInputChange={handleInputChange}
                                    handleSubmit={handleSubmit}
                                    statusState={statusState}
                                    handleStatusChange={handleStatusChange}
                                    classes={classes}
                                    backArrowDisabled={backArrowDisabled}
                                    nextArrowDisabled={nextArrowDisabled}
                                    cancelBtnDisabled={cancelBtnDisabled}
                                    saveAndContinueBtnDisabled={saveAndContinueBtnDisabled}
                                    handleNextArrow={handleNextArrow}
                                    handleBackArrow={handleBackArrow}
                                    handleSaveAndContinue={handleSaveAndContinue}
                                    handleCanceBtn={handleCanceBtn}
                                    styleObj={{
                                        //top: '228px',
                                        //left: '116px',
                                        width: '328px',
                                        //height: '56px'
                                    }}
                                />
                            }
                            {
                                activeStep == 1 &&
                                <Modules
                                    modules={modules}
                                    columns={3}
                                    classes={classes}
                                    backArrowDisabled={backArrowDisabled}
                                    nextArrowDisabled={nextArrowDisabled}
                                    cancelBtnDisabled={cancelBtnDisabled}
                                    saveAndContinueBtnDisabled={saveAndContinueBtnDisabled}
                                    handleNextArrow={handleNextArrow}
                                    handleBackArrow={handleBackArrow}
                                    handleSaveAndContinue={handleSaveAndContinue}
                                    handleCanceBtn={handleCanceBtn}
                                    handleSelectedModules={handleSelectedModules}
                                    selectedModules={selectedModules}
                                    handleModules={handleModules}
                                />
                            }
                            {
                                activeStep == 2 &&
                                <AccessPrivilege
                                    classes={classes}
                                    backArrowDisabled={backArrowDisabled}
                                    nextArrowDisabled={nextArrowDisabled}
                                    cancelBtnDisabled={cancelBtnDisabled}
                                    saveAndContinueBtnDisabled={saveAndContinueBtnDisabled}
                                    handleNextArrow={handleNextArrow}
                                    handleBackArrow={handleBackArrow}
                                    handleSaveAndContinue={handleSaveAndContinue}
                                    handleCanceBtn={handleCanceBtn}
                                    selectedModules={selectedModules}
                                    modules={dummyModules}
                                />
                            }


                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}