import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Grid, Link, Toolbar, Typography } from '@mui/material';
import { applications, bookmarks } from './data';
import Clock from 'react-live-clock';

const theme = createTheme();

function getDate() {
  const weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ]
  const currentDate = new Date();

  const weekday = weekdays[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  return `${weekday}, ${date} ${month} ${year}`.toUpperCase();
}

function getMessage() {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  if (hour < 5)
    return 'Good night!';
  if (hour < 12)
    return 'Good morning!';
  if (hour < 18)
    return 'Good afternoon!';
  return 'Good evening!';
}

function UndecoratedLink(props) {
  const { href } = props;
  const children = props.children;

  return (
    <Link href={ href } sx={{ color: 'inherit', textDecoration: 'inherit' }}>
      { children }
    </Link>
  )
}

function Item(props) {
  const { appName, domain, url } = props;
  const icon = props.children;

  return (
    <Grid item xs={6} md={3}>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <UndecoratedLink href={ url }>
            { icon }
          </UndecoratedLink>
        </Grid>
        <Grid item xs={9} >
          <UndecoratedLink href={ url }>
            <Typography sx={{ fontWeight: 'bold', }} >
              { appName }
            </Typography>
            <Typography sx={{ fontSize: '0.8em' }}>
              { domain }
            </Typography>
          </UndecoratedLink>
        </Grid>
      </Grid>
    </Grid>
  )
}

function BookmarkCollection(props) {
  const { title, collection } = props;
  return (
    <Grid item xs={4} md={3}>
      <Typography sx={{ fontWeight: 'bold', }}>
        { title }
      </Typography>
      {collection.map((site) => (
        <UndecoratedLink href={ site.url }>
          <Typography sx={{ fontSize: '0.8em' }} >
            { site.name }
          </Typography>
        </UndecoratedLink>
      ))}
    </Grid>
  )
}

function Category(props) {
  const { name } = props;

  return <Typography variant='h6' sx={{ fontWeight: 'bold', paddingTop: 4 }} >
    { name }
  </Typography>
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='lg' spacing='2'>
        <Toolbar sx={{
          borderBottom: 1,
          borderColor: 'black'
        }} />
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Typography variant='body2' sx={{ paddingTop: 3, }} >
              { getDate() }
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2' sx={{ paddingTop: 3, }} >
              <Clock format={'HH:mm'} ticking={true} />
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='h4' sx={{ fontWeight: 'bold', }} >
          { getMessage() }
        </Typography>

        <Category name='APPLICATIONS' />
        <Grid container spacing={2} sx={{ paddingTop: 2 }}>
          {applications.map((app) => (
            <Item appName={app.name} domain={app.domain} url={app.url}>
              <app.icon />
            </Item>
          ))}
        </Grid>

        <Category name='BOOKMARKS' />
        <Grid container spacing={2} sx={{ paddingTop: 2 }}>
          {bookmarks.map((bookmark) => (
            <BookmarkCollection title={ bookmark.title } collection={ bookmark.collection } />
          ))}
        </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default App;
