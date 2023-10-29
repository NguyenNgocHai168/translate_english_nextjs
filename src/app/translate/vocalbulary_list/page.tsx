import Navbar from "@/component/Navbar";
import './style.css'

export default function VocabularyList() {
    return (
        <div className="position-relative">
            <Navbar />
            <div className="card rounded-0 m-4" style={{marginTop: "4.5rem!important"}}>
                <h5 className="card-header text-uppercase">Danh sách từ</h5>
                <div className="card-body">
                    <div className="input-group mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Javascript</option>
                        <option value="1">HTML & CSS</option>
                        <option value="2">React</option>
                        <option value="3">NodeJS</option>
                    </select>
                    </div>
                    <div className="alert alert-primary">
                        <table className="table table-dark table-hover text-center">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">English</th>
                                <th scope="col">Vietnamese</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Variable</td>
                                    <td>Biến</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Declare</td>
                                    <td>khai báo</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Number</td>
                                    <td>1 Số</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>String</td>
                                    <td>Chuỗi</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Function</td>
                                    <td>Hàm</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Number</td>
                                    <td>1 Số</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>String</td>
                                    <td>Chuỗi</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Function</td>
                                    <td>Hàm</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Number</td>
                                    <td>1 Số</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>String</td>
                                    <td>Chuỗi</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Function</td>
                                    <td>Hàm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom" style={{height: "45%"}}>
                <div className="dropdown position-absolute bottom-0 end-0 m-4">
                    <button className="btn btn-secondary p-3 rounded-circle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu" 
                        aria-labelledby="dropdownMenuButton1"
                        style={{minWidth: "2rem", backgroundColor: "rgb(0 0 0 / 0%)", border: "none", right: "1px", top:"-65px"}}
                    >
                        <li className="item-1 position-relative mb-2">
                            <span 
                                className="position-fixed text-success d-none"
                                style={{width: "120px", right: "25px", bottom: "90px"}}
                            >
                                Bài kiểm tra
                            </span>
                            <a href="http://localhost:3000/translate/vocalbulary_test">
                                <button className="border-0 bg-success p-3 rounded-circle">
                                    <i className="fas fa-pen"></i>
                                </button>
                            </a>
                        </li>
                        <li className="item-2 position-relative">
                            <span 
                                className="position-fixed text-danger d-none"
                                style={{width: "120px", right: "25px", bottom: "25px"}}
                            >
                                Tra cứu từ
                            </span>
                            <a href="http://localhost:3000/translate/vocalbulary_flashcard">
                                <button className="border-0 bg-danger p-3 rounded-circle">
                                    <i className="fas fa-book"></i>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}