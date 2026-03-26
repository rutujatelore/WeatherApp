import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function InfoBox({info}){
    const IMG_URL="https://media.istockphoto.com/id/2193916242/photo/misty-foggy-colorful-sunset-over-central-south-mumbai-where-tall-high-rises-and-towers-are.jpg?s=2048x2048&w=is&k=20&c=sAR71XNeoMvP6pII3FgD99ERN35BCmn6tBRJWr4Rx7U=";
    const RAINY_IMG= "https://media.istockphoto.com/id/1419733957/photo/dark-sky-and-heavy-rain-thunder-storm-over-a-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=82JEGYWgYZK2fgMnktg9UEhhzF8FYF4Eu0FXaIF2wIw=";
    const HOT_IMG="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const WINTER_IMG= "https://images.unsplash.com/photo-1768133896376-9979c3c402dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_IMG : info.temp > 15 ? HOT_IMG : WINTER_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature= {info.temp}&deg;C</p>
          <p>Humidity= {info.humidity}</p>
          <p>Min temperature= {info.tempMin}&deg;C</p>
          <p>Max temperature= {info.tempMax}&deg;C</p>
          <p>The weather can be describe as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )

}

export default InfoBox;