import coingecko from "../assets/coingecko_logo_with_text_biw_logo_with_dark_text.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinearProgress from '@mui/material/LinearProgress';

interface Props {
    message: string;
}

export default function MainLoading({ message = "" }: Props) {
    return (
        <div className="loading">
            <header>
                <div className="title" >
                    <GitHubIcon sx={{ fontSize: "46px" }} />
                    <span>
                        <a href="https://github.com/addRian0-0/" >
                            by addRian0-0
                        </a>
                    </span>
                </div>
                <div className="powerbycoingecko" >
                    <a href="https://www.coingecko.com/">
                        <span>Powered by</span>
                        <img className="img-load" src={coingecko} alt="" />
                    </a>
                </div>
                <span>{message}...</span>
                <LinearProgress sx={{ margin: "10px" }} color="inherit" />
            </header>
        </div>
    )
}
