import Navbar from "@/component/Navbar";

export default function Vocalbulary_test() {
    return (
        <div className="h-100">
            <Navbar />
            <div className="card rounded-0 m-4" style={{marginTop: "4.5rem!important"}}>
                <div className="card-header">
                    <div className="row gx-3 gy-2">
                        <div className="col-sm-2">
                            <h5 className="text-uppercase" style={{lineHeight: "45px"}}>Bài kiểm tra</h5>
                        </div>
                        <div className="col-sm-2">
                            <label className="visually-hidden">Preference</label>
                            <select className="form-select" id="specificSizeSelect">
                                <option value="Vietnamese">Vietnamese</option>
                                <option value="EngLish">EngLish</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <h1>1 - Variable</h1>
                    </div>
                    <div className="row row-cols-3 gy-2">
                        <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                            <button className="w-100 btn btn-outline-primary">CLick Me!</button>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                            <button className="w-100 btn btn-outline-primary">CLick Me!</button>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                            <button className="w-100 btn btn-outline-primary">CLick Me!</button>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                            <button className="w-100 btn btn-outline-primary">CLick Me!</button>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                            <button className="w-100 btn btn-outline-primary">CLick Me!</button>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                            <button className="w-100 btn btn-outline-primary">CLick Me!</button>
                        </div>
                    </div>
                </div>
                <hr />
                <button className="btn btn-primary">Go Back</button>
            </div>
        </div>
    )
}

