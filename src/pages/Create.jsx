import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles({
   field: {
       marginTop: 20,
       marginBottom: 20,
       display: 'block',
   }
})

const Create = () => {

    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if(title === '') setTitleError(true);

        if(details === '') setDetailsError(true);

        if(title && details) {
            console.log(title, details)
        }


    }

    return (
        <Container>
            <Typography 
                variant="h6"
                color= "textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
                    onChange={(ev)=> setTitle(ev.target.value)}
                    value={title}
                    className={classes.field}
                    label='Note Title'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    margin='normal'
                    error={titleError}
                />
                <TextField 
                    onChange={(ev)=> setDetails(ev.target.value)}
                    value={details}
                    className={classes.field}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={detailsError}
                />
            

                <Button 
                    type='submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<KeyboardArrowRightIcon />}
                    margin='normal'
                    >
                    Submit
                </Button>

            </form>



            {/* Icons */}
            <br />
           
           
           
        </Container>
    )
}

export default Create

