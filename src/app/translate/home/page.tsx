import Navbar from "@/component/Navbar";

export default function TranslateHome() {
    return (
        <div className="h-100">
            <Navbar />
            <div className="card rounded-0 m-4" style={{marginTop: "4.5rem!important"}}>
                <h5 className="card-header text-uppercase">Nguyen Ngoc Hai</h5>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nhập từ mới" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="alert alert-danger">
                        <span>Chưa có dữ liệu</span>
                    </div>
                </div>
                <button className="btn btn-success">Thêm mới</button>
            </div>
        </div>
    )
}