import React, {useState} from 'react';
import './App.css';
//import { API} from 'aws-amplify';
import { Link, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Grid, Box, ListItem, ListItemText } from '@material-ui/core';
import { FixedSizeList } from 'react-window';
import { Autocomplete, ImageList, ImageListItem, ImageListItemBar, ListItemButton, ListSubheader, TextField } from '@mui/material';
import { AppBar, Toolbar, IconButton, Typography, Button, Stack, CardActionArea } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  {styled}  from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useBeatsInfoStyles } from "@mui-treasury/styles/info/beats";



//ボタンコンポーネント
const IconLabelButtons = (props) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<FreeBreakfastIcon />} >
        {props.children}
      </Button>
    </Stack>
    </Box>
  );
}

//テキスト入力コンポーネント
const FullWidthTextField = (props) => {
  return (
    <Box
      sx={{
        width: '70%',
        display: 'inline-flex',
        maxWidth: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <TextField fullWidth label={props.children} id={props.children} />
    </Box>
  );
}

//画像並べるコンポーネント
function TitlebarImageList() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'inline-flex',
        maxWidth: '30%',
        paddingTop: '0px',
        paddingBottom: '20px',
      }}
    >
    <ImageList sx={{ width: "100%", height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">コップ名</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <div className="selection-group">
            <input id={item.title} type="radio" name="rate" value={item.title} />
            <label for={item.title}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </label>
          </div>
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}

//テーブルコンポーネント
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
function CustomizedTables() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'inline-flex',
        maxWidth: '50%',
        paddingTop: '0px',
        paddingBottom: '20px',
      }}
    >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>容器名（ml）</StyledTableCell>
            <StyledTableCell align="right">カクテル</StyledTableCell>
            <StyledTableCell align="right">ミキサー</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

//カードコンポーネント
function ActionAreaCard() {
  return (
    <Box
      sx={{
        paddingBottom: '30px',
      }}
    >
      <Card sx={{ mx:'auto', maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1567306301408-9b74779a11af"
            alt="green iguana"
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
        </CardActionArea>
      </Card>
    </Box>
  );
}

//selectコンポーネント（味）
function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">味</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>わからない</em>
          </MenuItem>
          <MenuItem value={10}>甘い</MenuItem>
          <MenuItem value={21}>辛い</MenuItem>
          <MenuItem value={22}>苦い</MenuItem>
          <MenuItem value={23}>酸っぱい</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

//selectコンポーネント（カクテル）
function SelectAutoWidthCock(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ mt:1, mb:1, minWidth: 680 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>わからない</em>
          </MenuItem>
          <MenuItem value={10}>甘い</MenuItem>
          <MenuItem value={21}>辛い</MenuItem>
          <MenuItem value={22}>苦い</MenuItem>
          <MenuItem value={23}>酸っぱい</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

//Listコンポーネント
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}
function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}


//Headerコンポーネント
function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="home">Drink@HOME</Link>
          </Typography>
          {
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/UserInfo" className="linkBlack">会員情報</Link>
                  {/* 会員情報 */}
                </MenuItem>
                <AmplifySignOut />
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}


const BeatsInfoStyle = (props) => {
  if (props.cock === undefined) {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: "Spartan", weights: [400, 600] }]} />
      </NoSsr>
      <Info useStyles={useBeatsInfoStyles}>
        <InfoTitle className="stripe">ユーザ名</InfoTitle>
        <InfoSubtitle>yanbon</InfoSubtitle>
      </Info>
      <br />
      <br />
        <Info useStyles={useBeatsInfoStyles}>
        <InfoTitle className="stripe">好きなカクテル</InfoTitle>
        <InfoSubtitle>カシスオレンジ</InfoSubtitle>
        <InfoSubtitle>カシスソーダ</InfoSubtitle>
        <InfoSubtitle>ハイボール</InfoSubtitle>
        <InfoSubtitle>記入なし</InfoSubtitle>
        <InfoSubtitle>記入なし</InfoSubtitle>
        </Info>
      <br />
      <br />
        <Info useStyles={useBeatsInfoStyles}>
        <InfoTitle className="stripe">よく使うコップ</InfoTitle>
        <InfoSubtitle>マグカップ</InfoSubtitle>
        <InfoSubtitle>カシスソーダ</InfoSubtitle>
        <InfoSubtitle>ハイボール</InfoSubtitle>
        <InfoSubtitle>記入なし</InfoSubtitle>
        <InfoSubtitle>記入なし</InfoSubtitle>
      </Info>
    </>
  )} else {
    return (
      <>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: "Spartan", weights: [400, 600] }]} />
        </NoSsr>
        <Info useStyles={useBeatsInfoStyles}>
          <InfoTitle className="stripe">ユーザ名</InfoTitle>
          <InfoSubtitle>yanbon</InfoSubtitle>
        </Info>
        <br />
      </>
    )
  }
};



//画面のレイアウト
//元々の関数
function App() {
  //ユーザ情報確認画面
  function UserInfoApp() {
    return (
      <div className="UserInfoApp">
      <div>
      <h1>ユーザ情報</h1>
      </div>
        
      <div>
        <BeatsInfoStyle />
      </div>
      <div>
        <IconLabelButtons>
          <Link to="/UserInfo/UserInfoEdit" className="linkBlue">編集する</Link>
        </IconLabelButtons>
      </div>
      </div>

    );
  };
  //ユーザ情報編集画面
  function UserInfoEditApp() {
    return (
      <div className="UserInfoEditApp">
      <div>
      <h1>ユーザ情報の編集</h1>
      </div>
      <div>
        <BeatsInfoStyle cock="False"/>
      </div>  
      <div>
      <select title="Select your surfboard" class="selectpicker">
        <option>Select...</option>
        <option data-thumbnail="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">Chrome</option>
        <option data-thumbnail="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">Firefox</option>
        <option data-thumbnail="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">IE</option>
        <option data-thumbnail="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">Opera</option>
        <option data-thumbnail="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e">Safari</option>
      </select>
        <SelectAutoWidthCock name="カクテル"/>
        <SelectAutoWidthCock name="カクテル"/>
        <SelectAutoWidthCock name="カクテル"/>
        <SelectAutoWidthCock name="カクテル"/>
        <SelectAutoWidthCock name="カクテル"/>
      </div>
      <div>
        <SelectAutoWidthCock name="好きなコップ"/>
        <SelectAutoWidthCock name="好きなコップ"/>
        <SelectAutoWidthCock name="好きなコップ"/>
        <SelectAutoWidthCock name="好きなコップ"/>
        <SelectAutoWidthCock name="好きなコップ"/>
      </div>
      <div>
        <IconLabelButtons>
          <Link to="/UserInfo" className="linkBlue">確定</Link>
        </IconLabelButtons>
      </div>
      </div>

    );
  };

  //カクテル作成画面
  function CreateLiquor2(){
    return (
      <div>
        <p>カクテルを作る</p>
        <div>
          <FullWidthTextField>リキュール名</FullWidthTextField>
        </div> 
        <div> 
          <FullWidthTextField>ミキサー名</FullWidthTextField>
        </div>
        <div>
          <FullWidthTextField>度数(%)</FullWidthTextField>
        </div>
        <div>
          <TitlebarImageList />
        </div>
        {/* <IconLabelButtons children="カクテル作成" /> */}
        <IconLabelButtons>
          <Link to="/CreateLiquor/CalResultFiltered" className="linkBlue">カクテル作成</Link>
        </IconLabelButtons>
      </div>
      
    )
  }


  //計算結果（該当あり）画面
  function CalResultFilteredApp() {
    return (
      <div className="CalResultFilteredApp">
        <div className="CalNumber">
          <h1>計算結果</h1>
          <ul>
            <li>カクテル：10ml、ミキサー：10ml</li>
            <li>カクテル：ミキサー ＝ 1：1</li>
            <li>身の回りの容器での杯数</li>
            <CustomizedTables />
          </ul>
        </div>

        <div>
          <h1>お酒の情報</h1>
          
        </div>
        <div>
        <ActionAreaCard />
        </div>
      </div>

    );
  };

  //計算結果（該当なし）画面
  function CalResultApp() {
    return (
      <div className="CalResultApp">
        <div className="CalNumber">
          <h1>計算結果</h1>
          <ul>
            <li>カクテル：10ml、ミキサー：10ml</li>
            <li>カクテル：ミキサー ＝ 1：1</li>
            <li>身の回りの容器での杯数</li>
            <CustomizedTables />
          </ul>
        </div>

        <div>
          <h1>オリジナルカクテル情報の入力</h1>
          <div>
            <FullWidthTextField>オリジナルカクテル名</FullWidthTextField>
          </div>
          <div><SelectAutoWidth /></div>
          <div>
            <IconLabelButtons>
              <Link to="/" className="linkBlue">確定</Link>
            </IconLabelButtons>
          </div>
          
        </div>
        <div>
        </div>
      </div>

    );
  };

  //検索結果（カクテル）画面
  const SearchResultCockApp = () => {
    const { aboutId } = useParams();
    return (
      <div className="SearchResultCockApp">
      <h1>検索結果</h1>
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>
              <p>検索条件</p>
              <div>
                <p>カクテル名：{aboutId}</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={8}>
            <div>
              <Box
                sx={{
                  display: 'inline-flex',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <VirtualizedList/>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>   
        
        </div>

      </div>

    );
  };

  //検索結果（味）画面
  function SearchResultTasteApp() {
    return (
      <div className="SearchResultTasteApp">
      <h1>検索結果</h1>
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>
              <p>検索条件</p>
              <div>
                <p>味：</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={8}>
            <div>
              <Box
                sx={{
                  display: 'inline-flex',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <VirtualizedList/>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>   
        
        </div>

      </div>

    );
  };

  //検索結果（リキュール）画面
  function SearchResultLiqApp() {
    return (
      <div className="SearchResultLiqApp">
      <h1>検索結果</h1>
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div>
              <p>検索条件</p>
              <div>
                <p>リキュール名：</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={8}>
            <div>
              <Box
                sx={{
                  display: 'inline-flex',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <VirtualizedList/>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>   
        
        </div>

      </div>

    );
  };



  //ホーム画面
  function Home(){
    const [cockText, setCockText] = useState('');
    const onChangeCockText = () => evt => setCockText(evt.target.value);
    console.log(cockText);
    // const onClickAdd = () => {
    //   alert(cockText);
    //   console.log("oppai");
    // };
  
    
  
    return (
      <div>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="Cock-history">
                <p></p>
                <FixedSizeList
                  height={500}
                  width={Autocomplete}
                  itemSize={46}
                  itemCount={200}
                  overscanCount={5}
                >
                  {/* {historyocktail} */}
                  {renderRow}
                </FixedSizeList>
              </div>
            </Grid>

            <Grid item xs={6}>
            <div className="Cock-search">
              <p>カクテルを検索</p>
              <div className="Search">
                <div className="Cocktail-search">
                  <p>カクテル名で検索</p>
                  <div className="form-group">
                    <label for="cocktail-name"></label>
                    <div>
                    <FullWidthTextField type="text" value={cockText} onChange={onChangeCockText()}>カクテル名</FullWidthTextField>
                    </div>
                    <div>
                    <IconLabelButtons onClick={()=>setCockText(cockText)}>
                      <Link to={`/SearchResultCock/${cockText}`} className="linkBlue">検索する</Link>
                    </IconLabelButtons>
                    </div>
                  </div>
                </div>
                
                <div className="Cocktail-search">
                    <p>味で検索</p>
                    <label for="taste"></label>
                    <SelectAutoWidth />
                    <IconLabelButtons>
                      <Link to="/SearchResultTaste" className="linkBlue">検索する</Link>
                    </IconLabelButtons>
                </div>

                <div className="Cocktail-search">
                  <p>リキュール名で検索</p>
                  <div class="form-group">
                    <label for="liqueur-name"></label>
                    <div>
                      <FullWidthTextField>リキュール名</FullWidthTextField>
                    </div>
                    <IconLabelButtons>
                      <Link to="/SearchResultLiq" className="linkBlue">検索する</Link>
                    </IconLabelButtons>
                  </div>
                </div>
              </div>
            </div>
            </Grid>
          </Grid>
        </Box>   
        
        <div>
        <FullWidthTextField>作りたいリキュール名</FullWidthTextField>        
        <IconLabelButtons>
          <Link to="/CreateLiquor" className="linkBlue">お酒を作る</Link>
        </IconLabelButtons>
        </div>
        </div>
    );
  }

  //遷移
  return (
    <div className="App">
      <Router>
        <MenuAppBar />
        <Route exact path="/UserInfo/UserInfoEdit" component={UserInfoEditApp}/>
        <Route exact path="/UserInfo" component={UserInfoApp}/>
        <Route exact path="/SearchResultLiq" component={SearchResultLiqApp}/>
        <Route exact path="/SearchResultTaste" component={SearchResultTasteApp}/>
        <Route path="/SearchResultCock/:aboutId" component={SearchResultCockApp}/>
        <Route exact path="/CreateLiquor/CalResult" component={CalResultApp}/>
        <Route exact path="/CreateLiquor/CalResultFiltered" component={CalResultFilteredApp}/>
        <Route exact path="/CreateLiquor" component={CreateLiquor2}/>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
    
  );
  
}

export default withAuthenticator(App);




//データ例
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    ml: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    ml: "@rollelflex_graphy726"
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    ml: "@helloimnik"
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    ml: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    ml: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    ml: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    ml: "@tjdragotta"
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    ml: "@katie_wasserman"
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    ml: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    ml: "@shelleypauls"
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    ml: "@peterlaster"
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    ml: "@southside_customs",
  }
];

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
