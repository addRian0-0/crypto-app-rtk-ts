import MenuIcon from '@mui/icons-material/Menu';

interface Props{
    page: string;
}

export default function NavBar({page = "CryptoApp"}: Props) {
    return (
        <div className="navbar" >
            <div>
                <a href="/" >
                    <h4>{page}</h4>
                </a>
            </div>
            <div className="menu" >
                <MenuIcon/>
            </div>
        </div>
    )
}
