import {
    Grid, InputLabel, Checkbox, FormControlLabel, Box, Paper
} from '@material-ui/core';
import PropTypes from "prop-types";
import ClientFooter from './ClientFooter';
import Modules from './Modules';
import StyledCheckbox from './StyledCheckbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function AccessPrivilege(props) {
    const {
        backArrowDisabled,
        nextArrowDisabled,
        cancelBtnDisabled,
        saveAndContinueBtnDisabled,
        handleNextArrow,
        handleBackArrow,
        handleSaveAndContinue,
        selectedModules,
        modules,
        classes
    } = props;

    const sm = modules.filter(m => {
        let smIndex = selectedModules.findIndex(x => x.id == m.id);
        if (smIndex != -1) {
            return m;
        }
    });
    //alert(JSON.stringify(sm));
    // const arr = sm.reduce((acc, item) => {
    //     let group = acc.pop();
    //     if (group.length == 3) {
    //         acc.push(group);
    //         group = [];
    //     }
    //     group.push(item);
    //     acc.push(group);
    //     return acc;
    // }, [[]]);

    return (
        <div>
            <form>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <InputLabel className={classes.formLabel}>Select Modules</InputLabel>
                    </Grid>
                </Grid>
                {
                    // <>
                    //     <Paper className={classes.paper} style={{marginBottom: '20px'}}>
                    //         <Grid container direction="row" spacing="3">
                    //             <Box component="span" m={2}>
                    //                 {'User Management'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'view'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'Edit Theme Configuration'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'Edit Workflow Configuration'}
                    //             </Box>
                    //         </Grid>
                    //     </Paper>
                    //     <Paper className={classes.paper} style={{marginBottom: '20px'}}>
                    //         <Grid container direction="row" spacing="3">
                    //             <Box component="span" m={2}>
                    //                 {'some'}
                    //             </Box>
                    //             <Box component="span" m={2}>
                    //                 {'view'}
                    //             </Box>
                    //         </Grid>
                    //     </Paper>
                    // </>
                    sm && sm.map((m, i) => (
                        <Paper className={classes.paper} style={{ marginBottom: '20px' }}>
                            <Grid container direction="row" spacing="3">
                                <Box component="span" m={2}>
                                    <InputLabel className={classes.accessPrivilegeLabel}>{m.name}</InputLabel>

                                </Box>
                                <Box component="span" m={2} className={classes.accessPrivilegeBoxStyleCheck}>
                                    {/* <StyledCheckbox
                                        key={m.id}
                                        name={m.id}
                                        label={'View'}
                                        //checkState={module.checked ? true : false}
                                        checkState={true}
                                        classes={classes}
                                    //handleSelectedModules={handleSelectedModules}
                                    //handleModules={handleModules} 
                                    /> */}

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                //name={name}
                                                disableRipple
                                                color="primary"
                                                checkedIcon={<CheckCircleIcon
                                                    className={classes.accessPrivilegeCheckedIconStyle}
                                                />}
                                                icon={<RadioButtonUncheckedIcon
                                                    className={classes.accessPrivilegeUnCheckIconStyle}
                                                />}
                                                inputProps={{ 'aria-label': 'decorative checkbox' }}
                                            //onChange={handleSelectedModules}
                                            //defaultChecked={checkState}
                                            />
                                        }
                                        label={'View'}
                                    //key={key}
                                    />
                                </Box>
                                <Box component="span" m={2} className={classes.accessPrivilegeBoxStyleCheck}>
                                    {/* <StyledCheckbox
                                        key={m.id}
                                        name={m.id}
                                        label={'Edit Theme Configuration'}
                                        //checkState={module.checked ? true : false}
                                        checkState={true}
                                        classes={classes}
                                    //handleSelectedModules={handleSelectedModules}
                                    //handleModules={handleModules} 
                                    /> */}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                //name={name}
                                                disableRipple
                                                color="primary"
                                                checkedIcon={<CheckCircleIcon
                                                    className={classes.accessPrivilegeCheckedIconStyle}
                                                />}
                                                icon={<RadioButtonUncheckedIcon
                                                    className={classes.accessPrivilegeUnCheckIconStyle}
                                                />}
                                                inputProps={{ 'aria-label': 'decorative checkbox' }}
                                            //onChange={handleSelectedModules}
                                            //defaultChecked={checkState}
                                            />
                                        }
                                        label={'Edit Theme Configuration'}
                                    //key={key}
                                    />
                                </Box>
                                <Box component="span" m={2} className={classes.accessPrivilegeBoxStyleCheck}>
                                    {/* <StyledCheckbox
                                        key={m.id}
                                        name={m.id}
                                        label={'Edit Workflow Configuration'}
                                        //checkState={module.checked ? true : false}
                                        checkState={true}
                                        classes={classes}
                                    //handleSelectedModules={handleSelectedModules}
                                    //handleModules={handleModules} 
                                    /> */}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                //name={name}
                                                disableRipple
                                                color="primary"
                                                checkedIcon={<CheckCircleIcon
                                                    className={classes.accessPrivilegeCheckedIconStyle}
                                                />}
                                                icon={<RadioButtonUncheckedIcon
                                                    className={classes.accessPrivilegeUnCheckIconStyle}
                                                />}
                                                inputProps={{ 'aria-label': 'decorative checkbox' }}
                                            //onChange={handleSelectedModules}
                                            //defaultChecked={checkState}
                                            />
                                        }
                                        label={'Edit Workflow Configuration'}
                                    //key={key}
                                    />
                                </Box>
                            </Grid>
                        </Paper>
                    ))
                }
                <ClientFooter backArrowDisabled={backArrowDisabled}
                    nextArrowDisabled={nextArrowDisabled}
                    cancelBtnDisabled={cancelBtnDisabled}
                    saveAndContinueBtnDisabled={saveAndContinueBtnDisabled}
                    handleNextArrow={handleNextArrow}
                    handleBackArrow={handleBackArrow}
                    handleSaveAndContinue={handleSaveAndContinue}
                />
            </form>
        </div>
    );
}

AccessPrivilege.propTypes = {

}

AccessPrivilege.defaultProps = {

};

export default AccessPrivilege;