import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <div className="footer" >
      <div>
        <p className="addrian-in" >addRian0-0 in</p>
      </div>
      <div>
        <a href="https://github.com/addRian0-0/" >
          <GitHubIcon className='footer-icon' sx={{ fontSize: "32px" }} />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/c_addriann/" >
          <InstagramIcon className='footer-icon' sx={{ fontSize: "32px" }} />
        </a>
      </div>
      <div>
        <a href="https://t.me/Ithanf" >
          <TelegramIcon className='footer-icon' sx={{ fontSize: "32px" }} />
        </a>
      </div>
    </div>
  )
}
