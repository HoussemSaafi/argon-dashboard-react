import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import Viewer from 'components/PdfViwer';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { red } from '@mui/material/colors';
import { Button } from 'reactstrap';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

export default function ScanPage() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        const [value, setValue] = useState(0);
      
        const handleTabChange = (event, newValue) => {
          setValue(newValue);
        };
      
  return (
<div>

<h1>nav </h1>
        <Grid container >
          
            <Grid  sx={{ height: '100vh', overflow: 'auto' }} item md={6} >
                <div className='mx-5' >
                    <h1>
                    Good afternoon, Emna.

                    </h1>
            
             <h2> Welcome to your resume review.</h2>   


             <Tabs
      size="sm"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={(theme) => ({
        '--Tabs-gap': '0px',
        borderRadius: 'lg',
        boxShadow: 'sm',
        overflow: 'auto',
        border: `1px solid ${theme.vars.palette.divider}`,
      })}
    >
      <TabList
        sx={{
          '--ListItem-radius': '0px',
          borderRadius: 0,
          [`& .${tabClasses.root}`]: {
            fontWeight: 'lg',
            flex: 1,
            bgcolor: 'background.body',
            position: 'relative',
            [`&.${tabClasses.selected}`]: {
              color: 'primary.500',
            },
            [`&.${tabClasses.selected}:before`]: {
              content: '""',
              display: 'block',
              position: 'absolute',
              bottom: -1,
              width: '100%',
              height: 2,
              bgcolor: 'primary.400',
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: '-3px',
            },
          },
        }}
      >
        <Tab sx={{ py: 1.5 }}>  LATEST SCORE</Tab>
        <Tab>PREVIOUS SCORE</Tab>
      </TabList>
      <TabPanel value={0} sx={{ p: 3 }}>
      <Typography fontSize="md" textColor="text.secondary" fontWeight="md" my={1}>
      Your resume scored 26 out of 100.
          </Typography>

        <Typography level="inherit">
        It seems like your resume scored poorly on key checks that hiring managers
         and resume screening software scan your resume for. But don't worry! With 
         a few simple changes to your resume, you can increase your score by 40+ points.
          We'll go through them in this report.

</Typography>
        <Typography fontSize="md" textColor="text.secondary" fontWeight="md" my={1}>

        Your highest score is 26, over your last 5 uploads.
                </Typography>
            <div>
<div className="slider-container">
  <div className="slider">
    <input type="range" min="0" max="100" value={value} className="slider-range" onChange={handleChange} />
    <div className="slider-fill" style={{ width: `${value}%` }} />
    <div className="slider-labels">
      <span className="min-label">0</span>
      <span className="max-label">100</span>
    </div>
    <i className="fas fa-caret-down arrow-pointer" />
  </div>
</div>

            </div>





<div>

</div>

      </TabPanel>
      <TabPanel value={1} sx={{ p: 3 }}>

      <Typography fontSize="md" textColor="text.secondary" fontWeight="md" my={1}>
          Your previous resume scored 26.
          </Typography>

        <Typography level="inherit">
        It looks like your score stayed the same, compared to the last resume you uploaded. 
        It's possible you uploaded the same resume, or the changes
         you made weren't substantial enough.
        </Typography>
        <Typography fontSize="md" textColor="text.secondary" fontWeight="md" my={1}>

        Your highest score is 26, over your last 5 uploads.
                </Typography>
      </TabPanel>

    </Tabs>


<div  className='my-5'>

    <Typography fontSize="md" textColor="text.secondary" fontWeight="md">
            Steps to increase your score
          </Typography>

          <Typography level="inherit">
          Your score is made up of five categories: Impact, Brevity, Style, 
          Sections and Soft Skills. Let's show you how to increase your score in each, 
          and thus your overall resume score so you get more interviews.

</Typography>
</div>


<Card  sx={{borderRadius: 4}}>
<List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
STEPS        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick} sx={{height:'80px'}}>

        <ListItemIcon>
          <Avatar sx={{ bgcolor: '#4e0cd1' }} aria-label="impact">
            <FontAwesomeIcon icon={faBolt} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Increase impact" />
        <Avatar sx={{ borderRadius: 1 , width:'80px' ,bgcolor:"#fbf0f0" ,color :'#ee7491'}}>24/100</Avatar>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <CardContent> 

      <Typography>
To stand out and show you're a strong applicant, you need to
 increase your resume's impact. Based on our analysis of your resume,
  we found these specific ways you can use to increase your impact score.


</Typography>

<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>


<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>


<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>
</CardContent>
      </Collapse>
      <Divider />


    

      <ListItemButton onClick={handleClick} sx={{height:'80px'}}>

        <ListItemIcon>
          <Avatar sx={{ bgcolor: '#4e0cd1' }} aria-label="impact">
            <FontAwesomeIcon icon={faBolt} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Increase impact" />
        <Avatar sx={{ borderRadius: 1 , width:'80px' ,bgcolor:"#fbf0f0" ,color :'#ee7491'}}>24/100</Avatar>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <CardContent> 

      <Typography>
To stand out and show you're a strong applicant, you need to
 increase your resume's impact. Based on our analysis of your resume,
  we found these specific ways you can use to increase your impact score.


</Typography>

<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>


<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>


<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>
</CardContent>
      </Collapse>
      <Divider />


      <ListItemButton onClick={handleClick} sx={{height:'80px'}}>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: '#4e0cd1' }} aria-label="impact">
            <FontAwesomeIcon icon={faBolt} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Increase impact" />
        <Avatar sx={{ borderRadius: 1 , width:'80px' ,bgcolor:"#fbf0f0" ,color :'#ee7491'}}>24/100</Avatar>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <CardContent> 

      <Typography>
To stand out and show you're a strong applicant, you need to
 increase your resume's impact. Based on our analysis of your resume,
  we found these specific ways you can use to increase your impact score.


</Typography>

<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>


<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>


<Card sx={{ display: 'flex', my: 3, borderLeft: '4px solid #4e0cd1' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
      Weak action verbs
            </Typography>
      <Typography color="text.secondary" component="div">
      This check is only for Pro users. Upgrade to unlock this check.

        </Typography>
    </CardContent>
  </Box>
  <CardActions sx={{ justifyContent: 'flex-end', ml: 'auto' }}>
    <Button variant="contained">Fix</Button>
  </CardActions>
</Card>
</CardContent>
      </Collapse>


      
    </List>


    </Card>
  


    <div  className='my-5'>

<Typography fontSize="md" textColor="text.secondary" fontWeight="md">
What you did well
      </Typography>

      <Typography level="inherit">
      We ran 20+ checks on your resume. Here's a rundown of three key areas you did well in - well done.

</Typography>
</div>

<Card sx={{borderRadius: 4}}>
  <CardContent>
    <List>
      <ListItem>
      <ListItemIcon>
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
        </ListItemIcon>
        <ListItemText primary=" Use of bullets: You correctly used bullet points." />

      </ListItem>
      <ListItem>
      <ListItemIcon>
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
        </ListItemIcon>
        <ListItemText primary=" Use of bullets: You correctly used bullet points." />

      </ListItem>
      <ListItem>
      <ListItemIcon>
      <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
        </ListItemIcon>
        <ListItemText primary=" Use of bullets: You correctly used bullet points." />

      </ListItem>
    </List>
  </CardContent>
</Card>
              </div>

            </Grid>
            <Grid sx={{ height: '100vh', overflow: 'auto' }} item md={6} >
  <Card sx={{ height: '100%' }}>
    <Viewer />
  </Card>



</Grid>



        </Grid>
      </div>


            )
}
