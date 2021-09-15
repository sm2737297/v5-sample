import {
    Grid, TextField, Button, FormControlLabel, Switch, InputLabel, IconButton,
    ButtonGroup, Box
} from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PropTypes from "prop-types";

function ClientFooter(props) {
    const {
        isAccessPrivilege,
        backArrowDisabled,
        nextArrowDisabled,
        cancelBtnDisabled,
        saveAndContinueBtnDisabled,
        setSubmitBtnDisable,
        handleNextArrow,
        handleBackArrow,
        handleSaveAndContinue,
        handleCanceBtn,
        handleSubmit
    } = props;
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item>
                <Button
                    variant="outlined"
                    disabled={backArrowDisabled}
                    size="xs"
                    onClick={handleBackArrow}
                    style={{ maxWidth: '24px', maxHeight: '24px', minWidth: '24px', minHeight: '24px' }}
                >
                    <ArrowLeftIcon color={!backArrowDisabled ? "primary" : ""} />
                </Button>
                <Box component="span" m={1} >
                    <Button
                        variant="outlined"
                        disabled={nextArrowDisabled}
                        size="small"
                        onClick={handleNextArrow}
                        style={{ maxWidth: '24px', maxHeight: '24px', minWidth: '24px', minHeight: '24px' }}
                    >
                        <ArrowRightIcon color={!nextArrowDisabled ? "primary" : ""} />
                    </Button>
                </Box>
            </Grid>

            <Grid item justifyContent="space-between">
                {
                    cancelBtnDisabled ?
                        <Button
                            variant="outlined"
                            style={{ maxWidth: '91px', maxHeight: '35px', minWidth: '91px', minHeight: '35px', color: '#00000061' }}
                            onClick={() => handleCanceBtn(1)}
                        >
                            CANCEL
                        </Button>
                        :
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ maxWidth: '91px', maxHeight: '35px', minWidth: '91px', minHeight: '35px' }}
                            onClick={() => handleCanceBtn(2)}
                        >
                            CANCEL
                        </Button>
                }

                <Box component="span" m={1}>
                    {
                        saveAndContinueBtnDisabled ?
                            <Button
                                //style={{ maxWidth: '91px', maxHeight: '35px', minWidth: '91px', minHeight: '35px' }}
                                disabled>
                                {isAccessPrivilege ? 'SUBMIT' : 'SAVE & CONTINUE'}
                            </Button>
                            :
                            <Button
                                variant="contained"
                                color="primary"
                                //style={{ maxWidth: '91px', maxHeight: '35px', minWidth: '91px', minHeight: '35px' }}
                                onClick={isAccessPrivilege ? handleSubmit : handleSaveAndContinue}
                            >
                                {isAccessPrivilege ? 'SUBMIT' : 'SAVE & CONTINUE'}
                            </Button>
                    }
                </Box>
            </Grid>
        </Grid>
        // <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        //     <div style={{ display: "flex", alignItems: "center" }}>
        //         <Button
        //             variant="outlined"
        //             disabled={backArrowDisabled}
        //             size="xs"
        //             onClick={handleBackArrow}
        //             style={{ maxWidth: '24px', maxHeight: '24px', minWidth: '24px', minHeight: '24px' }}
        //         >
        //             <ArrowLeftIcon color={!backArrowDisabled ? "primary" : ""} />
        //         </Button>
        //         {/* <Button variant="outlined">
        //             <ArrowLeftIcon color="primary"/>
        //         </Button> */}
        //         {/* <Button variant="outlined" disabled>
        //             <ArrowRightIcon />
        //         </Button> */}
        //         <Box component="span" m={1}>
        //             <Button
        //                 variant="outlined"
        //                 disabled={nextArrowDisabled}
        //                 size="small"
        //                 onClick={handleNextArrow}
        //                 style={{ maxWidth: '24px', maxHeight: '24px', minWidth: '24px', minHeight: '24px' }}
        //             >
        //                 <ArrowRightIcon color={!nextArrowDisabled ? "primary" : ""} />
        //             </Button>
        //         </Box>
        //     </div>
        //     <div style={{ display: "flex", alignItems: "center" }}>
        //         <Grid item >
        //             <Button variant="outlined" disabled={cancelBtnDisabled}
        //                 style={{ maxWidth: '91px', maxHeight: '35px', minWidth: '91px', minHeight: '35px' }}>
        //                 CANCEL
        //             </Button>
        //             {/* <Button variant="contained" color="primary" type="submit">
        //                     CANCEL
        //                 </Button> */}
        //         </Grid>
        //         <Grid item>
        //             {
        //                 saveAndContinueBtnDisabled ?
        //                     <Button
        //                         //style={{ maxWidth: '91px', maxHeight: '35px', minWidth: '91px', minHeight: '35px' }}
        //                         disabled>
        //                         SAVE AND CONTINUE
        //                     </Button>
        //                     :
        //                     <Button
        //                         variant="contained"
        //                         color="primary"
        //                         //style={{ maxWidth: '91px', maxHeight: '35px', minWidth: '91px', minHeight: '35px' }}
        //                         onClick={handleSaveAndContinue}>
        //                         SAVE AND CONTINUE
        //                     </Button>

        //             }
        //         </Grid>
        //     </div>
        // </div>
    );
}

ClientFooter.propTypes = {
    backArrowDisabled: PropTypes.bool,
    nextArrowDisabled: PropTypes.bool,
    cancelBtnDisabled: PropTypes.bool,
    saveAndContinueBtnDisabled: PropTypes.bool,
    handleNextArrow: PropTypes.func,
    handleBackArrow: PropTypes.func
}

ClientFooter.defaultProps = {

};

export default ClientFooter;