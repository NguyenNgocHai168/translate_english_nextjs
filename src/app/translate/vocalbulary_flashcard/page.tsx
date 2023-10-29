import Navbar from "@/component/Navbar";

export default function Vocalbulary_test() {
    return (
        <div className="h-100">
            <Navbar />
            <div className="card rounded-0 m-4" style={{marginTop: "4.5rem!important"}}>
                <div className="card-header">
                    <h5 className="text-uppercase">Tra từ flash-Card</h5>
                </div>
                <div className="card-body text-center d-flex justify-content-center">
                <div className="card text-white bg-primary mb-3" style={{maxWidth:"18rem"}}>
                    <div className="card-header">Variable</div>
                    <div className="card-body">
                        <h5 className="card-title">Biến</h5>
                        <p className="card-text">là tên gọi của 1 biến khi chúng ta sử dụng bên trong lập trình phần mềm</p>
                    </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                    <div className="">
                        <button className="btn btn-primary m-2">Go Back</button>
                        <button className="btn btn-primary m-2">Go Back</button>
                        <button className="btn btn-primary m-2">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

