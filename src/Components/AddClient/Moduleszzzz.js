import {
    Grid, InputLabel, Checkbox, FormControlLabel, Box
} from '@material-ui/core';
import PropTypes from "prop-types";
import ClientFooter from './ClientFooter';
import StyledCheckbox from './StyledCheckbox';

function RenderAsColumns(props) {
    const {
        module,
        columns,
        classes
    } = props;
    const rowColumns = [];
    let columnIndex = 0;
    columns && [0, 1, 2].map(function (props) {
        console.log(props);
        rowColumns.push(
            // <Grid key={module.id} container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
            <Box component="span" m={2}
                className={classes.moduleBoxStyle}>
                <StyledCheckbox
                    label={module.name}
                    checked={module.status && module.status.toUpperCase() == 'ACTIVE' ? true : false} classes={classes} />
            </Box>
            // </Grid>
        );
        columnIndex = columnIndex + 1;
    })
    //console.log(columns);
    return (
        <>
            {rowColumns}
        </>
    );
}

function Modules(props) {
    const {
        modules,
        columns,
        backArrowDisabled,
        nextArrowDisabled,
        cancelBtnDisabled,
        saveAndContinueBtnDisabled,
        handleNextArrow,
        handleBackArrow,
        handleSaveAndContinue,
        classes,
        checked,
        handleChange
    } = props;
    return (
        <div>
            <form>
                <Grid container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                    <Grid item>
                        <InputLabel className={classes.formLabel}>Select Modules</InputLabel>
                    </Grid>
                </Grid>
                {
                    modules && modules.map((m, i) => (
                        <Grid key={module.id} container direction="row" spacing="3" style={{ paddingBottom: '20px' }}>
                            <RenderAsColumns module={m} columns={columns}
                                classes={classes} />
                        </Grid>
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

Modules.propTypes = {

}

Modules.defaultProps = {

};

export default Modules;