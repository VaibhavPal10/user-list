import PropTypes from 'prop-types'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../style/Ul.css';

const Ulist = ({jobTitle, avatar, bio, profile, createdAt}) => {
  
  return (

    <div>
    {/* let {jobTitle} = this.props; */}
    
      <Grid container spacing={2} sx={{ marginTop: 4 }}>  
        {/* Cards taking up 70% of the screen width */}
        <Grid item xs={12} >
          <Card sx={{ maxWidth: 1050 }}>
            <CardMedia className='circular-avatar'
              image={avatar}
              title={profile.username}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {jobTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {bio}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Profile: {profile.username}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid> */}

        {/* Additional content taking up 30% of the screen width */}
        {/* <Grid item xs={12} md={3.6}>
          
          </Grid>*/}
      </Grid> 
  
    </div>
  )
}

Ulist.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  createdAt: PropTypes.string.isRequired
}

export default Ulist