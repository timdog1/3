import { container } from 'assets/jss/constants'
import gameBottomImg from 'assets/images/Home/bg_walking.gif'

const buyNowSectionStyle = {
  buyNowSectionArea: {
    width: '100%',
    position: 'relative',
    paddingTop: 94,
  },
  quantityContainer: {
    paddingTop: 40,
    backgroundColor: '#FF56B1',
  },
  quantityTitle: {
    color: 'black !important',
    fontWeight: 700,
    marginBottom: '0px !important',
    textAlign: 'center',
  },
  container: {
    ...container,
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  detailContainer: {
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#000000',
  },
  galaxyContainer: {
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#38EB28',
  },
  galaxyTitle: {
    color: 'black !important',
    fontWeight: 700,
  },
  galaxyDescription: {
    color: 'black !important',
  },
  gameContainer: {
    paddingTop: 50,
    backgroundColor: '#000000',
  },
  featureContainer: {
    backgroundColor: '#191919',
    borderRadius: '10px',
    border: '2px solid white',
    padding: 36,
    marginTop: 46,
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '800px',
  },
  featurePosition: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25px',
    marginBottom: '20px',
  },
  featureText: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 30,
  },
  featureDescription: {
    fontWeight: 600,
    lineHeight: '35px',
    textAlign: 'left',
    fontFamily: 'CourierPrimeBold',
    fontSize: '25px',
    transform: 'scale(0.9, 1.2)',
    paddingTop: '25px',
    paddingBottom: '20px',
  },
  arrowDirection: {
    position: 'absolute',
    left: 0,
    top: '38%',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 'normal',
    lineHeight: 1.42857143,
    textAlign: 'left',
    textShadow: 'none',
    textTransform: 'none',
    whiteSpace: 'normal',
    wordBreak: 'normal',
    wordSpacing: 'normal',
    wordWrap: 'normal',
    fontSize: 12,
    display: 'inline-block',
    marginLeft: '-20px',
    borderLeft: '50px solid transparent',
    borderTop: '40px solid #FFFFFF',
    '@media (max-width: 960px)': {
      top: '0%',
      left: '50%',
      borderTop: '50px solid transparent',
      borderLeft: '50px solid #FFFFFF',
      marginTop: '-20px',
    },
  },
  gameBottomContainer: {
    marginBottom: '-6px',
    background: 'url(' + gameBottomImg + ') 50% 50% no-repeat rgb(249,249,249)',
    width: '100%',
    height: '800px',
    backgroundSize: 'cover',
  },
  textContentArea: {
    position: 'relative',
    marginBottom: '50px',
    textAlign: 'center',
    '@media (max-width: 600px)': { marginBottom: '5px' },
    '@media (min-width: 600px)': { marginBottom: '10px' },
    '@media (min-width: 768px)': { marginBottom: '15px' },
    '@media (min-width: 960px)': { marginBottom: '20px' },
    '@media (min-width: 1280px)': { marginBottom: '25px' },
  },
  textQuantity: {
    borderRadius: 15,
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderRadius: '15px',
      borderColor: 'black',
      borderWidth: '2px',
    },
  },
  distribution: {
    fontSize: 20,
    color: 'white',
    fontWeight: 600,
    paddingBottom: 20,
  },
  wallet: {
    '& .MuiButton-containedPrimary': {
      color: 'black',
      backgroundColor: 'white',
    },
  },
  walletArea: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
  },
  titleBottom: {
    marginBottom: '10px',
  },
  text31: {
    position: 'relative',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    '@media (max-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 768px)': { fontSize: '19px', lineHeight: '29px' },
    '@media (min-width: 960px)': { fontSize: '20px', lineHeight: '31px' },
    '@media (min-width: 1280px)': { fontSize: '21px', lineHeight: '33px' },
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#000000',
  },
  title: {
    fontFamily: 'DaysOneRegular',
    // fontWeight: 700,
    '@media (max-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 768px)': { fontSize: '35px', lineHeight: '50px' },
    '@media (min-width: 960px)': { fontSize: '45px', lineHeight: '55px' },
    '@media (min-width: 1280px)': { fontSize: '45px', lineHeight: '60px' },
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: 38,
  },
  gameAvatar: {
    textAlign: 'center',
  },
  featureAvatar: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
  },
}

export default buyNowSectionStyle
