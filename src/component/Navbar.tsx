export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-uppercase">Nguyen Ngoc Hai</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse bg-dark" id="navbarToggleExternalContent">
                <div className="container-fluid pt-2 pb-2">
                    <a href="http://localhost:3000/translate/home" className="text-decoration-none text-white">
                        Trang chủ
                    </a>
                </div>
                <div className="container-fluid pt-2 pb-4">
                    <a href="http://localhost:3000/translate/vocalbulary_list" className="text-decoration-none text-white">
                        Danh sách từ
                    </a>
                </div>
            </div>
        </nav>
    )
}