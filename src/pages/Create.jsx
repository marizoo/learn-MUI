import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles({
   field:{
       marginTop: 20,
       marginBottom: 20,
       display: 'block',
   }
});

const Create = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if(title === '') setTitleError(true);

        if(details === '') setDetailsError(true);

        if(title && details) {
            // console.log(title, details, category)
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify({title, details, category}),
            }).then(() => navigate('/'))
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

                <FormControl margin='normal' className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(ev) => setCategory(ev.target.value)}>
                        <FormControlLabel control={<Radio />} label='Money' value='money'/>
                        <FormControlLabel control={<Radio />} label='Todos' value='todos'/>
                        <FormControlLabel control={<Radio />} label='Reminders' value='reminders'/>
                        <FormControlLabel control={<Radio />} label='Work' value='work'/>
                    </RadioGroup>
                </FormControl>
                
            

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

